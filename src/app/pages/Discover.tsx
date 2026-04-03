import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { 
  TrendingUp, 
  Sparkles, 
  Heart,
  BookOpen,
  Calendar,
  ArrowRight,
  Clock,
  User,
  Tag,
  Share2,
  Bookmark
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  featured?: boolean;
  tags: string[];
}

export function Discover() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>([]);

  const categories = [
    { id: 'all', name: 'Tümü', icon: Sparkles },
    { id: 'trend', name: 'Trendler', icon: TrendingUp },
    { id: 'stil', name: 'Stil Rehberi', icon: BookOpen },
    { id: 'bakım', name: 'Bakım & Güzellik', icon: Heart },
    { id: 'kampanya', name: 'Kampanyalar', icon: Tag },
    { id: 'hikaye', name: 'Hikayeler', icon: User },
  ];

  const articles: Article[] = [
    // Featured Article
    {
      id: 1,
      title: '2026 Bahar Trendleri: Pastel Tonlar ve Rahat Kesimler',
      excerpt: 'Bu baharda gardırobunuza mutlaka eklemeniz gereken renkler, desenler ve modeller. Uzmanlarımızdan özel stil önerileri ile sezonun gözdesi olun.',
      category: 'trend',
      readTime: '8 dk',
      date: '3 Nisan 2026',
      author: 'Elif Yılmaz',
      image: 'https://images.unsplash.com/photo-1619032468883-89a84f565cba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcHJpbmclMjBmYXNoaW9uJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc1MjQxNzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: true,
      tags: ['Bahar', 'Trendler', 'Pastel', 'Stil Önerileri']
    },
    {
      id: 2,
      title: 'Minimal Gardırop: Daha Az Parça ile Daha Çok Stil',
      excerpt: 'Capsule wardrobe (kapsül gardırop) trendi nedir? Az ama öz parçalarla nasıl şık kombinler yapabilirsiniz? Sürdürülebilir moda için ipuçları.',
      category: 'stil',
      readTime: '6 dk',
      date: '2 Nisan 2026',
      author: 'Ayşe Demir',
      image: 'https://images.unsplash.com/photo-1765766600589-ddad380d6534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd2FyZHJvYmUlMjBzdHlsZXxlbnwxfHx8fDE3NzUxNzQzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false,
      tags: ['Minimalizm', 'Gardırop', 'Sürdürülebilir']
    },
    {
      id: 3,
      title: 'Kimono ile 10 Farklı Kombin Fikri',
      excerpt: 'Gardırobunuzun en çok yönlü parçası olan kimonoyu nasıl şık kombinleyebilirsiniz? Her tarza uygun öneriler ve püf noktaları.',
      category: 'stil',
      readTime: '5 dk',
      date: '1 Nisan 2026',
      author: 'Zeynep Kaya',
      image: 'https://images.unsplash.com/photo-1758900728025-3d70604871c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwdHJlbmQlMjBsb29rYm9va3xlbnwxfHx8fDE3NzUyNDE3NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false,
      tags: ['Kimono', 'Kombin', 'Stil']
    },
    {
      id: 4,
      title: 'Aksesuar Seçiminde Altın Kurallar',
      excerpt: 'Takı, çanta, eşarp ve şapka seçiminde dikkat edilmesi gerekenler. Sade kıyafetlerinizi nasıl aksesuarlarla zenginleştirebilirsiniz?',
      category: 'stil',
      readTime: '4 dk',
      date: '31 Mart 2026',
      author: 'Selin Aydın',
      image: 'https://images.unsplash.com/photo-1769116416641-e714b71851e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYWNjZXNzb3JpZXMlMjBqZXdlbHJ5fGVufDF8fHx8MTc3NTE4ODI1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false,
      tags: ['Aksesuar', 'Takı', 'Stil İpuçları']
    },
    {
      id: 5,
      title: 'Cilt Bakımı: Bahar Rutini Nasıl Olmalı?',
      excerpt: 'Mevsim geçişlerinde cildiniz için özel bakım rutinleri. Uzman dermatolojlardan bahar aylarına özel cilt bakım önerileri.',
      category: 'bakım',
      readTime: '7 dk',
      date: '30 Mart 2026',
      author: 'Dr. Deniz Çelik',
      image: 'https://images.unsplash.com/photo-1613950506315-c1ddbc19857c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZhc2hpb24lMjBwb3J0cmFpdCUyMHBpbmt8ZW58MXx8fHwxNzc1MjQxNzQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false,
      tags: ['Cilt Bakımı', 'Güzellik', 'Bahar']
    },
    {
      id: 6,
      title: 'Sürdürülebilir Moda: Bilinçli Alışveriş Rehberi',
      excerpt: 'Çevreye duyarlı moda alışverişi nasıl yapılır? Sürdürülebilir markaları nasıl tanırsınız? Eco-friendly gardırop için ipuçları.',
      category: 'trend',
      readTime: '6 dk',
      date: '29 Mart 2026',
      author: 'Merve Öztürk',
      image: 'https://images.unsplash.com/photo-1749813991859-8953e5b4dd26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGZhc2hpb24lMjBlY298ZW58MXx8fHwxNzc1MjQxNzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false,
      tags: ['Sürdürülebilir', 'Eco-Friendly', 'Bilinçli Tüketim']
    },
    {
      id: 7,
      title: 'Street Style Trendleri: Sokak Modasından İlham',
      excerpt: 'Dünya başkentlerinden en yeni sokak stili trendleri. Casual şıklığı nasıl yakalarsınız? İlham verici kombinler.',
      category: 'trend',
      readTime: '5 dk',
      date: '28 Mart 2026',
      author: 'Can Yıldız',
      image: 'https://images.unsplash.com/photo-1635769733436-7494a140d309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBzdHJlZXQlMjBzdHlsZSUyMHdvbWFufGVufDF8fHx8MTc3NTI0MTc0NXww&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false,
      tags: ['Street Style', 'Casual', 'Trendler']
    },
    {
      id: 8,
      title: 'Bahar İndirimi: %50\'ye Varan Fırsatlar!',
      excerpt: 'Bahar koleksiyonunda sınırlı süreli kampanya! Sezonun en sevilen parçalarında büyük indirimler. Kaçırmayın!',
      category: 'kampanya',
      readTime: '2 dk',
      date: '27 Mart 2026',
      author: 'Ladiora Ekibi',
      image: 'https://images.unsplash.com/photo-1768033976309-b236cbd34509?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY29sb3IlMjBwYWxldHRlJTIwcGFzdGVsfGVufDF8fHx8MTc3NTI0MTc0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false,
      tags: ['İndirim', 'Kampanya', 'Fırsat']
    },
    {
      id: 9,
      title: 'Ladiora Butik: Kurucumuzun Hikayesi',
      excerpt: 'Bir hayalin gerçeğe dönüşme hikayesi. Ladiora\'nın kuruluş öyküsü ve bizim moda felsefemiz. Sizlerle tanışma zamanı.',
      category: 'hikaye',
      readTime: '10 dk',
      date: '26 Mart 2026',
      author: 'Lara Duman',
      image: 'https://images.unsplash.com/photo-1605217613423-0a61bd725c8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYm91dGlxdWUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzUxOTY3NTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false,
      tags: ['Hikaye', 'Ladiora', 'Marka']
    },
    {
      id: 10,
      title: 'Renk Teorisi: Hangi Renkler Size Yakışır?',
      excerpt: 'Cilt tonunuza göre renk seçimi nasıl yapılır? Renk paleti testleri ve kişisel renk analizi ile stilinizi keşfedin.',
      category: 'stil',
      readTime: '8 dk',
      date: '25 Mart 2026',
      author: 'Esra Arslan',
      image: 'https://images.unsplash.com/photo-1641137806473-5fe07dd62d63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbWFnYXppbmUlMjBlZGl0b3JpYWwlMjBzdHlsZXxlbnwxfHx8fDE3NzUyNDE3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false,
      tags: ['Renk Teorisi', 'Stil', 'Kişisel Analiz']
    },
  ];

  const filteredArticles = selectedCategory === 'all'
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  const toggleBookmark = (id: number) => {
    setBookmarkedIds(prev =>
      prev.includes(id) ? prev.filter(bookmarkId => bookmarkId !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-pink-600 to-red-600 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Keşfet</h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
                Moda, stil, güzellik ve yaşam tarzı hakkında ilham verici içerikler
              </p>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="sticky top-[150px] z-40 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
              {categories.map(category => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-pink-600 to-red-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Icon className="size-5" />
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          {selectedCategory === 'all' && featuredArticle && (
            <>
              {/* Featured Article */}
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="size-6 text-pink-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Öne Çıkan</h2>
                </div>
                
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                      <ImageWithFallback
                        src={featuredArticle.image}
                        alt={featuredArticle.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block bg-gradient-to-r from-pink-600 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          ⭐ Öne Çıkan
                        </span>
                      </div>
                      <button
                        onClick={() => toggleBookmark(featuredArticle.id)}
                        className="absolute top-4 right-4 size-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                      >
                        <Bookmark
                          className={`size-5 ${
                            bookmarkedIds.includes(featuredArticle.id)
                              ? 'fill-pink-600 text-pink-600'
                              : 'text-gray-700'
                          }`}
                        />
                      </button>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="size-4" />
                          {featuredArticle.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="size-4" />
                          {featuredArticle.readTime}
                        </span>
                      </div>

                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                        {featuredArticle.title}
                      </h3>

                      <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                        {featuredArticle.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {featuredArticle.tags.map(tag => (
                          <span
                            key={tag}
                            className="inline-block bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="size-10 bg-gradient-to-r from-pink-600 to-red-600 rounded-full flex items-center justify-center text-white font-bold">
                            {featuredArticle.author[0]}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{featuredArticle.author}</p>
                            <p className="text-sm text-gray-600">Moda Editörü</p>
                          </div>
                        </div>

                        <button className="group/btn flex items-center gap-2 bg-gradient-to-r from-pink-600 to-red-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
                          Devamını Oku
                          <ArrowRight className="size-5 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="mb-12">
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                  <TrendingUp className="size-6 text-pink-600" />
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                </div>
              </div>
            </>
          )}

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map(article => (
              <article
                key={article.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <button
                    onClick={() => toggleBookmark(article.id)}
                    className="absolute top-3 right-3 size-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <Bookmark
                      className={`size-4 ${
                        bookmarkedIds.includes(article.id)
                          ? 'fill-pink-600 text-pink-600'
                          : 'text-gray-700'
                      }`}
                    />
                  </button>
                  <div className="absolute bottom-3 left-3">
                    <span className="inline-block bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                      {categories.find(cat => cat.id === article.category)?.name}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-xs text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar className="size-3" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="size-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-pink-600 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {article.tags.slice(0, 2).map(tag => (
                      <span
                        key={tag}
                        className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="size-8 bg-gradient-to-r from-pink-600 to-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {article.author[0]}
                      </div>
                      <span className="text-sm font-medium text-gray-700">{article.author}</span>
                    </div>

                    <button className="flex items-center gap-1 text-pink-600 font-semibold text-sm hover:gap-2 transition-all">
                      Oku
                      <ArrowRight className="size-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          {regularArticles.length > 0 && (
            <div className="mt-12 text-center">
              <button className="inline-flex items-center gap-2 bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-pink-600 hover:text-pink-600 transition-all">
                Daha Fazla Yükle
                <ArrowRight className="size-5" />
              </button>
            </div>
          )}

          {/* Newsletter Section */}
          <div className="mt-16 bg-gradient-to-r from-pink-600 to-red-600 rounded-3xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <Sparkles className="size-12 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-3">İlham Veren İçerikleri Kaçırmayın</h3>
              <p className="text-white/90 mb-6 text-lg">
                Haftalık moda, stil ve güzellik içeriklerini e-posta adresinize gönderelim
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="flex-1 px-6 py-4 rounded-full text-gray-900 outline-none focus:ring-4 focus:ring-white/30"
                />
                <button className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all whitespace-nowrap">
                  Abone Ol
                </button>
              </div>
              <p className="text-sm text-white/70 mt-4">
                Kişisel verileriniz güvendedir. İstediğiniz zaman abonelikten çıkabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
