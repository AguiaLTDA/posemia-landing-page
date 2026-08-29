import React from 'react';
import { motion } from 'framer-motion';
import { COURSE_MODULES } from '../data/courseData';
import { Award, ShieldCheck, Check } from 'lucide-react';

export const MicroCredentialsSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-[#0F4232]/40 bg-gradient-to-b from-[#041A13] to-black">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00D889]">
            <span>./09 Certificação Intermediária</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Uma pós. <span className="text-[#00D889]">Seis conquistas.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#D7E1DD]/80 font-light">
            Conforme você avança módulo a módulo, conquista microcertificações acadêmicas reconhecidas para enriquecer seu currículo imediatamente.
          </p>
        </div>

        {/* 6 Microcredentials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSE_MODULES.map((mod, idx) => (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-[#0F4232] flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#063D2C] border border-[#00D889]/40 flex items-center justify-center text-[#00D889]">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#00D889] bg-[#063D2C]/80 px-3 py-1 rounded-md border border-[#00D889]/30">
                    60 HORAS
                  </span>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-[#88A699] uppercase tracking-widest block">
                    CERTIFICADO 0{mod.id}
                  </span>
                  <h3 className="font-display font-bold text-lg text-white mt-1 group-hover:text-[#00D889] transition-colors">
                    {mod.microcertification}
                  </h3>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#0F4232]/60 flex items-center gap-2 text-xs font-mono text-[#D7E1DD]/80">
                <ShieldCheck className="w-4 h-4 text-[#00D889]" />
                <span>Emitido ao concluir o Módulo {mod.id}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Requirement Notice */}
        <div className="text-center max-w-2xl mx-auto p-6 rounded-2xl border border-[#0F4232] bg-[#063D2C]/20 text-xs sm:text-sm text-[#D7E1DD]/90 font-light">
          Complete os seis módulos e integralize 360 horas para concluir a{' '}
          <strong className="text-white font-semibold">Pós-Graduação em Inteligência Artificial Aplicada</strong>, observadas as regras acadêmicas regimentais da instituição.
        </div>
      </div>
    </section>
  );
};
