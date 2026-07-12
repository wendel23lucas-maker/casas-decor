/*
 * Design: Ateliê Moderno Escuro
 * Wrapper de animação de entrada ao rolar a página — fade + leve
 * deslocamento vertical. Dispara uma única vez por elemento (não
 * re-anima ao rolar pra cima e descer de novo), para não distrair.
 */

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  // Quem tem "reduzir movimento" ativado no sistema não recebe o
  // deslocamento nem a animação — só um fade rápido (ou nada).
  const variants: Variants = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y }, visible: { opacity: 1, y: 0 } };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{
        duration: shouldReduceMotion ? 0.3 : 0.7,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
