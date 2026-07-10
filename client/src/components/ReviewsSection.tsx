/*
 * Design: Ateliê Moderno Escuro
 * Prova social com avaliações reais do Google
 * Nota geral em destaque + cards de depoimentos de clientes
 */

import { Star } from "lucide-react";
import {
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  GOOGLE_REVIEWS_URL,
  GOOGLE_WRITE_REVIEW_URL,
} from "@/lib/contact";

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

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#42A5F5] text-[#42A5F5]" />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#0E0E16]">
      <div className="absolute top-0 left-[15%] w-px h-28 bg-gradient-to-b from-transparent via-[#1565C0]/10 to-transparent" />

      <div className="container">
        {/* Header with overall rating */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-14">
          <div className="max-w-xl">
            <span className="text-[#42A5F5] text-xs font-semibold uppercase tracking-[0.2em]">
              Avaliações
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-5 leading-[1.1]">
              O que dizem no Google
            </h2>
          </div>

          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 shrink-0 group"
          >
            <div className="text-right">
              <p className="text-white font-display text-3xl font-bold leading-none">
                {GOOGLE_RATING.toFixed(1)}
              </p>
              <Stars />
              <p className="text-gray-500 text-xs mt-1 group-hover:text-gray-300 transition-colors">
                {GOOGLE_REVIEW_COUNT} avaliações no Google
              </p>
            </div>
          </a>
        </div>

        {/* Review cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-white/5 bg-white/[0.015] hover:border-[#1565C0]/25 transition-colors duration-300"
            >
              <Stars />
              <p className="text-gray-400 text-sm leading-relaxed mt-4">
                {review.text}
              </p>
              <p className="text-gray-600 text-xs mt-4">
                Avaliação verificada no Google
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-wrap items-center gap-6">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#42A5F5] hover:text-[#64B5F6] font-medium text-sm transition-colors duration-200"
          >
            Ver todas as avaliações →
          </a>
          <a
            href={GOOGLE_WRITE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white font-medium text-sm transition-colors duration-200"
          >
            Já é cliente? Deixe sua avaliação →
          </a>
        </div>
      </div>
    </section>
  );
}
