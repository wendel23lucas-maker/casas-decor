import { Home, MessageCircle } from "lucide-react";
import { useLocation } from "wouter";
import { WHATSAPP_LINKS } from "@/lib/contact";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0A0A0F] px-4">
      <div className="text-center max-w-md">
        <img
          src="/images/logo-transparent.png"
          alt="Casa's Decor"
          className="h-14 w-auto mx-auto mb-10"
        />

        <p className="font-display text-7xl font-bold text-white leading-none">
          404
        </p>
        <h1 className="text-white text-xl font-semibold mt-4">
          Página não encontrada
        </h1>
        <p className="text-gray-400 text-sm mt-3 leading-relaxed">
          O link que você acessou pode ter mudado ou não existe mais. Vamos
          te levar de volta pra página inicial.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
          <button
            onClick={() => setLocation("/")}
            className="inline-flex items-center justify-center gap-2 bg-[#1565C0] hover:bg-[#1256A8] text-white font-semibold px-6 py-3 rounded-md text-sm transition-colors duration-200"
          >
            <Home className="w-4 h-4" />
            Voltar ao início
          </button>
          <a
            href={WHATSAPP_LINKS.default}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-white/25 text-white font-medium px-6 py-3 rounded-md text-sm transition-colors duration-200"
          >
            <MessageCircle className="w-4 h-4" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
