import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ChevronDown, Search, HelpCircle, Package, CreditCard, Truck, RefreshCw, Shield, Mail } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  // Sipariş & Ödeme
  {
    category: 'Sipariş & Ödeme',
    question: 'Nasıl sipariş verebilirim?',
    answer: 'Beğendiğiniz ürünü sepete ekleyin, sepete git butonuna tıklayın ve ödeme adımlarını tamamlayın. Kredi kartı, havale/EFT veya kapıda ödeme seçeneklerinden birini seçebilirsiniz.',
  },
  {
    category: 'Sipariş & Ödeme',
    question: 'Hangi ödeme yöntemlerini kabul ediyorsunuz?',
    answer: 'Kredi kartı (Visa, Mastercard, American Express), havale/EFT ve kapıda ödeme (nakit veya kredi kartı) seçeneklerini sunuyoruz. Tüm ödemeler 256-bit SSL sertifikası ile güvence altındadır.',
  },
  {
    category: 'Sipariş & Ödeme',
    question: 'Siparişimi iptal edebilir miyim?',
    answer: 'Siparişiniz kargoya verilmeden önce iptal edebilirsiniz. Bunun için müşteri hizmetleri ile iletişime geçin. Kargoya verildikten sonra iade prosedürü uygulanır.',
  },
  {
    category: 'Sipariş & Ödeme',
    question: 'Fatura almak istiyorum, nasıl alabilirim?',
    answer: 'Sipariş sırasında fatura bilgilerinizi girerseniz, faturanız siparişinizle birlikte gönderilir. Sonradan fatura talebi için müşteri hizmetlerimize başvurabilirsiniz.',
  },
  
  // Kargo & Teslimat
  {
    category: 'Kargo & Teslimat',
    question: 'Kargo ücreti ne kadardır?',
    answer: '500 TL ve üzeri alışverişlerinizde kargo ücretsizdir. 500 TL altındaki siparişlerde standart kargo 29,90 TL, hızlı kargo 49,90 TL\'dir.',
  },
  {
    category: 'Kargo & Teslimat',
    question: 'Ne zaman teslim alırım?',
    answer: 'Standart kargo ile 3-5 iş günü, hızlı kargo ile 1-2 iş günü içinde teslim alırsınız. Mağazadan teslim alma seçeneğinde aynı gün teslim alabilirsiniz.',
  },
  {
    category: 'Kargo & Teslimat',
    question: 'Hangi kargo firmasıyla çalışıyorsunuz?',
    answer: 'Aras Kargo, Yurtiçi Kargo ve MNG Kargo ile çalışmaktayız. Bölgenize göre en uygun kargo firması otomatik olarak seçilir.',
  },
  {
    category: 'Kargo & Teslimat',
    question: 'Siparişimi nasıl takip edebilirim?',
    answer: 'Sipariş numaranızı kullanarak "Sipariş Takip" sayfasından kargonuzun durumunu anlık olarak takip edebilirsiniz. Ayrıca size gönderilen kargo takip numarası ile kargo şirketinin sitesinden de takip yapabilirsiniz.',
  },
  {
    category: 'Kargo & Teslimat',
    question: 'Yurt dışına gönderim yapıyor musunuz?',
    answer: 'Şu anda sadece Türkiye içine gönderim yapmaktayız. Yurt dışı gönderim için özel taleplerinizi info@ladiora.com.tr adresine iletebilirsiniz.',
  },

  // İade & Değişim
  {
    category: 'İade & Değişim',
    question: 'İade ve değişim koşullarınız nelerdir?',
    answer: 'Ürünü teslim aldığınız tarihten itibaren 14 gün içinde, kullanılmamış, yıkanmamış, etiketleri çıkarılmamış ve orijinal ambalajında olmak kaydıyla iade/değişim yapabilirsiniz.',
  },
  {
    category: 'İade & Değişim',
    question: 'İade işlemi nasıl yapılır?',
    answer: 'Hesabım > Siparişlerim bölümünden veya müşteri hizmetleri ile iletişime geçerek iade talebinde bulunun. İade kargo ücretsizdir. Onaylandıktan sonra ürünü kargoya verin, paramız 3-5 iş günü içinde hesabınıza iade edilir.',
  },
  {
    category: 'İade & Değişim',
    question: 'Bedenimiz uymadı, değişim yapabilir miyiz?',
    answer: 'Evet, 14 gün içinde ücretsiz beden değişimi yapabilirsiniz. İade prosedürü ile aynı şekilde işlem yapılır ve yeni beden size ücretsiz gönderilir.',
  },
  {
    category: 'İade & Değişim',
    question: 'Param ne zaman iade edilir?',
    answer: 'İade ürününüzü teslim aldığımızda 3-5 iş günü içinde ödeme iadeniz gerçekleştirilir. Kredi kartı ödemelerinde iade, kartınıza; havale ödemelerinde IBAN\'ınıza yapılır.',
  },

  // Ürünler & Stok
  {
    category: 'Ürünler & Stok',
    question: 'Stokta olmayan ürün ne zaman gelir?',
    answer: 'Stokta olmayan ürünler için "Stokta olunca haber ver" butonuna tıklayarak e-posta bildirimi alabilirsiniz. Ortalama 2-3 hafta içinde ürünler tekrar stoklara girer.',
  },
  {
    category: 'Ürünler & Stok',
    question: 'Ürünlerin bedenleri nasıl?',
    answer: 'Ürünlerimiz standart Avrupa bedenlerindedir. Her ürünün sayfasında detaylı beden tablosu bulunmaktadır. Beden konusunda kararsızsanız bir üst beden almanızı öneririz.',
  },
  {
    category: 'Ürünler & Stok',
    question: 'Ürünlerin kumaş kalitesi nasıldır?',
    answer: 'Tüm ürünlerimiz %100 kalite kontrolünden geçer. Premium kumaşlar kullanılır ve Türkiye\'de üretilir. Her ürünün kumaş bilgisi ürün sayfasında detaylı olarak belirtilmiştir.',
  },
  {
    category: 'Ürünler & Stok',
    question: 'Ürünün rengi fotoğraftaki gibi mi gelir?',
    answer: 'Ürün fotoğrafları profesyonel stüdyo ortamında çekilir ancak ekran ayarlarınıza göre renkler hafif farklılık gösterebilir. Renk konusunda tereddütünüz varsa müşteri hizmetlerimizden bilgi alabilirsiniz.',
  },

  // Üyelik & Hesap
  {
    category: 'Üyelik & Hesap',
    question: 'Üye olmadan sipariş verebilir miyim?',
    answer: 'Evet, misafir kullanıcı olarak üye olmadan da sipariş verebilirsiniz. Ancak üye olmanız durumunda geçmiş siparişlerinizi görüntüleyebilir, favori listenizi oluşturabilir ve özel kampanyalardan haberdar olabilirsiniz.',
  },
  {
    category: 'Üyelik & Hesap',
    question: 'Şifremi unuttum, nasıl sıfırlayabilirim?',
    answer: 'Giriş sayfasındaki "Şifremi Unuttum" linkine tıklayın, e-posta adresinizi girin. Size gönderilen link ile yeni şifre oluşturabilirsiniz.',
  },
  {
    category: 'Üyelik & Hesap',
    question: 'Üyeliğimi nasıl iptal edebilirim?',
    answer: 'Hesabım > Ayarlar bölümünden üyeliğinizi silebilir veya müşteri hizmetleri ile iletişime geçerek üyelik iptali talebinde bulunabilirsiniz.',
  },

  // Güvenlik & Gizlilik
  {
    category: 'Güvenlik & Gizlilik',
    question: 'Bilgilerim güvende mi?',
    answer: 'Evet, tüm kişisel bilgileriniz 256-bit SSL sertifikası ile şifrelenir ve güvenle saklanır. Hiçbir koşulda üçüncü şahıslarla paylaşılmaz. KVKK kapsamında korunursunuz.',
  },
  {
    category: 'Güvenlik & Gizlilik',
    question: 'Kredi kartı bilgilerim saklanıyor mu?',
    answer: 'Hayır, kredi kartı bilgileriniz sistemimizde asla saklanmaz. Ödeme işlemleri güvenli ödeme altyapısı üzerinden gerçekleştirilir ve 3D Secure ile korunur.',
  },
];

