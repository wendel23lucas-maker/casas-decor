/*
 * Design: Ateliê Moderno Escuro
 * Botão flutuante do WhatsApp fixo no canto inferior direito
 * Azul da marca, para manter identidade visual coesa
 */

import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINKS } from "@/lib/contact";

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINKS.default}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-[#1565C0] to-[#0D47A1] flex items-center justify-center shadow-lg shadow-[#1565C0]/30 hover:shadow-xl hover:shadow-[#1565C0]/40 transition-all duration-200 hover:scale-110 active:scale-95"
      aria-label="Falar pelo WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
}
