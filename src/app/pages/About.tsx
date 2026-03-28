import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Heart, Award, Truck, Shield, Users, Target, Sparkles, Star, Gift, Scissors, Smile } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Heart,
      title: 'Müşteri Memnuniyeti',
      description: 'Müşterilerimizin memnuniyeti bizim için her şeyden önce gelir. Kaliteli ürün ve hizmet sunmak misyonumuzdur.',
    },
    {
      icon: Award,
      title: 'Kalite & Güven',
      description: 'Tüm ürünlerimiz en yüksek kalite standartlarında üretilir ve güvenilir tedarikçilerle çalışırız.',
    },
    {
      icon: Sparkles,
      title: 'Yenilikçilik',
      description: 'Moda trendlerini yakından takip eder, koleksiyonlarımızı sürekli yeniler ve geliştiririz.',
    },
    {
      icon: Shield,
      title: 'Güvenli Alışveriş',
      description: 'Online alışveriş deneyiminizin güvenli ve sorunsuz olması için gerekli tüm önlemleri alırız.',
    },
  ];

  const features = [
    {
      icon: Star,
      title: 'Özenle Seçilmiş Koleksiyonlar',
      description: 'Her ürün, kalite ve tasarım açısından titizlikle seçilir. Gardırobunuza değer katacak parçalar sunuyoruz.',
    },
    {
      icon: Gift,
      title: 'Kişiye Özel Deneyim',
      description: 'Her müşterimiz bizim için özeldir. Size en uygun stil ve bedeni bulmanız için buradayız.',
    },
    {
      icon: Scissors,
      title: 'Benzersiz Tasarımlar',
      description: 'Sıradanlıktan uzak, kendinizi ifade edebileceğiniz özgün ve şık tasarımlar.',
    },
    {
      icon: Smile,
      title: 'Mutlu Alışveriş',
      description: 'Kolay iade, hızlı kargo ve sürekli destek ile alışveriş deneyiminizi keyifli hale getiriyoruz.',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Tasarım & Seçim',
      description: 'Her sezon moda trendlerini analiz eder, kaliteli ve özgün parçaları sizin için özenle seçeriz.',
    },
    {
      step: '02',
      title: 'Kalite Kontrolü',
      description: 'Tüm ürünlerimiz depoya gelmeden önce detaylı kalite kontrolünden geçer.',
    },
    {
      step: '03',
      title: 'Özenli Paketleme',
      description: 'Siparişiniz özel paketleme ile hazırlanır ve size güvenle ulaştırılır.',
    },
    {
      step: '04',
      title: 'Hızlı Teslimat',
      description: 'Kargo sürecinizi adım adım takip edebilir, ürününüze hızlıca kavuşabilirsiniz.',
    },
  ];

  const stats = [
    { number: '50K+', label: 'Mutlu Müşteri' },
    { number: '500+', label: 'Ürün Çeşidi' },
    { number: '5 Yıl', label: 'Tecrübe' },
    { number: '%99', label: 'Memnuniyet' },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-pink-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hakkımızda
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95">
              Kadınların stil ve zarafetini yansıtan, kaliteli ve özgün tasarımlar sunuyoruz.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Bizim Hikayemiz
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-pink-600">Ladiora Boutique</strong>, kadınların gardıroplarına değer katacak, 
                  onları özel hissettirecek tasarımlar yaratma hayaliyle kuruldu.
                </p>
                <p>
                  Modern kadının dinamik yaşam tarzını anlayan ve bunu tasarımlarına yansıtan bir marka olarak, 
                  her kadının kendini ifade edebileceği, özgün ve kaliteli parçalar sunuyoruz.
                </p>
                <p>
                  Casual'dan şık gece kıyafetlerine, Hoodie Cape'lerden Kimono'lara kadar geniş ürün yelpazemizle, 
                  her tarza ve her anınıza uygun seçenekler sunmayı hedefliyoruz.
                </p>
                <p>
                  <strong>Kalite, özgünlük ve müşteri memnuniyeti</strong> bizim için vazgeçilmezdir. 
                  Her ürünümüz özenle seçilir, kalitesi test edilir ve sevgiyle size ulaştırılır.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1760287363707-851f4780b98c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYm91dGlxdWUlMjBzdG9yZSUyMGludGVyaW9yfGVufDF8fHx8MTc3NDU5ODQzNnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Ladiora Boutique"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-pink-600 to-purple-600 text-white p-6 rounded-xl shadow-xl">
                <p className="text-2xl font-bold mb-1">Yeni & Fresh</p>
                <p className="text-sm opacity-90">Taze Koleksiyonlar</p>
              </div>
            </div>
          </div>

          {/* Sizin İçin - What We Offer */}
          <div className="mb-20 bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 md:p-12">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
              Sizin İçin
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Ladiora Boutique olarak size özel olarak sunduğumuz değerler:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 hover:shadow-xl transition-shadow">
                  <div className="size-14 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="size-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Nasıl Çalışıyoruz - Process */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
              Nasıl Çalışıyoruz?
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Ürünleriniz sizlere ulaşana kadar geçen süreçteki adımlarımız:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <div key={index} className="relative group">
                  <div className="bg-white border-2 border-pink-200 rounded-2xl p-6 hover:shadow-xl hover:border-pink-400 transition-all">
                    <div className="size-16 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <span className="text-2xl font-bold text-white">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-center text-sm">
                      {item.description}
                    </p>
                  </div>
                  {/* Connector Line - Hidden on last item and mobile */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-3 w-6 h-0.5 bg-gradient-to-r from-pink-300 to-purple-300"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Values - Core Principles */}
          <div className="mb-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
              Temel Değerlerimiz
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Ladiora Boutique olarak, işimizin temelini oluşturan prensiplerimiz:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-xl p-6 hover:shadow-xl transition-shadow">
                  <div className="size-14 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <value.icon className="size-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-center text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-12 bg-pink-600 rounded-full flex items-center justify-center">
                  <Target className="size-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Misyonumuz</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Modern kadının ihtiyaçlarını anlayan, kaliteli ve uygun fiyatlı moda ürünlerini 
                Türkiye'nin her yerine ulaştırmak. Müşterilerimize güvenilir, keyifli ve 
                sorunsuz bir alışveriş deneyimi sunmak.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <Sparkles className="size-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Vizyonumuz</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Türkiye'nin en sevilen ve güvenilen online moda platformlarından biri olmak. 
                Her kadının stilini bulabileceği, kendini özel hissedebileceği bir marka olmak.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <img
                src="https://images.unsplash.com/photo-1753162657191-c8002d067f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29ya2luZyUyMGZhc2hpb24lMjBkZXNpZ258ZW58MXx8fHwxNzc0NjA5NjU2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Ekibimiz"
                className="rounded-xl shadow-xl"
              />
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-12 bg-pink-600 rounded-full flex items-center justify-center">
                    <Users className="size-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Ekibimiz</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Ladiora Boutique'i oluşturan tutkulu ve deneyimli ekibimiz, moda sektöründe 
                  uzman kişilerden oluşmaktadır. Tasarımcılarımızdan müşteri hizmetleri ekibimize, 
                  lojistik ekibimizden dijital pazarlama uzmanlarımıza kadar herkes, size en iyi 
                  hizmeti sunmak için çalışıyor.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-700">
                    <div className="size-2 bg-pink-600 rounded-full"></div>
                    <span>Profesyonel tasarım ekibi</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <div className="size-2 bg-pink-600 rounded-full"></div>
                    <span>Deneyimli müşteri hizmetleri</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <div className="size-2 bg-pink-600 rounded-full"></div>
                    <span>Hızlı ve güvenilir lojistik</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Neden Ladiora?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="size-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="size-10 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Kalite</h3>
                <p className="text-gray-600">
                  En kaliteli kumaşlar ve işçilik garantisi ile üretilen ürünler.
                </p>
              </div>
              <div className="text-center">
                <div className="size-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="size-10 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Hızlı Teslimat</h3>
                <p className="text-gray-600">
                  500 TL üzeri ücretsiz kargo ve 1-3 iş günü içinde teslimat.
                </p>
              </div>
              <div className="text-center">
                <div className="size-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="size-10 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Güvenli Alışveriş</h3>
                <p className="text-gray-600">
                  256-bit SSL sertifikası ile korunan ödeme altyapısı.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ladiora Ailesine Katılın
            </h2>
            <p className="text-xl mb-8 opacity-95">
              Yeni koleksiyonlarımızdan haberdar olmak ve özel fırsatları kaçırmamak için bizi takip edin!
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="/"
                className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Alışverişe Başla
              </a>
              <a
                href="/iletisim"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                Bize Ulaşın
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}