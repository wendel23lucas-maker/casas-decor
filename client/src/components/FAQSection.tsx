/*
 * Design: Ateliê Moderno Escuro
 * Perguntas frequentes — responde de cara as dúvidas que hoje só
 * eram tiradas por WhatsApp (prazo, garantia, pagamento, atendimento).
 */

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ADDRESS, WHATSAPP_LINKS } from "@/lib/contact";
import Reveal from "./Reveal";

const faqs = [
  {
    question: "Qual o prazo médio de entrega de um projeto?",
    answer:
      "Varia conforme o tamanho e a complexidade do projeto, mas em geral o prazo de produção e instalação fica entre 30 e 60 dias após a aprovação do projeto e do pagamento inicial. No orçamento, passamos um prazo específico para o seu caso.",
  },
  {
    question: "Os móveis têm garantia?",
    answer:
      "Sim. Todos os móveis planejados têm garantia contra defeitos de fabricação. O prazo específico e as condições são detalhados no contrato antes do início da produção.",
  },
  {
    question: "Quais as formas de pagamento?",
    answer:
      "Trabalhamos com entrada + parcelamento, cartão de crédito e boleto. As condições específicas variam conforme o valor do projeto — chama no WhatsApp que a gente te passa as opções.",
  },
  {
    question: "Vocês atendem outras cidades além de Valinhos?",
    answer: `Sim, atendemos ${ADDRESS.city} e região (Campinas, Vinhedo, Louveira, Itatiba e cidades próximas). Fala com a gente pra confirmar o atendimento na sua região.`,
  },
  {
    question: "Como funciona a visita técnica e a medição?",
    answer:
      "Depois do primeiro contato, agendamos uma visita para medir o ambiente e entender melhor o espaço e as necessidades do projeto. Essa etapa é essencial para garantir que os móveis fiquem perfeitamente ajustados.",
  },
  {
    question: "É possível ver o projeto em 3D antes de fechar?",
    answer:
      "Sim! Apresentamos uma prévia em 3D do projeto antes da produção, para você visualizar como vai ficar o resultado final e pedir ajustes se necessário.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-[#0A0A0F]">
      <div className="absolute top-0 left-[8%] w-px h-32 bg-gradient-to-b from-transparent via-[#1565C0]/10 to-transparent" />

      <div className="container">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Header - sticky on desktop */}
          <Reveal className="lg:col-span-2" delay={0}>
            <span className="text-[#42A5F5] text-xs font-semibold uppercase tracking-[0.2em]">
              Dúvidas Frequentes
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-5 leading-[1.1]">
              Perguntas que
              <br />
              todo mundo faz
            </h2>
            <p className="text-gray-400 mt-6 text-base leading-relaxed max-w-sm">
              Não achou a resposta que procurava? Manda a pergunta direto pra
              gente.
            </p>
            <a
              href={WHATSAPP_LINKS.default}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#42A5F5] hover:text-[#64B5F6] font-medium text-sm mt-4 transition-colors duration-200"
            >
              Falar no WhatsApp →
            </a>
          </Reveal>

          {/* Accordion */}
          <Reveal className="lg:col-span-3" delay={0.1}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-white/5"
                >
                  <AccordionTrigger className="text-white text-base font-semibold hover:no-underline hover:text-[#42A5F5] py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 text-sm leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
