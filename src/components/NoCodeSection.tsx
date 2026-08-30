import React from 'react';
import { NO_CODE_NOT_REQUIRED, NO_CODE_YOU_WILL_LEARN } from '../data/courseData';
import { Reveal } from './Reveal';

export const NoCodeSection: React.FC = () => {
  return (
    <section className="surface-shell section">
      <div className="container-page">
        {/* Cabeçalho */}
        <div className="max-w-3xl">
          <Reveal>
            <p className="t-eyebrow">Diferencial</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="t-h2 mt-6">
              IA sem a barreira da <span className="t-serif text-[#1E4C41]">programação.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="t-lead mt-6">
              As tecnologias são aprendidas prioritariamente por meio de plataformas visuais,
              no-code, low-code, IA generativa e automações inteligentes.
            </p>
            <p className="mt-6 pl-5 border-l border-[#35C985] text-[17px] leading-relaxed text-[#19211E]">
              O objetivo não é formar programadores. O objetivo é formar profissionais capazes de
              aplicar IA.
            </p>
          </Reveal>
        </div>

        {/* Comparação editorial — duas colunas, apenas linhas */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
          <Reveal>
            <div>
              <div className="flex items-baseline justify-between pb-4 border-b border-[#DDE3DF]">
                <h3 className="font-display font-semibold text-[15px] tracking-wide text-[#65726C]">
                  Não é necessário
                </h3>
                <span className="t-micro">Sem pré-requisitos</span>
              </div>
              <ul className="mt-2">
                {NO_CODE_NOT_REQUIRED.map((item) => (
                  <li
                    key={item}
                    className="py-3.5 border-b border-[#E7EBE7] text-[15px] text-[#65726C] line-through decoration-[#B3BFB8]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <div className="flex items-baseline justify-between pb-4 border-b border-[#103B32]">
                <h3 className="font-display font-semibold text-[15px] tracking-wide text-[#103B32]">
                  Você aprenderá
                </h3>
                <span className="t-micro">Foco em resultados</span>
              </div>
              <ul className="mt-2">
                {NO_CODE_YOU_WILL_LEARN.map((item) => (
                  <li
                    key={item}
                    className="py-3.5 border-b border-[#E7EBE7] text-[15px] text-[#19211E] flex items-center gap-3"
                  >
                    <span className="dot-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
