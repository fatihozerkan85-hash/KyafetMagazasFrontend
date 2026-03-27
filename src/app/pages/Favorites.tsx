import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Heart, ShoppingCart, X, Share2, Filter } from 'lucide-react';
import { toast } from 'sonner';

interface FavoriteItem {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  inStock: boolean;
}

// Mock favorites data
const initialFavorites: FavoriteItem[] = [
  {
    id: 1,
    name: 'Premium Kadife Elbise - Bordo',
    price: 899,
    oldPrice: 1299,
    image: 'https://images.unsplash.com/photo-1771987371082-64b6ee318b95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGluayUyMGRyZXNzJTIwaGFuZ2luZ3xlbnwxfHx8fDE3NzQ2MDkwMjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Casual',
    inStock: true,
  },
  {
    id: 2,
    name: 'Oversize Hoodie Cape - Gri',
    price: 649,
    image: 'https://images.unsplash.com/photo-1760551732366-94884b88301e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdlYXJpbmclMjBzdHlsaXNoJTIwc3dlYXRlcnxlbnwxfHx8fDE3NzQ2MDkwMjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Hoodie Cape',
    inStock: true,
  },
  {
    id: 3,
    name: 'Şık Tasarım Kimono - Pembe',
    price: 549,
    oldPrice: 799,
    image: 'https://images.unsplash.com/photo-1772474479567-11a6ce6a2d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBwaW5rJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzQ2MDkzNjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Kimono',
    inStock: true,
  },
  {
    id: 4,
    name: 'İnci Detaylı Kolye',
    price: 299,
    image: 'https://images.unsplash.com/photo-1762505464426-7467c051ea76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwamV3ZWxyeSUyMG5lY2tsYWNlfGVufDF8fHx8MTc3NDYwOTM3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Takı & Aksesuar',
    inStock: true,
  },
  {
    id: 5,
    name: 'Premium Pashmina Şal - Camel',
    price: 449,
    image: 'https://images.unsplash.com/photo-1763581202239-eaf934753c55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdlYXJpbmclMjBzY2FyZiUyMGFjY2Vzc29yaWVzfGVufDF8fHx8MTc3NDYwOTM2OHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Şal',
    inStock: false,
  },
  {
    id: 6,
    name: 'Relaxed Fit Sweatshirt - Beyaz',
    price: 399,
    oldPrice: 549,
    image: 'https://images.unsplash.com/photo-1642596413517-4ea14ddc4709?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjB3ZWFyaW5nJTIwY2FzdWFsJTIwb3V0Zml0fGVufDF8fHx8MTc3NDYwOTAyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Sweatshirt',
    inStock: true,
  },
];

