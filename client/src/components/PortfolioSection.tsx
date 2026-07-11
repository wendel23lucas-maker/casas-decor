/*
 * Design: Ateliê Moderno Escuro - Revisado
 * Galeria editorial assimétrica, fotos grandes dominando
 * Layout masonry com variação de tamanhos
 * Menos card-grid, mais exposição fotográfica
 *
 * Nota de enquadramento: a maioria das fotos reais é retrato bem alongado
 * (celular, ~0.5 de proporção). Blocos "aspect" aqui usam proporções
 * próximas do formato retrato original para evitar cortar demais a foto
 * (o que sobrava em chão/parede vazios). object-top prioriza a parte de
 * cima da foto (bancada/armários) em vez do chão.
 */

import { useState } from "react";
import { ExternalLink, MessageCircle } from "lucide-react";
import { WHATSAPP_LINKS } from "@/lib/contact";
import GradientCTA from "./GradientCTA";

const projects = [
  {
    id: 1,
    title: "Cozinha com Ilha em Madeira",
    category: "Cozinha",
    image: "/images/portfolio-real/cozinha-ilha-madeira.jpg",
    span: "col-span-1 md:col-span-2",
    aspect: "aspect-[16/9]",
    objectPosition: "object-center",
  },
  {
    id: 2,
    title: "Closet Planejado com Nichos",
    category: "Closet",
    image: "/images/portfolio-real/closet-bege-dourado.jpg",
    span: "col-span-1",
    aspect: "aspect-[3/4]",
    objectPosition: "object-top",
  },
  {
    id: 3,
    title: "Quarto com Cabeceira Iluminada",
    category: "Quarto",
    image: "/images/portfolio-real/quarto-cabeceira-led.jpg",
    span: "col-span-1",
    aspect: "aspect-[3/4]",
    objectPosition: "object-center",
  },
  {
    id: 4,
    title: "Cozinha Integrada com Sala",
    category: "Sala",
    image: "/images/portfolio-real/cozinha-sala-integrada.jpg",
    span: "col-span-1",
    aspect: "aspect-[3/4]",
    objectPosition: "object-center",
  },
  {
    id: 5,
    title: "Cozinha Compacta em Corredor",
    category: "Cozinha",
    image: "/images/portfolio-real/cozinha-compacta-branca.jpg",
    span: "col-span-1",
    aspect: "aspect-[3/4]",
    objectPosition: "object-center",
  },
  {
    id: 6,
    title: "Cozinha em Tons de Cinza",
    category: "Cozinha",
    image: "/images/portfolio-real/cozinha-preta-cinza.jpg",
    span: "col-span-1",
    aspect: "aspect-[3/4]",
    objectPosition: "object-top",
  },
  {
    id: 7,
    title: "Área Gourmet com Churrasqueira",
    category: "Área Gourmet",
    image: "/images/portfolio-real/area-gourmet-churrasqueira.jpg",
    span: "col-span-1",
    aspect: "aspect-[3/4]",
    objectPosition: "object-top",
  },
  {
    id: 8,
    title: "Closet com Portas de Vidro Canelado",
    category: "Closet",
    image: "/images/portfolio-real/closet-verde-detalhe.jpg",
    span: "col-span-1",
    aspect: "aspect-[3/4]",
    objectPosition: "object-center",
  },
  {
    id: 9,
    title: "Cozinha com Acabamento em Mármore",
    category: "Cozinha",
    image: "/images/portfolio-real/cozinha-marmore-cinza.jpg",
    span: "col-span-1",
    aspect: "aspect-[3/4]",
    objectPosition: "object-top",
  },
  {
    id: 10,
    title: "Cozinha com Detalhes em Madeira",
    category: "Cozinha",
    image: "/images/portfolio-real/cozinha-branca-madeira-noturna.jpg",
    span: "col-span-1",
    aspect: "aspect-[3/4]",
    objectPosition: "object-top",
  },
];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const filters = [
    "Todos",
    "Cozinha",
    "Quarto",
    "Closet",
    "Sala",
    "Área Gourmet",
  ];

  const filteredProjects =
    activeFilter === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-28 lg:py-36 bg-[#0A0A0F]">
      {/* Architectural line motif */}
      <div className="absolute top-0 right-[15%] w-px h-32 bg-gradient-to-b from-transparent via-[#1565C0]/15 to-transparent" />
      <div className="absolute bottom-0 left-[10%] w-px h-24 bg-gradient-to-b from-transparent via-[#1565C0]/15 to-transparent" />

      <div className="container">
        {/* Section Header - left aligned, not centered */}
        <div className="max-w-2xl mb-14">
          <span className="text-[#42A5F5] text-xs font-semibold uppercase tracking-[0.2em]">
            Portfólio
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-5 leading-[1.1]">
            Projetos
          </h2>
          <p className="text-gray-400 mt-5 text-lg leading-relaxed max-w-lg">
            Cada ambiente conta uma história. Confira nossos trabalhos recentes
            e inspire-se para o seu próximo projeto.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-14">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? "bg-[#1565C0] text-white"
                  : "text-gray-500 hover:text-white border border-white/5 hover:border-white/15"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Editorial Gallery - Asymmetric Masonry */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`${project.span} group relative overflow-hidden rounded-lg cursor-pointer ${project.aspect}`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-full object-cover ${project.objectPosition} transition-transform duration-700 group-hover:scale-105`}
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <span className="text-[#42A5F5] text-[11px] font-semibold uppercase tracking-[0.15em]">
                  {project.category}
                </span>
                <h3 className="text-white font-display text-xl font-semibold mt-1.5">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}

          {/* WhatsApp CTA tile - replaces the empty "add your project" placeholder */}
          <GradientCTA
            icon={MessageCircle}
            title="Quer ver seu projeto aqui?"
            description="Fale com a gente e peça seu orçamento"
            ctaLabel="Falar no WhatsApp"
            href={WHATSAPP_LINKS.portfolio}
            size="compact"
          />
        </div>

        {/* CTA */}
        <div className="mt-16 flex items-center gap-3">
          <a
            href={WHATSAPP_LINKS.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#42A5F5] hover:text-[#64B5F6] font-medium text-base transition-colors duration-200"
          >
            Quer ver mais projetos? Fale conosco
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
