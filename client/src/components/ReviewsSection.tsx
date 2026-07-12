/*
 * Design: Ateliê Moderno Escuro
 * Prova social com avaliações reais do Google
 * Bloco de nota geral em destaque (cartão azul) + cards de depoimentos
 * com aspas decorativas e selo "Google" em cada um.
 */

import { Star, Quote } from "lucide-react";
import {
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  GOOGLE_REVIEWS_URL,
  GOOGLE_WRITE_REVIEW_URL,
} from "@/lib/contact";
import Reveal from "./Reveal";

const reviews = [
  {
    text: "Comprometidos, entregaram antes do prazo, tudo muito caprichado — o detalhe na gaveta de talheres foi a cereja do bolo. Minha cozinha ficou linda!",
  },
  {
    text: "Atendimento e profissionalismo nota 10. Desde o primeiro contato fomos tratados com atenção fantástica e cordialidade em toda a equipe.",
  },
  {
    text: "Empresa muito profissional, resultado impecável. Sonharam junto comigo e realizaram meu tão sonhado canto alemão. Recomendo muito!",
  },
  {
    text: "Fiz os móveis do quarto e ficou maravilhoso. Entregaram antes do prazo, equipe de confiança, pós-venda também atende com excelência.",
  },
];

function Stars({ count = 5, size = "w-4 h-4" }: { count?: number; size?: string }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className={`${size} fill-[#42A5F5] text-[#42A5F5]`} />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section id="avaliacoes" className="relative py-24 lg:py-32 bg-[#0E0E16]">
      <div className="absolute top-0 left-[15%] w-px h-28 bg-gradient-to-b from-transparent via-[#1565C0]/10 to-transparent" />

      <div className="container">
        {/* Header */}
        <Reveal className="max-w-xl mb-14">
          <span className="text-[#42A5F5] text-xs font-semibold uppercase tracking-[0.2em]">
            Avaliações
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-5 leading-[1.1]">
            O que dizem no Google
          </h2>
        </Reveal>

        {/* Rating highlight card + reviews grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 items-stretch">
          {/* Rating summary - highlighted card */}
          <Reveal delay={0}>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg p-6 h-full flex flex-col justify-center items-center text-center gap-2 bg-gradient-to-br from-[#1565C0] to-[#0D47A1] hover:shadow-2xl hover:shadow-[#1565C0]/25 transition-all duration-300"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#42A5F5]/25 blur-3xl group-hover:bg-[#42A5F5]/35 transition-colors duration-500" />
              <span className="relative text-[#BBDEFB] text-xs font-semibold uppercase tracking-[0.15em]">
                Nota no Google
              </span>
              <p className="relative font-display text-6xl font-bold text-white leading-none mt-2">
                {GOOGLE_RATING.toFixed(1)}
              </p>
              <Stars size="w-5 h-5" />
              <p className="relative text-blue-100/80 text-xs mt-1">
                {GOOGLE_REVIEW_COUNT} avaliações
              </p>
              <span className="relative text-white text-xs font-medium mt-3 underline decoration-white/30 underline-offset-4 group-hover:decoration-white transition-colors">
                Ver todas no Google →
              </span>
            </a>
          </Reveal>

          {/* Review cards */}
          {reviews.map((review, index) => (
            <Reveal key={index} delay={(index + 1) * 0.08}>
              <div className="relative p-6 rounded-lg border border-white/5 bg-white/[0.015] hover:border-[#1565C0]/25 transition-colors duration-300 flex flex-col h-full">
                <Quote className="w-6 h-6 text-[#1565C0]/40 mb-3" fill="currentColor" />
                <Stars />
                <p className="text-gray-400 text-sm leading-relaxed mt-4 flex-1">
                  {review.text}
                </p>
                <div className="flex items-center gap-1.5 mt-5 pt-4 border-t border-white/5">
                  <span className="text-gray-600 text-xs">Avaliação verificada no</span>
                  <span className="text-gray-400 text-xs font-semibold">Google</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <a
            href={GOOGLE_WRITE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#42A5F5] hover:text-[#64B5F6] font-medium text-sm transition-colors duration-200"
          >
            Já é cliente? Deixe sua avaliação →
          </a>
        </div>
      </div>
    </section>
  );
}
