import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Download, Sparkles, Heart, Instagram, MessageCircle } from 'lucide-react';

export function ProfileImageGenerator() {
  const [selectedDesign, setSelectedDesign] = useState<number>(1);

  const designs = [
    {
      id: 1,
      name: 'Klasik Logo - Gradient',
      description: 'Pembe-mor gradient arka plan ile modern "L" harfi'
    },
    {
      id: 2,
      name: 'Minimalist',
      description: 'Beyaz arka plan, renkli "LADIORA" yazısı'
    },
    {
      id: 3,
      name: 'Elegant Circle',
      description: 'Çember içinde zarif "L" monogramı'
    },
    {
      id: 4,
      name: 'Fashion Icon',
      description: 'Elbise silueti ile marka kimliği'
    }
  ];

  const downloadImage = (designId: number) => {
    const svg = document.getElementById(`design-${designId}`);
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');
    
    const img = new Image();
    img.onload = () => {
      ctx?.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.download = `ladiora-profil-${designId}.png`;
      downloadLink.href = pngFile;
      downloadLink.click();
    };
    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-1 py-8">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl p-8 md:p-12 mb-8 text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="size-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Sparkles className="size-8" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Profil Resmi Oluşturucu</h1>
                <p className="text-white/90 text-lg mt-1">WhatsApp, Instagram & Sosyal Medya</p>
              </div>
            </div>
            <p className="text-white/90">
              Ladiora Boutique için profesyonel profil resimleri. İstediğiniz tasarımı seçin ve indirin!
            </p>
          </div>

          {/* Design Selection */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {designs.map((design) => (
              <button
                key={design.id}
                onClick={() => setSelectedDesign(design.id)}
                className={`text-left p-4 rounded-xl border-2 transition-all ${
                  selectedDesign === design.id
                    ? 'border-pink-600 bg-pink-50'
                    : 'border-gray-200 bg-white hover:border-pink-300'
                }`}
              >
                <h3 className="font-bold text-gray-900 mb-1">{design.name}</h3>
                <p className="text-sm text-gray-600">{design.description}</p>
              </button>
            ))}
          </div>

          {/* Preview & Download */}
          <div className="bg-white rounded-3xl p-8 border-2 border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Preview */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Önizleme</h2>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
                  <div className="aspect-square max-w-sm mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
                    {selectedDesign === 1 && <Design1 />}
                    {selectedDesign === 2 && <Design2 />}
                    {selectedDesign === 3 && <Design3 />}
                    {selectedDesign === 4 && <Design4 />}
                  </div>
                </div>

                {/* Download Button */}
                <button
                  onClick={() => downloadImage(selectedDesign)}
                  className="w-full mt-6 bg-gradient-to-r from-pink-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:from-pink-700 hover:to-purple-700 transition-all flex items-center justify-center gap-3 shadow-lg"
                >
                  <Download className="size-6" />
                  Profil Resmini İndir (PNG)
                </button>
              </div>

              {/* Info & Usage */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Kullanım Alanları</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-4">
                    <div className="size-10 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="size-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">WhatsApp Business</h3>
                      <p className="text-sm text-gray-600">Müşterilerinizle iletişim için profesyonel profil resmi</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4">
                    <div className="size-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Instagram className="size-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Instagram</h3>
                      <p className="text-sm text-gray-600">Hesabınızı profesyonelleştirin</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4">
                    <div className="size-10 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Heart className="size-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Diğer Sosyal Medya</h3>
                      <p className="text-sm text-gray-600">Facebook, Twitter, TikTok ve daha fazlası</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">📐 Teknik Özellikler</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <span>Boyut:</span>
                      <span className="font-semibold">1024 x 1024 px</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Format:</span>
                      <span className="font-semibold">PNG (Şeffaf)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Kalite:</span>
                      <span className="font-semibold">Yüksek Çözünürlük</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Uyumluluk:</span>
                      <span className="font-semibold">Tüm Platformlar</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-pink-50 border-2 border-pink-200 rounded-xl p-4">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Sparkles className="size-5 text-pink-600" />
                    Kullanım İpucu
                  </h4>
                  <p className="text-sm text-gray-700">
                    İndirdiğiniz görseli WhatsApp Business profilinize yüklerken, 
                    yüzünüzün net görünmesi için merkezde olduğundan emin olun. 
                    1024x1024 boyutu tüm sosyal medya platformları için idealdir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Design 1: Classic Gradient Logo
function Design1() {
  return (
    <svg id="design-1" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#DB2777', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#9333EA', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect width="1024" height="1024" fill="url(#grad1)" />
      
      {/* Letter L */}
      <path
        d="M 350 250 L 450 250 L 450 700 L 650 700 L 650 800 L 350 800 Z"
        fill="white"
        opacity="0.95"
      />
      
      {/* Decorative elements */}
      <circle cx="700" cy="300" r="30" fill="white" opacity="0.2" />
      <circle cx="750" cy="400" r="20" fill="white" opacity="0.15" />
      <circle cx="320" cy="350" r="25" fill="white" opacity="0.2" />
      
      {/* Text */}
      <text
        x="512"
        y="880"
        fontFamily="Arial, sans-serif"
        fontSize="72"
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
      >
        LADIORA
      </text>
    </svg>
  );
}

// Design 2: Minimalist White
function Design2() {
  return (
    <svg id="design-2" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#DB2777', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#9333EA', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect width="1024" height="1024" fill="white" />
      
      {/* Main Text */}
      <text
        x="512"
        y="480"
        fontFamily="Arial, sans-serif"
        fontSize="140"
        fontWeight="bold"
        fill="url(#textGrad)"
        textAnchor="middle"
      >
        LADIORA
      </text>
      
      {/* Subtitle */}
      <text
        x="512"
        y="600"
        fontFamily="Arial, sans-serif"
        fontSize="48"
        fill="#666"
        textAnchor="middle"
        letterSpacing="8"
      >
        BOUTIQUE
      </text>
      
      {/* Decorative line */}
      <line x1="312" y1="640" x2="712" y2="640" stroke="url(#textGrad)" strokeWidth="4" />
      
      {/* Small hearts */}
      <text x="350" y="370" fontSize="60" fill="#DB2777" opacity="0.3">♥</text>
      <text x="630" y="370" fontSize="60" fill="#9333EA" opacity="0.3">♥</text>
    </svg>
  );
}

// Design 3: Elegant Circle
function Design3() {
  return (
    <svg id="design-3" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="circleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FDF2F8', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#FAE8FF', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#DB2777', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#9333EA', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      <rect width="1024" height="1024" fill="url(#circleGrad)" />
      
      {/* Outer circle border */}
      <circle cx="512" cy="512" r="400" fill="none" stroke="url(#borderGrad)" strokeWidth="20" />
      
      {/* Inner circle */}
      <circle cx="512" cy="512" r="350" fill="white" />
      
      {/* Monogram L */}
      <text
        x="512"
        y="600"
        fontFamily="Georgia, serif"
        fontSize="320"
        fontWeight="bold"
        fill="url(#borderGrad)"
        textAnchor="middle"
        fontStyle="italic"
      >
        L
      </text>
      
      {/* Brand name curved */}
      <text
        x="512"
        y="850"
        fontFamily="Arial, sans-serif"
        fontSize="56"
        fontWeight="bold"
        fill="url(#borderGrad)"
        textAnchor="middle"
        letterSpacing="6"
      >
        LADIORA
      </text>
    </svg>
  );
}

// Design 4: Fashion Icon
function Design4() {
  return (
    <svg id="design-4" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="bgGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FDF2F8', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#FAE8FF', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="dressGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#DB2777', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#9333EA', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      <rect width="1024" height="1024" fill="url(#bgGrad4)" />
      
      {/* Dress silhouette */}
      <path
        d="M 412 250 L 612 250 L 650 350 L 650 750 Q 650 800 600 800 L 424 800 Q 374 800 374 750 L 374 350 Z"
        fill="url(#dressGrad)"
      />
      
      {/* Dress waist */}
      <ellipse cx="512" cy="500" rx="100" ry="20" fill="#9333EA" opacity="0.3" />
      
      {/* Hanger hook */}
      <line x1="512" y1="200" x2="512" y2="250" stroke="#4B5563" strokeWidth="8" strokeLinecap="round" />
      <circle cx="512" cy="190" r="15" fill="#4B5563" />
      
      {/* Brand name */}
      <text
        x="512"
        y="920"
        fontFamily="Arial, sans-serif"
        fontSize="80"
        fontWeight="bold"
        fill="url(#dressGrad)"
        textAnchor="middle"
        letterSpacing="4"
      >
        LADIORA
      </text>
      
      {/* Sparkles */}
      <circle cx="350" cy="300" r="8" fill="#DB2777" opacity="0.6" />
      <circle cx="370" cy="320" r="5" fill="#DB2777" opacity="0.4" />
      <circle cx="674" cy="300" r="8" fill="#9333EA" opacity="0.6" />
      <circle cx="654" cy="320" r="5" fill="#9333EA" opacity="0.4" />
    </svg>
  );
}
