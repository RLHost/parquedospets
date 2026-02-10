
import React from 'react';
import { Instagram, Facebook, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white">
                 <span className="font-bold">P</span>
              </div>
              <span className="text-2xl font-bold font-title">Parque dos Pets</span>
            </div>
            <p className="text-gray-400 mb-6">
              O seu pet shop e banho e tosa de confiança em Caucaia do Alto. Qualidade, carinho e respeito aos animais acima de tudo.
            </p>
            <div className="flex gap-4">
              <a href={COMPANY_INFO.instagram} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href={COMPANY_INFO.facebook} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 font-title">Links Rápidos</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#inicio" className="hover:text-orange-500">Início</a></li>
              <li><a href="#servicos" className="hover:text-orange-500">Serviços</a></li>
              <li><a href="#sobre" className="hover:text-orange-500">Sobre Nós</a></li>
              <li><a href="#contato" className="hover:text-orange-500">Localização</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 font-title">Nossos Serviços</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Banho Premium</li>
              <li>Tosa na Tesoura</li>
              <li>Hidratação Profissional</li>
              <li>Higiene Completa</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 font-title">Informações</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-orange-500 flex-shrink-0" />
                <span>Estrada de Caucaia do Alto, SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-orange-500" />
                <span>{COMPANY_INFO.phone}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Parque dos Pets. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Desenvolvido com ❤️ para apaixonados por pets.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
