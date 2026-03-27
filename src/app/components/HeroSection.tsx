import { ChevronLeft, ChevronRight, Snowflake } from 'lucide-react';
import { useState, useEffect } from 'react';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1517988125222-aa07cf3ba98b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBmYXNoaW9uJTIwc2FsZSUyMHdvbWFuJTIwc3VuZ2xhc3Nlc3xlbnwxfHx8fDE3NzQ1NTk2OTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "KIŞ SEZONUNUN SON FIRSATLARI",
    subtitle: "Tüm kış ürünlerinde %70'e varan indirimler",
    cta: "KEŞFET",
    icon: true
  },
  {
    image: "https://images.unsplash.com/photo-1678723357379-d87f2a0ec8ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBmYXNoaW9uJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc0NDQ5MzczfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "YENİ SEZON KOLEKSİYONU",
    subtitle: "2026 İlkbahar Trendleri",
    cta: "KEŞFET",
    icon: false
  },
  {
    image: "https://images.unsplash.com/photo-1714046298190-7c33737ddc94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc3VtbWVyJTIwY29sbGVjdGlvbnxlbnwxfHx8fDE3NzQ1NTkyNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "YAZ KOLEKSİYONU",
    subtitle: "%50'ye Varan İndirimler",
    cta: "ALIŞVERİŞE BAŞLA",
    icon: false
  }
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[450px] md:h-[550px] overflow-hidden bg-gray-900">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={slide.image} 
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="max-w-2xl text-white">
                {slide.icon && (
                  <Snowflake className="size-16 mb-4 text-blue-300" />
                )}
                <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">{slide.title}</h2>
                <p className="text-xl md:text-2xl mb-8 text-gray-100">{slide.subtitle}</p>
                <button className="bg-white text-gray-900 px-10 py-3 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors">
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
      >
        <ChevronLeft className="size-6" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
      >
        <ChevronRight className="size-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`size-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}