/*
 * Design: Ateliê Moderno Escuro
 * Mini-grade estilo Instagram com fotos (e, opcionalmente, vídeos
 * curtos em loop) reais do portfólio — sem depender de API/token do
 * Meta ou widget de terceiros. Ao passar o mouse mostra ícones de
 * curtir/comentar; tiles de vídeo tocam em loop mudo automaticamente.
 * Cada tile + o botão principal linkam pro perfil real.
 *
 * Pra adicionar um vídeo: solte o arquivo .mp4 em
 * client/public/videos/ e troque o item correspondente pra
 * { type: "video", src: "/videos/arquivo.mp4", poster: "/images/..." }
 */

import { Heart, MessageCircle, Instagram, Play } from "lucide-react";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/contact";
import Reveal from "./Reveal";

type Post =
  | { type: "image"; src: string; likes: number; comments: number }
  | { type: "video"; src: string; poster?: string; likes: number; comments: number };

const posts: Post[] = [
  { type: "image", src: "/images/portfolio-real/cozinha-branca-madeira-noturna.webp", likes: 84, comments: 6 },
  { type: "video", src: "/videos/sala-tv-tour.mp4", poster: "/images/portfolio-real/sala-tv-tour-poster.webp", likes: 116, comments: 14 },
  { type: "image", src: "/images/portfolio-real/banheiro-preto-dourado.webp", likes: 97, comments: 9 },
  { type: "image", src: "/images/portfolio-real/cozinha-marmore-cinza.webp", likes: 71, comments: 5 },
  { type: "image", src: "/images/portfolio-real/sala-cantinho-bar.webp", likes: 108, comments: 12 },
  { type: "image", src: "/images/portfolio-real/quarto-cabeceira-led.webp", likes: 58, comments: 3 },
];

function PostTile({ post }: { post: Post }) {
  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative aspect-square overflow-hidden rounded-md"
    >
      {post.type === "video" ? (
        <video
          src={post.src}
          poster={post.poster}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : (
        <img
          src={post.src}
          alt="Projeto Casa's Decor no Instagram"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      )}

      {post.type === "video" && (
        <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <Play className="w-3 h-3 fill-white text-white" />
        </div>
      )}

      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
        <span className="flex items-center gap-1.5 text-white text-sm font-medium">
          <Heart className="w-4 h-4 fill-white" />
          {post.likes}
        </span>
        <span className="flex items-center gap-1.5 text-white text-sm font-medium">
          <MessageCircle className="w-4 h-4 fill-white" />
          {post.comments}
        </span>
      </div>
    </a>
  );
}

export default function InstagramSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#0A0A0F]">
      <div className="absolute top-0 left-[18%] w-px h-24 bg-gradient-to-b from-transparent via-[#1565C0]/10 to-transparent" />

      <div className="container">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <span className="text-[#42A5F5] text-xs font-semibold uppercase tracking-[0.2em]">
              Instagram
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-5 leading-[1.1]">
              Acompanhe de perto
            </h2>
          </div>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 shrink-0 border border-white/10 hover:border-[#1565C0]/40 text-white font-medium px-5 py-2.5 rounded-md text-sm transition-colors duration-200"
          >
            <Instagram className="w-4 h-4 text-[#42A5F5]" />
            Seguir {INSTAGRAM_HANDLE}
          </a>
        </Reveal>

        <Reveal delay={0.1} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
          {posts.map((post, index) => (
            <PostTile key={index} post={post} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
