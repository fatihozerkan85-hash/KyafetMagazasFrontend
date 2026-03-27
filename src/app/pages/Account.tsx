import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { User, Package, MapPin, Heart, Settings, LogOut, Calendar, CreditCard, Bell, Shield, Eye } from 'lucide-react';
import { toast } from 'sonner';

type TabType = 'profile' | 'orders' | 'addresses' | 'favorites' | 'settings';

// Mock user data
const mockUser = {
  name: 'Ayşe Yılmaz',
  email: 'ayse.yilmaz@email.com',
  phone: '+90 532 555 0123',
  birthDate: '15 Haziran 1992',
  memberSince: 'Ocak 2024',
  totalOrders: 12,
  totalSpent: 8450,
};

const mockOrders = [
  {
    id: 'LAD2026032701',
    date: '25 Mart 2026',
    status: 'Dağıtımda',
    total: 1548,
    items: 2,
    statusColor: 'bg-blue-100 text-blue-700',
  },
  {
    id: 'LAD2026031502',
    date: '15 Mart 2026',
    status: 'Teslim Edildi',
    total: 899,
    items: 1,
    statusColor: 'bg-green-100 text-green-700',
  },
  {
    id: 'LAD2026030203',
    date: '02 Mart 2026',
    status: 'Teslim Edildi',
    total: 1299,
    items: 3,
    statusColor: 'bg-green-100 text-green-700',
  },
];

const mockAddresses = [
  {
    id: 1,
    title: 'Ev',
    name: 'Ayşe Yılmaz',
    address: 'Caferağa Mah. Moda Cad. No:45 D:12',
    district: 'Kadıköy',
    city: 'İstanbul',
    phone: '+90 532 555 0123',
    isDefault: true,
  },
  {
    id: 2,
    title: 'İş',
    name: 'Ayşe Yılmaz',
    address: 'Maslak Mah. Büyükdere Cad. No:123 K:15',
    district: 'Sarıyer',
    city: 'İstanbul',
    phone: '+90 532 555 0123',
    isDefault: false,
  },
];

