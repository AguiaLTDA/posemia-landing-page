import React from 'react';
import { motion } from 'framer-motion';
import { TECH_STACK_TAGS } from '../data/courseData';
import { Cpu, AlertCircle, Sparkles } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-[#0F4232]/40 bg-[#041A13]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00D889]">
            <span>./14 Ecossistema Tecnológico</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Aprenda conceitos que permanecem.{' '}
            <span className="text-[#00D889]">Experimente tecnologias que evoluem.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#D7E1DD]/80 font-light">
            Trabalharemos com as ferramentas líderes de mercado para automação, IA generativa, análise de dados e sistemas de agentes.
          </p>
        </div>

        {/* Tag Cloud */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
          {TECH_STACK_TAGS.map((tag, idx) => (
            <motion.div
              key={tag}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="glass-card glass-card-hover px-5 py-3 rounded-2xl border border-[#0F4232] text-white font-mono text-sm sm:text-base font-semibold flex items-center gap-2 hover:border-[#00D889] hover:shadow-[0_0_20px_rgba(0,216,137,0.3)] transition-all cursor-default"
            >
              <Cpu className="w-4 h-4 text-[#00D889]" />
              <span>{tag}</span>
            </motion.div>
          ))}
        </div>

        {/* Important Disclaimer Notice */}
        <div className="p-6 rounded-2xl bg-[#063D2C]/30 border border-[#00D889]/30 max-w-3xl mx-auto flex items-start gap-4 text-xs sm:text-sm text-[#D7E1DD]/90 font-light">
          <AlertCircle className="w-5 h-5 text-[#00D889] shrink-0 mt-0.5" />
          <p>
            <strong className="font-semibold text-white">Aviso Institucional:</strong> As ferramentas utilizadas poderão ser atualizadas ao longo do curso de acordo com a constante evolução do mercado global de Inteligência Artificial, assegurando sempre o alinhamento com as melhores práticas de mercado.
          </p>
        </div>
      </div>
    </section>
  );
};
