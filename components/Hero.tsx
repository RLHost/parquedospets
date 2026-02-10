
import React from 'react';
import { COMPANY_INFO } from '../constants';
import { Heart, Sparkles, ShieldCheck, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-24 pb-12 md:pt-48 md:pb-32 overflow-hidden bg-orange-50 scroll-mt-24">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-orange-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-yellow-200 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-5 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
          <div className="lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold mb-6 tracking-wider uppercase shadow-sm">
              O SPA que seu Pet merece
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 font-title">
              Onde o Carinho e a <span className="text-orange-500">Limpeza</span> se Encontram!
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0">
              Cuidamos do seu melhor amigo como se fosse nosso. Banho, tosa e muita dedicação em cada detalhe, aqui em Caucaia do Alto.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-green-500 text-white px-8 py-4 rounded-2xl md:rounded-full text-lg font-bold hover:bg-green-600 transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
              >
                <MessageCircle size={24} />
                Agendar via WhatsApp
              </a>
              <a 
                href="#servicos"
                className="w-full sm:w-auto border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-2xl md:rounded-full text-lg font-bold hover:bg-orange-500 hover:text-white transition-all flex items-center justify-center active:scale-95"
              >
                Ver Serviços
              </a>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:flex items-center justify-center lg:justify-start gap-4 md:gap-8 text-gray-500">
               <div className="flex items-center justify-center gap-2 text-sm bg-white/50 py-2 px-4 rounded-full border border-orange-100">
                 <Heart className="text-red-500" size={18} />
                 <span className="font-semibold text-gray-700">+500 Pets Felizes</span>
               </div>
               <div className="flex items-center justify-center gap-2 text-sm bg-white/50 py-2 px-4 rounded-full border border-orange-100">
                 <ShieldCheck className="text-blue-500" size={18} />
                 <span className="font-semibold text-gray-700">Qualidade Garantida</span>
               </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative order-1 lg:order-2 w-full max-w-md lg:max-w-none">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 md:border-8 border-white transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=1000" 
                alt="Golden Retriever feliz no banho" 
                className="w-full h-[280px] md:h-[500px] object-cover"
              />
            </div>
            {/* Decor pins */}
            <div className="absolute -top-4 -left-4 bg-white p-3 md:p-4 rounded-2xl shadow-xl z-20 animate-bounce hidden sm:block">
                <span className="text-2xl md:text-3xl">🐶</span>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-3 md:p-4 rounded-2xl shadow-xl z-20 animate-bounce hidden sm:block" style={{animationDelay: '1s'}}>
                <span className="text-2xl md:text-3xl">🐱</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
