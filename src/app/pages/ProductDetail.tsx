import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Heart, ShoppingCart, Truck, RefreshCw, Shield, Star, ChevronRight, Minus, Plus, Share2 } from 'lucide-react';
import { toast } from 'sonner';

// Mock product data
const mockProducts = {
  1: {
    id: 1,
    name: 'Premium Kadife Elbise - Bordo',
    price: '₺899',
    oldPrice: '₺1.299',
    images: [
      'https://images.unsplash.com/photo-1771987371082-64b6ee318b95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGluayUyMGRyZXNzJTIwaGFuZ2luZ3xlbnwxfHx8fDE3NzQ2MDkwMjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1642596413517-4ea14ddc4709?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjB3ZWFyaW5nJTIwY2FzdWFsJTIwb3V0Zml0fGVufDF8fHx8MTc3NDYwOTAyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1773165457906-5ae42db35ab9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZhc2hpb24lMjBjbG90aGluZyUyMGRldGFpbCUyMHRleHR1cmV8ZW58MXx8fHwxNzc0NjA5MDIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1760551732366-94884b88301e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdlYXJpbmclMjBzdHlsaXNoJTIwc3dlYXRlcnxlbnwxfHx8fDE3NzQ2MDkwMjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    category: 'Casual',
    description: 'Zarif ve şık tasarımıyla öne çıkan premium kadife elbisemiz, özel günlerinizde ve günlük kullanımda rahatlıkla tercih edebileceğiniz bir parça. Yumuşak kadife kumaşı sayesinde hem şık hem de rahat bir kullanım sunar.',
    features: [
      'Premium kalite kadife kumaş',
      'Nefes alabilen yapı',
      'Renk atma yapmaz',
      'Kolay bakım',
      'Türkiye üretimi',
    ],
    fabric: '%95 Pamuk, %5 Elastan',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Bordo', hex: '#800020' },
      { name: 'Siyah', hex: '#000000' },
      { name: 'Lacivert', hex: '#000080' },
    ],
    stock: 15,
    rating: 4.8,
    reviewCount: 127,
  }
};

const mockReviews = [
  {
    id: 1,
    author: 'Ayşe K.',
    rating: 5,
    date: '15 Mart 2026',
    comment: 'Kumaşı çok kaliteli ve tam beden geliyor. Çok beğendim, kesinlikle tavsiye ederim!',
    size: 'M',
  },
  {
    id: 2,
    author: 'Zeynep M.',
    rating: 5,
    date: '10 Mart 2026',
    comment: 'Harika bir ürün! Rengi fotoğraftaki gibi ve çok şık duruyor. Teşekkürler Ladiora 💕',
    size: 'S',
  },
  {
    id: 3,
    author: 'Elif Y.',
    rating: 4,
    date: '5 Mart 2026',
    comment: 'Güzel ama biraz büyük geldi. Bir beden küçük almanızı tavsiye ederim.',
    size: 'L',
  },
];

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = mockProducts[1]; // Mock için hep aynı ürünü göster
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  if (!product) {
    return <div>Ürün bulunamadı</div>;
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Lütfen beden seçiniz');
      return;
    }
    toast.success('Ürün sepete eklendi!');
    // Navigate to cart page (will be created next)
    setTimeout(() => navigate('/sepet'), 1000);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    toast.success(isLiked ? 'Favorilerden çıkarıldı' : 'Favorilere eklendi!');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <a href="/" className="hover:text-pink-600">Ana Sayfa</a>
              <ChevronRight className="size-4" />
              <a href="/#products-section" className="hover:text-pink-600">{product.category}</a>
              <ChevronRight className="size-4" />
              <span className="text-gray-900 font-medium">{product.name}</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Left Column - Images */}
            <div>
              {/* Main Image */}
              <div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-4">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.oldPrice && (
                  <div className="absolute top-4 left-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    İNDİRİM
                  </div>
                )}
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-pink-600 scale-95'
                        : 'border-gray-200 hover:border-pink-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Details */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`size-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  {product.rating} ({product.reviewCount} değerlendirme)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl font-bold text-pink-600">
                  {product.price}
                </span>
                {product.oldPrice && (
                  <span className="text-2xl text-gray-400 line-through">
                    {product.oldPrice}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Color Selection */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Renk: <span className="text-pink-600">{selectedColor.name}</span>
                </label>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`size-10 rounded-full border-2 transition-all ${
                        selectedColor.name === color.name
                          ? 'border-pink-600 scale-110'
                          : 'border-gray-300 hover:border-pink-300'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Beden Seçimi {!selectedSize && <span className="text-pink-600">*</span>}
                </label>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 border-2 rounded-lg font-semibold transition-all ${
                        selectedSize === size
                          ? 'border-pink-600 bg-pink-600 text-white'
                          : 'border-gray-300 hover:border-pink-300 text-gray-700'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Adet
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="size-10 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-pink-300 transition-colors"
                  >
                    <Minus className="size-4" />
                  </button>
                  <span className="text-xl font-semibold w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="size-10 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-pink-300 transition-colors"
                  >
                    <Plus className="size-4" />
                  </button>
                  <span className="text-sm text-gray-500">
                    (Stokta {product.stock} adet)
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mb-8">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-pink-600 text-white py-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="size-5" />
                  Sepete Ekle
                </button>
                <button
                  onClick={handleLike}
                  className={`size-14 border-2 rounded-lg flex items-center justify-center transition-all ${
                    isLiked
                      ? 'border-pink-600 bg-pink-50'
                      : 'border-gray-300 hover:border-pink-300'
                  }`}
                >
                  <Heart
                    className={`size-6 ${
                      isLiked ? 'fill-pink-600 text-pink-600' : 'text-gray-700'
                    }`}
                  />
                </button>
                <button className="size-14 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-pink-300 transition-colors">
                  <Share2 className="size-5 text-gray-700" />
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b">
                <div className="flex flex-col items-center text-center">
                  <div className="size-12 bg-pink-50 rounded-full flex items-center justify-center mb-2">
                    <Truck className="size-6 text-pink-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">Ücretsiz Kargo</span>
                  <span className="text-xs text-gray-500">500 TL üzeri</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="size-12 bg-pink-50 rounded-full flex items-center justify-center mb-2">
                    <RefreshCw className="size-6 text-pink-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">Kolay İade</span>
                  <span className="text-xs text-gray-500">14 gün içinde</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="size-12 bg-pink-50 rounded-full flex items-center justify-center mb-2">
                    <Shield className="size-6 text-pink-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">Güvenli Ödeme</span>
                  <span className="text-xs text-gray-500">3D Secure</span>
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Ürün Özellikleri</h3>
                  <ul className="space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="size-1.5 bg-pink-600 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Kumaş Bilgisi</h3>
                  <p className="text-sm text-gray-600">{product.fabric}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="border-t pt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Müşteri Yorumları ({product.reviewCount})
            </h2>
            
            <div className="grid gap-6 mb-8">
              {mockReviews.map((review) => (
                <div key={review.id} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-gray-900">{review.author}</span>
                        <span className="text-sm text-gray-500">• {review.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`size-4 ${
                                i < review.rating
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">Beden: {review.size}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>

            <button className="w-full md:w-auto px-8 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:border-pink-300 hover:bg-pink-50 transition-colors">
              Tüm Yorumları Gör
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
