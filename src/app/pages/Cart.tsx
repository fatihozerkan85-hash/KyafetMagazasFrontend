import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Minus, Plus, X, ShoppingBag, ArrowRight, Tag, Truck } from 'lucide-react';
import { toast } from 'sonner';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
}

// Mock cart data
const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: 'Premium Kadife Elbise - Bordo',
    price: 899,
    image: 'https://images.unsplash.com/photo-1771987371082-64b6ee318b95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGluayUyMGRyZXNzJTIwaGFuZ2luZ3xlbnwxfHx8fDE3NzQ2MDkwMjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    size: 'M',
    color: 'Bordo',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Oversize Hoodie Cape - Gri',
    price: 649,
    image: 'https://images.unsplash.com/photo-1760551732366-94884b88301e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdlYXJpbmclMjBzdHlsaXNoJTIwc3dlYXRlcnxlbnwxfHx8fDE3NzQ2MDkwMjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    size: 'L',
    color: 'Gri',
    quantity: 2,
  },
];

export function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [discount, setDiscount] = useState(0);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
    toast.success('Miktar güncellendi');
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
    toast.success('Ürün sepetten çıkarıldı');
  };

  const applyCoupon = () => {
    if (!couponCode.trim()) {
      toast.error('Lütfen kupon kodu giriniz');
      return;
    }

    // Mock coupon codes
    const validCoupons: { [key: string]: number } = {
      'LADIORA10': 10,
      'WELCOME15': 15,
      'YAZ25': 25,
    };

    const upperCode = couponCode.toUpperCase();
    if (validCoupons[upperCode]) {
      setAppliedCoupon(upperCode);
      setDiscount(validCoupons[upperCode]);
      toast.success(`🎉 %${validCoupons[upperCode]} indirim uygulandı!`);
    } else {
      toast.error('Geçersiz kupon kodu');
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = (subtotal * discount) / 100;
  const shippingCost = subtotal >= 500 ? 0 : 29.90;
  const total = subtotal - discountAmount + shippingCost;

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error('Sepetiniz boş');
      return;
    }
    navigate('/odeme');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center px-4 py-16">
          <div className="text-center max-w-md">
            <div className="size-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="size-16 text-gray-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sepetiniz Boş
            </h2>
            <p className="text-gray-600 mb-8">
              Henüz sepetinize ürün eklemediniz. Alışverişe başlamak için ürünlerimize göz atın.
            </p>
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
            >
              Alışverişe Başla
              <ArrowRight className="size-5" />
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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Sepetim ({cartItems.length} Ürün)
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg p-4 shadow-sm flex gap-4"
                >
                  {/* Product Image */}
                  <a href={`/urun/${item.id}`} className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-32 object-cover rounded-lg"
                    />
                  </a>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between mb-2">
                      <div>
                        <a
                          href={`/urun/${item.id}`}
                          className="font-semibold text-gray-900 hover:text-pink-600 transition-colors"
                        >
                          {item.name}
                        </a>
                        <div className="flex gap-4 mt-1 text-sm text-gray-600">
                          <span>Beden: {item.size}</span>
                          <span>Renk: {item.color}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="size-8 flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <X className="size-5" />
                      </button>
                    </div>

                    <div className="mt-auto flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="size-8 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-pink-300 transition-colors"
                        >
                          <Minus className="size-4" />
                        </button>
                        <span className="w-12 text-center font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="size-8 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-pink-300 transition-colors"
                        >
                          <Plus className="size-4" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <div className="text-xl font-bold text-pink-600">
                          ₺{(item.price * item.quantity).toLocaleString('tr-TR')}
                        </div>
                        {item.quantity > 1 && (
                          <div className="text-xs text-gray-500">
                            ₺{item.price.toLocaleString('tr-TR')} / adet
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Continue Shopping */}
              <a
                href="/"
                className="flex items-center justify-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-gray-200"
              >
                Alışverişe Devam Et
              </a>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 shadow-sm sticky top-4">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Sipariş Özeti
                </h2>

                {/* Coupon Code */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    İndirim Kodu
                  </label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                      <input
                        type="text"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="Kupon kodunuz"
                        disabled={!!appliedCoupon}
                        className="w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-lg outline-none focus:border-pink-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                      />
                    </div>
                    <button
                      onClick={applyCoupon}
                      disabled={!!appliedCoupon}
                      className="px-4 py-2 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed whitespace-nowrap"
                    >
                      Uygula
                    </button>
                  </div>
                  {appliedCoupon && (
                    <div className="mt-2 flex items-center justify-between text-sm">
                      <span className="text-green-600 font-semibold">
                        ✓ {appliedCoupon} uygulandı
                      </span>
                      <button
                        onClick={() => {
                          setAppliedCoupon(null);
                          setDiscount(0);
                          setCouponCode('');
                          toast.success('Kupon kaldırıldı');
                        }}
                        className="text-red-600 hover:text-red-700"
                      >
                        Kaldır
                      </button>
                    </div>
                  )}
                  <p className="mt-2 text-xs text-gray-500">
                    Deneyebilirsiniz: LADIORA10, WELCOME15, YAZ25
                  </p>
                </div>

                <div className="space-y-3 mb-6 pb-6 border-b">
                  <div className="flex justify-between text-gray-600">
                    <span>Ara Toplam</span>
                    <span>₺{subtotal.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}</span>
                  </div>
                  
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600 font-semibold">
                      <span>İndirim (%{discount})</span>
                      <span>-₺{discountAmount.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-gray-600">
                    <span className="flex items-center gap-1">
                      <Truck className="size-4" />
                      Kargo
                    </span>
                    <span className={shippingCost === 0 ? 'text-green-600 font-semibold' : ''}>
                      {shippingCost === 0 ? 'Ücretsiz' : `₺${shippingCost.toFixed(2)}`}
                    </span>
                  </div>

                  {subtotal < 500 && (
                    <div className="bg-pink-50 rounded-lg p-3 text-sm">
                      <p className="text-pink-800">
                        ₺{(500 - subtotal).toLocaleString('tr-TR', { minimumFractionDigits: 2 })} daha alışveriş yapın, <strong>kargo ücretsiz</strong> olsun! 🎉
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex justify-between text-xl font-bold text-gray-900 mb-6">
                  <span>Toplam</span>
                  <span className="text-pink-600">
                    ₺{total.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}
                  </span>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-pink-600 text-white py-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors flex items-center justify-center gap-2"
                >
                  Ödemeye Geç
                  <ArrowRight className="size-5" />
                </button>

                <div className="mt-4 space-y-2 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Güvenli ödeme</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>14 gün içinde kolay iade</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Hızlı teslimat</span>
                  </div>
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
