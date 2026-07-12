/*
 * Design: Ateliê Moderno Escuro
 * Mini seção de conteúdo/dicas — ajuda no SEO (palavras-chave de
 * planejamento residencial) e mostra autoridade no assunto, sem
 * precisar da estrutura de um blog completo.
 */

import { Lightbulb, Ruler, Palette, Wallet } from "lucide-react";

const tips = [
  {
    icon: Ruler,
    title: "Planeje o espaço antes de comprar eletrodomésticos",
    text: "Definir geladeira, fogão e micro-ondas antes do projeto evita retrabalho e garante que cada móvel encaixe com folga certa.",
  },
  {
    icon: Palette,
    title: "Cores claras ampliam ambientes pequenos",
    text: "Em cozinhas e quartos compactos, tons claros nos armários e um bom aproveitamento vertical fazem o espaço parecer maior.",
  },
  {
    icon: Lightbulb,
    title: "Iluminação embutida faz diferença no resultado",
    text: "Fitas de LED sob armários e nichos não são só estética — facilitam o uso da bancada e valorizam o acabamento dos móveis.",
  },
  {
    icon: Wallet,
    title: "Negocie o projeto por etapas, se precisar",
    text: "Dá pra planejar o ambiente completo e produzir por fases (cozinha primeiro, quarto depois), sem perder a padronização do projeto.",
  },
];

export default function TipsSection() {
  return (
    <section id="dicas" className="relative py-24 lg:py-32 bg-[#0E0E16]">
      <div className="absolute top-0 right-[12%] w-px h-24 bg-gradient-to-b from-transparent via-[#1565C0]/10 to-transparent" />

      <div className="container">
        <div className="max-w-xl mb-14">
          <span className="text-[#42A5F5] text-xs font-semibold uppercase tracking-[0.2em]">
            Dicas
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-5 leading-[1.1]">
            Antes de planejar seus móveis
          </h2>
          <p className="text-gray-400 mt-4 text-base leading-relaxed">
            Um pouco do que aprendemos entregando projetos ao longo dos anos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {tips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-lg border border-white/5 bg-white/[0.015] hover:border-[#1565C0]/25 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-full border border-[#1565C0]/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#42A5F5]" />
                </div>
                <h3 className="text-white text-base font-semibold leading-snug">
                  {tip.title}
                </h3>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                  {tip.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
