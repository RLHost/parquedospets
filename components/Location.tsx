
import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Location: React.FC = () => {
  return (
    <section id="contato" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-5">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 font-title">Venha nos Visitar!</h2>
            <p className="text-gray-600 text-base md:text-lg mb-8">
              Estamos localizados no coração de Caucaia do Alto, prontos para receber você e seu pet com toda a atenção que merecem.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-xl text-orange-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Endereço</h4>
                  <p className="text-gray-600 text-sm md:text-base">{COMPANY_INFO.address}</p>
                  <a 
                    href={COMPANY_INFO.googleMaps} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-500 font-bold text-sm hover:underline mt-1 inline-block"
                  >
                    Abrir no Maps
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Horário</h4>
                  <p className="text-gray-600 text-sm md:text-base">Segunda a Sábado: 09:00 às 18:00</p>
                  <p className="text-gray-600 text-sm md:text-base font-semibold">Domingo: Fechado</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-xl text-green-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">WhatsApp</h4>
                  <p className="text-gray-600 text-sm md:text-base">{COMPANY_INFO.phone}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 h-[300px] md:h-[450px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white ring-1 ring-gray-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.228551469145!2d-47.01912!3d-23.6578015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cfa702ad0c0ed5%3A0x46eb460420003806!2sParque%20dos%20Pets%20%7C%20Banho%20et%20Tosa!5e0!3m2!1spt-BR!2sbr!4v1715000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
