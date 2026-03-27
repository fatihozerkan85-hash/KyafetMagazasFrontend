export function BannerSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Banner */}
        <div className="relative overflow-hidden rounded-lg h-80 group">
          <img 
            src="https://images.unsplash.com/photo-1678723357379-d87f2a0ec8ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBmYXNoaW9uJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc0NDQ5MzczfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Kadın Koleksiyonu"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-900/70 to-transparent flex flex-col justify-center px-8 text-white">
            <h3 className="text-3xl font-bold mb-2">Kadın Koleksiyonu</h3>
            <p className="text-lg mb-4">İndirimde %40'a Varan Fırsatlar</p>
            <a href="#" className="bg-white text-pink-600 px-6 py-2 rounded-full font-semibold inline-flex items-center justify-center w-fit hover:bg-pink-50 transition-colors">
              Şimdi Alışveriş Yap
            </a>
          </div>
        </div>

        {/* Right Banner */}
        <div className="relative overflow-hidden rounded-lg h-80 group">
          <img 
            src="https://images.unsplash.com/photo-1758542988969-39a10168b2ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwaGFuZGJhZyUyMGFjY2Vzc29yaWVzfGVufDF8fHx8MTc3NDU1OTI1MHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Aksesuar Dünyası"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-pink-900/70 to-transparent flex flex-col justify-center items-end px-8 text-white text-right">
            <h3 className="text-3xl font-bold mb-2">Aksesuar Dünyası</h3>
            <p className="text-lg mb-4">Stilinizi Tamamlayan Detaylar</p>
            <a href="#" className="bg-white text-pink-600 px-6 py-2 rounded-full font-semibold inline-flex items-center justify-center w-fit hover:bg-pink-50 transition-colors">
              Keşfet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}