export function Account() {
  const [activeTab, setActiveTab] = useState<TabType>('profile');
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const tabs = [
    { id: 'profile' as TabType, name: 'Profilim', icon: User },
    { id: 'orders' as TabType, name: 'Siparişlerim', icon: Package },
    { id: 'addresses' as TabType, name: 'Adreslerim', icon: MapPin },
    { id: 'favorites' as TabType, name: 'Favorilerim', icon: Heart },
    { id: 'settings' as TabType, name: 'Ayarlar', icon: Settings },
  ];

  const handleLogout = () => {
    toast.success('Çıkış yapıldı, güle güle!');
    setTimeout(() => {
      window.location.href = '/';
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Hesabım
          </h1>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b">
                  <div className="size-16 bg-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-pink-600">
                      {mockUser.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h2 className="font-bold text-gray-900">{mockUser.name}</h2>
                    <p className="text-sm text-gray-600">{mockUser.email}</p>
                  </div>
                </div>

                <nav className="space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                        activeTab === tab.id
                          ? 'bg-pink-600 text-white shadow-md'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <tab.icon className="size-5" />
                      {tab.name}
                    </button>
                  ))}
                </nav>

                <button
                  onClick={() => setShowLogoutModal(true)}
                  className="w-full flex items-center gap-3 px-4 py-3 mt-4 text-red-600 hover:bg-red-50 rounded-lg font-medium transition-colors"
                >
                  <LogOut className="size-5" />
                  Çıkış Yap
                </button>
              </div>

              {/* Stats Card */}
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  İstatistikler
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Toplam Sipariş:</span>
                    <span className="font-bold text-gray-900">{mockUser.totalOrders}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Toplam Harcama:</span>
                    <span className="font-bold text-pink-600">₺{mockUser.totalSpent.toLocaleString('tr-TR')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Üyelik:</span>
                    <span className="font-bold text-gray-900">{mockUser.memberSince}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div className="space-y-6">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Kişisel Bilgiler
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Ad Soyad
                        </label>
                        <input
                          type="text"
                          defaultValue={mockUser.name}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-pink-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          E-posta
                        </label>
                        <input
                          type="email"
                          defaultValue={mockUser.email}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-pink-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          defaultValue={mockUser.phone}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-pink-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Doğum Tarihi
                        </label>
                        <input
                          type="text"
                          defaultValue={mockUser.birthDate}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-pink-500"
                        />
                      </div>
                    </div>
                    <button
                      onClick={() => toast.success('Bilgileriniz güncellendi!')}
                      className="mt-6 bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
                    >
                      Bilgileri Kaydet
                    </button>
                  </div>

                  {/* Change Password */}
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Şifre Değiştir
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Mevcut Şifre
                        </label>
                        <input
                          type="password"
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-pink-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Yeni Şifre
                        </label>
                        <input
                          type="password"
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-pink-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Yeni Şifre (Tekrar)
                        </label>
                        <input
                          type="password"
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-pink-500"
                        />
                      </div>
                    </div>
                    <button
                      onClick={() => toast.success('Şifreniz değiştirildi!')}
                      className="mt-6 bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                    >
                      Şifreyi Değiştir
                    </button>
                  </div>
                </div>
              )}

              {/* Orders Tab */}
              {activeTab === 'orders' && (
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Siparişlerim
                  </h2>
                  <div className="space-y-4">
                    {mockOrders.map((order) => (
                      <div key={order.id} className="border-2 border-gray-100 rounded-xl p-6 hover:border-pink-300 transition-colors">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-bold text-gray-900">
                                Sipariş #{order.id}
                              </h3>
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${order.statusColor}`}>
                                {order.status}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Calendar className="size-4" />
                              <span>{order.date}</span>
                              <span>•</span>
                              <span>{order.items} Ürün</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-pink-600 mb-2">
                              ₺{order.total.toLocaleString('tr-TR')}
                            </div>
                            <div className="flex gap-2">
                              <a
                                href={`/siparis-takip?order=${order.id}`}
                                className="text-sm text-pink-600 hover:text-pink-700 font-semibold"
                              >
                                Sipariş Detayı
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Addresses Tab */}
              {activeTab === 'addresses' && (
                <div className="space-y-6">
                  {mockAddresses.map((address) => (
                    <div key={address.id} className="bg-white rounded-xl shadow-sm p-6 border-2 border-gray-100">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="size-12 bg-pink-100 rounded-full flex items-center justify-center">
                            <MapPin className="size-6 text-pink-600" />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 flex items-center gap-2">
                              {address.title}
                              {address.isDefault && (
                                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-semibold">
                                  Varsayılan
                                </span>
                              )}
                            </h3>
                            <p className="text-sm text-gray-600">{address.name}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="text-sm text-pink-600 hover:text-pink-700 font-semibold">
                            Düzenle
                          </button>
                          <button className="text-sm text-red-600 hover:text-red-700 font-semibold">
                            Sil
                          </button>
                        </div>
                      </div>
                      <div className="pl-15 text-gray-700">
                        <p>{address.address}</p>
                        <p>{address.district}, {address.city}</p>
                        <p className="mt-2 text-sm text-gray-600">{address.phone}</p>
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={() => toast.success('Yeni adres ekleme özelliği yakında!')}
                    className="w-full border-2 border-dashed border-gray-300 rounded-xl p-6 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors font-semibold"
                  >
                    + Yeni Adres Ekle
                  </button>
                </div>
              )}

              {/* Favorites Tab */}
              {activeTab === 'favorites' && (
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Favorilerim
                  </h2>
                  <div className="text-center py-12">
                    <Heart className="size-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">
                      Favori ürünlerinizi görüntülemek için Favoriler sayfasına gidin
                    </p>
                    <a
                      href="/favoriler"
                      className="inline-block bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
                    >
                      Favorilere Git
                    </a>
                  </div>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <div className="space-y-6">
                  {/* Notifications */}
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <Bell className="size-6 text-pink-600" />
                      <h2 className="text-2xl font-bold text-gray-900">
                        Bildirim Ayarları
                      </h2>
                    </div>
                    <div className="space-y-4">
                      <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer">
                        <div>
                          <div className="font-semibold text-gray-900">E-posta Bildirimleri</div>
                          <div className="text-sm text-gray-600">Sipariş ve kampanya bildirimleri al</div>
                        </div>
                        <input type="checkbox" defaultChecked className="size-5" />
                      </label>
                      <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer">
                        <div>
                          <div className="font-semibold text-gray-900">SMS Bildirimleri</div>
                          <div className="text-sm text-gray-600">Kargo ve özel fırsatlar için SMS al</div>
                        </div>
                        <input type="checkbox" defaultChecked className="size-5" />
                      </label>
                      <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer">
                        <div>
                          <div className="font-semibold text-gray-900">Push Bildirimleri</div>
                          <div className="text-sm text-gray-600">Tarayıcı bildirimleri</div>
                        </div>
                        <input type="checkbox" className="size-5" />
                      </label>
                    </div>
                  </div>

                  {/* Privacy */}
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <Shield className="size-6 text-pink-600" />
                      <h2 className="text-2xl font-bold text-gray-900">
                        Gizlilik & Güvenlik
                      </h2>
                    </div>
                    <div className="space-y-3">
                      <a href="#" className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <span className="font-medium text-gray-900">KVKK Aydınlatma Metni</span>
                        <Eye className="size-5 text-gray-400" />
                      </a>
                      <a href="#" className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <span className="font-medium text-gray-900">Gizlilik Politikası</span>
                        <Eye className="size-5 text-gray-400" />
                      </a>
                      <button
                        onClick={() => toast.error('Hesap silme talebi için müşteri hizmetleri ile iletişime geçin')}
                        className="w-full flex items-center justify-between p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors text-red-600"
                      >
                        <span className="font-medium">Hesabımı Sil</span>
                        <LogOut className="size-5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="text-center mb-6">
              <div className="size-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <LogOut className="size-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Çıkış Yap
              </h3>
              <p className="text-gray-600">
                Hesabınızdan çıkış yapmak istediğinizden emin misiniz?
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                İptal
              </button>
              <button
                onClick={handleLogout}
                className="flex-1 bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Çıkış Yap
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
