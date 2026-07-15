/*
 * Design: Ateliê Moderno Escuro
 * Vídeo real em destaque (formato vertical, como um Reels), em vez
 * de grade de fotos — toca em loop mudo, com botão de som e CTA
 * pro perfil real do Instagram ao lado.
 *
 * Pra adicionar mais vídeos depois: solte o .mp4 em
 * client/public/videos/ e adicione um objeto ao array `videos`.
 */

import { useRef, useState } from "react";
import { Instagram, Volume2, VolumeX, Play } from "lucide-react";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/contact";
import Reveal from "./Reveal";

const videos = [
  {
    src: "/videos/sala-tv-tour.mp4",
    poster: "/images/portfolio-real/sala-tv-tour-poster.webp",
  },
];

export default function InstagramSection() {
  const [muted, setMuted] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const toggleSound = (index: number) => {
    const el = videoRefs.current[index];
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
  };

  return (
    <section className="relative py-24 lg:py-32 bg-[#0A0A0F]">
      <div className="absolute top-0 left-[18%] w-px h-24 bg-gradient-to-b from-transparent via-[#1565C0]/10 to-transparent" />

      <div className="container">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <Reveal className="lg:col-span-2 order-2 lg:order-1">
            <span className="text-[#42A5F5] text-xs font-semibold uppercase tracking-[0.2em]">
              Instagram
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-5 leading-[1.1]">
              Acompanhe de perto
            </h2>
            <p className="text-gray-400 mt-6 text-base leading-relaxed max-w-sm">
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

          {/* Featured video(s) */}
          <Reveal delay={0.1} className="lg:col-span-3 order-1 lg:order-2">
            <div
              className={`grid gap-4 ${
                videos.length > 1 ? "sm:grid-cols-2" : "max-w-xs mx-auto"
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
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    src={video.src}
                    poster={video.poster}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted={muted}
                    loop
                    playsInline
                    preload="metadata"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                    <Play className="w-3.5 h-3.5 fill-white text-white" />
                  </div>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleSound(index);
                    }}
                    aria-label={muted ? "Ativar som" : "Silenciar"}
                    className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors"
                  >
                    {muted ? (
                      <VolumeX className="w-4 h-4 text-white" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-white" />
                    )}
                  </button>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
