/*
 * Design: Ateliê Moderno Escuro
 * Header fixo, transparente no topo, escuro ao scrollar
 * Logo Casa's Decor, navegação minimalista
 * Cores: preto fundo, azul #1565C0 acentos
 */

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINKS } from "@/lib/contact";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0F]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2" onClick={() => scrollTo("#hero")}>
          <img
            src="/images/logo.png"
            alt="Casa's Decor"
            className="h-12 lg:h-14 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.href);
              }}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href={WHATSAPP_LINKS.default}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1565C0] hover:bg-[#1256A8] text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-all duration-200 hover:shadow-lg hover:shadow-[#1565C0]/25 active:scale-[0.97]"
          >
            <Phone className="w-4 h-4" />
            Orçamento Grátis
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0A0A0F]/98 backdrop-blur-lg border-t border-white/5">
          <nav className="flex flex-col py-4 px-6 gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className="text-base text-gray-300 hover:text-white py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINKS.default}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-[#1565C0] text-white font-semibold px-5 py-3 rounded-md"
            >
              <Phone className="w-4 h-4" />
              Orçamento Grátis
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
