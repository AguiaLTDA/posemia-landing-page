import React from 'react';
import { COURSE_MODULES } from '../data/courseData';
import { Reveal } from './Reveal';

export const LearningJourneySection: React.FC = () => {
  return (
    <section id="jornada" className="surface-forest on-forest section">
      <div className="container-page">
        {/* Cabeçalho */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="t-eyebrow">Trajetória progressiva</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="t-h2 mt-6">
                Jornada de <span className="t-serif text-[#8FE3BA]">aprendizagem.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.14}>
              <p className="t-body">
                Seis módulos estruturados em sequência pedagógica direta, do conceito à aplicação
                autônoma.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Timeline */}
        <ol className="mt-12 sm:mt-16 border-t border-white/12">
          {COURSE_MODULES.map((module, idx) => (
            <Reveal as="li" key={module.id} delay={idx * 0.05}>
              <div className="group grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-10 py-6 sm:py-7 border-b border-white/12 transition-colors duration-500 hover:border-[#35C985]/40">
                {/* Numeral */}
                <div className="md:col-span-2">
                  <span className="t-numeral text-[2.25rem] sm:text-[2.75rem] text-white/25 transition-colors duration-500 group-hover:text-[#35C985]">
                    {String(module.id).padStart(2, '0')}
                  </span>
                </div>

                {/* Título e questão orientadora */}
                <div className="md:col-span-6">
                  <h3 className="t-h3">{module.title}</h3>
                  <p className="t-serif text-[#8FE3BA] text-[16px] mt-1.5">“{module.question}”</p>
                </div>

                {/* Competência desenvolvida */}
                <div className="md:col-span-4 md:text-right">
                  <p className="t-micro">Módulo {module.id} · {module.hours} horas</p>
                  <p className="t-body mt-2">{module.subtitle}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};
