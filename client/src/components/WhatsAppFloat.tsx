/*
 * Design: Ateliê Moderno Escuro
 * Botão flutuante do WhatsApp fixo no canto inferior direito
 * Azul da marca, para manter identidade visual coesa.
 * Sobe temporariamente enquanto o aviso de cookies está visível,
 * para não ficar escondido atrás dele.
 */

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINKS } from "@/lib/contact";
import { getConsent, onConsentChange } from "@/lib/consent";

export default function WhatsAppFloat() {
  const [bannerVisible, setBannerVisible] = useState(false);

  useEffect(() => {
    setBannerVisible(getConsent() === null);
    return onConsentChange(() => setBannerVisible(getConsent() === null));
  }, []);

  return (
    <a
      href={WHATSAPP_LINKS.default}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-[#1565C0] to-[#0D47A1] flex items-center justify-center shadow-lg shadow-[#1565C0]/30 hover:shadow-xl hover:shadow-[#1565C0]/40 transition-all duration-300 hover:scale-110 active:scale-95 ${
        bannerVisible ? "bottom-28 sm:bottom-24" : "bottom-6"
      }`}
      aria-label="Falar pelo WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
}
