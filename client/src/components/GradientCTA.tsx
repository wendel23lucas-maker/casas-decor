/*
 * Design: Ateliê Moderno Escuro
 * Card de call-to-action reutilizável — usado no Portfólio e no Contato
 * para manter a mesma linguagem visual (foto de fundo com overlay azul
 * da marca, glow sutil, linhas arquitetônicas, botão em pílula).
 */

import type { LucideIcon } from "lucide-react";

interface GradientCTAProps {
  icon: LucideIcon;
  eyebrow?: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  size?: "compact" | "large";
  backgroundImage?: string;
}

export default function GradientCTA({
  icon: Icon,
  eyebrow,
  title,
  description,
  ctaLabel,
  href,
  size = "large",
  backgroundImage,
}: GradientCTAProps) {
  const isCompact = size === "compact";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative overflow-hidden rounded-lg flex flex-col justify-center transition-all duration-300 hover:shadow-2xl hover:shadow-[#1565C0]/25 ${
        !backgroundImage ? "bg-gradient-to-br from-[#1565C0] to-[#0D47A1]" : ""
      } ${isCompact ? "aspect-[3/4] p-6" : "h-full p-8 lg:p-10"}`}
    >
      {/* Background photo of furniture, with brand-blue overlay for contrast */}
      {backgroundImage && (
        <>
          <img
            src={backgroundImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D47A1]/92 via-[#1565C0]/80 to-[#0D47A1]/94" />
        </>
      )}

      {/* Glow */}
      <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#42A5F5]/25 blur-3xl group-hover:bg-[#42A5F5]/35 transition-colors duration-500" />
      {/* Architectural line motif for consistency with rest of site */}
      <div className="absolute bottom-0 left-8 w-px h-16 bg-gradient-to-t from-white/20 to-transparent" />
      <div className="absolute top-0 right-10 w-px h-10 bg-gradient-to-b from-white/15 to-transparent" />

      <div
        className={`relative flex flex-col ${isCompact ? "items-center text-center gap-4" : "items-start gap-0"}`}
      >
        <div
          className={`rounded-2xl bg-white/12 backdrop-blur-sm border border-white/15 flex items-center justify-center shrink-0 ${
            isCompact ? "w-14 h-14 mb-1" : "w-16 h-16 mb-8"
          }`}
        >
          <Icon className={isCompact ? "w-7 h-7 text-white" : "w-8 h-8 text-white"} />
        </div>

        {eyebrow && !isCompact && (
          <span className="text-[#BBDEFB] text-xs font-semibold uppercase tracking-[0.15em] mb-3">
            {eyebrow}
          </span>
        )}

        <h3
          className={`font-display font-bold text-white drop-shadow-sm ${
            isCompact ? "text-lg" : "text-2xl lg:text-3xl mb-4"
          }`}
        >
          {title}
        </h3>

        <p
          className={`text-blue-100/90 leading-relaxed ${
            isCompact ? "text-sm mt-1" : "text-sm mb-8"
          }`}
        >
          {description}
        </p>

        {!isCompact && (
          <span className="inline-flex items-center justify-center gap-2 bg-white text-[#0D47A1] font-bold px-6 py-4 rounded-full text-base transition-all duration-200 group-hover:shadow-xl group-hover:bg-gray-50 group-active:scale-[0.97]">
            <Icon className="w-5 h-5" />
            {ctaLabel}
          </span>
        )}
      </div>
    </a>
  );
}
