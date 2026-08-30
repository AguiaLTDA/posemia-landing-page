import React from 'react';
import { AREAS_DATA } from '../data/courseData';
import { Reveal } from './Reveal';

export const AudienceSection: React.FC = () => {
  return (
    <section id="para-quem-e" className="surface-white section">
      <div className="container-page">
        {/* Cabeçalho */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="t-eyebrow">Público-alvo</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="t-h2 mt-6">
                Uma pós. <span className="t-serif text-[#1E4C41]">Muitas profissões.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.14}>
              <p className="t-body">
                Se você possui um diploma de graduação concluído, esta formação foi projetada para
                sua transição de alto nível para o universo da Inteligência Artificial.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Grade de áreas */}
        <div className="scroll-strip mt-14 sm:mt-16 flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto sm:overflow-visible -mx-5 px-5 sm:mx-0 sm:px-0 pb-2 sm:pb-0">
          {AREAS_DATA.map((area, idx) => (
            <Reveal
              key={area.id}
              delay={idx * 0.06}
              className="w-[76vw] max-w-[300px] shrink-0 sm:w-auto sm:max-w-none"
            >
              <article className="card card-interactive h-full p-6 flex flex-col">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="t-h4 lowercase first-letter:uppercase">{area.title}</h3>
                  <span className="t-numeral text-[1.5rem] text-[#C5CFC9]">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                <span className="rule-accent mt-5" />

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {area.careers.map((career) => (
                    <span
                      key={career}
                      className="text-[13px] leading-tight text-[#65726C] px-2.5 py-1 rounded-md bg-[#F4F5F0]"
                    >
                      {career}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Faixa de destaque — sem card sobre card */}
        <Reveal>
          <div className="mt-14 pt-10 border-t border-[#DDE3DF] flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h3 className="t-h3">Formação multidisciplinar aberta</h3>
              <p className="t-body mt-3">
                Qualquer diploma de graduação concluído concede acesso. A Inteligência Artificial é
                uma competência transversal aplicável a todas as carreiras.
              </p>
            </div>
            <a href="#inscricao" className="btn btn-primary shrink-0">
              Garantir minha vaga
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
