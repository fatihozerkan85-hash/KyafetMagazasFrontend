import { CheckCircle, Package, Home, ShoppingBag } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import confetti from 'canvas-confetti';

export function PaymentSuccess() {
  const [orderNumber] = useState(() => 
    'LD' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0')
  );
  const [estimatedDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 3);
    return date.toLocaleDateString('tr-TR', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  });

  useEffect(() => {
    // Confetti effect
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ec4899', '#db2777', '#be185d']
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ec4899', '#db2777', '#be185d']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full">
          {/* Success Icon */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center size-24 bg-green-100 rounded-full mb-6">
              <CheckCircle className="size-16 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Ödemeniz Başarılı!
            </h1>
            <p className="text-xl text-gray-600">
              Siparişiniz başarıyla alındı ve işleme konuldu.
            </p>
          </div>

          {/* Order Details Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <div className="border-b border-gray-200 pb-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Sipariş Numarası</p>
                  <p className="text-2xl font-bold text-gray-900">{orderNumber}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 mb-1">Sipariş Tarihi</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {new Date().toLocaleDateString('tr-TR', { 
                      day: 'numeric', 
                      month: 'long', 
                      year: 'numeric' 
                    })}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="size-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Package className="size-6 text-pink-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Tahmini Teslimat Tarihi
                  </h3>
                  <p className="text-gray-600">{estimatedDate}</p>
                </div>
              </div>

              <div className="bg-pink-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  📧 Sipariş onayı e-posta adresinize gönderildi.
                </p>
                <p className="text-sm text-gray-700 mt-1">
                  📱 Kargo takip bilgileriniz SMS ile tarafınıza iletilecektir.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="/"
              className="flex items-center justify-center gap-2 bg-pink-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
            >
              <Home className="size-5" />
              Ana Sayfaya Dön
            </a>
            <button
              onClick={() => window.print()}
              className="flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-4 rounded-lg font-semibold border-2 border-gray-200 hover:border-pink-300 hover:bg-pink-50 transition-colors"
            >
              <ShoppingBag className="size-5" />
              Siparişi Yazdır
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-2">
              Sorularınız için müşteri hizmetlerimizle iletişime geçebilirsiniz.
            </p>
            <a href="tel:+902125550123" className="text-pink-600 font-semibold hover:text-pink-700">
              +90 (212) 555 0123
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
