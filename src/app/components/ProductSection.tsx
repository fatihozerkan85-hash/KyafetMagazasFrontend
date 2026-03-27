import { useState, useEffect } from 'react';
import { ProductCard } from './ProductCard';

const categories = [
  { id: 'all', name: 'Tümü' },
  { id: 'casual', name: 'Casual' },
  { id: 'hoodie', name: 'Hoodie Cape' },
  { id: 'sweatshirt', name: 'Sweatshirt' },
  { id: 'kimono', name: 'Kimono' },
  { id: 'jewelry', name: 'Takı & Aksesuar' },
  { id: 'scarf', name: 'Şal' }
];

const products = [
  // Casual
  { id: 1, category: 'casual', name: 'Rahat Kesim Günlük Elbise', price: '899 TL', oldPrice: '1.499 TL', image: 'https://images.unsplash.com/photo-1724405095085-06d4246a2af8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjB3b21lbiUyMGZhc2hpb24lMjBjbG90aGluZ3xlbnwxfHx8fDE3NzQ1OTE2ODN8MA&ixlib=rb-4.1.0&q=80&w=1080', badge: '%40' },
  { id: 2, category: 'casual', name: 'Klasik Casual Elbise', price: '1.299 TL', image: 'https://images.unsplash.com/photo-1664894626626-65ab49e0077d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBkcmVzcyUyMHdvbWFuJTIwbW9kZWx8ZW58MXx8fHwxNzc0NTkxNjg1fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 3, category: 'casual', name: 'Şık Günlük Kıyafet', price: '749 TL', oldPrice: '1.299 TL', image: 'https://images.unsplash.com/photo-1678723357379-d87f2a0ec8ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBmYXNoaW9uJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc0NDQ5MzczfDA&ixlib=rb-4.1.0&q=80&w=1080', badge: '%42' },
  { id: 4, category: 'casual', name: 'Rahat Kesim Bluz', price: '599 TL', image: 'https://images.unsplash.com/photo-1714046298190-7c33737ddc94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc3VtbWVyJTIwY29sbGVjdGlvbnxlbnwxfHx8fDE3NzQ1NTkyNDl8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  
  // Hoodie Cape
  { id: 5, category: 'hoodie', name: 'Kapşonlu Cape Ceket', price: '1.499 TL', oldPrice: '2.299 TL', image: 'https://images.unsplash.com/photo-1602658017766-770e7f831d8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob29kaWUlMjBjYXBlJTIwd29tZW58ZW58MXx8fHwxNzc0NTkxNjgzfDA&ixlib=rb-4.1.0&q=80&w=1080', badge: '%35' },
  { id: 6, category: 'hoodie', name: 'Oversize Hoodie', price: '1.199 TL', image: 'https://images.unsplash.com/photo-1721111259873-5a13f7fcd67b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdmVyc2l6ZWQlMjBob29kaWUlMjBmYXNoaW9ufGVufDF8fHx8MTc3NDQ5NzQ0MHww&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 7, category: 'hoodie', name: 'Şık Cape Model', price: '1.799 TL', image: 'https://images.unsplash.com/photo-1602658017766-770e7f831d8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob29kaWUlMjBjYXBlJTIwd29tZW58ZW58MXx8fHwxNzc0NTkxNjgzfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 8, category: 'hoodie', name: 'Modern Kapşonlu Üst', price: '999 TL', oldPrice: '1.499 TL', image: 'https://images.unsplash.com/photo-1721111259873-5a13f7fcd67b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdmVyc2l6ZWQlMjBob29kaWUlMjBmYXNoaW9ufGVufDF8fHx8MTc3NDQ5NzQ0MHww&ixlib=rb-4.1.0&q=80&w=1080', badge: '%33' },
  
  // Sweatshirt
  { id: 9, category: 'sweatshirt', name: 'Pamuklu Sweatshirt', price: '849 TL', oldPrice: '1.399 TL', image: 'https://images.unsplash.com/photo-1732708872490-a1ff3a917047?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2VhdHNoaXJ0JTIwd29tZW4lMjBmYXNoaW9ufGVufDF8fHx8MTc3NDU5MTY4NHww&ixlib=rb-4.1.0&q=80&w=1080', badge: '%39' },
  { id: 10, category: 'sweatshirt', name: 'Örme Kazak', price: '1.099 TL', image: 'https://images.unsplash.com/photo-1637527032130-3ee8b11d0cfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbml0JTIwc3dlYXRlciUyMHdvbWFufGVufDF8fHx8MTc3NDU5MTY4Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 11, category: 'sweatshirt', name: 'Rahat Kesim Sweat', price: '699 TL', image: 'https://images.unsplash.com/photo-1732708872490-a1ff3a917047?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2VhdHNoaXJ0JTIwd29tZW4lMjBmYXNoaW9ufGVufDF8fHx8MTc3NDU5MTY4NHww&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 12, category: 'sweatshirt', name: 'Şık Triko Kazak', price: '1.299 TL', oldPrice: '1.899 TL', image: 'https://images.unsplash.com/photo-1637527032130-3ee8b11d0cfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbml0JTIwc3dlYXRlciUyMHdvbWFufGVufDF8fHx8MTc3NDU5MTY4Nnww&ixlib=rb-4.1.0&q=80&w=1080', badge: '%32' },
  
  // Kimono
  { id: 13, category: 'kimono', name: 'İpek Kimono', price: '2.499 TL', oldPrice: '3.999 TL', image: 'https://images.unsplash.com/photo-1763705861849-42b8d1b0cb9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW1vbm8lMjBkcmVzcyUyMGVsZWdhbnR8ZW58MXx8fHwxNzc0NTkxNjg0fDA&ixlib=rb-4.1.0&q=80&w=1080', badge: '%37' },
  { id: 14, category: 'kimono', name: 'Saten Kimono Ceket', price: '1.899 TL', image: 'https://images.unsplash.com/photo-1666876935320-c932f9c1cdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwa2ltb25vJTIwcm9iZXxlbnwxfHx8fDE3NzQ1OTE2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 15, category: 'kimono', name: 'Desenli Kimono', price: '1.599 TL', image: 'https://images.unsplash.com/photo-1763705861849-42b8d1b0cb9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW1vbm8lMjBkcmVzcyUyMGVsZWdhbnR8ZW58MXx8fHwxNzc0NTkxNjg0fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 16, category: 'kimono', name: 'Uzun Kimono', price: '2.199 TL', oldPrice: '3.299 TL', image: 'https://images.unsplash.com/photo-1666876935320-c932f9c1cdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwa2ltb25vJTIwcm9iZXxlbnwxfHx8fDE3NzQ1OTE2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080', badge: '%33' },
  
  // Takı & Aksesuar
  { id: 17, category: 'jewelry', name: 'Altın Kaplama Kolye', price: '499 TL', oldPrice: '899 TL', image: 'https://images.unsplash.com/photo-1769116416517-594639a769a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwYWNjZXNzb3JpZXMlMjBuZWNrbGFjZXxlbnwxfHx8fDE3NzQ1OTE2ODR8MA&ixlib=rb-4.1.0&q=80&w=1080', badge: '%45' },
  { id: 18, category: 'jewelry', name: 'Zarif Küpe Seti', price: '349 TL', image: 'https://images.unsplash.com/photo-1758995115555-766abbd9a491?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwZWFycmluZ3MlMjBqZXdlbHJ5fGVufDF8fHx8MTc3NDU0NTc0Mnww&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 19, category: 'jewelry', name: 'İnci Kolye', price: '799 TL', image: 'https://images.unsplash.com/photo-1769116416517-594639a769a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwYWNjZXNzb3JpZXMlMjBuZWNrbGFjZXxlbnwxfHx8fDE3NzQ1OTE2ODR8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 20, category: 'jewelry', name: 'Şık Bileklik', price: '299 TL', oldPrice: '599 TL', image: 'https://images.unsplash.com/photo-1758995115555-766abbd9a491?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwZWFycmluZ3MlMjBqZXdlbHJ5fGVufDF8fHx8MTc3NDU0NTc0Mnww&ixlib=rb-4.1.0&q=80&w=1080', badge: '%50' },
  
  // Şal
  { id: 21, category: 'scarf', name: 'Yün Şal', price: '399 TL', oldPrice: '699 TL', image: 'https://images.unsplash.com/photo-1604843206973-fe1e58bf974e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBzY2FyZiUyMHdvb2x8ZW58MXx8fHwxNzc0NTkxNjg3fDA&ixlib=rb-4.1.0&q=80&w=1080', badge: '%43' },
  { id: 22, category: 'scarf', name: 'İpek Eşarp', price: '599 TL', image: 'https://images.unsplash.com/photo-1549401334-b71409ed03ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FyZiUyMHNoYXdsJTIwZmFzaGlvbnxlbnwxfHx8fDE3NzQ1OTE2ODV8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 23, category: 'scarf', name: 'Desenli Şal', price: '449 TL', image: 'https://images.unsplash.com/photo-1604843206973-fe1e58bf974e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBzY2FyZiUyMHdvb2x8ZW58MXx8fHwxNzc0NTkxNjg3fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 24, category: 'scarf', name: 'Kışlık Atkı', price: '349 TL', oldPrice: '599 TL', image: 'https://images.unsplash.com/photo-1549401334-b71409ed03ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FyZiUyMHNoYXdsJTIwZmFzaGlvbnxlbnwxfHx8fDE3NzQ1OTE2ODV8MA&ixlib=rb-4.1.0&q=80&w=1080', badge: '%42' },
];

interface ProductSectionProps {
  activeCategory?: string;
}

export function ProductSection({ activeCategory = 'all' }: ProductSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState(activeCategory);

  // Update selected category when prop changes
  useEffect(() => {
    setSelectedCategory(activeCategory);
  }, [activeCategory]);

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Category Tabs */}
      <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-6 py-2 rounded-full font-medium transition-colors whitespace-nowrap ${
              selectedCategory === cat.id
                ? 'bg-pink-500 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            oldPrice={product.oldPrice}
            image={product.image}
            badge={product.badge}
          />
        ))}
      </div>

      {/* Show More Button */}
      {filteredProducts.length > 0 && (
        <div className="text-center mt-12">
          <button className="bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
            Daha Fazla Göster
          </button>
        </div>
      )}
    </section>
  );
}