/*
 * Design: Ateliê Moderno Escuro
 * Footer minimalista com informações da empresa
 * Fundo mais escuro com divisória sutil
 */

import { Instagram, Phone, MapPin } from "lucide-react";
import {
  PHONE_DISPLAY,
  ADDRESS,
  WHATSAPP_LINKS,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
} from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="bg-[#07070D] border-t border-white/5">
      <div className="container py-12 lg:py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <img
              src="/images/logo-transparent.png"
              alt="Casa's Decor"
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Marcenaria especializada em móveis planejados. Transformamos
              ambientes com qualidade e dedicação em Valinhos e região.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Links
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="#hero"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Início
              </a>
              <a
                href="#servicos"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Serviços
              </a>
              <a
                href="#portfolio"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Portfólio
              </a>
              <a
                href="#sobre"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Sobre Nós
              </a>
              <a
                href="#contato"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Contato
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contato
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={WHATSAPP_LINKS.plain}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                {PHONE_DISPLAY}
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
              >
                <Instagram className="w-4 h-4" />
                {INSTAGRAM_HANDLE}
              </a>
              <div className="inline-flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>
                  {ADDRESS.street}<br />
                  {ADDRESS.neighborhood}, {ADDRESS.city}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Casa's Decor - Móveis Planejados.
            Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs">
            Valinhos, SP - Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
