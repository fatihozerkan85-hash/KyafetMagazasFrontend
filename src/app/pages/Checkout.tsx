import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CreditCard, Truck, MapPin, ChevronRight, Lock } from 'lucide-react';
import { toast } from 'sonner';

interface FormData {
  // Contact
  email: string;
  phone: string;
  
  // Delivery
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  district: string;
  postalCode: string;
  
  // Payment
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
}

const initialFormData: FormData = {
  email: '',
  phone: '',
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  district: '',
  postalCode: '',
  cardNumber: '',
  cardName: '',
  expiryDate: '',
  cvv: '',
};

export function Checkout() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [shippingMethod, setShippingMethod] = useState<'standard' | 'express' | 'store'>('standard');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'transfer' | 'cash'>('card');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptKvkk, setAcceptKvkk] = useState(false);

  // Mock cart summary
  const subtotal = 1548;
  const discount = 154.8; // 10% discount
  const shippingCost = shippingMethod === 'express' ? 49.90 : shippingMethod === 'standard' ? 29.90 : 0;
  const total = subtotal - discount + shippingCost;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\s/g, '');
    value = value.replace(/(.{4})/g, '$1 ').trim();
    setFormData(prev => ({ ...prev, cardNumber: value.slice(0, 19) }));
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    setFormData(prev => ({ ...prev, expiryDate: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!acceptTerms || !acceptKvkk) {
      toast.error('Lütfen kullanım koşullarını ve KVKK metnini onaylayın');
      return;
    }

    if (!formData.email || !formData.phone || !formData.firstName || !formData.lastName) {
      toast.error('Lütfen tüm zorunlu alanları doldurun');
      return;
    }

    if (paymentMethod === 'card') {
      if (!formData.cardNumber || !formData.cardName || !formData.expiryDate || !formData.cvv) {
        toast.error('Lütfen kart bilgilerinizi eksiksiz girin');
        return;
      }
    }

    // Simulate payment processing
    toast.loading('Ödemeniz işleniyor...', { duration: 2000 });

    setTimeout(() => {
      // Random success/failure for demo
      const isSuccess = Math.random() > 0.2; // 80% success
      
      if (isSuccess) {
        navigate('/odeme-basarili');
      } else {
        navigate('/odeme-basarisiz');
      }
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 md:gap-4">
              <div className="flex items-center gap-2">
                <div className="size-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">
                  ✓
                </div>
                <span className="hidden md:inline text-sm font-medium text-gray-700">Sepet</span>
              </div>
              <ChevronRight className="size-5 text-gray-400" />
              <div className="flex items-center gap-2">
                <div className="size-8 bg-pink-600 text-white rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
                <span className="hidden md:inline text-sm font-medium text-gray-900">Ödeme</span>
              </div>
              <ChevronRight className="size-5 text-gray-400" />
              <div className="flex items-center gap-2">
                <div className="size-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-semibold">
                  3
                </div>
                <span className="hidden md:inline text-sm font-medium text-gray-500">Onay</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Forms */}
              <div className="lg:col-span-2 space-y-6">
                {/* Contact Information */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <div className="size-8 bg-pink-100 rounded-full flex items-center justify-center">
                      <span className="text-pink-600 font-bold">1</span>
                    </div>
                    İletişim Bilgileri
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
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
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-pink-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Telefon Numarası *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="0 (5__) ___ __ __"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-pink-500"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Delivery Address */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <div className="size-8 bg-pink-100 rounded-full flex items-center justify-center">
                      <MapPin className="size-4 text-pink-600" />
                    </div>
                    Teslimat Adresi
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Ad *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-pink-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Soyad *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-pink-500"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Adres *
                      </label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-pink-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        İl *
                      </label>
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-pink-500"
                        required
                      >
                        <option value="">Seçiniz</option>
                        <option value="istanbul">İstanbul</option>
                        <option value="ankara">Ankara</option>
                        <option value="izmir">İzmir</option>
                        <option value="bursa">Bursa</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        İlçe *
                      </label>
                      <input
                        type="text"
                        name="district"
                        value={formData.district}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-pink-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Posta Kodu
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-pink-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Method */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <div className="size-8 bg-pink-100 rounded-full flex items-center justify-center">
                      <Truck className="size-4 text-pink-600" />
                    </div>
                    Kargo Seçimi
                  </h2>
                  <div className="space-y-3">
                    <label className={`flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      shippingMethod === 'standard' ? 'border-pink-600 bg-pink-50' : 'border-gray-300 hover:border-pink-300'
                    }`}>
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="shipping"
                          checked={shippingMethod === 'standard'}
                          onChange={() => setShippingMethod('standard')}
                          className="size-5 text-pink-600"
                        />
                        <div>
                          <div className="font-semibold text-gray-900">Standart Kargo</div>
                          <div className="text-sm text-gray-600">3-5 iş günü</div>
                        </div>
                      </div>
                      <span className="font-bold text-gray-900">₺29,90</span>
                    </label>

                    <label className={`flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      shippingMethod === 'express' ? 'border-pink-600 bg-pink-50' : 'border-gray-300 hover:border-pink-300'
                    }`}>
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="shipping"
                          checked={shippingMethod === 'express'}
                          onChange={() => setShippingMethod('express')}
                          className="size-5 text-pink-600"
                        />
                        <div>
                          <div className="font-semibold text-gray-900">Hızlı Kargo</div>
                          <div className="text-sm text-gray-600">1-2 iş günü</div>
                        </div>
                      </div>
                      <span className="font-bold text-gray-900">₺49,90</span>
                    </label>

                    <label className={`flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      shippingMethod === 'store' ? 'border-pink-600 bg-pink-50' : 'border-gray-300 hover:border-pink-300'
                    }`}>
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="shipping"
                          checked={shippingMethod === 'store'}
                          onChange={() => setShippingMethod('store')}
                          className="size-5 text-pink-600"
                        />
                        <div>
                          <div className="font-semibold text-gray-900">Mağazadan Teslim</div>
                          <div className="text-sm text-gray-600">Aynı gün</div>
                        </div>
                      </div>
                      <span className="font-bold text-green-600">Ücretsiz</span>
                    </label>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <div className="size-8 bg-pink-100 rounded-full flex items-center justify-center">
                      <CreditCard className="size-4 text-pink-600" />
                    </div>
                    Ödeme Yöntemi
                  </h2>

                  {/* Payment Method Selection */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-4 border-2 rounded-lg font-semibold transition-all ${
                        paymentMethod === 'card' ? 'border-pink-600 bg-pink-50 text-pink-600' : 'border-gray-300 text-gray-700 hover:border-pink-300'
                      }`}
                    >
                      Kredi Kartı
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('transfer')}
                      className={`p-4 border-2 rounded-lg font-semibold transition-all ${
                        paymentMethod === 'transfer' ? 'border-pink-600 bg-pink-50 text-pink-600' : 'border-gray-300 text-gray-700 hover:border-pink-300'
                      }`}
                    >
                      Havale/EFT
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('cash')}
                      className={`p-4 border-2 rounded-lg font-semibold transition-all ${
                        paymentMethod === 'cash' ? 'border-pink-600 bg-pink-50 text-pink-600' : 'border-gray-300 text-gray-700 hover:border-pink-300'
                      }`}
                    >
                      Kapıda Ödeme
                    </button>
                  </div>

                  {/* Credit Card Form */}
                  {paymentMethod === 'card' && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Kart Numarası *
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleCardNumberChange}
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-pink-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Kart Üzerindeki İsim *
                        </label>
                        <input
                          type="text"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          placeholder="AD SOYAD"
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-pink-500 uppercase"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">
                            Son Kullanma Tarihi *
                          </label>
                          <input
                            type="text"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleExpiryChange}
                            placeholder="MM/YY"
                            maxLength={5}
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-pink-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">
                            CVV *
                          </label>
                          <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={(e) => {
                              const value = e.target.value.replace(/\D/g, '');
                              setFormData(prev => ({ ...prev, cvv: value.slice(0, 3) }));
                            }}
                            placeholder="123"
                            maxLength={3}
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-pink-500"
                            required
                          />
                        </div>
                      </div>

                      <div className="bg-blue-50 rounded-lg p-4 flex items-start gap-3">
                        <Lock className="size-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-blue-900">
                          <p className="font-semibold mb-1">Güvenli Ödeme</p>
                          <p>Ödemeniz 256-bit SSL sertifikası ile korunmaktadır. Kart bilgileriniz saklanmaz.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'transfer' && (
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900 mb-3">Banka Hesap Bilgileri</h3>
                      <div className="space-y-2 text-sm text-gray-700">
                        <p><strong>Banka:</strong> Garanti BBVA</p>
                        <p><strong>Hesap Adı:</strong> Ladiora Tekstil Ltd. Şti.</p>
                        <p><strong>IBAN:</strong> TR00 0000 0000 0000 0000 0000 00</p>
                        <p className="mt-4 text-pink-600 font-semibold">
                          Havale/EFT açıklamasına sipariş numaranızı yazmayı unutmayın.
                        </p>
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'cash' && (
                    <div className="bg-gray-50 rounded-lg p-6">
                      <p className="text-gray-700">
                        Siparişiniz kargoya verildiğinde, ödemeyi kargo görevlisine nakit veya kredi kartı ile yapabilirsiniz.
                      </p>
                      <p className="mt-3 text-sm text-gray-600">
                        * Kapıda ödeme için ek ₺5 ücret uygulanır.
                      </p>
                    </div>
                  )}
                </div>

                {/* Terms and Conditions */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="space-y-3">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={acceptTerms}
                        onChange={(e) => setAcceptTerms(e.target.checked)}
                        className="size-5 text-pink-600 mt-0.5"
                        required
                      />
                      <span className="text-sm text-gray-700">
                        <a href="#" className="text-pink-600 hover:underline">Kullanım Koşulları</a>'nı ve{' '}
                        <a href="#" className="text-pink-600 hover:underline">Mesafeli Satış Sözleşmesi</a>'ni okudum, kabul ediyorum. *
                      </span>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={acceptKvkk}
                        onChange={(e) => setAcceptKvkk(e.target.checked)}
                        className="size-5 text-pink-600 mt-0.5"
                        required
                      />
                      <span className="text-sm text-gray-700">
                        Kişisel verilerimin işlenmesine ilişkin{' '}
                        <a href="#" className="text-pink-600 hover:underline">Aydınlatma Metni</a>'ni okudum, kabul ediyorum. *
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Right Column - Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg p-6 shadow-sm sticky top-24">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Sipariş Özeti
                  </h2>

                  {/* Products Preview */}
                  <div className="mb-6 pb-6 border-b space-y-3">
                    <div className="flex gap-3">
                      <img
                        src="https://images.unsplash.com/photo-1771987371082-64b6ee318b95?w=100"
                        alt="Product"
                        className="size-16 object-cover rounded"
                      />
                      <div className="flex-1 text-sm">
                        <p className="font-medium text-gray-900">Premium Kadife Elbise</p>
                        <p className="text-gray-600">Beden: M • Bordo</p>
                        <p className="font-semibold text-pink-600">₺899</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <img
                        src="https://images.unsplash.com/photo-1760551732366-94884b88301e?w=100"
                        alt="Product"
                        className="size-16 object-cover rounded"
                      />
                      <div className="flex-1 text-sm">
                        <p className="font-medium text-gray-900">Oversize Hoodie Cape</p>
                        <p className="text-gray-600">Beden: L • Gri (x2)</p>
                        <p className="font-semibold text-pink-600">₺1.298</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6 pb-6 border-b">
                    <div className="flex justify-between text-gray-600">
                      <span>Ara Toplam</span>
                      <span>₺{subtotal.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}</span>
                    </div>
                    <div className="flex justify-between text-green-600 font-semibold">
                      <span>İndirim</span>
                      <span>-₺{discount.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Kargo</span>
                      <span className={shippingCost === 0 ? 'text-green-600 font-semibold' : ''}>
                        {shippingCost === 0 ? 'Ücretsiz' : `₺${shippingCost.toFixed(2)}`}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between text-xl font-bold text-gray-900 mb-6">
                    <span>Toplam</span>
                    <span className="text-pink-600">
                      ₺{total.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-pink-600 text-white py-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Lock className="size-5" />
                    Ödemeyi Tamamla
                  </button>

                  <div className="mt-4 flex items-center justify-center gap-2">
                    <img src="https://via.placeholder.com/40x25/1a1a1a/ffffff?text=VISA" alt="Visa" className="h-5" />
                    <img src="https://via.placeholder.com/40x25/1a1a1a/ffffff?text=MC" alt="Mastercard" className="h-5" />
                    <img src="https://via.placeholder.com/40x25/1a1a1a/ffffff?text=AMEX" alt="Amex" className="h-5" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
