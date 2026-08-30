import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  /** Atraso em segundos — usado para escalonar itens de uma mesma grade. */
  delay?: number;
  /** Deslocamento vertical inicial em px. */
  y?: number;
  className?: string;
  as?: 'div' | 'li' | 'section' | 'article';
}

/**
 * Wrapper de entrada em cena: fade-in + pequeno deslocamento vertical.
 * Easing natural, 550ms. Respeita `prefers-reduced-motion`.
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  y = 16,
  className = '',
  as = 'div'
}) => {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] as typeof motion.div;

  if (reduceMotion) {
    return React.createElement(as, { className }, children);
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  );
};
