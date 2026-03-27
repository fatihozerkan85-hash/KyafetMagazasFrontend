import { Home, Search, ArrowLeft, ShoppingBag } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center size-48 bg-pink-100 rounded-full mb-6 relative">
              <div className="absolute inset-0 bg-pink-200 rounded-full animate-ping opacity-20"></div>
              <span className="text-8xl font-bold text-pink-600 relative z-10">404</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sayfa Bulunamadı
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir.
          </p>
          <p className="text-gray-500 mb-12">
            Üzgünüz, aradığınız sayfayı bulamadık. Lütfen URL'yi kontrol edin veya ana sayfaya dönün.
          </p>

          {/* Search Suggestions */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Ne Aramıştınız?
            </h2>
            <p className="text-gray-600 mb-6">
              Popüler kategorilerimize göz atabilir veya arama yapabilirsiniz:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              <a
                href="/?category=casual"
                className="px-4 py-3 bg-pink-50 text-pink-600 rounded-lg font-semibold hover:bg-pink-100 transition-colors"
              >
                Casual
              </a>
              <a
                href="/?category=hoodie"
                className="px-4 py-3 bg-pink-50 text-pink-600 rounded-lg font-semibold hover:bg-pink-100 transition-colors"
              >
                Hoodie Cape
              </a>
              <a
                href="/?category=sweatshirt"
                className="px-4 py-3 bg-pink-50 text-pink-600 rounded-lg font-semibold hover:bg-pink-100 transition-colors"
              >
                Sweatshirt
              </a>
              <a
                href="/?category=kimono"
                className="px-4 py-3 bg-pink-50 text-pink-600 rounded-lg font-semibold hover:bg-pink-100 transition-colors"
              >
                Kimono
              </a>
              <a
                href="/?category=jewelry"
                className="px-4 py-3 bg-pink-50 text-pink-600 rounded-lg font-semibold hover:bg-pink-100 transition-colors"
              >
                Takı & Aksesuar
              </a>
              <a
                href="/?category=scarf"
                className="px-4 py-3 bg-pink-50 text-pink-600 rounded-lg font-semibold hover:bg-pink-100 transition-colors"
              >
                Şal
              </a>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Ürün ara..."
                className="w-full px-6 py-4 pl-12 border-2 border-gray-300 rounded-lg outline-none focus:border-pink-500"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button
              onClick={() => window.history.back()}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold border-2 border-gray-300 hover:border-pink-300 hover:bg-pink-50 transition-colors"
            >
              <ArrowLeft className="size-5" />
              Geri Dön
            </button>
            <a
              href="/"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-colors"
            >
              <Home className="size-5" />
              Ana Sayfaya Git
            </a>
            <a
              href="/sepet"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              <ShoppingBag className="size-5" />
              Sepete Git
            </a>
          </div>

          {/* Help Section */}
          <div className="mt-12 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-2">
              Yardıma mı ihtiyacınız var?
            </h3>
            <p className="text-gray-700 text-sm mb-4">
              Müşteri hizmetleri ekibimiz size yardımcı olmaktan mutluluk duyacaktır.
            </p>
            <div className="flex flex-col md:flex-row gap-3 justify-center text-sm">
              <a href="tel:+902125550123" className="text-pink-600 font-semibold hover:text-pink-700">
                📞 +90 (212) 555 0123
              </a>
              <span className="hidden md:inline text-gray-400">•</span>
              <a href="mailto:destek@ladiora.com.tr" className="text-pink-600 font-semibold hover:text-pink-700">
                📧 destek@ladiora.com.tr
              </a>
              <span className="hidden md:inline text-gray-400">•</span>
              <a href="#" className="text-pink-600 font-semibold hover:text-pink-700">
                💬 Canlı Destek
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
