import React from 'react';
import { DEFAULT_COURSE_INFO } from '../data/courseData';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';

export const CourseInfoSection: React.FC = () => {
  const infoItems = [
    { label: 'Duração e carga horária', value: DEFAULT_COURSE_INFO.duration },
    { label: 'Modalidade de ensino', value: DEFAULT_COURSE_INFO.modality },
    { label: 'Dias das aulas', value: DEFAULT_COURSE_INFO.days },
    { label: 'Horário', value: DEFAULT_COURSE_INFO.hours },
    { label: 'Início das aulas', value: DEFAULT_COURSE_INFO.startDate },
    { label: 'Investimento', value: DEFAULT_COURSE_INFO.investment }
  ];

  return (
    <section id="informacoes" className="surface-white section">
      <div className="container-page">
        {/* Cabeçalho */}
        <div className="max-w-3xl">
          <Reveal>
            <p className="t-eyebrow">Informações do curso</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="t-h2 mt-6">
              Estrutura acadêmica e <span className="t-serif text-[#1E4C41]">investimento.</span>
            </h2>
          </Reveal>
        </div>

        {/* Ficha técnica */}
        <div className="mt-14 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-[#DDE3DF]">
          {infoItems.map((item, idx) => (
            <Reveal key={item.label} delay={idx * 0.05} className="py-8 pr-8 border-b border-[#DDE3DF]">
              <span className="t-eyebrow block">{item.label}</span>
              <span className="block font-display font-medium text-[1.15rem] leading-snug text-[#19211E] mt-3">
                {item.value}
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 t-micro">
            <a
              href="#ferramentas"
              className="inline-flex items-center gap-1.5 text-[#103B32] underline decoration-[#C5CFC9] underline-offset-4 hover:decoration-[#35C985] transition-colors"
            >
              Ver as ferramentas e o ecossistema utilizados na prática
              <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.75} />
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
};
