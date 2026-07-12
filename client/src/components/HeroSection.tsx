/*
 * Design: Ateliê Moderno Escuro - Revisado
 * Hero mais imersivo com foto dominando o viewport
 * Logo maior, badge lateral, texto à esquerda sobre imagem
 * Linhas arquitetônicas sutis como motif
 */

import { Phone, ArrowDown } from "lucide-react";
import { WHATSAPP_LINKS } from "@/lib/contact";

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.webp"
          alt="Cozinha planejada moderna Casa's Decor"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0F]/90 via-[#0A0A0F]/60 to-[#0A0A0F]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-[#0A0A0F]/30" />
      </div>

      {/* Architectural line motif - subtle vertical lines */}
      <div className="absolute top-0 left-[10%] w-px h-full bg-gradient-to-b from-[#1565C0]/20 via-[#1565C0]/5 to-transparent" />
      <div className="absolute top-0 left-[20%] w-px h-[60%] bg-gradient-to-b from-[#1565C0]/10 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="container pt-20">
          <div className="max-w-xl lg:max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/8 backdrop-blur-md border border-white/10 rounded-full px-5 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#42A5F5]" />
              <span className="text-sm text-gray-300 font-medium tracking-wide">
                Móveis Planejados em Valinhos e Região
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-white leading-[1.05] mb-6">
              Seu espaço,{" "}
              <span className="text-white/90">sob medida</span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-lg lg:text-xl leading-relaxed mb-10 max-w-lg">
              Transformamos ambientes com móveis planejados de alta qualidade.
              Do projeto à instalação, cuidamos de cada detalhe.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_LINKS.default}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#1565C0] hover:bg-[#1256A8] text-white font-semibold px-8 py-4 rounded-md text-base transition-all duration-200 hover:shadow-xl hover:shadow-[#1565C0]/30 active:scale-[0.97]"
              >
                <Phone className="w-5 h-5" />
                Solicitar Orçamento
              </a>
              <button
                onClick={() => {
                  const el = document.querySelector("#portfolio");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-md text-base border border-white/10 transition-all duration-200 active:scale-[0.97]"
              >
                Ver Projetos
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - minimal */}
      <div className="absolute bottom-8 right-8 lg:right-16 z-10 hidden md:flex flex-col items-center gap-3">
        <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em] rotate-90 origin-center translate-x-[-10px]">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[#1565C0]/60 to-transparent" />
      </div>
    </section>
  );
}
