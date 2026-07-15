/*
 * Design: Ateliê Moderno Escuro
 * Vídeo real em destaque (formato vertical, como um Reels), abaixo
 * do texto/CTA, sempre mudo em loop (sem controle de som).
 *
 * Pra adicionar mais vídeos depois: solte o .mp4 em
 * client/public/videos/ e adicione um objeto ao array `videos`.
 */

import { Instagram, Play } from "lucide-react";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/contact";
import Reveal from "./Reveal";

const videos = [
  {
    src: "/videos/sala-tv-tour.mp4",
    poster: "/images/portfolio-real/sala-tv-tour-poster.webp",
  },
];

export default function InstagramSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#0A0A0F]">
      <div className="absolute top-0 left-[18%] w-px h-24 bg-gradient-to-b from-transparent via-[#1565C0]/10 to-transparent" />

      <div className="container">
        {/* Text */}
        <Reveal className="max-w-xl mx-auto text-center">
          <span className="text-[#42A5F5] text-xs font-semibold uppercase tracking-[0.2em]">
            Instagram
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-5 leading-[1.1]">
            Acompanhe de perto
          </h2>
          <p className="text-gray-400 mt-6 text-base leading-relaxed">
            Bastidores, projetos recém-entregues e o dia a dia da marcenaria
            — a gente posta por lá.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1565C0] hover:bg-[#1256A8] text-white font-semibold px-6 py-3 rounded-md text-sm mt-8 transition-colors duration-200"
          >
            <Instagram className="w-4 h-4" />
            Seguir {INSTAGRAM_HANDLE}
          </a>
        </Reveal>

        {/* Video, below the text */}
        <Reveal delay={0.1} className="mt-14">
          <div
            className={`grid gap-4 max-w-xs mx-auto ${
              videos.length > 1 ? "sm:max-w-xl sm:grid-cols-2" : ""
            }`}
          >
            {videos.map((video, index) => (
              <a
                key={index}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[9/16] rounded-lg overflow-hidden bg-black"
              >
                <video
                  src={video.src}
                  poster={video.poster}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                  <Play className="w-3.5 h-3.5 fill-white text-white" />
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