export function Favorites() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>(initialFavorites);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'newest' | 'price-low' | 'price-high'>('newest');

  const removeFromFavorites = (id: number) => {
    setFavorites(favorites.filter(item => item.id !== id));
    toast.success('Ürün favorilerden çıkarıldı');
  };

  const addToCart = (id: number) => {
    const item = favorites.find(f => f.id === id);
    if (item && !item.inStock) {
      toast.error('Bu ürün stokta yok');
      return;
    }
    toast.success('Ürün sepete eklendi!');
  };

  const addAllToCart = () => {
    const inStockCount = favorites.filter(f => f.inStock).length;
    if (inStockCount === 0) {
      toast.error('Stokta ürün yok');
      return;
    }
    toast.success(`${inStockCount} ürün sepete eklendi!`);
  };

  const clearAllFavorites = () => {
    if (window.confirm('Tüm favorilerinizi silmek istediğinizden emin misiniz?')) {
      setFavorites([]);
      toast.success('Tüm favoriler temizlendi');
    }
  };

  const categories = ['all', 'Casual', 'Hoodie Cape', 'Sweatshirt', 'Kimono', 'Takı & Aksesuar', 'Şal'];

  // Filter and sort
  let filteredFavorites = selectedCategory === 'all' 
    ? favorites 
    : favorites.filter(f => f.category === selectedCategory);

  if (sortBy === 'price-low') {
    filteredFavorites = [...filteredFavorites].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredFavorites = [...filteredFavorites].sort((a, b) => b.price - a.price);
  }

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center px-4 py-16">
          <div className="text-center max-w-md">
            <div className="size-32 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="size-16 text-pink-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Favori Listeniz Boş
            </h2>
            <p className="text-gray-600 mb-8">
              Henüz favori ürününüz yok. Beğendiğiniz ürünleri favorilere ekleyerek daha sonra kolayca bulabilirsiniz.
            </p>
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
            >
              Alışverişe Başla
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Favorilerim
                </h1>
                <p className="text-gray-600">
                  {filteredFavorites.length} ürün listeleniyor
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={addAllToCart}
                  className="flex items-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
                >
                  <ShoppingCart className="size-5" />
                  <span className="hidden md:inline">Tümünü Sepete Ekle</span>
                  <span className="md:hidden">Sepete Ekle</span>
                </button>
                <button
                  onClick={clearAllFavorites}
                  className="flex items-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold border-2 border-gray-300 hover:border-red-300 hover:text-red-600 transition-colors"
                >
                  <X className="size-5" />
                  <span className="hidden md:inline">Tümünü Temizle</span>
                </button>
              </div>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Category Filter */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Filter className="size-4 text-gray-500" />
                    <span className="text-sm font-semibold text-gray-700">Kategori</span>
                  </div>
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                          selectedCategory === cat
                            ? 'bg-pink-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {cat === 'all' ? 'Tümü' : cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort */}
                <div className="md:w-64">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Sırala
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg outline-none focus:border-pink-500"
                  >
                    <option value="newest">En Yeni</option>
                    <option value="price-low">Fiyat (Düşük - Yüksek)</option>
                    <option value="price-high">Fiyat (Yüksek - Düşük)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Favorites Grid */}
          {filteredFavorites.length === 0 ? (
            <div className="bg-white rounded-lg p-12 text-center">
              <p className="text-gray-600">Bu kategoride favori ürün bulunamadı.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredFavorites.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
                >
                  {/* Product Image */}
                  <div className="relative aspect-[3/4] bg-gray-100">
                    <a href={`/urun/${item.id}`}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </a>

                    {/* Badges */}
                    {!item.inStock && (
                      <div className="absolute top-3 left-3 bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-bold">
                        Stokta Yok
                      </div>
                    )}
                    {item.oldPrice && item.inStock && (
                      <div className="absolute top-3 left-3 bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        İNDİRİM
                      </div>
                    )}

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromFavorites(item.id)}
                      className="absolute top-3 right-3 size-9 bg-white rounded-full flex items-center justify-center hover:bg-red-50 transition-colors shadow-md group/btn"
                    >
                      <Heart className="size-5 fill-pink-600 text-pink-600 group-hover/btn:fill-red-500 group-hover/btn:text-red-500" />
                    </button>

                    {/* Quick Actions */}
                    <div className="absolute bottom-0 left-0 right-0 p-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => addToCart(item.id)}
                        disabled={!item.inStock}
                        className="flex-1 bg-pink-600 text-white py-2 rounded-lg font-semibold hover:bg-pink-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-1"
                      >
                        <ShoppingCart className="size-4" />
                        <span className="text-xs">Sepete Ekle</span>
                      </button>
                      <button className="size-9 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
                        <Share2 className="size-4 text-gray-700" />
                      </button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-3">
                    <span className="text-xs text-gray-500 mb-1 block">{item.category}</span>
                    <a href={`/urun/${item.id}`} className="block">
                      <h3 className="font-medium text-gray-900 mb-2 text-sm line-clamp-2 hover:text-pink-600 transition-colors">
                        {item.name}
                      </h3>
                    </a>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-pink-600">
                        ₺{item.price.toLocaleString('tr-TR')}
                      </span>
                      {item.oldPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          ₺{item.oldPrice.toLocaleString('tr-TR')}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tips */}
          <div className="mt-8 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-2">
              💡 İpucu
            </h3>
            <p className="text-gray-700 text-sm">
              Favori ürünlerinizi arkadaşlarınızla paylaşabilir, fiyat değişikliklerinden haberdar olabilirsiniz. 
              Stokta olmayan ürünler tekrar stoklara girdiğinde size bildirim göndereceğiz!
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
