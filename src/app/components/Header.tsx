import { Search, ShoppingCart, User, Menu, Heart, LogOut, Package, Settings, X, Home, Phone, HelpCircle, MapPin, Sparkles } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import headerBg from 'figma:asset/15496945350b67a7b248006150bb217ebb850302.png';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

interface HeaderProps {
  onCategoryChange?: (category: string) => void;
}

export function Header({ onCategoryChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setUserDropdownOpen(false);
      }
    }

    if (userDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [userDropdownOpen]);

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    if (onCategoryChange) {
      onCategoryChange(categoryId);
    }
    // Scroll to products section
    const element = document.getElementById('products-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleLogout = () => {
    logout();
    setUserDropdownOpen(false);
    toast.success('Çıkış yapıldı. Güle güle! 👋');
    navigate('/');
  };

  const categories = [
    { id: 'all', name: 'Tümü' },
    { id: 'casual', name: 'Casual' },
    { id: 'hoodie', name: 'Hoodie Cape' },
    { id: 'sweatshirt', name: 'Sweatshirt' },
    { id: 'kimono', name: 'Kimono' },
    { id: 'jewelry', name: 'Takı & Aksesuar' },
    { id: 'scarf', name: 'Şal' }
  ];

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Main Header with Background */}
      <div 
        className="relative bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${headerBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="bg-red-900/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between gap-4">
              {/* Logo */}
              <div className="flex items-center gap-4">
                <button 
                  className="md:hidden text-white"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <Menu className="size-6" />
                </button>
                <div className="text-white">
                  <div className="text-3xl md:text-4xl font-bold tracking-wider">LADIORA</div>
                  <div className="text-sm md:text-base tracking-widest">BOUTIQUE</div>
                </div>
              </div>

              {/* Search Bar */}
              <div className="hidden md:flex items-center bg-white/95 rounded-full px-4 py-2 flex-1 max-w-md mx-8">
                <input 
                  type="text" 
                  placeholder="Ladiora'da Ara" 
                  className="bg-transparent outline-none text-sm flex-1 text-gray-700 placeholder-gray-500"
                />
                <Search className="size-5 text-gray-500" />
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <button className="text-white hover:text-gray-200 transition-colors">
                  <Search className="size-6 md:hidden" />
                </button>
                
                {/* User Dropdown or Login Button */}
                {isAuthenticated && user ? (
                  <div className="relative hidden md:block" ref={dropdownRef}>
                    <button
                      onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                      className="flex items-center gap-2 text-white hover:text-gray-200 transition-colors bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
                    >
                      <User className="size-5" />
                      <span className="text-sm font-medium">
                        Hoşgeldin, {user.name} {user.surname}
                      </span>
                    </button>

                    {/* Dropdown Menu */}
                    {userDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border-2 border-gray-100 overflow-hidden">
                        <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-4">
                          <p className="font-bold text-lg">{user.name} {user.surname}</p>
                          <p className="text-sm opacity-90">{user.email}</p>
                        </div>
                        <div className="py-2">
                          <a
                            href="/hesabim"
                            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-gray-700"
                            onClick={() => setUserDropdownOpen(false)}
                          >
                            <User className="size-5 text-pink-600" />
                            <span>Hesabım</span>
                          </a>
                          <a
                            href="/hesabim?tab=orders"
                            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-gray-700"
                            onClick={() => setUserDropdownOpen(false)}
                          >
                            <Package className="size-5 text-pink-600" />
                            <span>Siparişlerim</span>
                          </a>
                          <a
                            href="/favoriler"
                            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-gray-700"
                            onClick={() => setUserDropdownOpen(false)}
                          >
                            <Heart className="size-5 text-pink-600" />
                            <span>Favorilerim</span>
                          </a>
                          <a
                            href="/hesabim?tab=settings"
                            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-gray-700"
                            onClick={() => setUserDropdownOpen(false)}
                          >
                            <Settings className="size-5 text-pink-600" />
                            <span>Ayarlar</span>
                          </a>
                          <div className="border-t border-gray-100 mt-2 pt-2">
                            <button
                              onClick={handleLogout}
                              className="flex items-center gap-3 px-4 py-3 hover:bg-red-50 transition-colors text-red-600 w-full"
                            >
                              <LogOut className="size-5" />
                              <span className="font-semibold">Çıkış Yap</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href="/giris"
                    className="hidden md:flex items-center gap-2 text-white hover:text-gray-200 transition-colors bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
                  >
                    <User className="size-5" />
                    <span className="text-sm font-medium">Giriş Yap</span>
                  </a>
                )}

                <a href="/favoriler" className="text-white hover:text-gray-200 transition-colors hidden md:block">
                  <Heart className="size-6" />
                </a>
                <a href="/sepet" className="text-white hover:text-gray-200 transition-colors relative">
                  <ShoppingCart className="size-6" />
                  <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full size-5 flex items-center justify-center font-bold">
                    2
                  </span>
                </a>
                <select className="bg-white/20 text-white border border-white/40 rounded px-2 py-1 text-sm outline-none">
                  <option className="text-gray-900">TR</option>
                  <option className="text-gray-900">EN</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="hidden md:flex items-center gap-2 py-3 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-pink-500 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {cat.name}
              </button>
            ))}
            <a
              href="/kesfet"
              className="px-6 py-2 rounded-full font-medium transition-colors whitespace-nowrap text-pink-600 hover:bg-pink-50 flex items-center gap-2"
            >
              <Sparkles className="size-4" />
              Keşfet
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile Full Screen Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="min-h-screen">
            {/* Mobile Menu Header */}
            <div 
              className="relative bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${headerBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="bg-red-900/30 backdrop-blur-sm">
                <div className="px-4 py-6">
                  <div className="flex items-center justify-between">
                    <div className="text-white">
                      <div className="text-3xl font-bold tracking-wider">LADIORA</div>
                      <div className="text-sm tracking-widest">BOUTIQUE</div>
                    </div>
                    <button 
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-white hover:text-gray-200 transition-colors"
                    >
                      <X className="size-8" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu Content */}
            <div className="px-4 py-6">
              {/* User Section */}
              {isAuthenticated && user ? (
                <div className="mb-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-6 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="size-12 bg-white/20 rounded-full flex items-center justify-center">
                      <User className="size-6" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">Hoşgeldin!</p>
                      <p className="text-sm">{user.name} {user.surname}</p>
                    </div>
                  </div>
                  <p className="text-sm opacity-90">{user.email}</p>
                </div>
              ) : (
                <div className="mb-6">
                  <a
                    href="/giris"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 rounded-xl font-semibold shadow-lg"
                  >
                    <User className="size-5" />
                    Giriş Yap / Üye Ol
                  </a>
                </div>
              )}

              {/* Quick Actions */}
              <div className="mb-6 grid grid-cols-3 gap-3">
                <a
                  href="/favoriler"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex flex-col items-center gap-2 bg-pink-50 py-4 rounded-xl hover:bg-pink-100 transition-colors"
                >
                  <Heart className="size-6 text-pink-600" />
                  <span className="text-xs font-medium text-gray-900">Favoriler</span>
                </a>
                <a
                  href="/sepet"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex flex-col items-center gap-2 bg-pink-50 py-4 rounded-xl hover:bg-pink-100 transition-colors relative"
                >
                  <ShoppingCart className="size-6 text-pink-600" />
                  <span className="text-xs font-medium text-gray-900">Sepetim</span>
                  <span className="absolute top-2 right-2 bg-pink-600 text-white text-xs rounded-full size-5 flex items-center justify-center font-bold">
                    2
                  </span>
                </a>
                <a
                  href="/siparis-takip"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex flex-col items-center gap-2 bg-pink-50 py-4 rounded-xl hover:bg-pink-100 transition-colors"
                >
                  <Package className="size-6 text-pink-600" />
                  <span className="text-xs font-medium text-gray-900">Siparişler</span>
                </a>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-bold text-gray-900 mb-3 px-2">Kategoriler</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        handleCategoryClick(cat.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full px-6 py-3 rounded-xl font-medium text-left transition-all ${
                        activeCategory === cat.id
                          ? 'bg-pink-500 text-white shadow-lg'
                          : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Menu Links */}
              <div className="mb-6 border-t border-gray-200 pt-4">
                <h3 className="font-bold text-gray-900 mb-3 px-2">Menü</h3>
                <div className="space-y-1">
                  <a
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <Home className="size-5 text-pink-600" />
                    <span>Ana Sayfa</span>
                  </a>
                  <a
                    href="/kesfet"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <Sparkles className="size-5 text-pink-600" />
                    <span>Keşfet</span>
                  </a>
                  {isAuthenticated && (
                    <a
                      href="/hesabim"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <User className="size-5 text-pink-600" />
                      <span>Hesabım</span>
                    </a>
                  )}
                  <a
                    href="/hakkimizda"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <MapPin className="size-5 text-pink-600" />
                    <span>Hakkımızda</span>
                  </a>
                  <a
                    href="/iletisim"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <Phone className="size-5 text-pink-600" />
                    <span>İletişim</span>
                  </a>
                  <a
                    href="/sss"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <HelpCircle className="size-5 text-pink-600" />
                    <span>Sık Sorulan Sorular</span>
                  </a>
                </div>
              </div>

              {/* Settings */}
              <div className="mb-6 border-t border-gray-200 pt-4">
                <h3 className="font-bold text-gray-900 mb-3 px-2">Ayarlar</h3>
                <div className="space-y-1">
                  {isAuthenticated && (
                    <a
                      href="/hesabim?tab=settings"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <Settings className="size-5 text-pink-600" />
                      <span>Hesap Ayarları</span>
                    </a>
                  )}
                  <div className="flex items-center justify-between px-4 py-3">
                    <span className="text-gray-700 font-medium">Dil / Language</span>
                    <select className="bg-gray-100 text-gray-900 border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none">
                      <option>🇹🇷 Türkçe</option>
                      <option>🇬🇧 English</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Logout Button */}
              {isAuthenticated && (
                <div className="border-t border-gray-200 pt-4">
                  <button
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-3 bg-red-50 text-red-600 py-4 rounded-xl font-semibold hover:bg-red-100 transition-colors"
                  >
                    <LogOut className="size-5" />
                    Çıkış Yap
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}