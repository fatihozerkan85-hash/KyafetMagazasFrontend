import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Kampanyalardan Haberdar Olun
              </h3>
              <p className="text-gray-400">
                İlk siparişinizde %10 indirim kazanın
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <div className="relative flex-1 md:w-80">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-500" />
                <input 
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <button className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors whitespace-nowrap">
                Abone Ol
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1 */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kurumsal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-pink-400 transition-colors">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">İletişim</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Mağazalarımız</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Kariyer</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white font-semibold mb-4">Müşteri Hizmetleri</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-pink-400 transition-colors">Sipariş Takibi</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">İade & Değişim</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Kargo Bilgileri</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">SSS</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-white font-semibold mb-4">Yardım</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-pink-400 transition-colors">Kullanım Koşulları</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Gizlilik Politikası</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">KVKK</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Çerez Politikası</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-white font-semibold mb-4">Bizi Takip Edin</h4>
            <div className="flex gap-3 mb-4">
              <a href="#" className="size-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram className="size-5" />
              </a>
              <a href="#" className="size-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Facebook className="size-5" />
              </a>
              <a href="#" className="size-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Twitter className="size-5" />
              </a>
              <a href="#" className="size-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Youtube className="size-5" />
              </a>
            </div>
            <p className="text-sm">
              📞 +90 (212) 555 0123<br />
              📧 info@ladiora.com.tr
            </p>
            
            {/* Demo Links */}
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-xs text-gray-500 mb-2">Demo:</p>
              <div className="flex flex-col gap-1 text-xs">
                <a href="/odeme-basarili" className="text-green-400 hover:text-green-300">✓ Başarılı Ödeme</a>
                <a href="/odeme-basarisiz" className="text-red-400 hover:text-red-300">✗ Başarısız Ödeme</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2026 Ladiora Boutique. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-4">
            <img src="https://via.placeholder.com/50x30/1a1a1a/ffffff?text=VISA" alt="Visa" className="h-6" />
            <img src="https://via.placeholder.com/50x30/1a1a1a/ffffff?text=MC" alt="Mastercard" className="h-6" />
            <img src="https://via.placeholder.com/50x30/1a1a1a/ffffff?text=AMEX" alt="Amex" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
}