import React from 'react';
import { Sparkles, MessageCircle, Mail, MapPin, Instagram, ShieldCheck, FileText } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-[#0F4232] bg-black text-[#88A699] relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Institution Brand */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#063D2C] border border-[#00D889]/40 flex items-center justify-center text-[#00D889]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display font-bold text-white text-base tracking-wider uppercase">
                  PÓS IA <span className="text-[#00D889]">APLICADA</span>
                </span>
                <span className="text-[10px] text-[#88A699] font-mono uppercase block">
                  Inteligência Artificial para Profissionais
                </span>
              </div>
            </div>
            <p className="text-xs font-light text-[#D7E1DD]/70 max-w-md leading-relaxed">
              Formação de pós-graduação lato sensu multidisciplinar voltada para a aplicação prática de IA Generativa, Automação, Agentes e Inteligência Analítica em todas as carreiras.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              Canais de Atendimento
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2 hover:text-[#00D889] transition-colors cursor-pointer">
                <MessageCircle className="w-4 h-4 text-[#00D889]" />
                <span>WhatsApp: (11) 99999-8888</span>
              </li>
              <li className="flex items-center gap-2 hover:text-[#00D889] transition-colors cursor-pointer">
                <Mail className="w-4 h-4 text-[#00D889]" />
                <span>contato@posiaaplicada.edu.br</span>
              </li>
              <li className="flex items-center gap-2 hover:text-[#00D889] transition-colors cursor-pointer">
                <Instagram className="w-4 h-4 text-[#00D889]" />
                <span>@posiaaplicada</span>
              </li>
              <li className="flex items-start gap-2 text-[11px] font-light">
                <MapPin className="w-4 h-4 text-[#00D889] shrink-0 mt-0.5" />
                <span>Av. Paulista, 1000 - Bela Vista, São Paulo - SP</span>
              </li>
            </ul>
          </div>

          {/* Institutional / Legal */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              Informações Legais
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:text-[#00D889] transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00D889]" />
                  <span>Política de Privacidade</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00D889] transition-colors flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#00D889]" />
                  <span>Termos de Uso</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00D889] transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00D889]" />
                  <span>Conformidade LGPD</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#0F4232]/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#88A699]">
          <p>© {new Date().getFullYear()} Pós-Graduação em IA Aplicada. Todos os direitos reservados.</p>
          <p className="text-[11px]">Desenvolvido sob padrões Tech Premium & Inovação</p>
        </div>
      </div>
    </footer>
  );
};
