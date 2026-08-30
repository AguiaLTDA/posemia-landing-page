import React, { useState } from 'react';
import { saveLeadToSheets, LeadPayload } from '../services/leadService';
import { Loader2 } from 'lucide-react';
import { Reveal } from './Reveal';

export const LeadFormSection: React.FC = () => {
  const [formData, setFormData] = useState<LeadPayload>({
    nome: '',
    whatsapp: '',
    email: '',
    formacao: '',
    profissao: '',
    cidade: '',
    areaInteresse: 'Saúde',
    lgpd: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.lgpd) {
      alert('Por favor, aceite a política de privacidade LGPD.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await saveLeadToSheets(formData);
      setStatusMessage(res.message);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert('Ocorreu um erro ao enviar a inscrição. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="inscricao" className="surface-forest on-forest section">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16">
          {/* Encerramento emocional da narrativa */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="t-eyebrow">Inscrições abertas</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="t-display mt-6 text-[clamp(2.3rem,4.6vw,3.6rem)]">
                O futuro da sua profissão{' '}
                <span className="t-serif text-[#8FE3BA]">já começou.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="t-lead mt-7">
                A Inteligência Artificial transformará radicalmente a maneira como profissionais
                trabalham em todas as áreas.
              </p>
              <p className="t-serif text-[1.3rem] leading-snug text-[#8FE3BA] mt-8 pl-5 border-l border-[#35C985]">
                “Prepare-se para trabalhar com IA — e não competir contra ela.”
              </p>
            </Reveal>
          </div>

          {/* Formulário */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1} y={24}>
              <div className="on-light bg-white rounded-[24px] p-7 sm:p-10 text-[#19211E]">
                {submitted ? (
                  <div className="py-10 text-center">
                    <div className="w-12 h-12 rounded-full bg-[#E4F4EC] flex items-center justify-center mx-auto">
                      <span className="dot-accent w-3 h-3" aria-hidden="true" />
                    </div>
                    <h3 className="t-h3 mt-6">Inscrição confirmada</h3>
                    <p className="t-body mt-3 max-w-md mx-auto">
                      Obrigado, <strong className="font-medium text-[#19211E]">{formData.nome}</strong>!
                      Sua inscrição na Pós-Graduação UNIVC foi registrada.
                    </p>
                    <p className="t-micro mt-4">{statusMessage}</p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          nome: '',
                          whatsapp: '',
                          email: '',
                          formacao: '',
                          profissao: '',
                          cidade: '',
                          areaInteresse: 'Saúde',
                          lgpd: false
                        });
                      }}
                      className="btn btn-secondary mt-8"
                    >
                      Cadastrar outra pessoa
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="pb-6 border-b border-[#DDE3DF]">
                      <h3 className="t-h4">Formulário de inscrição</h3>
                      <p className="t-micro mt-1">Retornaremos com todas as informações da turma.</p>
                    </div>

                    <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="nome" className="field-label">
                          Nome completo *
                        </label>
                        <input
                          id="nome"
                          type="text"
                          required
                          placeholder="Seu nome"
                          value={formData.nome}
                          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                          className="field-input"
                        />
                      </div>

                      <div>
                        <label htmlFor="whatsapp" className="field-label">
                          WhatsApp *
                        </label>
                        <input
                          id="whatsapp"
                          type="tel"
                          required
                          placeholder="(00) 00000-0000"
                          value={formData.whatsapp}
                          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                          className="field-input"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="field-label">
                          E-mail *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          placeholder="seu.email@exemplo.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="field-input"
                        />
                      </div>

                      <div>
                        <label htmlFor="formacao" className="field-label">
                          Curso de formação (graduação) *
                        </label>
                        <input
                          id="formacao"
                          type="text"
                          required
                          placeholder="Ex: Medicina, Direito, Administração..."
                          value={formData.formacao}
                          onChange={(e) => setFormData({ ...formData, formacao: e.target.value })}
                          className="field-input"
                        />
                      </div>

                      <div>
                        <label htmlFor="profissao" className="field-label">
                          Profissão / cargo atual
                        </label>
                        <input
                          id="profissao"
                          type="text"
                          placeholder="Ex: Médico, Advogado, Analista..."
                          value={formData.profissao}
                          onChange={(e) => setFormData({ ...formData, profissao: e.target.value })}
                          className="field-input"
                        />
                      </div>

                      <div>
                        <label htmlFor="cidade" className="field-label">
                          Cidade / estado *
                        </label>
                        <input
                          id="cidade"
                          type="text"
                          required
                          placeholder="Ex: São Mateus / ES"
                          value={formData.cidade}
                          onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                          className="field-input"
                        />
                      </div>
                    </div>

                    <div className="mt-5">
                      <label htmlFor="areaInteresse" className="field-label">
                        Trilha de interesse principal
                      </label>
                      <select
                        id="areaInteresse"
                        value={formData.areaInteresse}
                        onChange={(e) => setFormData({ ...formData, areaInteresse: e.target.value })}
                        className="field-input"
                      >
                        <option value="Saúde">Saúde</option>
                        <option value="Engenharias e Agro">Engenharias e Agro</option>
                        <option value="Tecnologia">Tecnologia</option>
                        <option value="Direito">Direito</option>
                        <option value="Negócios">Negócios</option>
                        <option value="Educação">Educação</option>
                        <option value="Comunicação e Criatividade">Comunicação e Criatividade</option>
                      </select>
                    </div>

                    <div className="mt-6 flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="lgpd"
                        checked={formData.lgpd}
                        onChange={(e) => setFormData({ ...formData, lgpd: e.target.checked })}
                        className="mt-1 w-4 h-4 accent-[#103B32] cursor-pointer"
                      />
                      <label htmlFor="lgpd" className="text-[14px] leading-snug text-[#3E4A45] cursor-pointer">
                        Concordo em fornecer meus dados para contato da instituição UNIVC sobre a
                        pós-graduação, em conformidade com a{' '}
                        <strong className="font-medium text-[#19211E]">
                          LGPD (Lei Geral de Proteção de Dados)
                        </strong>
                        .
                      </label>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
                      <button type="submit" disabled={isSubmitting} className="btn btn-primary flex-1">
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Enviando inscrição...</span>
                          </>
                        ) : (
                          <span>Quero fazer parte</span>
                        )}
                      </button>

                      <button type="submit" disabled={isSubmitting} className="btn btn-secondary">
                        Receber informações
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
