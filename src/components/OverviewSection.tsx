import React from 'react';
import { motion } from 'framer-motion';

export const OverviewSection: React.FC = () => {
  const stats = [
    { number: '360h', label: 'Carga Horária Total', detail: '12 meses de formação' },
    { number: '6', label: 'Módulos Progressivos', detail: '60 horas por módulo' },
    { number: '12', label: 'Disciplinas Práticas', detail: '30 horas por disciplina' },
    { number: '6', label: 'Microcertificações', detail: 'Certificados intermediários' },
    { number: '1', label: 'Projeto Integrador', detail: 'Solução para sua profissão' },
    { number: '0', label: 'Pré-requisito de Código', detail: 'Sem exigência de programação' }
  ];

  return (
    <section id="visao-geral" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-[#0F4232]/50 bg-[#041A13]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-display text-[#00D889] uppercase tracking-widest block">
              ./01 Por Que IA Agora
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl text-white tracking-tight leading-tight">
              IA não é mais uma área <span className="italic font-serif text-[#00D889] font-normal">exclusiva</span> da tecnologia.
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6 text-base sm:text-lg text-[#D7E1DD]/85 leading-relaxed font-light pl-0 lg:pl-8 lg:border-l lg:border-[#0F4232]/50">
            <p>
              A Inteligência Artificial está transformando praticamente todas as profissões. Médicos, professores, advogados, engenheiros, administradores, profissionais de marketing, contadores, gestores, profissionais da saúde e profissionais de TI já utilizam sistemas inteligentes para analisar informações, automatizar processos, produzir conhecimento e tomar decisões estratégicas.
            </p>
            <p>
              A Pós-Graduação em Inteligência Artificial Aplicada foi desenvolvida especificamente para preparar profissionais de diferentes formações para essa nova realidade.
            </p>
            <div className="pt-4 border-t border-[#0F4232]/50 font-serif text-xl sm:text-2xl text-white italic">
              "Você não precisa se tornar programador. Você precisa aprender a compreender, utilizar, avaliar, integrar e aplicar Inteligência Artificial dentro da sua profissão."
            </div>
          </div>
        </div>

        {/* Typographic Stats Grid with 1px hairline borders */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-b border-[#0F4232]/60">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`p-6 border-r border-[#0F4232]/60 last:border-r-0 flex flex-col justify-between space-y-3 ${
                index >= 3 ? 'border-t lg:border-t-0 border-[#0F4232]/60' : ''
              }`}
            >
              <span className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
                {stat.number}
              </span>
              <div>
                <div className="text-xs font-display font-medium text-white uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="text-[11px] font-sans text-[#88A699] mt-1">
                  {stat.detail}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

