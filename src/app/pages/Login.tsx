import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Mail, Lock, LogIn, UserPlus } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { toast } from 'sonner';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Lütfen tüm alanları doldurun');
      return;
    }

    const success = login(email, password);
    if (success) {
      toast.success('Giriş başarılı! Hoş geldiniz 🎉');
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } else {
      toast.error('Giriş başarısız. Lütfen tekrar deneyin.');
    }
  };

  const handleDemoLogin = () => {
    const success = login('ayse.yilmaz@email.com', 'demo123');
    if (success) {
      toast.success('Demo hesap ile giriş yapıldı! 🎉');
      setTimeout(() => {
        navigate('/');
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <div className="inline-flex size-20 bg-pink-100 rounded-full items-center justify-center mb-6">
              <LogIn className="size-10 text-pink-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Hoş Geldiniz
            </h1>
            <p className="text-gray-600">
              Hesabınıza giriş yapın
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  E-posta Adresi
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ornek@email.com"
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-pink-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Şifre
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-pink-500 transition-colors"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="size-4" />
                  <span className="text-gray-700">Beni hatırla</span>
                </label>
                <a href="#" className="text-pink-600 hover:text-pink-700 font-semibold">
                  Şifremi Unuttum
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors flex items-center justify-center gap-2"
              >
                <LogIn className="size-5" />
                Giriş Yap
              </button>
            </form>

            <div className="mt-6 pt-6 border-t">
              <button
                onClick={handleDemoLogin}
                className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Demo Hesap ile Giriş Yap
              </button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                Hesabınız yok mu?{' '}
                <a href="/kayit" className="text-pink-600 hover:text-pink-700 font-semibold">
                  Kayıt Olun
                </a>
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-8 bg-white rounded-xl p-6 shadow-lg">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <UserPlus className="size-5 text-pink-600" />
              Üye Olmanın Avantajları
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex gap-2">
                <span className="text-pink-600">•</span>
                <span>Siparişlerinizi takip edin</span>
              </li>
              <li className="flex gap-2">
                <span className="text-pink-600">•</span>
                <span>Favorilerinizi kaydedin</span>
              </li>
              <li className="flex gap-2">
                <span className="text-pink-600">•</span>
                <span>Özel kampanyalardan haberdar olun</span>
              </li>
              <li className="flex gap-2">
                <span className="text-pink-600">•</span>
                <span>Hızlı ödeme imkanı</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
