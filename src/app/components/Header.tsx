import { Search, ShoppingCart, User, Menu, Heart } from 'lucide-react';
import { useState } from 'react';
import headerBg from 'figma:asset/15496945350b67a7b248006150bb217ebb850302.png';

interface HeaderProps {
  onCategoryChange?: (category: string) => void;
}

export function Header({ onCategoryChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

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
                <a href="/hesabim" className="text-white hover:text-gray-200 transition-colors hidden md:block">
                  <User className="size-6" />
                </a>
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
          </nav>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 pt-2 flex flex-col gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    handleCategoryClick(cat.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-6 py-2 rounded-full font-medium text-left ${
                    activeCategory === cat.id
                      ? 'bg-pink-500 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}