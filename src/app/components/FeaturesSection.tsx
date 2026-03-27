import { Truck, CreditCard, Shield, Headphones } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: "Ücretsiz Kargo",
    description: "500 TL ve üzeri alışverişlerde"
  },
  {
    icon: CreditCard,
    title: "Güvenli Ödeme",
    description: "256-bit SSL sertifikası"
  },
  {
    icon: Shield,
    title: "Kolay İade",
    description: "14 gün içinde iade garantisi"
  },
  {
    icon: Headphones,
    title: "7/24 Destek",
    description: "Her zaman yanınızdayız"
  }
];

export function FeaturesSection() {
  return (
    <section className="bg-pink-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center size-16 bg-pink-600 text-white rounded-full mb-4">
                  <Icon className="size-8" />
                </div>
                <h3 className="font-semibold mb-1 text-gray-900">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}