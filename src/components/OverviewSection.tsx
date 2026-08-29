import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Layers, BookOpen, Award, Rocket, Code2 } from 'lucide-react';

export const OverviewSection: React.FC = () => {
  const stats = [
    { number: '360h', label: 'Carga Horária', icon: Clock, detail: '12 meses de duração' },
    { number: '6', label: 'Módulos Práticos', icon: Layers, detail: '60h por módulo' },
    { number: '12', label: 'Disciplinas', icon: BookOpen, detail: '30h por disciplina' },
    { number: '6', label: 'Microcertificados', icon: Award, detail: 'Certificação intermediária' },
    { number: '1', label: 'Projeto Integrador', icon: Rocket, detail: 'Solução para sua área' },
    { number: '0', label: 'Código Prévio', icon: Code2, detail: 'Sem exigi-lo como barreira' }
  ];

  return (
    <section id="visao-geral" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-[#0A382A] bg-black">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00F296]">
            <span>./01 Visão Geral UNIVC</span>
          </div>

          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            IA não é mais uma área{' '}
            <span className="text-[#00F296]">exclusiva da tecnologia.</span>
          </h2>

          <div className="space-y-4 text-base sm:text-xl text-[#E2E8F0] font-light leading-relaxed">
            <p>
              A Inteligência Artificial está redefinindo Médicos, Advogados, Engenheiros, Gestores, Educadores e Profissionais da Saúde. O mercado não exige que você se torne um programador, mas sim um líder capaz de integrar e aplicar IA na sua profissão.
            </p>
            <div className="p-6 rounded-2xl glass-card border-l-4 border-l-[#00F296] border-y border-r border-[#0A382A] text-white font-semibold">
              Desenvolvida pelo UNIVC para capacitar profissionais de qualquer graduação a diagnosticar, automatizar e aplicar soluções inteligentes no seu setor.
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
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#05140F] border border-[#00F296]/40 flex items-center justify-center text-[#00F296] group-hover:scale-110 transition-transform mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display font-extrabold text-4xl text-white group-hover:text-[#00F296] transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-xs font-bold text-white mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] font-mono text-[#94A3B8] mt-0.5">
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