const categories = [
  { id: 'all', name: 'Tümü', icon: HelpCircle },
  { id: 'Sipariş & Ödeme', name: 'Sipariş & Ödeme', icon: CreditCard },
  { id: 'Kargo & Teslimat', name: 'Kargo & Teslimat', icon: Truck },
  { id: 'İade & Değişim', name: 'İade & Değişim', icon: RefreshCw },
  { id: 'Ürünler & Stok', name: 'Ürünler & Stok', icon: Package },
  { id: 'Üyelik & Hesap', name: 'Üyelik & Hesap', icon: Shield },
];

export function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Filter FAQs
  let filteredFAQs = faqData;
  if (selectedCategory !== 'all') {
    filteredFAQs = faqData.filter(faq => faq.category === selectedCategory);
  }
  if (searchQuery) {
    filteredFAQs = filteredFAQs.filter(
      faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-pink-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="inline-flex size-20 bg-white/20 rounded-full items-center justify-center backdrop-blur-sm mb-6">
              <HelpCircle className="size-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Sıkça Sorulan Sorular
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95 mb-8">
              Aklınıza takılan sorulara cevaplar burada
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 size-6 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Sorunuzu arayın..."
                  className="w-full pl-16 pr-6 py-5 text-lg text-gray-900 rounded-2xl shadow-2xl outline-none focus:ring-4 focus:ring-pink-300"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Categories */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Kategoriler
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`p-4 rounded-xl border-2 transition-all hover:shadow-lg ${
                    selectedCategory === cat.id
                      ? 'border-pink-600 bg-pink-50 shadow-md'
                      : 'border-gray-200 bg-white hover:border-pink-300'
                  }`}
                >
                  <cat.icon
                    className={`size-8 mx-auto mb-2 ${
                      selectedCategory === cat.id ? 'text-pink-600' : 'text-gray-600'
                    }`}
                  />
                  <span
                    className={`text-sm font-semibold ${
                      selectedCategory === cat.id ? 'text-pink-600' : 'text-gray-700'
                    }`}
                  >
                    {cat.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12">
                <HelpCircle className="size-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Sonuç bulunamadı
                </h3>
                <p className="text-gray-600">
                  Aradığınız soruya cevap bulamadık. Lütfen farklı bir arama yapın veya bizimle iletişime geçin.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-sm border-2 border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-1 pr-4">
                        <div className="text-xs font-semibold text-pink-600 mb-1">
                          {faq.category}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {faq.question}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`size-6 text-gray-400 flex-shrink-0 transition-transform ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openIndex === index && (
                      <div className="px-6 py-5 bg-gray-50 border-t border-gray-100">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Still Have Questions */}
          <div className="mt-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-12 text-center text-white">
            <Mail className="size-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hala Sorunuz Var mı?
            </h2>
            <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
              Bulamadığınız sorular için bizimle iletişime geçin, size yardımcı olmaktan mutluluk duyarız!
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="/iletisim"
                className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Mail className="size-5" />
                Bize Yazın
              </a>
              <a
                href="tel:+902125550123"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
              >
                <HelpCircle className="size-5" />
                Bizi Arayın
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <a
              href="/siparis-takip"
              className="bg-white rounded-xl p-6 shadow-sm border-2 border-gray-100 hover:border-pink-300 hover:shadow-md transition-all group"
            >
              <Package className="size-10 text-pink-600 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Sipariş Takip
              </h3>
              <p className="text-gray-600 text-sm">
                Siparişinizin durumunu kontrol edin
              </p>
            </a>

            <a
              href="/iletisim"
              className="bg-white rounded-xl p-6 shadow-sm border-2 border-gray-100 hover:border-pink-300 hover:shadow-md transition-all group"
            >
              <Mail className="size-10 text-pink-600 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                İletişim
              </h3>
              <p className="text-gray-600 text-sm">
                Bizimle iletişime geçin
              </p>
            </a>

            <a
              href="/"
              className="bg-white rounded-xl p-6 shadow-sm border-2 border-gray-100 hover:border-pink-300 hover:shadow-md transition-all group"
            >
              <HelpCircle className="size-10 text-pink-600 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Alışverişe Başla
              </h3>
              <p className="text-gray-600 text-sm">
                Ürünlerimize göz atın
              </p>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
