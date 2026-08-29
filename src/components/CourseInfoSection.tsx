import React, { useState } from 'react';
import { DEFAULT_COURSE_INFO } from '../data/courseData';
import { CourseEditableInfo } from '../types';
import { Calendar, Clock, MapPin, DollarSign, Users, Award, ShieldCheck, Edit3, Check } from 'lucide-react';

export const CourseInfoSection: React.FC = () => {
  const [info, setInfo] = useState<CourseEditableInfo>(DEFAULT_COURSE_INFO);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (field: keyof CourseEditableInfo, value: string) => {
    setInfo((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-[#0F4232]/40 bg-gradient-to-b from-[#041A13] to-black">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00D889]">
            <span>./15 Ficha Técnica</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Informações do <span className="text-[#00D889]">Curso</span>
          </h2>
          <p className="text-base sm:text-lg text-[#D7E1DD]/80 font-light">
            Dados estruturados da pós-graduação lato sensu reconhecida pelo MEC.
          </p>
        </div>

        {/* Structural Specs Table */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass-card p-5 rounded-xl border border-[#0F4232]">
            <span className="text-[10px] font-mono text-[#88A699] uppercase tracking-widest block">Nome Formal</span>
            <span className="font-display font-bold text-sm text-white block mt-1">Pós em IA Aplicada</span>
          </div>
          <div className="glass-card p-5 rounded-xl border border-[#0F4232]">
            <span className="text-[10px] font-mono text-[#88A699] uppercase tracking-widest block">Carga Horária</span>
            <span className="font-display font-bold text-sm text-[#00D889] block mt-1">360 Horas</span>
          </div>
          <div className="glass-card p-5 rounded-xl border border-[#0F4232]">
            <span className="text-[10px] font-mono text-[#88A699] uppercase tracking-widest block">Estrutura</span>
            <span className="font-display font-bold text-sm text-white block mt-1">6 Módulos / 12 Disciplinas</span>
          </div>
          <div className="glass-card p-5 rounded-xl border border-[#0F4232]">
            <span className="text-[10px] font-mono text-[#88A699] uppercase tracking-widest block">Perfil</span>
            <span className="font-display font-bold text-sm text-white block mt-1">Multidisciplinar</span>
          </div>
          <div className="glass-card p-5 rounded-xl border border-[#0F4232]">
            <span className="text-[10px] font-mono text-[#88A699] uppercase tracking-widest block">Pré-requisito</span>
            <span className="font-display font-bold text-sm text-white block mt-1">Graduação Concluída</span>
          </div>
          <div className="glass-card p-5 rounded-xl border border-[#0F4232]">
            <span className="text-[10px] font-mono text-[#88A699] uppercase tracking-widest block">Programação Prévia</span>
            <span className="font-display font-bold text-sm text-[#5EF2B0] block mt-1">Não Necessário</span>
          </div>
          <div className="glass-card p-5 rounded-xl border border-[#0F4232]">
            <span className="text-[10px] font-mono text-[#88A699] uppercase tracking-widest block">Metodologia</span>
            <span className="font-display font-bold text-sm text-white block mt-1">Aplicada + Hands-on</span>
          </div>
          <div className="glass-card p-5 rounded-xl border border-[#0F4232]">
            <span className="text-[10px] font-mono text-[#88A699] uppercase tracking-widest block">Projeto Final</span>
            <span className="font-display font-bold text-sm text-[#D4C441] block mt-1">Projeto Integrador em IA</span>
          </div>
        </div>

        {/* CMS / Turma Administrative Fields Section */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-[#00D889]/40 bg-[#063D2C]/20 relative">
          <div className="flex items-center justify-between border-b border-[#0F4232] pb-6 mb-8">
            <div>
              <span className="text-xs font-mono text-[#00D889] uppercase tracking-widest">
                INFORMAÇÕES DE MATRÍCULA E TURMA
              </span>
              <h3 className="font-display font-bold text-2xl text-white">
                Detalhes da Próxima Turma
              </h3>
            </div>

            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#041A13] border border-[#00D889]/40 text-xs font-mono text-[#00D889] hover:bg-[#00D889] hover:text-[#041A13] transition-all"
            >
              {isEditing ? <Check className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />}
              <span>{isEditing ? 'Salvar Edição' : 'Editar Dados CMS'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Duração */}
            <div className="p-4 rounded-xl bg-[#041A13]/80 border border-[#0F4232]">
              <span className="text-[10px] font-mono text-[#88A699] uppercase tracking-wider block mb-1">
                DURAÇÃO TOTAL
              </span>
              {isEditing ? (
                <input
                  type="text"
                  value={info.duration}
                  onChange={(e) => handleChange('duration', e.target.value)}
                  className="w-full bg-[#063D2C] border border-[#00D889] rounded p-2 text-xs text-white"
                />
              ) : (
                <span className="text-sm font-semibold text-white">{info.duration}</span>
              )}
            </div>

            {/* Modalidade */}
            <div className="p-4 rounded-xl bg-[#041A13]/80 border border-[#0F4232]">
              <span className="text-[10px] font-mono text-[#88A699] uppercase tracking-wider block mb-1">
                MODALIDADE
              </span>
              {isEditing ? (
                <input
                  type="text"
                  value={info.modality}
                  onChange={(e) => handleChange('modality', e.target.value)}
                  className="w-full bg-[#063D2C] border border-[#00D889] rounded p-2 text-xs text-white"
                />
              ) : (
                <span className="text-sm font-semibold text-white">{info.modality}</span>
              )}
            </div>

            {/* Dias das Aulas */}
            <div className="p-4 rounded-xl bg-[#041A13]/80 border border-[#0F4232]">
              <span className="text-[10px] font-mono text-[#88A699] uppercase tracking-wider block mb-1">
                DIAS DAS AULAS
              </span>
              {isEditing ? (
                <input
                  type="text"
                  value={info.days}
                  onChange={(e) => handleChange('days', e.target.value)}
                  className="w-full bg-[#063D2C] border border-[#00D889] rounded p-2 text-xs text-white"
                />
              ) : (
                <span className="text-sm font-semibold text-white">{info.days}</span>
              )}
            </div>

            {/* Horários */}
            <div className="p-4 rounded-xl bg-[#041A13]/80 border border-[#0F4232]">
              <span className="text-[10px] font-mono text-[#88A699] uppercase tracking-wider block mb-1">
                HORÁRIOS
              </span>
              {isEditing ? (
                <input
                  type="text"
                  value={info.hours}
                  onChange={(e) => handleChange('hours', e.target.value)}
                  className="w-full bg-[#063D2C] border border-[#00D889] rounded p-2 text-xs text-white"
                />
              ) : (
                <span className="text-sm font-semibold text-white">{info.hours}</span>
              )}
            </div>

            {/* Data de Início */}
            <div className="p-4 rounded-xl bg-[#041A13]/80 border border-[#0F4232]">
              <span className="text-[10px] font-mono text-[#88A699] uppercase tracking-wider block mb-1">
                DATA DE INÍCIO
              </span>
              {isEditing ? (
                <input
                  type="text"
                  value={info.startDate}
                  onChange={(e) => handleChange('startDate', e.target.value)}
                  className="w-full bg-[#063D2C] border border-[#00D889] rounded p-2 text-xs text-white"
                />
              ) : (
                <span className="text-sm font-semibold text-[#00D889]">{info.startDate}</span>
              )}
            </div>

            {/* Investimento */}
            <div className="p-4 rounded-xl bg-[#041A13]/80 border border-[#0F4232]">
              <span className="text-[10px] font-mono text-[#88A699] uppercase tracking-wider block mb-1">
                INVESTIMENTO
              </span>
              {isEditing ? (
                <input
                  type="text"
                  value={info.investment}
                  onChange={(e) => handleChange('investment', e.target.value)}
                  className="w-full bg-[#063D2C] border border-[#00D889] rounded p-2 text-xs text-white"
                />
              ) : (
                <span className="text-sm font-semibold text-white">{info.investment}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
