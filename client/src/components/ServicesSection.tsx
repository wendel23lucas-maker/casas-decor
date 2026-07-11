/*
 * Design: Ateliê Moderno Escuro - Revisado
 * Serviços com layout editorial, menos card-grid
 * Fotos de suporte com texto ao lado
 * Linhas arquitetônicas como motif
 */

import {
  UtensilsCrossed,
  Bed,
  Tv,
  Bath,
  Shirt,
  BookOpen,
} from "lucide-react";

const services = [
  {
    icon: UtensilsCrossed,
    title: "Cozinhas",
    description:
      "Armários otimizados, ilhas funcionais e acabamento premium que transforma o coração da casa.",
  },
  {
    icon: Bed,
    title: "Quartos",
    description:
      "Closets, roupeiros e cabeceiras sob medida que unem organização e elegância.",
  },
  {
    icon: Tv,
    title: "Salas & Home Theater",
    description:
      "Painéis de TV, estantes e racks que elevam o visual do seu ambiente.",
  },
  {
    icon: Bath,
    title: "Banheiros",
    description:
      "Gabinetes e armários com materiais resistentes à umidade e design sofisticado.",
  },
  {
    icon: Shirt,
    title: "Área de Serviço",
    description:
      "Armários e bancadas planejadas para lavanderia, maximizando cada centímetro.",
  },
  {
    icon: BookOpen,
    title: "Projetos Especiais",
    description:
      "Bares, churrasqueiras e qualquer projeto personalizado que você imaginar.",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="relative py-28 lg:py-36 bg-[#0E0E16]">
      {/* Architectural lines */}
      <div className="absolute top-0 left-[20%] w-px h-40 bg-gradient-to-b from-transparent via-[#1565C0]/10 to-transparent" />
      <div className="absolute top-0 right-[10%] w-px h-20 bg-gradient-to-b from-transparent via-[#1565C0]/10 to-transparent" />

      <div className="container">
        {/* Section Header - left aligned */}
        <div className="max-w-2xl mb-16">
          <span className="text-[#42A5F5] text-xs font-semibold uppercase tracking-[0.2em]">
            Serviços
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-5 leading-[1.1]">
            Móveis planejados para cada ambiente
          </h2>
          <p className="text-gray-400 mt-5 text-lg leading-relaxed max-w-lg">
            Do projeto à instalação, oferecemos soluções completas em móveis
            planejados para todos os espaços da sua casa.
          </p>
        </div>

        {/* Services - Editorial list with icons, not card grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group flex items-start gap-4"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="w-10 h-10 rounded-full border border-white/8 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-[#1565C0]/40 transition-colors duration-300">
                <service.icon className="w-5 h-5 text-gray-500 group-hover:text-[#42A5F5] transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-white font-display text-lg font-semibold mb-1.5 group-hover:text-[#42A5F5] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
