import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';

export const LeadFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    formacao: '',
    profissao: '',
    cidade: '',
    areaInteresse: 'Saúde',
    lgpd: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.lgpd) {
      alert('Por favor, aceite a política de privacidade LGPD.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="inscricao" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-[#0F4232]/40 bg-radial-glow">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top Banner Content */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00D889]">
            <span>./16 Inscrições Abertas</span>
          </div>

          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            O futuro da sua profissão <span className="text-[#00D889]">já começou.</span>
          </h2>

          <p className="text-base sm:text-xl text-[#D7E1DD]/90 font-light max-w-3xl mx-auto">
            A Inteligência Artificial não substituirá simplesmente profissões. Ela transformará radicalmente a maneira como profissionais trabalham.
          </p>

          <div className="p-4 rounded-2xl bg-[#063D2C]/60 border border-[#00D889]/40 text-[#5EF2B0] font-mono text-sm sm:text-base font-semibold max-w-2xl mx-auto shadow-[0_0_30px_rgba(0,216,137,0.2)]">
            “Prepare-se para trabalhar com IA — e não competir contra ela.”
          </div>
        </div>

        {/* Form Grid */}
        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-[#00D889]/40 shadow-[0_0_60px_rgba(0,216,137,0.15)] bg-gradient-to-br from-[#041A13] to-[#063D2C]/30">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#00D889]/20 border border-[#00D889] flex items-center justify-center text-[#00D889] mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white">
                  Inscrição / Solicitação Enviada!
                </h3>
                <p className="text-sm text-[#D7E1DD]/80 font-light max-w-md mx-auto">
                  Obrigado, <strong className="text-white">{formData.nome}</strong>! Nossa equipe acadêmica entrará em contato via WhatsApp ({formData.whatsapp}) em instantes.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 rounded-xl bg-[#063D2C] text-xs font-mono text-[#00D889] hover:bg-[#00D889] hover:text-[#041A13] transition-colors"
                >
                  Enviar Outro Cadastro
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Nome */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-[#88A699] uppercase tracking-wider block">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Seu nome"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full bg-[#041A13] border border-[#0F4232] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00D889] transition-colors"
                    />
                  </div>

                  {/* WhatsApp */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-[#88A699] uppercase tracking-wider block">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(00) 00000-0000"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full bg-[#041A13] border border-[#0F4232] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00D889] transition-colors"
                    />
                  </div>

                  {/* E-mail */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-[#88A699] uppercase tracking-wider block">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="seu.email@exemplo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#041A13] border border-[#0F4232] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00D889] transition-colors"
                    />
                  </div>

                  {/* Formação */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-[#88A699] uppercase tracking-wider block">
                      Curso de Formação (Graduação) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Medicina, Direito, Administração..."
                      value={formData.formacao}
                      onChange={(e) => setFormData({ ...formData, formacao: e.target.value })}
                      className="w-full bg-[#041A13] border border-[#0F4232] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00D889] transition-colors"
                    />
                  </div>

                  {/* Profissão */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-[#88A699] uppercase tracking-wider block">
                      Profissão / Cargo Atual
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Médico, Advogado, Analista..."
                      value={formData.profissao}
                      onChange={(e) => setFormData({ ...formData, profissao: e.target.value })}
                      className="w-full bg-[#041A13] border border-[#0F4232] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00D889] transition-colors"
                    />
                  </div>

                  {/* Cidade */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-[#88A699] uppercase tracking-wider block">
                      Cidade / Estado *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: São Paulo / SP"
                      value={formData.cidade}
                      onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                      className="w-full bg-[#041A13] border border-[#0F4232] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00D889] transition-colors"
                    />
                  </div>
                </div>

                {/* Área de Interesse Dropdown */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-[#88A699] uppercase tracking-wider block">
                    Trilha de Interesse Principal
                  </label>
                  <select
                    value={formData.areaInteresse}
                    onChange={(e) => setFormData({ ...formData, areaInteresse: e.target.value })}
                    className="w-full bg-[#041A13] border border-[#0F4232] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00D889] transition-colors"
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

                {/* LGPD Checkbox */}
                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="lgpd"
                    checked={formData.lgpd}
                    onChange={(e) => setFormData({ ...formData, lgpd: e.target.checked })}
                    className="mt-1 accent-[#00D889] w-4 h-4 rounded"
                  />
                  <label htmlFor="lgpd" className="text-xs text-[#D7E1DD]/80 font-light leading-snug">
                    Concordo em fornecer meus dados para contato da instituição sobre a pós-graduação, em conformidade com a <strong className="text-white">LGPD (Lei Geral de Proteção de Dados)</strong>.
                  </label>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 py-4 bg-[#00D889] hover:bg-[#5EF2B0] text-[#041A13] font-display font-bold text-xs uppercase tracking-widest rounded-xl shadow-[0_0_30px_rgba(0,216,137,0.4)] transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>QUERO FAZER PARTE</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="px-6 py-4 glass-card border border-[#0F4232] text-xs font-display font-semibold text-white uppercase tracking-wider rounded-xl hover:border-[#00D889]/50 transition-colors"
                  >
                    RECEBER MAIS INFORMAÇÕES
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
