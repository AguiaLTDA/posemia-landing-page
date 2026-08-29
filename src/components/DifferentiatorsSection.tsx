import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const DifferentiatorsSection: React.FC = () => {
  const coreCompetencies = [
    'Engenharia de Prompts e Contexto Avançado em LLMs',
    'Automação de Processos e Workflows com Ferramentas Visuais (n8n, Make)',
    'Construção de Assistentes Especialistas e Agentes Autônomos de IA',
    'Análise de Dados Inteligente e Machine Learning No-Code',
    'Governança, Ética, LGPD e Estratégia de ROI em IA'
  ];

  return (
    <section id="diferenciais" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-[#0F4232]/50 bg-[#041A13]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Label & Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-display text-[#00D889] uppercase tracking-widest block">
            ./04 Diferenciais da Formação
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            Aprenda a criar com IA <span className="italic font-serif text-[#00D889] font-normal">sem barreiras.</span>
          </h2>
        </div>

        {/* Compact Quote Highlight (2-line editorial quote box) */}
        <div className="p-8 border border-[#0F4232]/80 bg-[#063D2C]/20 max-w-4xl">
          <p className="font-serif italic text-xl sm:text-2xl text-white leading-relaxed">
            "A pós-graduação substitui a complexidade de códigos tradicionais por plataformas visuais, no-code, engenharia de prompts e automação inteligente."
          </p>
          <span className="block mt-4 text-xs font-display text-[#00D889] uppercase tracking-widest">
            — Formação Acessível a Todas as Graduações
          </span>
        </div>

        {/* Core Competencies Bullet List (Reduced to 5 key items) */}
        <div className="space-y-4 max-w-4xl">
          <span className="text-xs font-display text-[#88A699] uppercase tracking-wider block">
            Competências Práticas Desenvolvidas durante o Curso:
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coreCompetencies.map((comp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="p-4 border-b border-[#0F4232]/50 flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-[#00D889] shrink-0 mt-0.5" />
                <span className="text-sm text-[#D7E1DD] font-light leading-snug">
                  {comp}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
