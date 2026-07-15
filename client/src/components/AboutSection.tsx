/*
 * Design: Ateliê Moderno Escuro - Revisado
 * Sobre nós com foto vertical ao lado do texto (a foto é retrato,
 * de celular — por isso usamos um painel vertical em vez de banner
 * panorâmico, que cortava ~76% da imagem) + valores em linha abaixo.
 */

import { Award, Clock, MapPin, Phone } from "lucide-react";
import { PHONE_DISPLAY, ADDRESS, HOURS } from "@/lib/contact";
import Reveal from "./Reveal";

export default function AboutSection() {
  return (
    <section id="sobre" className="relative py-28 lg:py-36 bg-[#0A0A0F]">
      {/* Architectural line motif */}
      <div className="absolute top-0 left-[5%] w-px h-48 bg-gradient-to-b from-transparent via-[#1565C0]/12 to-transparent" />

      <div className="container">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Portrait photo - spans 2 cols, matches the phone-photo aspect ratio.
              Edges fade into the background via a mask (no hard rectangle frame). */}
          <Reveal className="lg:col-span-2 relative aspect-[3/4]" delay={0}>
            <img
              src="/images/portfolio-real/cozinha-sala-integrada.webp"
              alt="Projeto Casa's Decor - cozinha integrada com sala"
              className="w-full h-full object-cover"
              loading="lazy"
              style={{
                maskImage:
                  "radial-gradient(ellipse 78% 82% at center, black 50%, transparent 96%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 78% 82% at center, black 50%, transparent 96%)",
              }}
            />
          </Reveal>

          {/* Text - spans 3 cols */}
          <Reveal className="lg:col-span-3" delay={0.15}>
            <span className="text-[#42A5F5] text-xs font-semibold uppercase tracking-[0.2em]">
              Sobre Nós
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-5 leading-[1.1]">
              Artesãos do design residencial
            </h2>
            <p className="text-gray-400 mt-6 text-lg leading-relaxed">
              A Casa's Decor nasceu da paixão por criar ambientes que combinam
              funcionalidade e beleza. Somos uma marcenaria especializada em
              móveis planejados, localizada em Valinhos, SP.
            </p>
            <p className="text-gray-400 mt-4 text-base leading-relaxed max-w-xl">
              Cada projeto é desenvolvido com atenção aos detalhes, desde o
              primeiro contato até a entrega final. Nosso compromisso é
              transformar a visão do cliente em realidade, com materiais de
              primeira linha e profissionais altamente capacitados.
            </p>

            {/* Quick info row */}
            <div className="mt-10 flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#42A5F5]" />
                <div>
                  <p className="text-white text-sm font-medium">{ADDRESS.city}</p>
                  <p className="text-gray-500 text-xs">{ADDRESS.neighborhood}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#42A5F5]" />
                <div>
                  <p className="text-white text-sm font-medium">{PHONE_DISPLAY}</p>
                  <p className="text-gray-500 text-xs">WhatsApp</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#42A5F5]" />
                <div>
                  <p className="text-white text-sm font-medium">{HOURS.weekdays}</p>
                  <p className="text-gray-500 text-xs">{HOURS.saturday}</p>
                </div>
              </div>
            </div>

            {/* Values - row of 3 */}
            <div className="mt-12 grid sm:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-[#1565C0]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-5 h-5 text-[#42A5F5]" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-semibold uppercase tracking-wider">
                    Qualidade Premium
                  </h4>
                  <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                    Materiais selecionados e acabamento impecável.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-[#1565C0]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-[#42A5F5]" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-semibold uppercase tracking-wider">
                    Pontualidade
                  </h4>
                  <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                    Compromisso com prazos sem atrasos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-[#1565C0]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-[#42A5F5]" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-semibold uppercase tracking-wider">
                    Atendimento Personalizado
                  </h4>
                  <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                    Projeto 100% sob medida, do seu jeito.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
