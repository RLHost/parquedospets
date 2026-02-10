
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Ana Paula Silva",
      text: "Levo o Billy lá toda semana. O atendimento é maravilhoso e ele volta super cheiroso e feliz. Recomendo muito!",
      rating: 5
    },
    {
      name: "Ricardo Mendes",
      text: "A tosa na tesoura é impecável. Minha Poodle ficou linda demais. Melhores profissionais de Caucaia do Alto.",
      rating: 5
    },
    {
      name: "Juliana Costa",
      text: "Preço justo e cuidado impecável. Eles realmente gostam de animais, dá pra perceber no carinho com que tratam a Luna.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-title">O que dizem os Tutores</h2>
          <p className="text-gray-600">A satisfação dos nossos clientes é o que nos move!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-xl relative">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(t.rating)].map((_, idx) => <Star key={idx} fill="currentColor" size={20} />)}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center font-bold text-orange-600">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-gray-500 text-sm">Cliente do Parque</p>
                </div>
              </div>
              <div className="absolute top-6 right-8 text-6xl text-orange-100 font-serif">"</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
