# Casa's Decor — Site institucional

Site institucional de uma página (one-page) para a **Casa's Decor**, marcenaria especializada em móveis planejados em Valinhos, SP.

Construído em React + TypeScript + Vite + Tailwind CSS.

## Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) — build e dev server
- [Tailwind CSS 4](https://tailwindcss.com/) — estilos
- [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) — componentes de base
- [wouter](https://github.com/molefrog/wouter) — roteamento leve
- [lucide-react](https://lucide.dev/) — ícones

## Rodando localmente

Pré-requisitos: [Node.js](https://nodejs.org/) 20+.

```bash
npm install
npm run dev
```

O site abre em `http://localhost:3000`.

## Scripts disponíveis

| Comando           | O que faz                                  |
| ------------------ | ------------------------------------------- |
| `npm run dev`      | Sobe o servidor de desenvolvimento          |
| `npm run build`    | Gera a build de produção em `dist/`         |
| `npm run preview`  | Serve a build de produção localmente        |
| `npm run check`    | Checagem de tipos (TypeScript)              |
| `npm run format`   | Formata o código com Prettier               |

## Estrutura do projeto

```
client/
  index.html          Página HTML raiz (meta tags, SEO, fontes)
  public/images/       Imagens do site
  src/
    components/         Seções da página (Header, Hero, Serviços, Portfólio, Sobre, Contato, Footer...)
    components/ui/      Componentes de base (shadcn/ui)
    pages/               Páginas (Home, NotFound)
    lib/contact.ts      Dados de contato centralizados (telefone, WhatsApp, Instagram, endereço, horário)
    lib/utils.ts
shared/                 Constantes compartilhadas
```

### Editando informações de contato

Telefone, link do WhatsApp, Instagram, endereço e horário de funcionamento ficam
centralizados em **`client/src/lib/contact.ts`** — para atualizar qualquer um
desses dados, edite apenas esse arquivo; a mudança se propaga para todas as
seções do site automaticamente.

## Deploy

O projeto é um site estático puro (sem backend) — o `npm run build` gera os
arquivos finais em `dist/`, prontos para qualquer hospedagem estática
(Vercel, Netlify, GitHub Pages, Cloudflare Pages etc).

### Vercel

1. Importe o repositório em [vercel.com/new](https://vercel.com/new).
2. A Vercel detecta automaticamente o framework Vite — não é necessária
   nenhuma configuração adicional (build command `npm run build`, output
   directory `dist`).
3. Clique em Deploy.

## Licença

MIT
