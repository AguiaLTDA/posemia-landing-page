import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_LIST } from '../data/courseData';
import { CheckCircle2, ShieldCheck, Sparkles, Target } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-[#0F4232]/40 bg-[#041A13]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00D889]">
            <span>./12 Perfil do Egresso</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Você não sairá apenas sabendo <span className="text-[#00D889]">utilizar IA.</span>
          </h2>
          <p className="text-base sm:text-xl text-[#D7E1DD]/90 font-light italic">
            "Você será capaz de transformar problemas profissionais em soluções inteligentes."
          </p>
        </div>

        {/* Competencies Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS_LIST.map((skill, idx) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="glass-card p-5 rounded-xl border border-[#0F4232] hover:border-[#00D889]/50 flex items-start gap-3.5 group transition-all"
            >
              <div className="w-7 h-7 rounded-lg bg-[#063D2C] border border-[#00D889]/40 flex items-center justify-center text-[#00D889] shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm text-[#D7E1DD] font-medium leading-snug group-hover:text-white transition-colors">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
