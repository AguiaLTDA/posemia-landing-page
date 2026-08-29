import React from 'react';
import { DEFAULT_COURSE_INFO, TECH_STACK_TAGS } from '../data/courseData';
import { Calendar, Clock, Laptop, ShieldCheck, DollarSign, Users } from 'lucide-react';

export const CourseInfoSection: React.FC = () => {
  const infoItems = [
    { label: 'Duração e Carga Horária', value: DEFAULT_COURSE_INFO.duration, icon: Clock },
    { label: 'Modalidade de Ensino', value: DEFAULT_COURSE_INFO.modality, icon: Laptop },
    { label: 'Dias das Aulas', value: DEFAULT_COURSE_INFO.days, icon: Calendar },
    { label: 'Horário', value: DEFAULT_COURSE_INFO.hours, icon: Clock },
    { label: 'Início das Aulas', value: DEFAULT_COURSE_INFO.startDate, icon: ShieldCheck },
    { label: 'Investimento', value: DEFAULT_COURSE_INFO.investment, icon: DollarSign }
  ];

  return (
    <section id="informacoes" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-[#0F4232]/50 bg-[#041A13]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-display text-[#00D889] uppercase tracking-widest block">
            ./05 Informações do Curso
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            Estrutura acadêmica e <span className="italic font-serif text-[#00D889] font-normal">investimento.</span>
          </h2>
        </div>

        {/* Info Grid (1px Hairline Divided) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-b border-[#0F4232]/60">
          {infoItems.map((item, idx) => {
            return (
              <div
                key={idx}
                className="p-6 border-b lg:border-b-0 border-r border-[#0F4232]/60 last:border-r-0 flex flex-col justify-between space-y-3"
              >
                <span className="text-xs font-display text-[#88A699] uppercase tracking-wider block">
                  {item.label}
                </span>
                <span className="text-lg font-display font-medium text-white">
                  {item.value}
                </span>
              </div>
            );
          })}
        </div>

        {/* Discrete Tech Stack Tools Line */}
        <div className="pt-6 border-t border-[#0F4232]/50 space-y-4">
          <span className="text-xs font-display text-[#88A699] uppercase tracking-widest block">
            Ferramentas e Ecossistema Utilizados na Prática:
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {TECH_STACK_TAGS.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#063D2C]/40 border border-[#0F4232] text-xs font-display text-[#D7E1DD]/90"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
