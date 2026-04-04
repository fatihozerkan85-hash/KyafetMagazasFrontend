import { ChevronLeft, ChevronRight, Sparkles, Percent, Truck } from 'lucide-react';
import { useState, useEffect } from 'react';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1594787129721-b8eada185401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdlYXJpbmclMjBraW1vbm8lMjBmYXNoaW9uJTIwcGlua3xlbnwxfHx8fDE3NzUzMDcyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "LADIORA KİMONO GÜNLERİ",
    subtitle: "Özel Tasarım Kimonolarda Sınırlı Süreli Fırsatlar",
    description: "Benzersiz kimono koleksiyonumuzu keşfedin",
    cta: "HEMEN KEŞFET",
    icon: "sparkles",
    gradient: "from-pink-900/70 to-purple-900/50",
    link: "#products-section" // Kimono kategorisine scroll
  },
  {
    image: "https://images.unsplash.com/photo-1674695662162-cc9cdf494e88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGNvenklMjBzd2VhdHNoaXJ0JTIwY2FzdWFsJTIwd2ludGVyfGVufDF8fHx8MTc3NTMwNzI3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "SWEATSHIRT'LERDE BÜYÜK İNDİRİM",
    subtitle: "Sezon Sonu Kampanyası - %60'a Varan İndirimler",
    description: "Konforlu ve şık sweatshirt modelleri şimdi çok daha uygun",
    cta: "FIRSATLARI KAÇIRMA",
    icon: "percent",
    gradient: "from-red-900/70 to-orange-900/50",
    link: "#products-section" // Sweatshirt kategorisine scroll
  },
  {
    image: "https://images.unsplash.com/photo-1759563874669-e190116a0f31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc2hvcHBpbmclMjBkZWxpdmVyeSUyMGJveHxlbnwxfHx8fDE3NzUzMDcyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "KARGO ÜCRETSİZ",
    subtitle: "5000 TL ve Üzeri Alışverişlerde",
    description: "Türkiye'nin her yerine hızlı ve güvenli teslimat",
    cta: "ALIŞVERİŞE BAŞLA",
    icon: "truck",
    gradient: "from-emerald-900/70 to-teal-900/50",
    link: "#products-section" // Ürünlere scroll
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

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'sparkles':
        return <Sparkles className="size-16 md:size-20 mb-4 text-pink-300 animate-pulse" />;
      case 'percent':
        return <Percent className="size-16 md:size-20 mb-4 text-red-300 animate-pulse" />;
      case 'truck':
        return <Truck className="size-16 md:size-20 mb-4 text-emerald-300 animate-pulse" />;
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full h-[500px] md:h-[650px] overflow-hidden bg-gray-900">
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
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} flex items-center`}>
            <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
              <div className="max-w-3xl text-white">
                {getIcon(slide.icon)}
                <h2 className="text-4xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-3xl mb-4 text-white/95 font-semibold">
                  {slide.subtitle}
                </p>
                <p className="text-base md:text-xl mb-8 text-white/80">
                  {slide.description}
                </p>
                <button className="bg-white text-gray-900 px-12 py-4 rounded-full font-bold text-lg hover:bg-pink-50 hover:scale-105 transition-all shadow-2xl">
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
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 md:p-4 rounded-full transition-all hover:scale-110 shadow-xl"
      >
        <ChevronLeft className="size-6 md:size-8 text-gray-900" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 md:p-4 rounded-full transition-all hover:scale-110 shadow-xl"
      >
        <ChevronRight className="size-6 md:size-8 text-gray-900" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-12' : 'bg-white/50 w-3 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
}