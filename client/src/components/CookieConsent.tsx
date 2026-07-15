/*
 * Design: Ateliê Moderno Escuro
 * Aviso de cookies/privacidade (LGPD) — barra fixa no rodapé da tela.
 * Analytics só é ativado depois que o visitante aceita (opt-in).
 */

import { useEffect, useState } from "react";
import { inject } from "@vercel/analytics";
import { getConsent, setConsent } from "@/lib/consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getConsent();
    if (consent === null) {
      setVisible(true);
    } else if (consent === "accepted") {
      inject();
    }
  }, []);

  function handleAccept() {
    setConsent("accepted");
    inject();
    setVisible(false);
  }

  function handleReject() {
    setConsent("rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed bottom-0 left-0 right-0 z-[90] bg-[#0E0E16] border-t border-white/10 shadow-2xl"
    >
      <div className="container py-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
        <p className="text-gray-400 text-sm leading-relaxed flex-1">
          Usamos cookies e dados de navegação para entender como o site é
          usado e melhorar sua experiência. Você pode aceitar ou recusar.
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleReject}
            className="px-5 py-2.5 rounded-full text-sm font-medium text-gray-400 border border-white/10 hover:text-white hover:border-white/25 transition-colors duration-200"
          >
            Recusar
          </button>
          <button
            onClick={handleAccept}
            className="px-5 py-2.5 rounded-full text-sm font-medium bg-[#1565C0] text-white hover:bg-[#1256A8] transition-colors duration-200"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
