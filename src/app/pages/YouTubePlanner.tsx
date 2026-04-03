import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { 
  Youtube, 
  Copy, 
  Check, 
  Video,
  Hash,
  Sparkles,
  Clock,
  TrendingUp,
  Eye,
  ThumbsUp,
  MessageSquare,
  Download,
  Calendar
} from 'lucide-react';

interface VideoIdea {
  id: number;
  week: string;
  title: string;
  description: string;
  hashtags: string;
  thumbnailIdea: string;
  duration: string;
  category: string;
  hooks: string[];
}

export function YouTubePlanner() {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'planner' | 'graphics'>('planner');

  const videoIdeas: VideoIdea[] = [
    // Hafta 1
    {
      id: 1,
      week: 'Hafta 1',
      title: '🌸 Bahar Koleksiyonu 2026 | Yeni Gelenler Tanıtımı | Ladiora',
      description: `Merhaba güzeller! 💕

Bugün sizlerle 2026 Bahar koleksiyonumuzu tanıtıyorum! Casual'dan kimono'ya, hoodie cape'den aksesuar'a kadar tüm yeni ürünlerimizi göreceksiniz.

🛍️ Videoda Göreceğiniz Ürünler:
✨ Bahar Sweatshirt Koleksiyonu
✨ Yeni Kimono Modelleri
✨ Hoodie Cape Çeşitleri
✨ Takı & Aksesuar Yenilikleri

🌐 Online Alışveriş: www.ladiora.com.tr
📦 Ücretsiz Kargo: 500₺ üzeri siparişlerde
💳 Güvenli Ödeme Seçenekleri

Beğenmeyi ve abone olmayı unutmayın! 🔔

#ladiora #baharkoleksiyonu #moda`,
      hashtags: '#ladiora #moda #fashion #yenikoleksiyon #bahar #spring #alışveriş #butik #kadıngiyim #ootd #fashionhaul #türkiye #istanbul #trend #style',
      thumbnailIdea: 'Renkli bahar ürünleri kolajı + "YENİ KOLEKSĠYON" büyük yazı + çekici yüz ifadesi',
      duration: '10-12 dakika',
      category: 'Koleksiyon Tanıtımı',
      hooks: [
        'Sizlere harika bir sürprizim var!',
        'Bu sezonun EN ÇOK SATACAK ürünlerini göstereceğim',
        'Koleksiyonu görmeden alışveriş yapmayın!'
      ]
    },
    {
      id: 2,
      week: 'Hafta 1',
      title: '5 Farklı Sweatshirt Kombini | Günlük Stil Önerileri | Ladiora',
      description: `Bir sweatshirt'le 5 farklı kombin! 👗

Günlük hayatta rahat ama şık görünmek isteyenler için harika stil önerileri hazırladım. Aynı sweatshirt'le tamamen farklı stiller yaratmanın püf noktalarını öğreneceksiniz!

📝 Kombinler:
1️⃣ Casual Günlük Stil
2️⃣ Spor Şık Kombin
3️⃣ Romantik Görünüm
4️⃣ İş için Kombin
5️⃣ Akşam Çıkışı Stili

💡 İpucu: Aksesuarlar her şeyi değiştirir!

🛍️ Videodaki tüm ürünler: www.ladiora.com.tr

Hangi kombin favoriniz oldu? Yorumlara yazın! 💕

#kombineönerileri #stilrehberi #moda`,
      hashtags: '#stilönerileri #kombin #moda #sweatshirt #fashion #ootd #styletips #outfit #casual #ladiora #türkiye #fashionblogger #stil #trend',
      thumbnailIdea: '5 farklı kombin fotoğrafı grid şeklinde + "5 KOMBĠN 1 SWEATSHIRT" yazısı',
      duration: '8-10 dakika',
      category: 'Stil Önerileri',
      hooks: [
        'Sadece bir sweatshirt ile 5 farklı stil!',
        'Bu kombinleri görünce şok olacaksınız',
        'Gardırobunuzu bu şekilde kullanmayı hiç düşündünüz mü?'
      ]
    },
    {
      id: 3,
      week: 'Hafta 2',
      title: 'Ladiora Behind the Scenes | Sipariş Hazırlığından Kargoya | Vlog',
      description: `Kamera arkası! 📦✨

Siparişleriniz nasıl hazırlanıyor, nasıl paketleniyor ve size nasıl ulaşıyor? Ladiora'nın bir günü!

🎬 Bu videoda:
📦 Sipariş alma ve kontrol süreci
🎁 Özenli paketleme aşamaları
✨ Kalite kontrol
🚚 Kargoya teslim
💕 Müşteri memnuniyeti için detaylar

Bizi daha yakından tanıyın! Her paket sevgiyle hazırlanıyor 💕

#ladiora #behindthescenes #kameraarkası`,
      hashtags: '#behindthescenes #vlog #ladiora #kameraarkası #işarkası #sipariş #paketleme #butik #moda #günlük #ecommerce #smallbusiness #türkiye',
      thumbnailIdea: 'Paketleme anı, mutlu yüz ifadesi + "KAMERA ARKASI" yazısı + paketler',
      duration: '6-8 dakika',
      category: 'Behind the Scenes',
      hooks: [
        'Siparişleriniz böyle hazırlanıyor!',
        'Her paketin özel hikayesi var',
        'Sizin için neler yapıyoruz göstereyim'
      ]
    },
    {
      id: 4,
      week: 'Hafta 2',
      title: 'Hoodie Cape Nasıl Kombinlenir? | 7 Farklı Stil | Ladiora',
      description: `Hoodie Cape Rehberi! 🧥✨

Hoodie Cape'inizi nasıl şık kombinlersiniz? 7 farklı stil önerisi ile karşınızdayım!

👗 Bu videoda:
✨ Günlük rahat kombinler
✨ Şık akşam çıkışları
✨ Spor aktiviteler için
✨ İş toplantıları için
✨ Cafe buluşmaları
✨ Alışveriş günü stili
✨ Ev ziyaretleri için

🎯 Her vücut tipine uygun ipuçları
💡 Aksesuar önerileri
👠 Ayakkabı kombinasyonları

www.ladiora.com.tr - Hoodie Cape koleksiyonu

Sizin favori kombinasyon tarzınız nedir? 💕

#hoodiecape #stilönerileri #moda`,
      hashtags: '#hoodiecape #hoodie #moda #stilönerileri #kombin #fashion #style #ootd #outfit #ladiora #türkiye #trend #fashionista #kadıngiyim',
      thumbnailIdea: 'Hoodie cape detay + şaşkın/heyecanlı yüz + "7 FARKLI STĠL" büyük yazı',
      duration: '10-12 dakika',
      category: 'Stil Önerileri',
      hooks: [
        'Hoodie Cape almayı düşünüyorsanız bu videoyu izleyin!',
        '7 farklı şekilde giyebilirsiniz',
        'Bu kadar çok yönlü olduğunu bilmiyordum'
      ]
    },
    {
      id: 5,
      week: 'Hafta 3',
      title: '500₺ ile Ladiora Alışverişi | Neler Aldım? | Shopping Haul',
      description: `500₺ bütçe ile Ladiora alışverişi! 🛍️💕

Sınırlı bütçe ile nasıl maksimum alışveriş yapılır? Hep birlikte görelim!

🛍️ Aldığım Ürünler:
✅ 2 adet sweatshirt
✅ 1 kimono
✅ Takı & aksesuar seti
✅ Şal

💰 Toplam: 500₺
🎁 Ücretsiz kargo kazandım!
📦 Paketleme çok özenli

🔥 İpuçları:
• Kampanyaları takip edin
• Kombinlenebilir ürünler seçin
• Temel parçalara yatırım yapın

www.ladiora.com.tr

Sizin bütçeniz ne kadar? Yorumlara yazın! 👇

#shoppinghaul #alışveriş #bütçelikombin`,
      hashtags: '#shoppinghaul #alışveriş #haul #ladiora #moda #fashion #shopping #bütçe #uygunfiyat #kombinönerileri #türkiye #youtube #vlog',
      thumbnailIdea: 'Alışveriş poşetleri + heyecanlı yüz + "500₺ ALIŞVERĠŞ" ve ürün sayısı',
      duration: '12-15 dakika',
      category: 'Shopping Haul',
      hooks: [
        '500₺ ile bunları aldım!',
        'Hiç bu kadar verimli alışveriş yapmamıştım',
        'Bütçe dostu lüks!'
      ]
    },
    {
      id: 6,
      week: 'Hafta 3',
      title: 'Bahar Trendleri 2026 | Neler Moda? | Fashion Trends | Ladiora',
      description: `2026 Bahar Trendleri! 🌸✨

Bu baharda neler moda? Hangi renkler, hangi desenler, hangi kesimler popüler? Hepsini anlattım!

🌸 Bahar 2026 Trendleri:
1️⃣ Pastel Tonlar
2️⃣ Oversized Kesimler
3️⃣ Floral Desenler
4️⃣ Minimalist Aksesuarlar
5️⃣ Rahat Kumaşlar
6️⃣ Doğal Renkler

💡 Nasıl Uygulanır:
✨ Kombinleme önerileri
✨ Alışveriş listeniz
✨ Bütçe dostu seçenekler

🛍️ Ladiora'da bahar koleksiyonu: www.ladiora.com.tr

Hangi trend favoriniz? 💕

#bahartrendleri #moda2026 #fashiontrends`,
      hashtags: '#trendler #bahar #moda #fashion #2026 #trends #spring #stil #ootd #ladiora #türkiye #fashionblogger #kadıngiyim #yenikoleksiyon',
      thumbnailIdea: 'Trend ürünler kolajı + "2026 TRENDLERĠ" + şaşkın ifade',
      duration: '8-10 dakika',
      category: 'Trend Analizi',
      hooks: [
        'Bu bahar bu trendler HER YERDE olacak!',
        '2026 moda dünyasını değiştiren trendler',
        'Bunları bilmeden alışverişe çıkmayın'
      ]
    },
    {
      id: 7,
      week: 'Hafta 4',
      title: 'Kimono ile 6 Farklı Look | Evden İşe Her Yere! | Ladiora',
      description: `Kimono Kombinleri! 👘✨

Bir kimono ne kadar çok yönlü olabilir? Bu videoda 6 farklı kullanım şekli göstereceğim!

👘 6 Farklı Kullanım:
1️⃣ Ev Günlük Rahat
2️⃣ Sahil Plaj Stili
3️⃣ Şık Akşam Yemeği
4️⃣ İş Toplantısı Over Layer
5️⃣ Cafe Buluşması
6️⃣ Özel Davet

🎯 Her Look için:
• Kombinleme ipuçları
• Aksesuar önerileri
• Ayakkabı seçimi
• Makyaj ve saç önerileri

www.ladiora.com.tr - Kimono koleksiyonu

Kimonolarınızı nasıl kullanıyorsunuz? 💕

#kimono #stilönerileri #moda`,
      hashtags: '#kimono #moda #stil #fashion #ootd #kombinönerileri #ladiora #türkiye #style #outfit #fashionista #trend #kadıngiyim #chic',
      thumbnailIdea: '6 farklı kimono stili grid + "6 FARKLI LOOK" yazısı',
      duration: '10-12 dakika',
      category: 'Stil Önerileri',
      hooks: [
        'Kimonoları sadece evde mi giyiyorsunuz?',
        'Bu kullanımları görmek şaşırtacak',
        'Gardırobunuzun en çok yönlü parçası!'
      ]
    },
    {
      id: 8,
      week: 'Hafta 4',
      title: 'Müşteri Yorumları Okuyorum | Q&A | Teşekkürler! | Ladiora',
      description: `Sizden gelen yorumlar! 💕✨

Müşterilerimizden gelen güzel yorumları okuyorum ve sorularınızı cevaplıyorum! Bu video sizler için! 🙏

📬 Bu videoda:
💕 Müşteri deneyimleri
⭐ 5 yıldızlı yorumlar
❓ En çok sorulan sorular
🎁 Küçük bir sürpriz duyuru

📝 Cevaplanan Sorular:
• Kargo süresi nasıl?
• Ürün kalitesi nasıl?
• Bedenler doğru mu geliyor?
• İade ve değişim süreci
• Kampanyalar ne zaman?

Teşekkürler! Sizler için buradayız! 💕

www.ladiora.com.tr

#müşterimemnuniyeti #teşekkürler #qanda`,
      hashtags: '#yorumlar #müşteri #testimonial #qanda #teşekkürler #ladiora #review #alışveriş #moda #türkiye #butik #ecommerce #online',
      thumbnailIdea: '5 yıldız emoji + mutlu yüz + "YORUMLARINIZ" yazısı + kalp emojileri',
      duration: '8-10 dakika',
      category: 'Müşteri İlişkileri',
      hooks: [
        'Yorumlarınız bizi çok mutlu etti!',
        'Sizin hikayelerinizi okuyorum',
        'En güzel geri bildirimler'
      ]
    },
    {
      id: 9,
      week: 'Hafta 5',
      title: 'Minimal Gardırop | 10 Parça ile 30 Kombin | Capsule Wardrobe | Ladiora',
      description: `Minimal Gardırop Rehberi! 👗✨

Sadece 10 temel parça ile 30 farklı kombin yapabilirsiniz! Minimalist yaşam ve akıllı alışveriş için ultimate rehber!

👗 10 Temel Parça:
1. Beyaz sweatshirt
2. Siyah kimono
3. Gri hoodie cape
4. Pembe sweatshirt
5. Siyah pantolon
6. Jean
7. Etek
8. Şal seti
9. Aksesuar seti
10. Temel ayakkabılar

🎯 30 Farklı Kombin Örnekleri
💡 Akıllı Alışveriş İpuçları
♻️ Sürdürülebilir Moda

www.ladiora.com.tr

#minimalgardırop #capsulewardrobe #sürdürülebilirmoda`,
      hashtags: '#minimal #capsulewardrobe #minimalist #gardırop #kombin #sürdürülebilir #moda #fashion #style #ootd #ladiora #türkiye #akıllıalışveriş',
      thumbnailIdea: '10 parça düzenli dizilmiş + "10 PARÇA 30 KOMBĠN" + minimalist estetik',
      duration: '15-18 dakika',
      category: 'Eğitim İçeriği',
      hooks: [
        'Gardırobunuzu küçültün, stilinizi büyütün!',
        'Az parça, çok kombin sırrı',
        'Minimalist olmak hiç bu kadar şık olmamıştı'
      ]
    },
    {
      id: 10,
      week: 'Hafta 5',
      title: 'Beden Seçimi Nasıl Yapılır? | Online Alışverişte Hata Yapmayın! | Ladiora',
      description: `Online Alışverişte Doğru Beden Seçimi! 📏✨

Online alışverişte en büyük sorun: Beden! Bu rehberle artık hata yapmayacaksınız!

📏 Bu videoda öğrenecekleriniz:
✅ Kendinizi nasıl ölçersiniz
✅ Beden tablosu nasıl okunur
✅ Farklı kesimler için ipuçları
✅ Oversized vs Regular fit
✅ İade-değişim süreçleri

🎯 Püf Noktaları:
• Göğüs çevresi ölçümü
• Kalça ölçümü
• Boy uzunluğu
• Kumaş esnekliği faktörü

📱 Emin olamadığınız zaman bize yazın!
www.ladiora.com.tr

#bedenseçimi #onlinealışveriş #ipuçları`,
      hashtags: '#bedenseçimi #onlinealışveriş #moda #alışveriş #ipucu #rehber #ladiora #türkiye #shopping #fashion #tips #ecommerce #guide',
      thumbnailIdea: 'Ölçü şeridi + beden tablosu + "DOĞRU BEDEN SEÇĠMĠ" yazısı',
      duration: '10-12 dakika',
      category: 'Eğitim İçeriği',
      hooks: [
        'Artık yanlış beden almayacaksınız!',
        'Online alışverişin sırrı bu videoda',
        'Binlerce lira iade masrafından kurtulun'
      ]
    },
    {
      id: 11,
      week: 'Hafta 6',
      title: 'Aksesuar Gücü! | Sade Kombini Nasıl Şıklaştırırız? | Ladiora',
      description: `Aksesuarların Gücü! 💎✨

Aynı sade kombin, farklı aksesuarlar ile tamamen değişiyor! İşte kanıtı!

💍 Bu videoda:
✨ Minimalist Takı Kullanımı
✨ Statement Aksesuar Seçimi
✨ Şal ve Eşarp Teknikleri
✨ Çanta Kombinleri
✨ Gözlük Kullanımı

🎯 3 Farklı Stil:
1️⃣ Minimal Şık
2️⃣ Bold & Dramatic
3️⃣ Boho Chic

Her stil için aksesuar kombinleri!

🛍️ www.ladiora.com.tr - Aksesuar koleksiyonu

Sizin aksesuar stiliniz nedir? 💕

#aksesuar #takı #stilönerileri`,
      hashtags: '#aksesuar #takı #jewelry #moda #stil #fashion #accessories #ootd #style #ladiora #türkiye #fashionista #trend #kombin',
      thumbnailIdea: 'Önce/sonra aksesuar karşılaştırması + "AKSESUAR GÜCÜ" yazısı',
      duration: '8-10 dakika',
      category: 'Stil Önerileri',
      hooks: [
        'Aksesuarlar HER ŞEYİ değiştirir!',
        'Aynı kıyafet, 3 farklı stil',
        'Bu dönüşümü görmeden aksesuara para harcamayın'
      ]
    },
    {
      id: 12,
      week: 'Hafta 6',
      title: 'Ladiora Yıl Sonu Kampanyası | Mega İndirim | Ne Almalı? | 2026',
      description: `MEGA İNDİRİM ZAMANI! 🔥🛍️

Yılın en büyük kampanyası başladı! Ne almalı, nasıl faydalanmalı, hepsi bu videoda!

🔥 Kampanya Detayları:
💰 %50'ye varan indirimler
🎁 2 al 1 öde fırsatları
📦 Ücretsiz kargo (tüm siparişlerde)
🎊 Özel hediye paketi

🛍️ Ne Almalı Listem:
✅ Temel sweatshirt'ler (stokla!)
✅ Kış sonu kimonoları
✅ Aksesuar setleri
✅ Yılbaşı hediye seçenekleri

⏰ Kampanya Sınırlı Süreli!
www.ladiora.com.tr

Yorumlara sepetinizdekileri yazın! 🛒💕

#indirim #kampanya #sale #alışveriş`,
      hashtags: '#sale #indirim #kampanya #alışveriş #shopping #moda #fashion #fırsat #ladiora #türkiye #blackfriday #discount #deals #haul',
      thumbnailIdea: 'İndirim etiketleri + şaşkın mutlu yüz + "%50 ĠNDĠRĠM" kırmızı yazı',
      duration: '12-15 dakika',
      category: 'Kampanya & İndirim',
      hooks: [
        'Yılın en büyük indirimi başladı!',
        'Bu fiyatları bir daha göremezsiniz',
        'Sepetimi doldurmaya hazırlanın!'
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'Tümü', count: videoIdeas.length },
    { id: 'Koleksiyon Tanıtımı', name: 'Koleksiyon Tanıtımı', count: videoIdeas.filter(v => v.category === 'Koleksiyon Tanıtımı').length },
    { id: 'Stil Önerileri', name: 'Stil Önerileri', count: videoIdeas.filter(v => v.category === 'Stil Önerileri').length },
    { id: 'Shopping Haul', name: 'Shopping Haul', count: videoIdeas.filter(v => v.category === 'Shopping Haul').length },
    { id: 'Eğitim İçeriği', name: 'Eğitim İçeriği', count: videoIdeas.filter(v => v.category === 'Eğitim İçeriği').length },
  ];

  const filteredVideos = selectedCategory === 'all' 
    ? videoIdeas 
    : videoIdeas.filter(v => v.category === selectedCategory);

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const copyFullVideo = (video: VideoIdea) => {
    const fullText = `BAŞLIK:\n${video.title}\n\nAÇIKLAMA:\n${video.description}\n\nHASHTAGLER:\n${video.hashtags}\n\nTHUMBNAIL ÖNERİSİ:\n${video.thumbnailIdea}`;
    copyToClipboard(fullText, video.id);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-3xl p-8 md:p-12 mb-8 text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="size-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Youtube className="size-8" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">YouTube İçerik Planlayıcı</h1>
                <p className="text-white/90 text-lg mt-1">12 Haftalık Video Fikirleri + Kanal Görselleri</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={() => setActiveTab('planner')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === 'planner'
                    ? 'bg-white text-red-600'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                📹 Video Fikirleri
              </button>
              <button
                onClick={() => setActiveTab('graphics')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === 'graphics'
                    ? 'bg-white text-red-600'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                🎨 Kanal Görselleri
              </button>
            </div>

            {activeTab === 'planner' && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Video className="size-5" />
                    <span className="text-sm opacity-90">Video Fikri</span>
                  </div>
                  <p className="text-3xl font-bold">{videoIdeas.length}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Hash className="size-5" />
                    <span className="text-sm opacity-90">Hashtag Seti</span>
                  </div>
                  <p className="text-3xl font-bold">{videoIdeas.length}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="size-5" />
                    <span className="text-sm opacity-90">Thumbnail Fikri</span>
                  </div>
                  <p className="text-3xl font-bold">{videoIdeas.length}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="size-5" />
                    <span className="text-sm opacity-90">Süre Önerisi</span>
                  </div>
                  <p className="text-3xl font-bold">{videoIdeas.length}</p>
                </div>
              </div>
            )}
          </div>

          {activeTab === 'planner' ? (
            <>
              {/* Quick Tips */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 border-2 border-red-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="size-12 bg-red-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="size-6 text-red-600" />
                    </div>
                    <h3 className="font-bold text-gray-900">İlk 24 Saat</h3>
                  </div>
                  <p className="text-sm text-gray-600">İlk 24 saatte aldığınız etkileşim algoritma için kritik. İlk saatlerde tanıtım yapın.</p>
                </div>
                <div className="bg-white rounded-xl p-6 border-2 border-pink-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="size-12 bg-pink-100 rounded-full flex items-center justify-center">
                      <Eye className="size-6 text-pink-600" />
                    </div>
                    <h3 className="font-bold text-gray-900">Thumbnail</h3>
                  </div>
                  <p className="text-sm text-gray-600">Thumbnail tıklama oranının %50'sini etkiler. Canlı renkler ve net yazı kullanın.</p>
                </div>
                <div className="bg-white rounded-xl p-6 border-2 border-purple-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="size-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Clock className="size-6 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-gray-900">Süre</h3>
                  </div>
                  <p className="text-sm text-gray-600">8-12 dakika ideal. İzleyici tutma oranını yüksek tutun.</p>
                </div>
              </div>

              {/* Category Filter */}
              <div className="bg-white rounded-xl p-4 mb-6 border border-gray-200">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-semibold text-gray-700 mr-2">Filtrele:</span>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedCategory === cat.id
                          ? 'bg-gradient-to-r from-red-600 to-pink-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {cat.name} ({cat.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Video Ideas */}
              <div className="grid gap-6">
                {filteredVideos.map((video) => (
                  <div key={video.id} className="bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-red-200 transition-all hover:shadow-lg">
                    <div className="grid md:grid-cols-12 gap-6 p-6">
                      {/* Left: Week & Category */}
                      <div className="md:col-span-2">
                        <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-4 text-center">
                          <Calendar className="size-8 text-red-600 mx-auto mb-2" />
                          <p className="font-bold text-gray-900 mb-1">{video.week}</p>
                          <span className="inline-block bg-red-600 text-white text-xs px-3 py-1 rounded-full mb-3">
                            {video.category}
                          </span>
                          <div className="pt-3 border-t border-red-200">
                            <Clock className="size-4 text-gray-600 mx-auto mb-1" />
                            <p className="text-xs text-gray-600">{video.duration}</p>
                          </div>
                        </div>
                      </div>

                      {/* Middle: Content */}
                      <div className="md:col-span-7 space-y-4">
                        {/* Title */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-bold text-gray-900 flex items-center gap-2">
                              <Video className="size-5 text-red-600" />
                              Video Başlığı
                            </h3>
                            <button
                              onClick={() => copyToClipboard(video.title, video.id * 100)}
                              className="text-sm text-red-600 hover:text-red-700 flex items-center gap-1"
                            >
                              {copiedId === video.id * 100 ? (
                                <>
                                  <Check className="size-4" />
                                  Kopyalandı
                                </>
                              ) : (
                                <>
                                  <Copy className="size-4" />
                                  Kopyala
                                </>
                              )}
                            </button>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-4 text-sm font-semibold text-gray-800">
                            {video.title}
                          </div>
                        </div>

                        {/* Description */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-bold text-gray-900 flex items-center gap-2">
                              <MessageSquare className="size-5 text-pink-600" />
                              Açıklama
                            </h3>
                            <button
                              onClick={() => copyToClipboard(video.description, video.id * 100 + 1)}
                              className="text-sm text-pink-600 hover:text-pink-700 flex items-center gap-1"
                            >
                              {copiedId === video.id * 100 + 1 ? (
                                <>
                                  <Check className="size-4" />
                                  Kopyalandı
                                </>
                              ) : (
                                <>
                                  <Copy className="size-4" />
                                  Kopyala
                                </>
                              )}
                            </button>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 whitespace-pre-line max-h-60 overflow-y-auto">
                            {video.description}
                          </div>
                        </div>

                        {/* Hashtags */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-bold text-gray-900 flex items-center gap-2">
                              <Hash className="size-5 text-purple-600" />
                              Hashtag'ler
                            </h3>
                            <button
                              onClick={() => copyToClipboard(video.hashtags, video.id * 100 + 2)}
                              className="text-sm text-purple-600 hover:text-purple-700 flex items-center gap-1"
                            >
                              {copiedId === video.id * 100 + 2 ? (
                                <>
                                  <Check className="size-4" />
                                  Kopyalandı
                                </>
                              ) : (
                                <>
                                  <Copy className="size-4" />
                                  Kopyala
                                </>
                              )}
                            </button>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-4 text-xs text-gray-600">
                            {video.hashtags}
                          </div>
                        </div>

                        {/* Thumbnail Idea */}
                        <div>
                          <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-2">
                            <Sparkles className="size-5 text-blue-600" />
                            Thumbnail Önerisi
                          </h3>
                          <div className="bg-blue-50 rounded-lg p-3 text-sm text-gray-700">
                            🎨 {video.thumbnailIdea}
                          </div>
                        </div>

                        {/* Hooks */}
                        <div>
                          <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-2">
                            <TrendingUp className="size-5 text-green-600" />
                            Video Açılış Hook'ları
                          </h3>
                          <div className="bg-green-50 rounded-lg p-3 text-sm space-y-1">
                            {video.hooks.map((hook, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <span className="text-green-600 font-bold">{idx + 1}.</span>
                                <span className="text-gray-700">{hook}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right: Preview & Actions */}
                      <div className="md:col-span-3">
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4">
                          <h4 className="font-bold text-gray-900 mb-3 text-sm">YouTube Önizleme</h4>
                          <div className="bg-white rounded-lg p-3 mb-4 border border-gray-200">
                            <div className="aspect-video bg-gradient-to-br from-red-100 to-pink-100 rounded-lg mb-3 flex items-center justify-center">
                              <Youtube className="size-12 text-gray-400" />
                            </div>
                            <p className="text-xs font-semibold text-gray-900 mb-2 line-clamp-2">{video.title}</p>
                            <div className="flex items-center gap-2 mb-2">
                              <div className="size-6 bg-gradient-to-r from-red-600 to-pink-600 rounded-full"></div>
                              <span className="text-xs font-medium">Ladiora Boutique</span>
                            </div>
                            <div className="flex gap-3 text-xs text-gray-600">
                              <div className="flex items-center gap-1">
                                <Eye className="size-3" />
                                <span>1.2K</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <ThumbsUp className="size-3" />
                                <span>89</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MessageSquare className="size-3" />
                                <span>24</span>
                              </div>
                            </div>
                          </div>

                          <button
                            onClick={() => copyFullVideo(video)}
                            className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-pink-700 transition-all flex items-center justify-center gap-2 mb-3"
                          >
                            {copiedId === video.id ? (
                              <>
                                <Check className="size-5" />
                                Kopyalandı!
                              </>
                            ) : (
                              <>
                                <Copy className="size-5" />
                                Tümünü Kopyala
                              </>
                            )}
                          </button>

                          <div className="pt-3 border-t border-gray-300 text-xs text-gray-600">
                            <p className="font-semibold mb-2">📝 Kullanım İpuçları:</p>
                            <ul className="space-y-1">
                              <li>• Başlığı kişiselleştirin</li>
                              <li>• Açıklamaya link ekleyin</li>
                              <li>• Thumbnail'i tasarlayın</li>
                              <li>• İlk 24 saatte tanıtın</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            /* Graphics Tab */
            <div className="space-y-8">
              {/* Channel Banner */}
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Youtube className="size-8 text-red-600" />
                  YouTube Kanal Banner
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Banner Design 1 */}
                  <div className="space-y-4">
                    <div className="relative aspect-[16/9] bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl overflow-hidden">
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                        <h1 className="text-4xl font-bold mb-2">LADIORA</h1>
                        <p className="text-xl mb-4">Boutique Fashion</p>
                        <p className="text-sm opacity-90">Stil Rehberi | Moda İpuçları | Alışveriş</p>
                      </div>
                    </div>
                    <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                      <Download className="size-5" />
                      Banner 1 İndir (2560x1440)
                    </button>
                    <p className="text-xs text-gray-600 text-center">Gradient Tasarım - Modern & Şık</p>
                  </div>

                  {/* Banner Design 2 */}
                  <div className="space-y-4">
                    <div className="relative aspect-[16/9] bg-white rounded-xl overflow-hidden border-4 border-pink-200">
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">LADIORA</h1>
                        <p className="text-xl text-gray-800 mb-4">🌸 Fashion & Style 🌸</p>
                        <p className="text-sm text-gray-600">www.ladiora.com.tr</p>
                      </div>
                    </div>
                    <button className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors flex items-center justify-center gap-2">
                      <Download className="size-5" />
                      Banner 2 İndir (2560x1440)
                    </button>
                    <p className="text-xs text-gray-600 text-center">Minimalist Beyaz - Temiz & Profesyonel</p>
                  </div>
                </div>
              </div>

              {/* Profile Picture */}
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Sparkles className="size-8 text-pink-600" />
                  YouTube Profil Resmi
                </h2>
                
                <div className="grid md:grid-cols-4 gap-6">
                  {/* Profile Design 1 */}
                  <div className="space-y-3">
                    <div className="aspect-square bg-gradient-to-br from-pink-600 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-6xl font-bold">L</span>
                    </div>
                    <button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
                      İndir (800x800)
                    </button>
                    <p className="text-xs text-gray-600 text-center">Gradient Logo</p>
                  </div>

                  {/* Profile Design 2 */}
                  <div className="space-y-3">
                    <div className="aspect-square bg-white border-4 border-pink-600 rounded-full flex items-center justify-center">
                      <span className="text-pink-600 text-6xl font-bold">L</span>
                    </div>
                    <button className="w-full bg-pink-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-pink-700 transition-colors">
                      İndir (800x800)
                    </button>
                    <p className="text-xs text-gray-600 text-center">Beyaz Zemin</p>
                  </div>

                  {/* Profile Design 3 */}
                  <div className="space-y-3">
                    <div className="aspect-square bg-pink-100 rounded-full flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-pink-600 text-4xl font-bold block">LADIORA</span>
                      </div>
                    </div>
                    <button className="w-full bg-pink-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-pink-700 transition-colors">
                      İndir (800x800)
                    </button>
                    <p className="text-xs text-gray-600 text-center">Text Logo</p>
                  </div>

                  {/* Profile Design 4 */}
                  <div className="space-y-3">
                    <div className="aspect-square bg-gradient-to-br from-red-600 to-pink-600 rounded-full flex items-center justify-center p-6">
                      <div className="bg-white rounded-full w-full h-full flex items-center justify-center">
                        <span className="text-pink-600 text-5xl font-bold">L</span>
                      </div>
                    </div>
                    <button className="w-full bg-red-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors">
                      İndir (800x800)
                    </button>
                    <p className="text-xs text-gray-600 text-center">Ring Logo</p>
                  </div>
                </div>
              </div>

              {/* Thumbnail Templates */}
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Video className="size-8 text-red-600" />
                  Video Thumbnail Şablonları
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Thumbnail Template 1 */}
                  <div className="space-y-3">
                    <div className="aspect-video bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex items-center justify-center relative overflow-hidden">
                      <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-sm">
                        YENİ!
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-gray-900">BAŞLIK</p>
                        <p className="text-lg text-gray-600 mt-2">Alt Başlık</p>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold">
                        10:24
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
                      Şablon 1 İndir (1280x720)
                    </button>
                    <p className="text-xs text-gray-600 text-center">Klasik Düzen - Genel Kullanım</p>
                  </div>

                  {/* Thumbnail Template 2 */}
                  <div className="space-y-3">
                    <div className="aspect-video bg-white rounded-xl flex items-center justify-center relative overflow-hidden border-4 border-pink-600">
                      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 text-center">
                        <p className="font-bold text-lg">LADIORA</p>
                      </div>
                      <div className="text-center mt-8">
                        <p className="text-4xl font-bold text-pink-600">%50</p>
                        <p className="text-xl text-gray-900 mt-2">İNDİRİM</p>
                      </div>
                    </div>
                    <button className="w-full bg-pink-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-pink-700 transition-colors">
                      Şablon 2 İndir (1280x720)
                    </button>
                    <p className="text-xs text-gray-600 text-center">Kampanya Özel - İndirim Videoları</p>
                  </div>

                  {/* Thumbnail Template 3 */}
                  <div className="space-y-3">
                    <div className="aspect-video bg-gradient-to-r from-red-600 to-pink-600 rounded-xl flex items-center justify-center relative overflow-hidden">
                      <div className="text-white text-center">
                        <p className="text-5xl font-bold">5</p>
                        <p className="text-2xl mt-2">KOMBİN</p>
                        <p className="text-lg mt-1">1 ÜRÜN</p>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="bg-yellow-400 text-gray-900 w-16 h-16 rounded-full flex items-center justify-center font-bold">
                          YENİ
                        </div>
                      </div>
                    </div>
                    <button className="w-full bg-red-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors">
                      Şablon 3 İndir (1280x720)
                    </button>
                    <p className="text-xs text-gray-600 text-center">Sayı Odaklı - Liste Videoları</p>
                  </div>

                  {/* Thumbnail Template 4 */}
                  <div className="space-y-3">
                    <div className="aspect-video bg-pink-50 rounded-xl flex items-center justify-center relative overflow-hidden border-2 border-pink-200">
                      <div className="grid grid-cols-2 gap-2 p-4 w-full h-full">
                        <div className="bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg"></div>
                        <div className="bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg"></div>
                        <div className="bg-gradient-to-br from-red-200 to-pink-200 rounded-lg"></div>
                        <div className="bg-gradient-to-br from-pink-200 to-red-200 rounded-lg"></div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white px-6 py-3 rounded-xl shadow-lg">
                          <p className="text-2xl font-bold text-gray-900">HAUL</p>
                        </div>
                      </div>
                    </div>
                    <button className="w-full bg-pink-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-pink-700 transition-colors">
                      Şablon 4 İndir (1280x720)
                    </button>
                    <p className="text-xs text-gray-600 text-center">Grid Düzen - Alışveriş Haul</p>
                  </div>
                </div>
              </div>

              {/* Info Box */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-2 border-blue-200">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Sparkles className="size-5 text-blue-600" />
                  Görsel Kullanım İpuçları
                </h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="font-semibold mb-1">📐 Banner Boyutu:</p>
                    <p className="text-xs">2560x1440 px (min: 2048x1152)</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">🖼️ Profil Resmi:</p>
                    <p className="text-xs">800x800 px (min: 98x98)</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">🎬 Thumbnail:</p>
                    <p className="text-xs">1280x720 px (16:9 oran)</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-4">
                  💡 <strong>İpucu:</strong> Banner'ın ortasındaki 1546x423 px alan tüm cihazlarda görünür. Önemli bilgileri bu alana yerleştirin.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
