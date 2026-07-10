/*
 * Design: Ateliê Moderno Escuro - Revisado
 * Sobre nós com foto grande e layout editorial
 * Logo/marca mais presente
 * Menos cards, mais texto e foto
 */

import { Award, Clock, MapPin, Phone } from "lucide-react";
import { PHONE_DISPLAY, ADDRESS } from "@/lib/contact";

export default function AboutSection() {
  return (
    <section id="sobre" className="relative py-28 lg:py-36 bg-[#0A0A0F]">
      {/* Architectural line motif */}
      <div className="absolute top-0 left-[5%] w-px h-48 bg-gradient-to-b from-transparent via-[#1565C0]/12 to-transparent" />

      <div className="container">
        {/* Large photo spanning full width */}
        <div className="mb-16 relative rounded-lg overflow-hidden aspect-[21/9]">
          <img
            src="/images/about-kitchen.jpg"
            alt="Trabalho da Casa's Decor"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-[#0A0A0F]/20" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Text - spans 3 cols */}
          <div className="lg:col-span-3">
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
                  <p className="text-white text-sm font-medium">Seg - Sáb</p>
                  <p className="text-gray-500 text-xs">08h às 18h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Values - spans 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full border border-[#1565C0]/20 flex items-center justify-center shrink-0 mt-0.5">
                <Award className="w-5 h-5 text-[#42A5F5]" />
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold uppercase tracking-wider">
                  Qualidade Premium
                </h4>
                <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                  Materiais selecionados e acabamento impecável em cada projeto.
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
                  Compromisso com prazos de entrega e instalação sem atrasos.
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
                  Projeto 100% sob medida, adaptado ao seu estilo e necessidades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
