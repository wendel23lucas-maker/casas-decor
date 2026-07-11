/*
 * Design: Ateliê Moderno Escuro - Revisado
 * Contato mais editorial, WhatsApp CTA como destaque principal
 * Informações organizadas com hierarquia visual
 */

import { Phone, MapPin, Instagram, Clock, Send } from "lucide-react";
import {
  WHATSAPP_LINKS,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  PHONE_DISPLAY,
  ADDRESS,
  HOURS,
  GOOGLE_MAPS_EMBED_URL,
  GOOGLE_MAPS_DIRECTIONS_URL,
} from "@/lib/contact";
import GradientCTA from "./GradientCTA";

export default function ContactSection() {
  return (
    <section id="contato" className="relative py-28 lg:py-36 bg-[#0E0E16]">
      {/* Architectural line */}
      <div className="absolute top-0 left-[30%] w-px h-36 bg-gradient-to-b from-transparent via-[#1565C0]/10 to-transparent" />

      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-[#42A5F5] text-xs font-semibold uppercase tracking-[0.2em]">
            Contato
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-5 leading-[1.1]">
            Vamos criar seu projeto
          </h2>
          <p className="text-gray-400 mt-5 text-lg leading-relaxed max-w-lg">
            Entre em contato para solicitar um orçamento sem compromisso.
            Respondemos rapidamente!
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Contact Info - 7 cols */}
          <div className="lg:col-span-7 space-y-6">
            {/* WhatsApp - primary */}
            <a
              href={WHATSAPP_LINKS.default}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-5 p-6 rounded-lg border border-white/5 hover:border-[#1565C0]/30 transition-all duration-300 hover:bg-white/[0.02]"
            >
              <div className="w-12 h-12 rounded-full bg-[#1565C0]/10 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-[#42A5F5]" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">WhatsApp</h3>
                <p className="text-gray-400 text-sm mt-1">{PHONE_DISPLAY}</p>
                <p className="text-gray-600 text-xs mt-2 group-hover:text-[#42A5F5] transition-colors">
                  Clique para enviar mensagem →
                </p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-5 p-6 rounded-lg border border-white/5 hover:border-[#1565C0]/30 transition-all duration-300 hover:bg-white/[0.02]"
            >
              <div className="w-12 h-12 rounded-full bg-[#1565C0]/10 flex items-center justify-center shrink-0">
                <Instagram className="w-6 h-6 text-[#42A5F5]" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Instagram</h3>
                <p className="text-gray-400 text-sm mt-1">{INSTAGRAM_HANDLE}</p>
                <p className="text-gray-600 text-xs mt-2 group-hover:text-[#42A5F5] transition-colors">
                  Siga para ver mais projetos →
                </p>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-start gap-5 p-6 rounded-lg border border-white/5">
              <div className="w-12 h-12 rounded-full bg-[#1565C0]/10 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-[#42A5F5]" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Endereço</h3>
                <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                  {ADDRESS.street}<br />
                  {ADDRESS.neighborhood}, {ADDRESS.city}<br />
                  CEP: {ADDRESS.cep}
                </p>
                <a
                  href={GOOGLE_MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[#42A5F5] hover:text-[#64B5F6] text-xs mt-2 transition-colors"
                >
                  Traçar rota no Google Maps →
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-5 p-6 rounded-lg border border-white/5">
              <div className="w-12 h-12 rounded-full bg-[#1565C0]/10 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-[#42A5F5]" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Horário</h3>
                <p className="text-gray-400 text-sm mt-1">
                  {HOURS.weekdays}<br />
                  {HOURS.saturday}
                </p>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA - 5 cols, prominent */}
          <div className="lg:col-span-5">
            <GradientCTA
              icon={Send}
              eyebrow="Orçamento rápido"
              title="Peça seu orçamento grátis"
              description="Envie uma mensagem no WhatsApp com medidas do ambiente, fotos e suas ideias. Nossa equipe responderá em até 2 horas."
              ctaLabel="Falar pelo WhatsApp"
              href={WHATSAPP_LINKS.default}
              backgroundImage="/images/portfolio-real/cozinha-preta-cinza.jpg"
            />
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 rounded-lg overflow-hidden border border-white/5">
          <iframe
            src={GOOGLE_MAPS_EMBED_URL}
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Casa's Decor"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
