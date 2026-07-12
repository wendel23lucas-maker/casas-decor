/*
 * Design: Ateliê Moderno Escuro
 * Seção de diferenciais — lista editorial numerada, linhas divisórias
 * finas, tipografia grande. Mesma linguagem visual do resto do site
 * (fundo escuro, azul da marca como acento, linhas arquitetônicas).
 */

import { Clock, Layers, Users, Box, CreditCard } from "lucide-react";
import Reveal from "./Reveal";

const differentiators = [
  {
    number: "01",
    icon: Clock,
    title: "Entrega no prazo",
    description:
      "Assumimos compromissos reais. Definimos a data no contrato e cumprimos sem surpresas.",
  },
  {
    number: "02",
    icon: Layers,
    title: "Materiais selecionados",
    description:
      "MDF de alto padrão, ferragens premium e acabamentos que duram e mantêm a beleza por anos.",
  },
  {
    number: "03",
    icon: Users,
    title: "Equipe especializada",
    description:
      "Designers, marceneiros e instaladores com anos de experiência e olhar cuidadoso para cada detalhe.",
  },
  {
    number: "04",
    icon: Box,
    title: "Visualização 3D",
    description:
      "Antes de produzir, você vê como vai ficar. Ajustamos até estar exatamente do seu jeito.",
  },
  {
    number: "05",
    icon: CreditCard,
    title: "Facilidade de pagamento",
    description:
      "Condições flexíveis pensadas para caber no seu bolso. Parcele e realize seu sonho agora.",
  },
];

export default function DifferentiatorsSection() {
  return (
    <section id="diferenciais" className="relative py-28 lg:py-36 bg-[#0A0A0F]">
      {/* Architectural line motif */}
      <div className="absolute top-0 left-[25%] w-px h-32 bg-gradient-to-b from-transparent via-[#1565C0]/15 to-transparent" />
      <div className="absolute bottom-0 right-[12%] w-px h-24 bg-gradient-to-b from-transparent via-[#1565C0]/15 to-transparent" />

      <div className="container">
        {/* Header */}
        <Reveal className="max-w-2xl mb-16">
          <span className="text-[#42A5F5] text-xs font-semibold uppercase tracking-[0.2em]">
            O que nos diferencia dos demais
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-5 leading-[1.15]">
            Não fazemos móveis — criamos ambientes que{" "}
            <span className="text-[#42A5F5]">refletem quem você é</span>.
          </h2>
        </Reveal>

        {/* Numbered editorial list */}
        <div className="divide-y divide-white/5 border-t border-b border-white/5">
          {differentiators.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.06} y={16}>
              <div className="group grid grid-cols-1 sm:grid-cols-[auto_auto_1fr] items-start sm:items-center gap-4 sm:gap-8 py-8 hover:bg-white/[0.015] transition-colors duration-300 px-2 -mx-2">
                <span className="font-display text-2xl font-bold text-white/15 group-hover:text-[#1565C0]/40 transition-colors duration-300 tabular-nums">
                  {item.number}
                </span>

                <div className="w-12 h-12 rounded-full border border-white/8 flex items-center justify-center shrink-0 group-hover:border-[#1565C0]/40 transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-gray-500 group-hover:text-[#42A5F5] transition-colors duration-300" />
                </div>

                <div>
                  <h3 className="text-white font-display text-xl font-semibold mb-1.5 group-hover:text-[#42A5F5] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
