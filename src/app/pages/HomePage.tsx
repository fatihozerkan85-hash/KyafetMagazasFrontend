import { useState } from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { CategorySection } from '../components/CategorySection';
import { ProductSection } from '../components/ProductSection';
import { BannerSection } from '../components/BannerSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { Footer } from '../components/Footer';

export function HomePage() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="min-h-screen bg-white">
      <Header onCategoryChange={setActiveCategory} />
      <main>
        <HeroSection />
        <CategorySection />
        <div id="products-section">
          <ProductSection activeCategory={activeCategory} />
        </div>
        <BannerSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}
