import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Package, Search, CheckCircle2, Truck, MapPin, Clock, Phone, Mail } from 'lucide-react';
import { toast } from 'sonner';

interface TrackingStep {
  status: string;
  description: string;
  date: string;
  time: string;
  location?: string;
  completed: boolean;
}

const mockOrderData = {
  orderNumber: 'LAD2026032701',
  orderDate: '25 Mart 2026',
  estimatedDelivery: '28 Mart 2026',
  carrier: 'Aras Kargo',
  trackingNumber: '1234567890',
  currentStatus: 'Dağıtımda',
  steps: [
    {
      status: 'Sipariş Alındı',
      description: 'Siparişiniz başarıyla oluşturuldu',
      date: '25 Mart 2026',
      time: '14:30',
      completed: true,
    },
    {
      status: 'Hazırlanıyor',
      description: 'Siparişiniz hazırlanıyor',
      date: '25 Mart 2026',
      time: '16:45',
      completed: true,
    },
    {
      status: 'Kargoya Verildi',
      description: 'Siparişiniz kargo şirketine teslim edildi',
      date: '26 Mart 2026',
      time: '09:15',
      location: 'İstanbul - Merkez Depo',
      completed: true,
    },
    {
      status: 'Transfer Merkezi',
      description: 'Paketiniz transfer merkezinde',
      date: '27 Mart 2026',
      time: '06:30',
      location: 'İstanbul - Anadolu Transfer',
      completed: true,
    },
    {
      status: 'Dağıtımda',
      description: 'Paketiniz dağıtım aracında, bugün size teslim edilecek',
      date: '27 Mart 2026',
      time: '08:45',
      location: 'Kadıköy Şubesi',
      completed: true,
    },
    {
      status: 'Teslim Edildi',
      description: 'Siparişiniz teslim edildi',
      date: '',
      time: '',
      completed: false,
    },
  ] as TrackingStep[],
  items: [
    {
      name: 'Premium Kadife Elbise - Bordo',
      size: 'M',
      quantity: 1,
      price: 899,
      image: 'https://images.unsplash.com/photo-1771987371082-64b6ee318b95?w=100',
    },
  ],
  deliveryAddress: {
    name: 'Ayşe Yılmaz',
    address: 'Caferağa Mah. Moda Cad. No:45 D:12',
    district: 'Kadıköy',
    city: 'İstanbul',
    phone: '+90 532 555 0123',
  },
};

