/*
 * Design: Ateliê Moderno Escuro
 * Botão flutuante do WhatsApp fixo no canto inferior direito
 * Verde WhatsApp com hover effect
 */

import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINKS } from "@/lib/contact";

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINKS.default}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-200 hover:scale-110 active:scale-95"
      aria-label="Falar pelo WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
}
