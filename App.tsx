
import React, { useState, useEffect } from 'react';
import { 
  Dog, 
  Scissors, 
  Heart, 
  MapPin, 
  Instagram, 
  Facebook, 
  CheckCircle, 
  Phone, 
  Clock, 
  Star,
  ChevronRight,
  ShieldCheck,
  MessageCircle,
  Menu,
  X,
  Sparkles,
  Bath,
  Award
} from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5511974609152?text=Olá! Vi o site e gostaria de agendar um horário para meu pet.";
const INSTAGRAM_LINK = "https://www.instagram.com/parquedospetscaucaia";
const FACEBOOK_LINK = "https://www.facebook.com/parquedospetsbanhoetosa";
const GOOGLE_MAPS_LINK = "https://www.google.com/maps/place/Parque+dos+Pets+%7C+Banho+e+Tosa/@-23.6578015,-47.016545,16z";

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScrollPos = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScrollPos);
    return () => window.removeEventListener('scroll', handleScrollPos);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90; // Fixed header compensation
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { label: 'Serviços', id: 'servicos' },
    { label: 'Diferenciais', id: 'diferenciais' },
    { label: 'Avaliações', id: 'avaliacoes' },
    { label: 'Contato', id: 'contato' }
  ];

  return (
    <div className="selection:bg-orange-500 selection:text-white bg-white antialiased">
      {/* Mobile Menu Overlay - PLACED AT ROOT LEVEL TO AVOID CONTAINER CONSTRAINTS */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[11000] bg-slate-950 flex flex-col p-8 animate-fade-in overflow-y-auto w-full h-full">
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-3">
              <div className="bg-orange-500 p-2 rounded-2xl text-white">
                <Dog size={24} />
              </div>
              <span className="text-2xl font-black text-white italic tracking-tight">Parque dos <span className="text-orange-500">Pets</span></span>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-white/10 p-4 rounded-2xl text-orange-500 hover:bg-white/20 transition-all border border-white/10"
              aria-label="Fechar Menu"
            >
              <X size={36} />
            </button>
          </div>
          
          <div className="flex flex-col gap-4 text-center flex-1 justify-center max-w-sm mx-auto w-full">
            {menuItems.map((item) => (
              <button 
                key={item.id} 
                onClick={() => scrollToSection(item.id)}
                className="text-4xl font-black text-white hover:text-orange-500 transition-colors py-5 border-b border-white/5 active:scale-95 transition-transform"
              >
                {item.label}
              </button>
            ))}
            <a 
              href={WHATSAPP_LINK} 
              target="_blank"
              className="bg-orange-500 text-white py-6 rounded-3xl text-2xl font-black mt-8 shadow-2xl shadow-orange-500/40 text-center active:scale-95 transition-transform"
            >
              Agendar Agora
            </a>
          </div>
          
          <div className="mt-auto pt-10 flex justify-center gap-12 text-slate-400 border-t border-white/5">
            <a href={INSTAGRAM_LINK} target="_blank" className="hover:text-orange-500 transition-colors p-2"><Instagram size={40} /></a>
            <a href={FACEBOOK_LINK} target="_blank" className="hover:text-orange-500 transition-colors p-2"><Facebook size={40} /></a>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-[10000] transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-xl py-3 border-b border-slate-100' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div 
            className="flex items-center gap-3 group cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="bg-orange-500 p-2 rounded-2xl text-white shadow-lg shadow-orange-500/30 group-hover:rotate-12 transition-transform">
              <Dog size={28} />
            </div>
            <span className={`text-2xl font-black tracking-tight transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              Parque dos <span className="text-orange-500">Pets</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {menuItems.map((item) => (
              <button 
                key={item.id} 
                onClick={() => scrollToSection(item.id)}
                className={`font-bold hover:text-orange-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-white'}`}
              >
                {item.label}
              </button>
            ))}
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-2xl font-black shadow-xl shadow-orange-500/40 transition-all transform hover:scale-105"
            >
              Agendar Agora
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`lg:hidden p-3 rounded-xl transition-all active:scale-90 ${isScrolled ? 'text-slate-900 bg-slate-100' : 'text-white bg-white/10 backdrop-blur-sm'}`} 
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Abrir Menu"
          >
            <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1920&q=80" className="w-full h-full object-cover opacity-30" alt="Banho e Tosa" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-left">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-md px-5 py-2 rounded-full border border-orange-500/30">
              <Sparkles className="text-orange-400" size={18} fill="currentColor" />
              <span className="text-xs font-black uppercase tracking-widest text-orange-200">Caucaia do Alto & Região</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[1] tracking-tight">
              O SPA que seu <br />
              <span className="text-orange-500 italic">Melhor Amigo</span> <br />
              sempre sonhou!
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-xl font-medium leading-relaxed">
              Acabe com o estresse do banho em casa. Oferecemos carinho de família, produtos premium e a segurança que seu pet merece.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <a href={WHATSAPP_LINK} target="_blank" className="bg-orange-500 hover:bg-orange-400 text-white px-10 py-5 rounded-3xl font-black text-2xl flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/50 text-center">
                Quero Agendar Agora <ChevronRight size={28} className="hidden sm:block" />
              </a>
              <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md px-7 py-5 rounded-3xl border border-white/10">
                <div className="flex -space-x-3">
                  {[14, 15, 16].map(i => <img key={i} className="w-12 h-12 rounded-full border-2 border-orange-500 shadow-lg" src={`https://i.pravatar.cc/100?img=${i}`} alt="Cliente" />)}
                </div>
                <div className="text-sm">
                  <div className="flex gap-1 text-orange-400 mb-0.5"><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></div>
                  <span className="text-white font-black text-lg">+1.200</span> <span className="text-slate-400 font-bold block">Pets Felizes</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative animate-float">
            <div className="absolute -inset-4 bg-orange-500/20 organic-blob blur-3xl"></div>
            <img src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80" className="relative z-10 rounded-[4rem] border-8 border-white/5 shadow-2xl" alt="Pet Feliz" />
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-24 bg-orange-50 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center lg:text-left">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
              Cansado de ver seu amigão <span className="text-orange-600">sujo ou estressado?</span>
            </h2>
            <p className="text-xl text-slate-600 font-bold">
              Banho caseiro nem sempre resolve. Pode causar traumas, dermatites e o odor volta rápido. Deixe o cuidado com quem ama de verdade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { t: "Medo da Água", p: "O estresse do banho em casa causa traumas?", i: <Heart /> },
              { t: "Nós e Pelos", p: "A falta de tosa correta causa dor e irritação?", i: <Scissors /> },
              { t: "Mau Cheiro", p: "O cheirinho volta logo após o banho comum?", i: <Bath /> },
              { t: "Higiene Precária", p: "Dificuldade para limpar ouvidos e cortar unhas?", i: <ShieldCheck /> }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] shadow-xl shadow-orange-900/5 group hover:bg-orange-500 transition-all duration-500">
                <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white group-hover:scale-110 transition-all mx-auto lg:mx-0">
                  {item.i}
                </div>
                <h3 className="text-2xl font-black mb-4 text-slate-800 group-hover:text-white">{item.t}</h3>
                <p className="text-slate-500 group-hover:text-orange-50 font-bold leading-snug">{item.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="lg:w-1/2 text-center lg:text-left">
              <span className="text-orange-500 font-black uppercase tracking-[0.2em] text-sm mb-4 block">Nossa Especialidade</span>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9]">
                Cuidado feito <br /> com <span className="text-orange-500">Amor e Respeito.</span>
              </h2>
            </div>
            <div className="lg:w-1/3 text-center lg:text-left">
              <p className="text-xl text-slate-600 font-bold mb-6 italic">
                "Selo de qualidade Parque dos Pets em cada atendimento."
              </p>
              <a href={WHATSAPP_LINK} target="_blank" className="inline-flex items-center gap-3 text-orange-600 font-black text-2xl hover:gap-6 transition-all">
                Ver Tabela de Preços <ChevronRight />
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { t: "Banho Premium", d: "Shampoos profissionais e secagem ultra-silenciosa.", tag: "Mais Pedido", i: <Bath size={32} /> },
              { t: "Tosa Estética", d: "Cortes especializados que valorizam a beleza do pet.", tag: "Destaque", i: <Scissors size={32} /> },
              { t: "Combo SPA", d: "Hidratação, unhas, ouvidos e massagem relaxante.", tag: "Completo", i: <Award size={32} /> }
            ].map((s, i) => (
              <div key={i} className="relative bg-orange-50/50 rounded-[4rem] p-12 border-2 border-transparent hover:border-orange-200 transition-all group">
                <div className="absolute top-8 right-8 bg-white text-orange-600 text-xs font-black px-4 py-2 rounded-full shadow-sm">
                  {s.tag}
                </div>
                <div className="bg-orange-500 w-20 h-20 rounded-3xl flex items-center justify-center text-white mb-10 shadow-lg shadow-orange-500/30 group-hover:rotate-6 transition-transform">
                  {s.i}
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-6">{s.t}</h3>
                <p className="text-slate-600 text-lg font-bold mb-10 leading-relaxed">{s.d}</p>
                <button onClick={() => window.open(WHATSAPP_LINK, '_blank')} className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-black border border-orange-100 group-hover:bg-orange-500 group-hover:text-white transition-all inline-block shadow-sm">
                  Agendar Agora
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section id="diferenciais" className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-[5rem] overflow-hidden shadow-2xl border-[12px] border-white">
              <img src="https://images.unsplash.com/photo-1591769225440-811ad7d62ca2?auto=format&fit=crop&w=800&q=80" alt="Equipe Parque dos Pets" className="w-full" />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl z-20 animate-bounce-slow hidden md:block">
              <span className="block text-5xl font-black text-orange-500">10+</span>
              <span className="text-sm font-black uppercase tracking-widest opacity-60 italic">Anos de Experiência</span>
            </div>
          </div>
          
          <div className="space-y-10 text-center lg:text-left">
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight">
              A Família <span className="text-orange-500">Parque <br /> dos Pets</span>
            </h2>
            <p className="text-2xl text-slate-600 font-bold leading-relaxed">
              Nascemos com a missão de oferecer um refúgio de paz em Caucaia do Alto. Aqui, seu filho de quatro patas é tratado com a paciência e o carinho que ele merece.
            </p>
            <div className="grid gap-6 text-left">
              {[
                "Profissionais certificados em estética animal",
                "Uso exclusivo de produtos hipoalergênicos",
                "Manejo humanizado sem estresse",
                "Infraestrutura moderna e higienizada"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 group">
                  <div className="bg-orange-100 text-orange-600 p-2 rounded-full group-hover:bg-orange-500 group-hover:text-white transition-all shrink-0">
                    <CheckCircle size={24} />
                  </div>
                  <span className="text-xl font-black text-slate-800 tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="avaliacoes" className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">Amor que gera <span className="text-orange-500">Confiança.</span></h2>
            <p className="text-xl text-slate-400 font-bold">Quem conhece o Parque dos Pets não troca por nada.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { n: "Carla Meirelles", p: "Bento (Golden)", t: "O Bento morria de medo de pet shop, mas aqui ele entra abanando o rabo. O carinho é surreal!" },
              { n: "Rodrigo Silva", p: "Luna (Shih Tzu)", t: "Melhor banho da região. A Luna volta cheirosa e muito bem cuidada. Equipe nota 10!" },
              { n: "Fernanda Lima", p: "Thor (Bulldog)", t: "Lugar impecável, cheiroso e o Thor adora a equipe. Confio de olhos fechados." }
            ].map((r, i) => (
              <div key={i} className="bg-white/5 p-10 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-all">
                <div className="flex gap-1 text-orange-400 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
                </div>
                <p className="text-lg italic font-medium text-slate-300 mb-8 leading-relaxed">"{r.t}"</p>
                <div>
                  <h4 className="font-black text-xl text-white">{r.n}</h4>
                  <p className="text-orange-500 font-bold">{r.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-slate-900 rounded-[4rem] overflow-hidden grid lg:grid-cols-2 shadow-2xl">
            <div className="p-12 md:p-20 text-white space-y-12">
              <div className="text-center lg:text-left">
                <span className="text-orange-500 font-black uppercase tracking-widest text-sm mb-4 block">Agende uma Visita</span>
                <h2 className="text-5xl font-black leading-tight">Estamos perto <br /> de você!</h2>
              </div>
              
              <div className="space-y-8">
                <div className="flex gap-6 items-start group">
                  <div className="bg-white/10 p-4 rounded-2xl text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black mb-1">Nosso Endereço</h4>
                    <p className="text-slate-400 text-lg font-medium">Estrada de Caucaia do Alto, Caucaia do Alto, SP.</p>
                    <a href={GOOGLE_MAPS_LINK} target="_blank" className="text-orange-500 font-bold hover:underline">Ver no Mapa</a>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="bg-white/10 p-4 rounded-2xl text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all shrink-0">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black mb-1">WhatsApp</h4>
                    <p className="text-slate-400 text-lg font-medium">(11) 97460-9152</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="bg-white/10 p-4 rounded-2xl text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all shrink-0">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black mb-1">Atendimento</h4>
                    <p className="text-slate-400 text-lg font-medium">Seg a Sáb: 08:00 às 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[500px] lg:h-auto min-h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14620.0!2d-47.016545!3d-23.6578015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cfa702ad0c0ed5%3A0x46eb460420003806!2sParque%20dos%20Pets%20%7C%20Banho%20e%20Tosa!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
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

      {/* Footer */}
      <footer className="bg-slate-950 text-white pt-20 pb-12 overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="bg-orange-500 p-2 rounded-2xl">
                <Dog size={32} />
              </div>
              <span className="text-4xl font-black tracking-tighter italic">Parque dos <span className="text-orange-500">Pets</span></span>
            </div>
            <div className="flex gap-8 text-slate-400">
              <a href={INSTAGRAM_LINK} target="_blank" className="hover:text-orange-500 transition-colors p-2"><Instagram size={32} /></a>
              <a href={FACEBOOK_LINK} target="_blank" className="hover:text-orange-500 transition-colors p-2"><Facebook size={32} /></a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 font-black uppercase tracking-widest text-[10px] text-center">
            <p>© {new Date().getFullYear()} Parque dos Pets - Caucaia do Alto, SP.</p>
            <p className="flex items-center gap-2">Amor em forma de banho e tosa</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button - HIGHEST Z-INDEX */}
      <a 
        href={WHATSAPP_LINK} 
        target="_blank" 
        className="fixed bottom-6 right-6 z-[12000] group"
        aria-label="Agendar via WhatsApp"
      >
        <div className="absolute inset-0 bg-orange-500 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity"></div>
        <div className="relative bg-[#25D366] text-white p-4 sm:p-5 rounded-full shadow-2xl flex items-center justify-center transform hover:scale-110 active:scale-95 transition-all animate-bounce-slow">
           <MessageCircle size={38} fill="white" className="text-[#25D366] sm:w-[44px] sm:h-[44px]" />
           <div className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-white animate-pulse">1</div>
        </div>
      </a>

      <style>{`
        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: scale(1.05); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-left { animation: fade-in-left 1s ease-out forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce 4s infinite; }
        .animate-fade-in { animation: fade-in 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
      `}</style>
    </div>
  );
};

export default App;
