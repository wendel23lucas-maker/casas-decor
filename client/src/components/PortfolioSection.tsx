/*
 * Design: Ateliê Moderno Escuro - Revisado
 * Galeria em carrossel com avanço automático (em vez de grid estático
 * mostrando tudo aberto de uma vez). Pausa ao passar o mouse, setas
 * manuais e indicadores. Fotos reais de projetos entregues.
 *
 * Nota de enquadramento: a maioria das fotos reais é retrato bem alongado
 * (celular, proporção ~0.55-0.75). Usamos aspect-[2/3] (mais vertical que
 * o antigo 3/4) para reduzir o corte, + object-top nas mais estreitas.
 * A única foto paisagem (mesma do hero) foi removida daqui — num card
 * vertical ela perdia mais da metade da largura.
 */

import { useEffect, useRef, useState } from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINKS } from "@/lib/contact";
import GradientCTA from "./GradientCTA";
import PortfolioLightbox from "./PortfolioLightbox";
import Reveal from "./Reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

const projects = [
  {
    id: 2,
    title: "Closet Planejado com Nichos",
    category: "Closet",
    image: "/images/portfolio-real/closet-bege-dourado.webp",
    objectPosition: "object-top",
  },
  {
    id: 3,
    title: "Quarto com Cabeceira Iluminada",
    category: "Quarto",
    image: "/images/portfolio-real/quarto-cabeceira-led.webp",
    objectPosition: "object-center",
  },
  {
    id: 4,
    title: "Cozinha Integrada com Sala",
    category: "Sala",
    image: "/images/portfolio-real/cozinha-sala-integrada.webp",
    objectPosition: "object-center",
  },
  {
    id: 5,
    title: "Cozinha Compacta em Corredor",
    category: "Cozinha",
    image: "/images/portfolio-real/cozinha-compacta-branca.webp",
    objectPosition: "object-center",
  },
  {
    id: 6,
    title: "Cozinha em Tons de Cinza",
    category: "Cozinha",
    image: "/images/portfolio-real/cozinha-preta-cinza.webp",
    objectPosition: "object-top",
  },
  {
    id: 7,
    title: "Área Gourmet com Churrasqueira",
    category: "Área Gourmet",
    image: "/images/portfolio-real/area-gourmet-churrasqueira.webp",
    objectPosition: "object-center",
  },
  {
    id: 8,
    title: "Closet com Portas de Vidro Canelado",
    category: "Closet",
    image: "/images/portfolio-real/closet-verde-detalhe.webp",
    objectPosition: "object-center",
  },
  {
    id: 9,
    title: "Cozinha com Acabamento em Mármore",
    category: "Cozinha",
    image: "/images/portfolio-real/cozinha-marmore-cinza.webp",
    objectPosition: "object-top",
  },
  {
    id: 10,
    title: "Cozinha com Detalhes em Madeira",
    category: "Cozinha",
    image: "/images/portfolio-real/cozinha-branca-madeira-noturna.webp",
    objectPosition: "object-center",
  },
  {
    id: 12,
    title: "Cantinho Bar com Estofado",
    category: "Sala",
    image: "/images/portfolio-real/sala-cantinho-bar.webp",
    objectPosition: "object-center",
  },
  {
    id: 13,
    title: "Escritório com Adega",
    category: "Escritório",
    image: "/images/portfolio-real/escritorio-com-adega.webp",
    objectPosition: "object-center",
  },
  {
    id: 14,
    title: "Bancada com Cuba Redonda",
    category: "Banheiro",
    image: "/images/portfolio-real/banheiro-cuba-redonda.webp",
    objectPosition: "object-top",
  },
  {
    id: 15,
    title: "Banheiro com Detalhes em Dourado",
    category: "Banheiro",
    image: "/images/portfolio-real/banheiro-preto-dourado.webp",
    objectPosition: "object-top",
  },
];

const filters = [
  "Todos",
  "Cozinha",
  "Quarto",
  "Closet",
  "Sala",
  "Área Gourmet",
  "Escritório",
  "Banheiro",
];

const AUTOPLAY_DELAY = 4000;

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [api, setApi] = useState<CarouselApi>();
  const [isPaused, setIsPaused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const filteredProjects =
    activeFilter === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  // Autoplay: advance one slide every few seconds, pausing on hover/touch/lightbox
  useEffect(() => {
    if (!api) return;

    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    api.on("select", onSelect);
    onSelect();

    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      if (isPaused || lightboxIndex !== null) return;
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, AUTOPLAY_DELAY);

    return () => {
      api.off("select", onSelect);
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [api, isPaused, lightboxIndex]);

  return (
    <section id="portfolio" className="relative py-28 lg:py-36 bg-[#0A0A0F]">
      {/* Architectural line motif */}
      <div className="absolute top-0 right-[15%] w-px h-32 bg-gradient-to-b from-transparent via-[#1565C0]/15 to-transparent" />
      <div className="absolute bottom-0 left-[10%] w-px h-24 bg-gradient-to-b from-transparent via-[#1565C0]/15 to-transparent" />

      <div className="container">
        {/* Section Header - left aligned, not centered */}
        <Reveal className="max-w-2xl mb-14">
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
        </Reveal>

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

        {/* Carousel gallery - advances automatically, pauses on hover */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Carousel
            key={activeFilter}
            setApi={setApi}
            opts={{ loop: true, align: "start" }}
            className="px-1"
          >
            <CarouselContent>
              {filteredProjects.map((project, projectIndex) => (
                <CarouselItem
                  key={project.id}
                  className="basis-[85%] sm:basis-1/2 lg:basis-1/3"
                >
                  <div
                    onClick={() => setLightboxIndex(projectIndex)}
                    className="group relative overflow-hidden rounded-lg cursor-pointer aspect-[2/3]"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover ${project.objectPosition} transition-transform duration-700 group-hover:scale-105`}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/85 via-[#0A0A0F]/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-[#42A5F5] text-[11px] font-semibold uppercase tracking-[0.15em]">
                        {project.category}
                      </span>
                      <h3 className="text-white font-display text-xl font-semibold mt-1.5">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </CarouselItem>
              ))}

              {/* WhatsApp CTA slide - replaces the empty "add your project" placeholder */}
              <CarouselItem className="basis-[85%] sm:basis-1/2 lg:basis-1/3">
                <GradientCTA
                  icon={MessageCircle}
                  title="Quer ver seu projeto aqui?"
                  description="Fale com a gente e peça seu orçamento"
                  ctaLabel="Falar no WhatsApp"
                  href={WHATSAPP_LINKS.portfolio}
                  size="compact"
                  backgroundImage="/images/portfolio-real/closet-verde-detalhe.webp"
                />
              </CarouselItem>
            </CarouselContent>

            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-5 bg-[#0A0A0F]/80 border-white/10 text-white hover:bg-[#1565C0] hover:text-white hover:border-[#1565C0]" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-5 bg-[#0A0A0F]/80 border-white/10 text-white hover:bg-[#1565C0] hover:text-white hover:border-[#1565C0]" />
          </Carousel>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {filteredProjects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Ir para o projeto ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  selectedIndex === index
                    ? "w-6 bg-[#1565C0]"
                    : "w-1.5 bg-white/15 hover:bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {lightboxIndex !== null && (
        <PortfolioLightbox
          projects={filteredProjects}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  );
}