export function OrderTracking() {
  const [trackingInput, setTrackingInput] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!trackingInput.trim()) {
      toast.error('Lütfen sipariş numaranızı giriniz');
      return;
    }

    // Simulate tracking lookup
    toast.loading('Sipariş aranıyor...', { duration: 1500 });
    
    setTimeout(() => {
      setShowResults(true);
      toast.success('Sipariş bulundu!');
    }, 1800);
  };

  if (!showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col">
        <Header />

        <main className="flex-1 flex items-center justify-center px-4 py-16">
          <div className="max-w-2xl w-full">
            <div className="text-center mb-8">
              <div className="inline-flex size-24 bg-pink-100 rounded-full items-center justify-center mb-6">
                <Package className="size-12 text-pink-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Sipariş Takip
              </h1>
              <p className="text-xl text-gray-600">
                Siparişinizin durumunu öğrenmek için sipariş numaranızı giriniz
              </p>
            </div>

            <form onSubmit={handleTrack} className="bg-white rounded-2xl shadow-xl p-8">
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Sipariş Numarası
              </label>
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
                  <input
                    type="text"
                    value={trackingInput}
                    onChange={(e) => setTrackingInput(e.target.value)}
                    placeholder="Örn: LAD2026032701"
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-lg outline-none focus:border-pink-500 text-lg"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors whitespace-nowrap"
                >
                  Sorgula
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Sipariş numaranızı sipariş onay e-postanızdan veya SMS'inizden bulabilirsiniz.
              </p>

              {/* Demo Button */}
              <div className="mt-6 pt-6 border-t">
                <button
                  type="button"
                  onClick={() => {
                    setTrackingInput('LAD2026032701');
                    setTimeout(() => {
                      setShowResults(true);
                      toast.success('Demo sipariş yüklendi!');
                    }, 500);
                  }}
                  className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  Demo Sipariş Görüntüle
                </button>
              </div>
            </form>

            {/* Help Section */}
            <div className="mt-8 bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-4">
                Sipariş numaranızı bulamıyor musunuz?
              </h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p>• Sipariş onay e-postanızı kontrol edin</p>
                <p>• Size gönderilen SMS'i kontrol edin</p>
                <p>• Hesabım &gt; Siparişlerim bölümünden görüntüleyin</p>
              </div>
              <div className="mt-4 pt-4 border-t flex gap-4">
                <a href="tel:+902125550123" className="flex items-center gap-2 text-pink-600 hover:text-pink-700 font-medium">
                  <Phone className="size-4" />
                  Bizi Arayın
                </a>
                <a href="/iletisim" className="flex items-center gap-2 text-pink-600 hover:text-pink-700 font-medium">
                  <Mail className="size-4" />
                  İletişime Geçin
                </a>
              </div>
            </div>
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
          {/* Header with New Search */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-gray-900 mb-1">
                  Sipariş Takip: {mockOrderData.orderNumber}
                </h1>
                <p className="text-gray-600">
                  Sipariş Tarihi: {mockOrderData.orderDate}
                </p>
              </div>
              <button
                onClick={() => setShowResults(false)}
                className="flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                <Search className="size-5" />
                Yeni Sorgulama
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Tracking Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Current Status Banner */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="size-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Truck className="size-8" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-1">
                      {mockOrderData.currentStatus}
                    </h2>
                    <p className="text-green-50">
                      Paketiniz kurye aracında, bugün teslim edilecek
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <div className="flex justify-between text-sm">
                    <span>Tahmini Teslimat:</span>
                    <span className="font-semibold">{mockOrderData.estimatedDelivery}</span>
                  </div>
                </div>
              </div>

              {/* Tracking Steps */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Kargo Hareketleri
                </h2>
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                  
                  <div className="space-y-6">
                    {mockOrderData.steps.map((step, index) => (
                      <div key={index} className="relative flex gap-4">
                        {/* Icon */}
                        <div className={`relative z-10 size-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          step.completed 
                            ? 'bg-green-500' 
                            : 'bg-gray-300'
                        }`}>
                          {step.completed ? (
                            <CheckCircle2 className="size-5 text-white" />
                          ) : (
                            <div className="size-3 bg-white rounded-full"></div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 pb-6">
                          <div className="flex justify-between items-start mb-1">
                            <h3 className={`font-semibold ${
                              step.completed ? 'text-gray-900' : 'text-gray-400'
                            }`}>
                              {step.status}
                            </h3>
                            {step.date && (
                              <span className="text-sm text-gray-500">
                                {step.date} • {step.time}
                              </span>
                            )}
                          </div>
                          <p className={`text-sm ${
                            step.completed ? 'text-gray-600' : 'text-gray-400'
                          }`}>
                            {step.description}
                          </p>
                          {step.location && (
                            <div className="flex items-center gap-1 mt-2 text-sm text-gray-500">
                              <MapPin className="size-3" />
                              <span>{step.location}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Sipariş İçeriği
                </h2>
                <div className="space-y-4">
                  {mockOrderData.items.map((item, index) => (
                    <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="size-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          Beden: {item.size} • Adet: {item.quantity}
                        </p>
                        <p className="text-lg font-bold text-pink-600">
                          ₺{item.price.toLocaleString('tr-TR')}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Carrier Info */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Kargo Bilgileri
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-600">Kargo Şirketi:</span>
                    <p className="font-semibold text-gray-900">{mockOrderData.carrier}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Takip Numarası:</span>
                    <p className="font-semibold text-gray-900">{mockOrderData.trackingNumber}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Tahmini Teslimat:</span>
                    <p className="font-semibold text-green-600">{mockOrderData.estimatedDelivery}</p>
                  </div>
                </div>
                <a
                  href="#"
                  className="mt-4 block text-center bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  Kargo Sitesinde Takip Et
                </a>
              </div>

              {/* Delivery Address */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="size-5 text-pink-600" />
                  Teslimat Adresi
                </h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p className="font-semibold text-gray-900">{mockOrderData.deliveryAddress.name}</p>
                  <p>{mockOrderData.deliveryAddress.address}</p>
                  <p>{mockOrderData.deliveryAddress.district}, {mockOrderData.deliveryAddress.city}</p>
                  <div className="pt-3 border-t">
                    <p className="text-gray-600">Telefon:</p>
                    <p className="font-semibold">{mockOrderData.deliveryAddress.phone}</p>
                  </div>
                </div>
              </div>

              {/* Help Card */}
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Yardıma mı ihtiyacınız var?
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                  Siparişiniz hakkında sorularınız için bizimle iletişime geçin.
                </p>
                <div className="space-y-2">
                  <a
                    href="tel:+902125550123"
                    className="flex items-center gap-2 text-pink-600 hover:text-pink-700 font-medium text-sm"
                  >
                    <Phone className="size-4" />
                    +90 (212) 555 0123
                  </a>
                  <a
                    href="/iletisim"
                    className="flex items-center gap-2 text-pink-600 hover:text-pink-700 font-medium text-sm"
                  >
                    <Mail className="size-4" />
                    İletişim Formu
                  </a>
                </div>
              </div>

              {/* Delivery Tips */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Clock className="size-5 text-blue-600" />
                  Teslimat İpuçları
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-pink-600">•</span>
                    <span>Kurye sizi aradığında telefonu açın</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-pink-600">•</span>
                    <span>Kimliğinizi hazır bulundurun</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-pink-600">•</span>
                    <span>Paketi teslim alırken kontrol edin</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}