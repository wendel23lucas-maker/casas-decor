/*
 * Design: Ateliê Moderno Escuro
 * Lightbox em tela cheia para o portfólio: navegação entre fotos,
 * zoom simples ao clicar na imagem, fecha com ESC/clique fora/X.
 */

import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface LightboxProject {
  title: string;
  category: string;
  image: string;
}

interface PortfolioLightboxProps {
  projects: LightboxProject[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function PortfolioLightbox({
  projects,
  index,
  onClose,
  onNavigate,
}: PortfolioLightboxProps) {
  const [zoomed, setZoomed] = useState(false);
  const project = projects[index];

  const goPrev = useCallback(() => {
    setZoomed(false);
    onNavigate((index - 1 + projects.length) % projects.length);
  }, [index, projects.length, onNavigate]);

  const goNext = useCallback(() => {
    setZoomed(false);
    onNavigate((index + 1) % projects.length);
  }, [index, projects.length, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goPrev, goNext, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-[#0A0A0F]/97 backdrop-blur-sm flex items-center justify-center animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="absolute top-5 right-5 sm:top-8 sm:right-8 z-10 w-11 h-11 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-colors duration-200"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Counter */}
      <div className="absolute top-6 sm:top-9 left-5 sm:left-8 text-gray-500 text-sm font-medium tabular-nums">
        {index + 1} / {projects.length}
      </div>

      {/* Prev */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        aria-label="Foto anterior"
        className="hidden sm:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/5 hover:bg-[#1565C0] border border-white/10 hover:border-[#1565C0] items-center justify-center text-white transition-all duration-200"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        aria-label="Próxima foto"
        className="hidden sm:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/5 hover:bg-[#1565C0] border border-white/10 hover:border-[#1565C0] items-center justify-center text-white transition-all duration-200"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image */}
      <div
        className="relative w-full h-full flex flex-col items-center justify-center px-4 py-20 sm:px-16"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="overflow-hidden max-w-full max-h-full rounded-sm">
          <img
            src={project.image}
            alt={project.title}
            onClick={() => setZoomed((z) => !z)}
            className={`max-w-full max-h-[70vh] sm:max-h-[78vh] object-contain transition-transform duration-300 ${
              zoomed
                ? "scale-[1.6] cursor-zoom-out"
                : "scale-100 cursor-zoom-in"
            }`}
          />
        </div>

        {/* Caption */}
        <div className="mt-6 text-center">
          <span className="text-[#42A5F5] text-[11px] font-semibold uppercase tracking-[0.15em]">
            {project.category}
          </span>
          <h3 className="text-white font-display text-xl sm:text-2xl font-semibold mt-1.5">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Mobile prev/next (bottom bar, since side arrows are hidden) */}
      <div className="sm:hidden absolute bottom-5 left-0 right-0 flex items-center justify-center gap-6">
        <button
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          aria-label="Foto anterior"
          className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          aria-label="Próxima foto"
          className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
