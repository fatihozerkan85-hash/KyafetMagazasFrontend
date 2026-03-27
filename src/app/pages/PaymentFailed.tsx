import { XCircle, CreditCard, Home, RefreshCw } from 'lucide-react';
import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const failureReasons = [
  {
    title: 'Yetersiz Bakiye',
    description: 'Kartınızda yeterli bakiye bulunmuyor olabilir.',
    icon: '💳'
  },
  {
    title: 'Kart Bilgisi Hatası',
    description: 'Kart numarası, son kullanma tarihi veya CVV kodu yanlış girilmiş olabilir.',
    icon: '🔒'
  },
  {
    title: 'Banka Reddi',
    description: 'İşleminiz bankanız tarafından reddedilmiş olabilir.',
    icon: '🏦'
  },
  {
    title: '3D Secure Onayı',
    description: '3D Secure doğrulamasını tamamlamadınız veya iptal ettiniz.',
    icon: '🔐'
  }
];

export function PaymentFailed() {
  const [selectedReason, setSelectedReason] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full">
          {/* Error Icon */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center size-24 bg-red-100 rounded-full mb-6">
              <XCircle className="size-16 text-red-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Ödeme Başarısız
            </h1>
            <p className="text-xl text-gray-600">
              Üzgünüz, ödemeniz tamamlanamadı.
            </p>
          </div>

          {/* Error Details Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-red-800 font-semibold mb-1">
                İşlem Başarısız
              </p>
              <p className="text-red-700 text-sm">
                Ödemeniz işlenirken bir hata oluştu. Lütfen tekrar deneyin.
              </p>
            </div>

            <h3 className="font-semibold text-gray-900 mb-4">
              Olası Sebepler:
            </h3>
            
            <div className="space-y-3">
              {failureReasons.map((reason, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedReason(selectedReason === index ? null : index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    selectedReason === index
                      ? 'border-pink-500 bg-pink-50'
                      : 'border-gray-200 hover:border-pink-300 bg-white'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{reason.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {reason.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-6 bg-blue-50 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <strong>💡 İpucu:</strong> Farklı bir ödeme yöntemi denemek veya kart bilgilerinizi kontrol etmek sorunu çözebilir.
              </p>
            </div>
          </div>

          {/* Support Info */}
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl p-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="size-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <CreditCard className="size-6 text-pink-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Yardıma mı ihtiyacınız var?
                </h3>
                <p className="text-gray-700 text-sm mb-3">
                  Müşteri hizmetleri ekibimiz size yardımcı olmaktan mutluluk duyacaktır.
                </p>
                <a
                  href="tel:+902125550123"
                  className="text-pink-600 font-semibold hover:text-pink-700 text-sm"
                >
                  📞 +90 (212) 555 0123
                </a>
                <span className="text-gray-400 mx-2">•</span>
                <a
                  href="mailto:destek@ladiora.com.tr"
                  className="text-pink-600 font-semibold hover:text-pink-700 text-sm"
                >
                  📧 destek@ladiora.com.tr
                </a>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => window.history.back()}
              className="flex items-center justify-center gap-2 bg-pink-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
            >
              <RefreshCw className="size-5" />
              Tekrar Dene
            </button>
            <a
              href="/"
              className="flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-4 rounded-lg font-semibold border-2 border-gray-200 hover:border-pink-300 hover:bg-pink-50 transition-colors"
            >
              <Home className="size-5" />
              Ana Sayfaya Dön
            </a>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              Kartınızdan herhangi bir ücret çekilmemiştir.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
