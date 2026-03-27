import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Instagram, Facebook, Twitter } from 'lucide-react';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Lütfen zorunlu alanları doldurun');
      return;
    }

    // Simulate form submission
    toast.loading('Mesajınız gönderiliyor...', { duration: 1500 });
    
    setTimeout(() => {
      toast.success('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      content: '+90 (212) 555 0123',
      link: 'tel:+902125550123',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Mail,
      title: 'E-posta',
      content: 'destek@ladiora.com.tr',
      link: 'mailto:destek@ladiora.com.tr',
      color: 'bg-pink-100 text-pink-600',
    },
    {
      icon: MapPin,
      title: 'Adres',
      content: 'Nişantaşı, Teşvikiye Cad. No:123\nŞişli, İstanbul',
      link: '#',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: Clock,
      title: 'Çalışma Saatleri',
      content: 'Pzt-Cmt: 09:00 - 19:00\nCumartesi: 10:00 - 18:00',
      link: '#',
      color: 'bg-green-100 text-green-600',
    },
  ];

  const faqItems = [
    {
      question: 'Sipariş durumumu nasıl öğrenebilirim?',
      answer: 'Sipariş takip sayfasından sipariş numaranızı girerek takip edebilirsiniz.',
    },
    {
      question: 'İade sürecim ne kadar sürer?',
      answer: 'İade talebiniz onaylandıktan sonra 3-5 iş günü içinde iade işlemi tamamlanır.',
    },
    {
      question: 'Kargo ücreti ne kadardır?',
      answer: '500 TL ve üzeri alışverişlerinizde kargo ücretsizdir. Altında ise 29,90 TL\'dir.',
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-pink-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              İletişim
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95">
              Size yardımcı olmak için buradayız. Sorularınız için bizimle iletişime geçin.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-100 hover:border-pink-300 transition-all hover:shadow-xl group"
              >
                <div className={`size-14 ${info.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <info.icon className="size-7" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                  {info.content}
                </p>
              </a>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="size-12 bg-pink-600 rounded-full flex items-center justify-center">
                    <MessageCircle className="size-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      Bize Yazın
                    </h2>
                    <p className="text-gray-600">Mesajınızı gönderin, size yardımcı olalım</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Ad Soyad *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Adınız ve soyadınız"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-pink-500 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        E-posta Adresi *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="ornek@email.com"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-pink-500 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="0 (5__) ___ __ __"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-pink-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Konu
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-pink-500 transition-colors"
                      >
                        <option value="">Seçiniz</option>
                        <option value="order">Sipariş Hakkında</option>
                        <option value="product">Ürün Hakkında</option>
                        <option value="return">İade/Değişim</option>
                        <option value="payment">Ödeme</option>
                        <option value="other">Diğer</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Mesajınız *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      placeholder="Mesajınızı buraya yazın..."
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-pink-500 transition-colors resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-pink-600 text-white py-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="size-5" />
                    Mesajı Gönder
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    Mesajınızı aldıktan sonra en geç 24 saat içinde size dönüş yapacağız.
                  </p>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Help */}
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Hızlı Yardım
                </h3>
                <div className="space-y-3">
                  {faqItems.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-semibold text-gray-900 text-sm mb-2">
                        {item.question}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
                <a
                  href="/sss"
                  className="mt-4 block text-center text-pink-600 font-semibold hover:text-pink-700 transition-colors"
                >
                  Tüm SSS'leri Gör →
                </a>
              </div>

              {/* Live Chat */}
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <div className="size-3 bg-green-500 rounded-full absolute -top-1 -right-1 animate-pulse"></div>
                    <MessageCircle className="size-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Canlı Destek
                    </h3>
                    <p className="text-sm text-gray-600">Çevrimiçi</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Müşteri temsilcilerimiz size anında yardımcı olmak için hazır.
                </p>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Sohbeti Başlat
                </button>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Sosyal Medya
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Bizi sosyal medyada takip edin, yeni koleksiyonlardan haberdar olun!
                </p>
                <div className="space-y-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg hover:shadow-md transition-all group"
                  >
                    <div className="size-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Instagram className="size-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Instagram</div>
                      <div className="text-xs text-gray-600">@ladiora_boutique</div>
                    </div>
                  </a>

                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:shadow-md transition-all group"
                  >
                    <div className="size-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Facebook className="size-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Facebook</div>
                      <div className="text-xs text-gray-600">/ladiora.boutique</div>
                    </div>
                  </a>

                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-sky-50 rounded-lg hover:shadow-md transition-all group"
                  >
                    <div className="size-10 bg-sky-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Twitter className="size-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Twitter</div>
                      <div className="text-xs text-gray-600">@ladiora</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-2">
                  WhatsApp Destek
                </h3>
                <p className="text-green-50 mb-4 text-sm">
                  WhatsApp üzerinden bize ulaşın, anında yanıt alın.
                </p>
                <a
                  href="https://wa.me/902125550123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white text-green-600 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  <MessageCircle className="size-5" />
                  WhatsApp'ta Yaz
                </a>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Konumumuz
            </h2>
            <div className="bg-gray-200 rounded-2xl overflow-hidden h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="size-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 font-semibold">
                  Nişantaşı, Teşvikiye Cad. No:123
                </p>
                <p className="text-gray-500">
                  Şişli, İstanbul
                </p>
                <button className="mt-4 bg-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-pink-700 transition-colors">
                  Haritada Aç
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
