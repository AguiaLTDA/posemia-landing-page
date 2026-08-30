import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { Reveal } from './Reveal';

/** Contador suave — anima de 0 ao valor final quando entra em cena. */
const CountUp: React.FC<{ value: number; suffix?: string }> = ({ value, suffix = '' }) => {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (reduceMotion) {
      setDisplay(value);
      return;
    }

    const node = ref.current;
    if (!node) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const duration = 700;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(value * eased));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, reduceMotion]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
};

export const OverviewSection: React.FC = () => {
  const stats = [
    { value: 360, suffix: 'h', label: 'Carga horária', detail: '12 meses de duração' },
    { value: 6, suffix: '', label: 'Módulos práticos', detail: '60h por módulo' },
    { value: 12, suffix: '', label: 'Disciplinas', detail: '30h por disciplina' },
    { value: 6, suffix: '', label: 'Microcertificados', detail: 'Certificação intermediária' },
    { value: 1, suffix: '', label: 'Projeto integrador', detail: 'Solução para sua área' },
    { value: 0, suffix: '', label: 'Código prévio', detail: 'Sem exigi-lo como barreira' }
  ];

  return (
    <section id="visao-geral" className="surface-shell section">
      <div className="container-page">
        {/* Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="t-eyebrow">Visão geral</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="t-h2 mt-6 max-w-[16ch]">
                IA não é mais uma área <span className="t-serif text-[#1E4C41]">exclusiva da tecnologia.</span>
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:pt-3">
            <Reveal delay={0.14}>
              <p className="t-body">
                A Inteligência Artificial está redefinindo Médicos, Advogados, Engenheiros, Gestores,
                Educadores e Profissionais da Saúde. O mercado não exige que você se torne um
                programador, mas sim um líder capaz de integrar e aplicar IA na sua profissão.
              </p>
              <p className="mt-6 pl-5 border-l border-[#35C985] text-[17px] leading-relaxed text-[#19211E]">
                Desenvolvida pelo UNIVC para capacitar profissionais de qualquer graduação a
                diagnosticar, automatizar e aplicar soluções inteligentes no seu setor.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Indicadores — linha editorial, sem cards */}
        <div className="mt-20 sm:mt-28 pt-2 border-t border-[#DDE3DF] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 0.06}
              className="py-8 pr-6 border-b border-[#DDE3DF] md:border-b-0 lg:border-r last:lg:border-r-0 lg:border-[#DDE3DF]"
            >
              <div className="t-numeral text-[2.75rem] sm:text-[3.25rem] text-[#103B32]">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-3 font-display font-semibold text-[15px] text-[#19211E]">{stat.label}</div>
              <div className="t-micro mt-0.5">{stat.detail}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
