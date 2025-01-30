import React, { useEffect, useState } from 'react';
import { Instagram } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Imposta la condizione per mobile

  useEffect(() => {
    AOS.init({
      duration: 1000, // Durata dell'animazione in millisecondi
      once: true, // L'animazione avviene solo una volta
    });

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Aggiorna lo stato in base alla larghezza della finestra
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const additionalImages = [
    '/images/portfolio1.jpeg',
    '/images/portfolio2.jpeg',
    '/images/portfolio3.jpeg',
    '/images/portfolio4.jpeg',
    '/images/portfolio5.jpeg',
    '/images/portfolio6.jpeg',
  ];
  


  return (
    <div className="bg-neutral-50 text-neutral-900">
      {/* Hero Section */}
      <section className="h-[100svh] relative overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src={isMobile ? '/images/hero-mobile.jpeg' : '/images/hero-desktop.jpeg'} // Usa l'immagine appropriata
            alt="Hero"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative h-full flex items-center justify-center text-white">
          <div className="text-center px-4">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-light mb-4">Valentina Dell'Aquila</h1>
            <p className="text-lg sm:text-xl md:text-2xl font-light">Modella Professionista</p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 sm:py-20 px-4 md:px-8 max-w-4xl mx-auto" data-aos="fade-up">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-8 text-center">Chi Sono</h2>
        <p className="text-base sm:text-lg leading-relaxed text-neutral-700 text-center">
          Sono Valentina Dell'Aquila, vengo da Taranto, Puglia, e ho iniziato il mio percorso nel mondo della moda nel 2023, anche se la passione per questo settore è sempre stata con me. Ho partecipato a concorsi provinciali e nazionali, dove ho ottenuto diversi riconoscimenti, tra cui la fascia di Miss Eleganza 2024 al concorso Mondo Sposa Italia, e la fascia di Miss Moda a Un Volto per Foto Modella.

          La moda è per me un'espressione di personalità e creatività, e continuo a coltivare questa passione, collaborando con fotografi e brand, con l'obiettivo di costruire una carriera solida e far crescere il mio percorso in questo affascinante settore.
        </p>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 sm:py-16 px-4 md:px-8 bg-white" data-aos="fade-up">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-8 sm:mb-12 text-center">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-7xl mx-auto">
          {additionalImages.map((image, index) => (
            <div key={index} className="aspect-[3/4] overflow-hidden" data-aos="zoom-in">
              <img
                src={image}
                alt={`Portfolio ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Measurements Section */}
      <section className="py-16 sm:py-20 px-4 md:px-8 bg-neutral-50" data-aos="fade-up">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-8 sm:mb-12 text-center">Misure</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-lg sm:text-xl font-light mb-2">Seno</h3>
              <p className="text-xl sm:text-2xl">90 cm</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-lg sm:text-xl font-light mb-2">Vita</h3>
              <p className="text-xl sm:text-2xl">70 cm</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-lg sm:text-xl font-light mb-2">Fianchi</h3>
              <p className="text-xl sm:text-2xl">100 cm</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-lg sm:text-xl font-light mb-2">Altezza</h3>
              <p className="text-xl sm:text-2xl">173 cm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 px-4 md:px-8 bg-white" data-aos="fade-up">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-8 sm:mb-12">Contatti</h2>
          <a
            href="https://www.instagram.com/valee.dellaquila/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-colors"
          >
            <Instagram size={20} />
            <span>Contattami su Instagram</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 text-center text-sm text-neutral-500" data-aos="fade-up">
        <p>&copy; {new Date().getFullYear()} Valentina Dell'Aquila. Tutti i diritti riservati.</p>
      </footer>
    </div>
  );
}

export default App;