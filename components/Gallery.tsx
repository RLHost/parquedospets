
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1591768793355-74d7c80b0e17?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=400"
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-title">Nossos Clientes VIP</h2>
          <p className="text-gray-600">Confira alguns dos fofinhos que passaram por aqui e ficaram um arraso!</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {images.map((src, i) => (
            <div key={i} className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
              <img src={src} alt={`Pet ${i}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">Siga-nos no Instagram para ver muito mais!</p>
          <a 
            href="https://www.instagram.com/parquedospetscaucaia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-pink-600 font-bold hover:underline"
          >
            @parquedospetscaucaia 📸
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
