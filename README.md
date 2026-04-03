# 🌸 Ladiora Boutique - E-Ticaret Web Sitesi

Modern, responsive ve tamamen frontend tabanlı bir moda butik web sitesi.

## 🎯 Özellikler

### 🛍️ E-Ticaret Özellikleri
- **18 Sayfalık Tam Teşekküllü Site**
- Ürün kataloğu ve detay sayfaları
- Alışveriş sepeti yönetimi
- Favoriler sistemi
- Ödeme simülasyonu
- Sipariş takip sistemi
- Kullanıcı giriş sistemi

### 📱 Sayfa Yapısı
- **Ana Sayfa** - Hero banner, kategoriler, öne çıkan ürünler
- **Ürün Kategorileri** - Casual, Hoodie Cape, Sweatshirt, Kimono, Takı & Aksesuar, Şal
- **Ürün Detay** - Beden seçimi, renk seçenekleri, açıklama
- **Sepet** - Ürün yönetimi, miktar güncelleme
- **Favoriler** - Beğenilen ürünler listesi
- **Hesabım** - Kullanıcı profili ve sipariş geçmişi
- **Giriş Yap** - Kullanıcı kimlik doğrulama
- **Ödeme** - Checkout süreci
- **Ödeme Başarılı/Başarısız** - İşlem sonuç sayfaları
- **Sipariş Takip** - Kargo durumu sorgulama
- **İletişim** - İletişim formu ve bilgiler
- **SSS** - Sık sorulan sorular
- **Hakkımızda** - Butik hikayesi

### 🎨 Özel Araçlar
- **Instagram İçerik Planlayıcı** (`/instagram-planlayici`)
  - 30 günlük hazır içerik takvimi
  - Gönderi metinleri ve hashtag setleri
  - Görsel önerileri ve paylaşım saatleri
  - Kategori filtreleme (Ürün Tanıtımı, Motivasyon, Stil Önerisi, vb.)
  - Tek tıkla kopyalama özelliği

- **WhatsApp Profil Resmi Oluşturucu** (`/profil-resmi`)
  - 4 farklı profesyonel logo tasarımı
  - PNG formatında indirilebilir
  - Marka kimliğine uygun tasarımlar

## 🎨 Tasarım

- **Renk Paleti**: Pembe/Kırmızı ana renk (#DB2777, #DC2626)
- **Framework**: React 18 + TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router v7
- **Animasyonlar**: Motion (Framer Motion)

## 📦 Kurulum

```bash
# Bağımlılıkları yükleyin
pnpm install

# Geliştirme sunucusunu başlatın
pnpm dev

# Production build
pnpm build
```

## 🛠️ Teknolojiler

### Core
- React 18.3.1
- TypeScript
- Vite 6.3.5
- React Router 7.13.0

### UI & Styling
- Tailwind CSS 4.1.12
- Radix UI (Accordion, Dialog, Dropdown, vb.)
- Lucide React (Icons)
- Motion 12.23.24
- Recharts 2.15.2 (Charts)

### Form & Validation
- React Hook Form 7.55.0
- Date-fns 3.6.0

### Additional Libraries
- Material UI 7.3.5
- Canvas Confetti 1.9.4
- React DnD 16.0.1
- React Slick 0.31.0
- Sonner 2.0.3 (Toast notifications)

## 📁 Proje Yapısı

```
ladiora-boutique/
├── public/                    # Static dosyalar
│   ├── ladiora-logo-3.html   # Logo HTML (Circle)
│   └── ladiora-logo-4.html   # Logo HTML (Fashion)
├── src/
│   ├── app/
│   │   ├── components/       # React bileşenleri
│   │   │   ├── ui/          # shadcn/ui bileşenleri
│   │   │   └── figma/       # Figma entegrasyon bileşenleri
│   │   ├── context/         # React Context (Auth)
│   │   ├── pages/           # Sayfa bileşenleri
│   │   ├── App.tsx          # Ana uygulama
│   │   ├── main.tsx         # Giriş noktası
│   │   └── routes.tsx       # Route tanımları
│   └── styles/              # CSS dosyaları
│       ├── index.css
│       ├── tailwind.css
│       ├── theme.css
│       └── fonts.css
├── .gitignore
├── package.json
├── vite.config.ts
└── README.md
```

## 🌐 Sayfalar & Rotalar

| Rota | Açıklama |
|------|----------|
| `/` | Ana sayfa |
| `/kategori/:category` | Kategori sayfası |
| `/urun/:id` | Ürün detay |
| `/sepet` | Alışveriş sepeti |
| `/favoriler` | Favori ürünler |
| `/odeme` | Checkout |
| `/odeme-basarili` | Başarılı ödeme |
| `/odeme-basarisiz` | Başarısız ödeme |
| `/siparis-takip` | Sipariş takip |
| `/hesabim` | Kullanıcı hesabı |
| `/giris` | Giriş yap |
| `/iletisim` | İletişim |
| `/sss` | SSS |
| `/hakkimizda` | Hakkımızda |
| `/instagram-planlayici` | Instagram içerik planlayıcı |
| `/profil-resmi` | Profil resmi oluşturucu |

## 💡 Özellikler Detayı

### Frontend-Only Veri Yönetimi
- Tüm veriler localStorage ile saklanır
- Sepet, favoriler ve kullanıcı bilgileri tarayıcıda tutulur
- Backend bağımlılığı yoktur

### Responsive Tasarım
- Mobil-first yaklaşım
- Tablet ve desktop optimizasyonlu
- Esnek grid sistem

### Kategori Sistemi
6 ana kategori:
1. Casual
2. Hoodie Cape
3. Sweatshirt
4. Kimono
5. Takı & Aksesuar
6. Şal

### Instagram Planlayıcı Özellikleri
- 30 gün boyunca her gün için hazır içerik
- Gönderi metinleri (caption)
- Hashtag setleri (15-20 hashtag)
- Görsel önerileri
- En iyi paylaşım saatleri
- Kategori bazlı filtreleme
- Tek tıkla kopyalama

### Profil Resmi Oluşturucu
- 4 farklı tasarım seçeneği
- Yüksek çözünürlüklü PNG çıktı
- Marka renklerine uyumlu
- WhatsApp, Instagram, Facebook için optimize

## 🚀 Geliştirme Notları

- **Vite** ile hızlı geliştirme ortamı
- **Hot Module Replacement** (HMR) aktif
- **TypeScript** ile tip güvenliği
- **ESLint** ile kod kalitesi

## 📝 Lisans

Bu proje Ladiora Boutique için özel olarak geliştirilmiştir.

---

**Geliştirme Tarihi**: Nisan 2026  
**Versiyon**: 0.0.1  
**Website**: www.ladiora.com.tr
