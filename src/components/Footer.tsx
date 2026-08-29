import React from 'react';
import { MessageCircle, Mail, MapPin, Instagram, ShieldCheck, FileText, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#0A382A] bg-black text-[#94A3B8] relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Institutional Brand */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-4">
              <img
                src="./assets/univc-logo-white-vert.png"
                alt="UNIVC Logo Oficial"
                className="h-16 w-auto object-contain"
              />
              <div className="border-l border-[#0A382A] pl-4">
                <span className="font-display font-extrabold text-white text-base tracking-wider uppercase block">
                  UNIVC
                </span>
                <span className="text-xs font-semibold text-[#00F296]">
                  Centro Universitário Vale do Cricaré
                </span>
                <span className="text-[11px] text-[#94A3B8] block mt-0.5 font-mono">
                  Pós-Graduação em Inteligência Artificial Aplicada
                </span>
              </div>
            </div>
            <p className="text-xs font-normal text-[#94A3B8] max-w-md leading-relaxed pt-2">
              Formação de pós-graduação lato sensu reconhecida, multidisciplinar e prática. Voltada para aplicação profissional direta de IA Generativa, Automação e Inteligência Analítica em todas as áreas do conhecimento.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              Atendimento UNIVC
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2 hover:text-[#00F296] transition-colors cursor-pointer">
                <MessageCircle className="w-4 h-4 text-[#00F296]" />
                <span>WhatsApp: (27) 3313-0000</span>
              </li>
              <li className="flex items-center gap-2 hover:text-[#00F296] transition-colors cursor-pointer">
                <Mail className="w-4 h-4 text-[#00F296]" />
                <span>posgraduacao@ivc.br</span>
              </li>
              <li className="flex items-center gap-2 hover:text-[#00F296] transition-colors cursor-pointer">
                <Globe className="w-4 h-4 text-[#00F296]" />
                <span>www.ivc.br</span>
              </li>
              <li className="flex items-start gap-2 text-[11px] font-normal pt-1">
                <MapPin className="w-4 h-4 text-[#00F296] shrink-0 mt-0.5" />
                <span>R. Dr. Raimundo Diniz, 199 - Universitário, São Mateus - ES</span>
              </li>
            </ul>
          </div>

          {/* Legal / Policy */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              Políticas e Regras
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:text-[#00F296] transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00F296]" />
                  <span>Política de Privacidade</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00F296] transition-colors flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#00F296]" />
                  <span>Regulamento Acadêmico</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00F296] transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00F296]" />
                  <span>Conformidade LGPD</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#0A382A] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#94A3B8]">
          <p>© {new Date().getFullYear()} UNIVC - Centro Universitário Vale do Cricaré. Todos os direitos reservados.</p>
          <p className="text-[11px]">Tecnologia & Inovação Educacional</p>
        </div>
      </div>
    </footer>
  );
};
