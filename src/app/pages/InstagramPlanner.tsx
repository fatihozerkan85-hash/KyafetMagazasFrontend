import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { 
  Calendar, 
  Copy, 
  Check, 
  Heart, 
  MessageCircle, 
  Send, 
  Bookmark,
  Hash,
  Sparkles,
  Image as ImageIcon,
  Clock,
  TrendingUp,
  Zap,
  RefreshCw
} from 'lucide-react';

interface ContentIdea {
  id: number;
  date: string;
  type: string;
  caption: string;
  hashtags: string;
  imagePrompt: string;
  bestTime: string;
}

export function InstagramPlanner() {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const contentCalendar: ContentIdea[] = [
    // Hafta 1
    {
      id: 1,
      date: '2 Nisan 2026',
      type: 'Ürün Tanıtımı',
      caption: '✨ Yeni koleksiyonumuzun incisi! 💕\n\nBu sezonun en şık hoodie cape\'i ile stilinizi tamamlayın. Hem rahat hem de zarif... 🌸\n\n🛍️ Şimdi Online\n📦 Hızlı Kargo\n💳 Güvenli Alışveriş',
      hashtags: '#ladiora #hoodie #moda #tarz #istanbul #butik #kadıngiyim #yenikoleksiyon #stil #trendler #fashion #ootd #instafashion #türkiye #alışveriş #butik #giyim',
      imagePrompt: 'Hoodie Cape ürün fotoğrafı',
      bestTime: '12:00 - 14:00'
    },
    {
      id: 2,
      date: '3 Nisan 2026',
      type: 'Motivasyon',
      caption: '"Her kadın kendi stilini yaratma özgürlüğüne sahiptir." 💫\n\nSen hangi stilini yansıtıyorsun? 🌺\n\n#ladiora',
      hashtags: '#motivasyon #kadın #güç #özgürlük #stil #benlik #özgüven #kadınlar #inspirasyon #quote #gününmotivasyonu',
      imagePrompt: 'Motivasyonel quote - minimalist tasarım',
      bestTime: '09:00 - 11:00'
    },
    {
      id: 3,
      date: '4 Nisan 2026',
      type: 'Stil Önerisi',
      caption: '🎀 Casual Chic Kombinasyon İpuçları:\n\n1️⃣ Rahat sweatshirt\n2️⃣ Yüksek bel pantolon\n3️⃣ Aksesuar detayları\n4️⃣ Şık ayakkabı\n\n= Mükemmel günlük stil! 💕\n\nSizin favori kombinasyonunuz nedir? 👇',
      hashtags: '#stilönerisi #kombin #moda #casual #streetstyle #fashiontips #ootd #outfit #stilrehberi #modaönerileri',
      imagePrompt: 'Outfit flat lay - casual kombinasyon',
      bestTime: '16:00 - 18:00'
    },
    {
      id: 4,
      date: '5 Nisan 2026',
      type: 'Ürün Tanıtımı',
      caption: '🌸 Kimono sevgisi! 🌸\n\nHem evde hem dışarıda rahatlıkla kullanabileceğiniz, zarafetinizi yansıtan kimono modellerimiz sizleri bekliyor.\n\n✨ Özel tasarımlar\n🎁 Hediye paketli\n🚚 Ücretsiz kargo (500₺ üzeri)',
      hashtags: '#kimono #ladiora #moda #zarif #rahat #evgiyim #özel #tasarım #butik #alışveriş #yeniürün',
      imagePrompt: 'Kimono ürün çekimi',
      bestTime: '13:00 - 15:00'
    },
    {
      id: 5,
      date: '6 Nisan 2026',
      type: 'Müşteri İlişkisi',
      caption: '💕 Cumartesi = Alışveriş Günü! 🛍️\n\nHaftasonunuz için kendinizi şımartın! Yeni gelenlere göz attınız mı? 👀\n\n🎉 Tüm ürünlerde özel fiyatlar\n🌟 Sınırlı stok\n⚡ Hızlı karar verin!',
      hashtags: '#cumartesi #haftasonu #alışveriş #özel #kampanya #indirim #ladiora #shopping #weekend',
      imagePrompt: 'Alışveriş temalı stil fotoğrafı',
      bestTime: '10:00 - 12:00'
    },
    {
      id: 6,
      date: '7 Nisan 2026',
      type: 'Behind the Scenes',
      caption: '📦 Siparişleriniz hazırlanıyor! 💕\n\nHer paket özenle, sevgiyle ve size özel olarak hazırlanıyor. ✨\n\n#ladiora ailesi olduğunuz için teşekkürler! 🌸',
      hashtags: '#behindthescenes #sipariş #paketleme #özen #sevgi #teşekkürler #müşterimemnuniyeti #ladiora',
      imagePrompt: 'Paketleme süreci, kutu, kurdele',
      bestTime: '15:00 - 17:00'
    },

    // Hafta 2
    {
      id: 7,
      date: '8 Nisan 2026',
      type: 'Ürün Tanıtımı',
      caption: '🌟 Yeni Hafta, Yeni Enerji! 💪\n\nSweatshirt koleksiyonumuzla haftaya rahat ve şık başlayın! \n\n✨ Premium kumaş\n🎨 Renk seçenekleri\n💯 Kalite garantisi',
      hashtags: '#yenihafta #pazartesi #sweatshirt #rahat #şık #kalite #ladiora #moda #giyim',
      imagePrompt: 'Sweatshirt ürün görseli',
      bestTime: '08:00 - 10:00'
    },
    {
      id: 8,
      date: '9 Nisan 2026',
      type: 'Eğitim İçeriği',
      caption: '📚 Kumaş Bakım Rehberi 101:\n\n🧺 30 derecede yıkayın\n🚫 Çamaşır suyu kullanmayın\n☀️ Ters çevirerek asın\n👕 Düşük ısıda ütüleyin\n\nÜrünleriniz uzun ömürlü olsun! 💕',
      hashtags: '#bakımrehberi #kumaş #giyimbakımı #ipuçları #pratikbilgiler #ladiora #tips',
      imagePrompt: 'Çamaşır makinesi, temiz giysiler',
      bestTime: '11:00 - 13:00'
    },
    {
      id: 9,
      date: '10 Nisan 2026',
      type: 'Ürün Tanıtımı',
      caption: '💎 Aksesuar Zamanı! ✨\n\nTakı & aksesuar koleksiyonumuzla kombininize son dokunuşu yapın. \n\n🌟 Özel tasarım\n💫 Her stile uygun\n🎁 Hediye seçeneği',
      hashtags: '#aksesuar #takı #jewelry #moda #detay #stil #ladiora #accessories #fashion',
      imagePrompt: 'Takı ve aksesuar koleksiyonu',
      bestTime: '14:00 - 16:00'
    },
    {
      id: 10,
      date: '11 Nisan 2026',
      type: 'Anket',
      caption: '🤔 Sizden Gelsin!\n\nYeni koleksiyonda hangi renkleri görmek istersiniz?\n\n💗 Pembe tonları\n🖤 Siyah & Beyaz\n🌈 Renkli desenler\n🤎 Toprak tonları\n\nYoruma yazın! 👇',
      hashtags: '#anket #sizdengelsin #renkler #moda #koleksiyon #ladiora #fashion #style',
      imagePrompt: 'Renk paleti, kumaş örnekleri',
      bestTime: '17:00 - 19:00'
    },
    {
      id: 11,
      date: '12 Nisan 2026',
      type: 'Stil Önerisi',
      caption: '🎀 Bahar Stilinizi Yakalayın!\n\n🌸 Hafif kumaşlar\n🦋 Pastel renkler\n✨ Floral desenler\n☀️ Havadar kesimler\n\nBahar enerjisiyle dolu! 💕',
      hashtags: '#bahar #spring #baharstili #pastel #moda #sezon #trendler #ladiora #springfashion',
      imagePrompt: 'Bahar konsepti giysi çekimi',
      bestTime: '12:00 - 14:00'
    },
    {
      id: 12,
      date: '13 Nisan 2026',
      type: 'Müşteri İlişkisi',
      caption: '🎊 Hafta Sonu Geldi! 🎉\n\nKendinize vakit ayırın, gardırobunuzu yenileyin! 🛍️\n\n💝 Özel indirimler\n🎁 Hediye çeki\n📦 Hızlı teslimat',
      hashtags: '#haftasonu #shopping #alışveriş #kendinevakit #şımartkendin #ladiora #weekend',
      imagePrompt: 'Shopping bag, hediye paketi',
      bestTime: '10:00 - 12:00'
    },

    // Hafta 3
    {
      id: 13,
      date: '14 Nisan 2026',
      type: 'Testimonial',
      caption: '💕 Müşteri Yorumları 💕\n\n"Ürün kalitesi harika, paketleme çok özenli. Ladiora\'yı herkese tavsiye ederim!" - Ayşe H.\n\nTeşekkürler! 🌸 Sizler için buradayız.\n\n#müşterimemnuniyeti',
      hashtags: '#yorumlar #müşteri #testimonial #kalite #hizmet #teşekkürler #ladiora',
      imagePrompt: '5 yıldız rating, mutlu müşteri konsepti',
      bestTime: '15:00 - 17:00'
    },
    {
      id: 14,
      date: '15 Nisan 2026',
      type: 'Ürün Tanıtımı',
      caption: '🧣 Şal Koleksiyonu! 🧣\n\nİnce, zarif ve her kombine uyum sağlayan şallarımızla tanışın.\n\n✨ Yumuşak dokular\n🎨 Zengin renk seçenekleri\n💫 4 mevsim kullanım',
      hashtags: '#şal #eşarp #aksesuar #stil #moda #ladiora #scarf #fashion #style',
      imagePrompt: 'Şal koleksiyonu, renkli şallar',
      bestTime: '13:00 - 15:00'
    },
    {
      id: 15,
      date: '16 Nisan 2026',
      type: 'Motivasyon',
      caption: '✨ Çarşamba Motivasyonu ✨\n\n"Stilin, kendini ifade etmenin en güzel yoludur." 💕\n\nBu hafta kendinizi nasıl ifade ediyorsunuz? 🌸',
      hashtags: '#motivasyon #çarşamba #stil #kendinikefet #özgüven #ladiora #inspiration',
      imagePrompt: 'Motivasyonel görsel, kadın silueti',
      bestTime: '09:00 - 11:00'
    },
    {
      id: 16,
      date: '17 Nisan 2026',
      type: 'Eğitim İçeriği',
      caption: '👗 Beden Seçim Rehberi:\n\n📏 Göğüs çevresi ölçün\n📐 Kalça çevresi ölçün\n📊 Beden tablosunu kontrol edin\n❓ Emin olamadınız mı? Bize yazın!\n\nDoğru beden = Mükemmel uyum! 💯',
      hashtags: '#bedenrehberi #ölçü #alışveriş #ipuçları #yardım #ladiora #sizetips',
      imagePrompt: 'Ölçü tablosu, ölçü şeridi',
      bestTime: '16:00 - 18:00'
    },
    {
      id: 17,
      date: '18 Nisan 2026',
      type: 'Ürün Tanıtımı',
      caption: '🌟 Premium Kumaş, Premium Hisset! 🌟\n\nCasual koleksiyonumuzun kalitesini hissetmeye hazır mısınız?\n\n💎 Birinci sınıf malzeme\n✂️ Kusursuz kesim\n🎯 Her bedende perfect fit',
      hashtags: '#casual #kalite #premium #kumaş #giyim #moda #ladiora #quality #fashion',
      imagePrompt: 'Casual giysi detay çekimi, kumaş dokusu',
      bestTime: '12:00 - 14:00'
    },
    {
      id: 18,
      date: '19 Nisan 2026',
      type: 'Weekend Vibes',
      caption: '🎉 Cumartesi Enerjisi! ☕\n\nBugün kendinize özel bir gün yapın! Yeni bir stil denemek için harika bir fırsat. 💕\n\n🛍️ Online alışveriş\n📱 Kolay sipariş\n💳 Güvenli ödeme',
      hashtags: '#cumartesi #weekend #kendinevakit #alışveriş #stil #yenilik #ladiora #saturday',
      imagePrompt: 'Kahve, laptop, alışveriş konsepti',
      bestTime: '10:00 - 12:00'
    },

    // Hafta 4
    {
      id: 19,
      date: '20 Nisan 2026',
      type: 'Behind the Scenes',
      caption: '📸 Kamera Arkası! 📸\n\nYeni koleksiyon çekimlerinden kareler... 🎬\n\n#comingsoon #yakında #yenikoleksiyon',
      hashtags: '#behindthescenes #photoshoot #çekim #yenikoleksiyon #hazırlık #ladiora #bts',
      imagePrompt: 'Fotoğraf çekimi, kamera, set',
      bestTime: '14:00 - 16:00'
    },
    {
      id: 20,
      date: '21 Nisan 2026',
      type: 'Pazartesi Motivasyonu',
      caption: '💪 Yeni Hafta, Yeni Fırsatlar! ✨\n\nBu hafta kendinize nasıl bir hediye alacaksınız? 🎁\n\n#yenihafta #motivasyon #pazartesi',
      hashtags: '#mondaymotivation #pazartesi #yenihafta #başlangıç #enerji #ladiora #motivation',
      imagePrompt: 'Motivasyonel, güneş doğuşu, yeni başlangıç',
      bestTime: '08:00 - 10:00'
    },
    {
      id: 21,
      date: '22 Nisan 2026',
      type: 'Stil İpuçları',
      caption: '💡 Stil İpucu:\n\nAynı renk ailesinden farklı tonlar kullanarak monokrom ve şık bir görünüm yakalayabilirsiniz! 🎨\n\nDenediniz mi? 👇',
      hashtags: '#stilipucu #moda #fashiontip #monokrom #stil #rehber #ladiora #styletips',
      imagePrompt: 'Monokrom outfit, aynı renk tonları',
      bestTime: '15:00 - 17:00'
    },
    {
      id: 22,
      date: '23 Nisan 2026',
      type: 'Özel Gün',
      caption: '🇹🇷 23 Nisan Ulusal Egemenlik ve Çocuk Bayramı Kutlu Olsun! 🇹🇷\n\nTüm çocuklarımızın gözleri gülsün! 💕\n\n#23nisan #bayram #çocukbayramı',
      hashtags: '#23nisan #ulusalegemenlik #çocukbayramı #bayram #türkiye #ladiora #celebration',
      imagePrompt: 'Türk bayrağı, çocuklar, bayram teması',
      bestTime: '10:00 - 12:00'
    },
    {
      id: 23,
      date: '24 Nisan 2026',
      type: 'Ürün Tanıtımı',
      caption: '✨ Yeni Sezon Favorilerimiz! ✨\n\nBu hafta en çok satanlarımız:\n\n1️⃣ Oversized Sweatshirt\n2️⃣ Hoodie Cape\n3️⃣ Floral Kimono\n\nHanginiz kaçırmaz? 🛍️',
      hashtags: '#bestseller #favoriler #yenikoleksiyon #moda #trendler #ladiora #musthave #fashion',
      imagePrompt: 'En çok satan ürünler, collage',
      bestTime: '13:00 - 15:00'
    },
    {
      id: 24,
      date: '25 Nisan 2026',
      type: 'Cuma Kampanya',
      caption: '🎉 Cuma Sürprizi! 🎉\n\nBugün özel indirim kodu: LADIORACUMA\n\n💰 %15 İndirim\n⏰ Sadece Bugün!\n🚀 Kaçırmayın!',
      hashtags: '#cuma #indirim #kampanya #özel #fırsat #ladiora #sale #discount #friday',
      imagePrompt: 'İndirim, sale, kampanya görseli',
      bestTime: '11:00 - 13:00'
    },
    {
      id: 25,
      date: '26 Nisan 2026',
      type: 'Weekend Vibes',
      caption: '☕ Hafta Sonu Keyfi! 🌸\n\nBir kahve, bir katalog, bir sürü yeni stil fikri... 💕\n\nSizin hafta sonu planınız ne? 👇',
      hashtags: '#haftasonu #cumartesi #keyif #relax #alışveriş #stil #ladiora #weekend #saturday',
      imagePrompt: 'Kahve, rahat ortam, moda dergisi',
      bestTime: '10:00 - 12:00'
    },

    // Hafta 5
    {
      id: 26,
      date: '27 Nisan 2026',
      type: 'Pazar Rahatlaması',
      caption: '🌿 Pazar = Kendine Vakit Günü 🌿\n\nBugün sadece kendiniz için bir şeyler yapın. Belki yeni bir stil denemek? 💕\n\n#selfcare #pazar',
      hashtags: '#pazar #sunday #selfcare #kendinevakit #relax #huzur #ladiora #sundayvibes',
      imagePrompt: 'Rahat ortam, self-care konsepti',
      bestTime: '14:00 - 16:00'
    },
    {
      id: 27,
      date: '28 Nisan 2026',
      type: 'Pazartesi Başlangıç',
      caption: '🚀 Pazartesi Enerjisi ile Başlayalım! 💪\n\nYeni hafta = Yeni fırsatlar = Yeni stiliniz!\n\n✨ Koleksiyona göz atın\n💕 Favorilerinizi seçin\n🛍️ Siparişinizi verin',
      hashtags: '#pazartesi #monday #yenihafta #başlangıç #enerji #moda #ladiora #mondaymood',
      imagePrompt: 'Enerjik başlangıç, coffee, planner',
      bestTime: '08:00 - 10:00'
    },
    {
      id: 28,
      date: '29 Nisan 2026',
      type: 'Müşteri Hikayesi',
      caption: '💕 Sizin Hikayeleriniz 💕\n\n"Ladiora\'dan aldığım hoodie cape\'i giymeden edemiyorum! Hem çok rahat hem de çok şık. Herkese soruyorlar!" - Zeynep K.\n\n🙏 Teşekkürler Zeynep! ✨',
      hashtags: '#müşterihikayesi #yorumlar #testimonial #mutlumüşteri #teşekkürler #ladiora #review',
      imagePrompt: 'Mutlu müşteri, gülümseme, 5 yıldız',
      bestTime: '16:00 - 18:00'
    },
    {
      id: 29,
      date: '30 Nisan 2026',
      type: 'Ayın Sonu Özeti',
      caption: '🌟 Nisan Ayı Kapanıyor! 🌟\n\nBu ay sizlerle olmak harika! Mayıs\'ta daha güzel sürprizlerle dönüyoruz! 💕\n\n📊 En çok satanlar\n💬 Yorumlarınız\n✨ Yeni tasarımlar\n\nTakipte kalın! 🚀',
      hashtags: '#ayınsonu #nisan #özet #teşekkürler #yeniay #ladiora #april #thankyou',
      imagePrompt: 'Aylık özet, kolaj, istatistik',
      bestTime: '12:00 - 14:00'
    },
    {
      id: 30,
      date: '1 Mayıs 2026',
      type: 'Yeni Ay Başlangıcı',
      caption: '🌸 Merhaba Mayıs! 🌸\n\nYeni ay, yeni koleksiyon, yeni fırsatlar sizi bekliyor! 💕\n\n✨ Yeni sezon ürünleri\n🎁 Özel kampanyalar\n📦 Hızlı teslimat',
      hashtags: '#mayıs #may #yeniay #yenikoleksiyon #bahar #moda #ladiora #newmonth #spring',
      imagePrompt: 'Mayıs çiçekleri, bahar, yeni başlangıç',
      bestTime: '09:00 - 11:00'
    }
  ];

  const categories = [
    { id: 'all', name: 'Tümü', count: contentCalendar.length },
    { id: 'Ürün Tanıtımı', name: 'Ürün Tanıtımı', count: contentCalendar.filter(c => c.type === 'Ürün Tanıtımı').length },
    { id: 'Motivasyon', name: 'Motivasyon', count: contentCalendar.filter(c => c.type === 'Motivasyon').length },
    { id: 'Stil Önerisi', name: 'Stil Önerisi', count: contentCalendar.filter(c => c.type === 'Stil Önerisi').length },
    { id: 'Müşteri İlişkisi', name: 'Müşteri İlişkisi', count: contentCalendar.filter(c => c.type === 'Müşteri İlişkisi').length },
  ];

  const filteredContent = selectedCategory === 'all' 
    ? contentCalendar 
    : contentCalendar.filter(c => c.type === selectedCategory);

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const copyFullPost = (content: ContentIdea) => {
    const fullText = `${content.caption}\n\n${content.hashtags}`;
    copyToClipboard(fullText, content.id);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl p-8 md:p-12 mb-8 text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="size-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Calendar className="size-8" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Instagram İçerik Planlayıcı</h1>
                <p className="text-white/90 text-lg mt-1">30 Günlük Hazır İçerik Takvimi</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="size-5" />
                  <span className="text-sm opacity-90">Toplam İçerik</span>
                </div>
                <p className="text-3xl font-bold">30</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Hash className="size-5" />
                  <span className="text-sm opacity-90">Hashtag Seti</span>
                </div>
                <p className="text-3xl font-bold">30</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <ImageIcon className="size-5" />
                  <span className="text-sm opacity-90">Görsel Öneri</span>
                </div>
                <p className="text-3xl font-bold">30</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="size-5" />
                  <span className="text-sm opacity-90">Saat Önerisi</span>
                </div>
                <p className="text-3xl font-bold">30</p>
              </div>
            </div>
          </div>

          {/* Quick Tips */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 border-2 border-pink-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="size-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="size-6 text-pink-600" />
                </div>
                <h3 className="font-bold text-gray-900">En İyi Saatler</h3>
              </div>
              <p className="text-sm text-gray-600">Öğle: 12:00-14:00, Akşam: 18:00-20:00 en yüksek etkileşim alır.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-purple-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="size-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Hash className="size-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900">Hashtag Stratejisi</h3>
              </div>
              <p className="text-sm text-gray-600">15-20 hashtag kullanın. Popüler + niche hashtag karışımı ideal.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-blue-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="size-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Zap className="size-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900">Tutarlılık</h3>
              </div>
              <p className="text-sm text-gray-600">Günde 1-2 gönderi, düzenli paylaşım yapın.</p>
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
                      ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat.name} ({cat.count})
                </button>
              ))}
            </div>
          </div>

          {/* Content Calendar */}
          <div className="grid gap-6">
            {filteredContent.map((content) => (
              <div key={content.id} className="bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-pink-200 transition-all hover:shadow-lg">
                <div className="grid md:grid-cols-12 gap-6 p-6">
                  {/* Left: Date & Type */}
                  <div className="md:col-span-2">
                    <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-4 text-center">
                      <Calendar className="size-8 text-pink-600 mx-auto mb-2" />
                      <p className="font-bold text-gray-900 mb-1">{content.date}</p>
                      <span className="inline-block bg-pink-600 text-white text-xs px-3 py-1 rounded-full">
                        {content.type}
                      </span>
                      <div className="mt-3 pt-3 border-t border-pink-200">
                        <Clock className="size-4 text-gray-600 mx-auto mb-1" />
                        <p className="text-xs text-gray-600">{content.bestTime}</p>
                      </div>
                    </div>
                  </div>

                  {/* Middle: Content */}
                  <div className="md:col-span-7 space-y-4">
                    {/* Caption */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-gray-900 flex items-center gap-2">
                          <MessageCircle className="size-5 text-pink-600" />
                          Gönderi Metni
                        </h3>
                        <button
                          onClick={() => copyToClipboard(content.caption, content.id * 10)}
                          className="text-sm text-pink-600 hover:text-pink-700 flex items-center gap-1"
                        >
                          {copiedId === content.id * 10 ? (
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
                      <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 whitespace-pre-line">
                        {content.caption}
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
                          onClick={() => copyToClipboard(content.hashtags, content.id * 10 + 1)}
                          className="text-sm text-purple-600 hover:text-purple-700 flex items-center gap-1"
                        >
                          {copiedId === content.id * 10 + 1 ? (
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
                        {content.hashtags}
                      </div>
                    </div>

                    {/* Image Prompt */}
                    <div>
                      <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-2">
                        <ImageIcon className="size-5 text-blue-600" />
                        Görsel Önerisi
                      </h3>
                      <div className="bg-blue-50 rounded-lg p-3 text-sm text-gray-700">
                        📸 {content.imagePrompt}
                      </div>
                    </div>
                  </div>

                  {/* Right: Actions & Preview */}
                  <div className="md:col-span-3">
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4">
                      <h4 className="font-bold text-gray-900 mb-3 text-sm">Instagram Önizleme</h4>
                      <div className="bg-white rounded-lg p-3 mb-4 border border-gray-200">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="size-8 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full"></div>
                          <span className="font-semibold text-sm">ladiora.boutique</span>
                        </div>
                        <div className="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg mb-3 flex items-center justify-center">
                          <ImageIcon className="size-12 text-gray-400" />
                        </div>
                        <div className="flex gap-3 mb-2 text-gray-700">
                          <Heart className="size-5" />
                          <MessageCircle className="size-5" />
                          <Send className="size-5" />
                          <Bookmark className="size-5 ml-auto" />
                        </div>
                        <p className="text-xs text-gray-600 line-clamp-2">{content.caption.split('\n')[0]}</p>
                      </div>

                      <button
                        onClick={() => copyFullPost(content)}
                        className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition-all flex items-center justify-center gap-2"
                      >
                        {copiedId === content.id ? (
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

                      <div className="mt-3 pt-3 border-t border-gray-300">
                        <p className="text-xs text-gray-600 text-center mb-2">Kullanım Önerisi:</p>
                        <div className="space-y-1 text-xs text-gray-600">
                          <div className="flex items-center gap-1">
                            <RefreshCw className="size-3" />
                            <span>İsterseniz metni düzenleyin</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <ImageIcon className="size-3" />
                            <span>Ürün fotoğrafı ekleyin</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="size-3" />
                            <span>Önerilen saatte paylaşın</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Tips */}
          <div className="mt-8 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 border-2 border-pink-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">💡 Kullanım İpuçları</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="flex gap-3">
                <div className="size-8 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <p className="font-semibold mb-1">İçerikleri Kişiselleştirin</p>
                  <p className="text-gray-600">Metinleri kendi markanıza uygun şekilde düzenleyin.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="size-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <p className="font-semibold mb-1">Ürün Görselleri Ekleyin</p>
                  <p className="text-gray-600">Her gönderi için kaliteli ürün fotoğrafları kullanın.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="size-8 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <p className="font-semibold mb-1">Zamanlamaya Dikkat Edin</p>
                  <p className="text-gray-600">Belirtilen saatlerde paylaşım yaparak daha fazla etkileşim alın.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="size-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <p className="font-semibold mb-1">Takipçilerinizle Etkileşime Geçin</p>
                  <p className="text-gray-600">Yorumlara cevap verin, soru sorun ve hikaye paylaşımı yapın.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
