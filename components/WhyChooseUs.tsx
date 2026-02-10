
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const points = [
    "Profissionais com anos de experiência no ramo pet.",
    "Ambiente climatizado e higienizado diariamente.",
    "Monitoramento cuidadoso durante todo o processo.",
    "Utilizamos toalhas esterilizadas e individuais.",
    "Produtos hipoalergênicos e específicos para cada raça.",
    "Paciência e carinho redobrados para pets idosos ou ansiosos."
  ];

  return (
    <section id="sobre" className="py-20 bg-gray-50 scroll-mt-24">
      <div className="container mx-auto px-5">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2 w-full">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=1000" 
                alt="Cuidadora com pet" 
                className="rounded-[2rem] md:rounded-[3rem] shadow-2xl z-10 relative w-full h-[300px] md:h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-400 p-6 rounded-3xl shadow-xl z-20 max-w-[200px] hidden md:block">
                <p className="text-white font-bold text-lg mb-1">Cuidado Humanizado</p>
                <p className="text-yellow-900/70 text-xs italic">"Amamos o que fazemos e isso reflete no olhar de cada pet."</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 font-title text-gray-900">Por que escolher o <span className="text-orange-500">Parque dos Pets</span>?</h2>
            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
              Mais que um banho e tosa, somos um refúgio de bem-estar. Em Caucaia do Alto, nos destacamos pelo atendimento personalizado e pela segurança que oferecemos aos tutores.
            </p>
            
            <div className="grid grid-cols-1 gap-4">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700 text-sm md:text-lg font-medium leading-tight">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
