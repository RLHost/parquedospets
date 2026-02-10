
import React from 'react';
import { ShowerHead as Shower, Scissors, Sparkles, HeartPulse } from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../constants';

const iconMap: Record<string, React.ReactNode> = {
  Shower: <Shower size={40} className="text-blue-500" />,
  Scissors: <Scissors size={40} className="text-orange-500" />,
  Sparkles: <Sparkles size={40} className="text-yellow-500" />,
  HeartPulse: <HeartPulse size={40} className="text-red-500" />,
};

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-title text-gray-900">Nossos Serviços</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Oferecemos uma experiência completa de cuidado e estética para cães e gatos de todos os portes com o carinho que eles merecem.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className="group p-6 md:p-8 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-b-4 hover:border-b-orange-500 flex flex-col items-center sm:items-start text-center sm:text-left"
            >
              <div className="mb-6 bg-orange-50 w-20 h-20 rounded-2xl flex items-center justify-center transition-colors">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-xl font-bold mb-3 font-title text-gray-800">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                {service.description}
              </p>
              <a 
                href={COMPANY_INFO.whatsappLink}
                className="mt-auto text-orange-500 font-bold flex items-center gap-2 group-hover:gap-4 transition-all py-2"
              >
                Consultar preço <span>→</span>
              </a>
            </div>
          ))}
        </div>

        {/* Banner CTA */}
        <div className="mt-16 md:mt-24 bg-orange-600 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="relative z-10 md:w-2/3 text-center md:text-left">
              <h3 className="text-2xl md:text-4xl font-bold mb-4 font-title">Seu Pet merece um Dia de Rei!</h3>
              <p className="text-orange-100 text-base md:text-lg max-w-xl">
                Agende um horário e veja a transformação. Utilizamos produtos de alta performance para garantir brilho e saúde.
              </p>
            </div>
            <div className="relative z-10 w-full md:w-auto">
              <a 
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-white text-orange-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-orange-50 transition-colors shadow-lg active:scale-95"
              >
                Agendar Horário
              </a>
            </div>
            {/* Paw decoration */}
            <div className="absolute right-[-20px] bottom-[-20px] text-white/10 text-[12rem] transform rotate-12 select-none pointer-events-none hidden md:block">🐾</div>
        </div>
      </div>
    </section>
  );
};

export default Services;
