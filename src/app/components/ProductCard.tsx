import { Heart, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  oldPrice?: string;
  image: string;
  badge?: string;
}

export function ProductCard({ name, price, oldPrice, image, badge }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  const handleAddToCart = () => {
    // Simulate random payment result for demo
    const isSuccess = Math.random() > 0.3; // 70% success rate
    
    if (isSuccess) {
      window.location.href = '/odeme-basarili';
    } else {
      window.location.href = '/odeme-basarisiz';
    }
  };

  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <img 
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {badge && (
          <div className="absolute top-3 left-3 bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold">
            {badge}
          </div>
        )}
        
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 bg-white size-9 rounded-full flex items-center justify-center hover:bg-pink-50 transition-colors shadow-md"
        >
          <Heart 
            className={`size-4 ${isLiked ? 'fill-pink-600 text-pink-600' : 'text-gray-700'}`}
          />
        </button>

        <button 
          onClick={handleAddToCart}
          className="absolute bottom-0 left-0 right-0 bg-pink-600 text-white py-3 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 font-semibold"
        >
          <ShoppingCart className="size-4" />
          <span>Sepete Ekle</span>
        </button>
      </div>

      <div className="p-3">
        <h3 className="font-medium text-gray-900 mb-2 text-sm line-clamp-2">{name}</h3>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-pink-600">{price}</span>
          {oldPrice && (
            <span className="text-sm text-gray-400 line-through">{oldPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
}