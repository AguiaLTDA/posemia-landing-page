import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Layers, BookOpen, Award, Rocket, Code2 } from 'lucide-react';

export const OverviewSection: React.FC = () => {
  const stats = [
    { number: '360h', label: 'Carga Horária Total', icon: Clock, detail: '12 meses de formação' },
    { number: '6', label: 'Módulos Progressivos', icon: Layers, detail: '60 horas por módulo' },
    { number: '12', label: 'Disciplinas Práticas', icon: BookOpen, detail: '30 horas por disciplina' },
    { number: '6', label: 'Microcertificações', icon: Award, detail: 'Certificados intermediários' },
    { number: '1', label: 'Projeto Integrador', icon: Rocket, detail: 'Solução para sua profissão' },
    { number: '0', label: 'Pré-requisitos de Código', icon: Code2, detail: 'Sem exigi-la como barreira' }
  ];

  return (
    <section id="visao-geral" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-[#0F4232]/40 bg-[#041A13]/90">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00D889]">
            <span>./01 Visão Geral</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            IA não é mais uma área{' '}
            <span className="text-[#00D889]">exclusiva da tecnologia.</span>
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-[#D7E1DD]/90 leading-relaxed font-light">
            <p>
              A Inteligência Artificial está transformando praticamente todas as profissões. Médicos, professores, advogados, engenheiros, administradores, profissionais de marketing, contadores, gestores, profissionais da saúde e profissionais de TI já utilizam sistemas inteligentes para analisar informações, automatizar processos, produzir conhecimento e tomar decisões estratégicas.
            </p>
            <p>
              A Pós-Graduação em Inteligência Artificial Aplicada foi desenvolvida especificamente para preparar profissionais de diferentes formações para essa nova realidade.
            </p>
            <div className="p-5 rounded-2xl glass-card border-l-4 border-l-[#00D889] border-y border-r border-[#0F4232] text-white font-medium">
              Você não precisa se tornar programador. Você precisa aprender a compreender, utilizar, avaliar, integrar e aplicar Inteligência Artificial dentro da sua profissão.
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#063D2C] border border-[#00D889]/30 flex items-center justify-center text-[#00D889] group-hover:scale-110 transition-transform mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display font-black text-3xl sm:text-4xl text-white group-hover:text-[#00D889] transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-xs font-semibold text-white mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] font-mono text-[#88A699] mt-0.5">
                    {stat.detail}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
