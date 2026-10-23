'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Play,
  Download,
  Settings,
  Search,
  ArrowRight,
  Phone,
  Music,
  Video,
  Globe,
} from 'lucide-react';

const SUPPORTED_SITES = [
  { id: 'youtube', name: 'YouTube', icon: <Play className="w-6 h-6" />, color: 'text-red-500', category: 'فيديو' },
  { id: 'facebook', name: 'Facebook', icon: <Globe className="w-6 h-6" />, color: 'text-blue-500', category: 'تواصل اجتماعي' },
  { id: 'instagram', name: 'Instagram', icon: <Video className="w-6 h-6" />, color: 'text-pink-500', category: 'تواصل اجتماعي' },
  { id: 'tiktok', name: 'TikTok', icon: <Music className="w-6 h-6" />, color: 'text-black', category: 'فيديو قصير' },
  { id: 'anghami', name: 'Anghami', icon: <Music className="w-6 h-6" />, color: 'text-orange-500', category: 'موسيقى' },
  { id: 'vimeo', name: 'Vimeo', icon: <Video className="w-6 h-6" />, color: 'text-blue-400', category: 'فيديو' },
  { id: 'dailymotion', name: 'Dailymotion', icon: <Play className="w-6 h-6" />, color: 'text-blue-500', category: 'فيديو' },
  { id: 'soundcloud', name: 'SoundCloud', icon: <Music className="w-6 h-6" />, color: 'text-orange-500', category: 'موسيقى' },
];

const QUALITY_OPTIONS = [
  { label: '1080p (Full HD)', value: '1080' },
  { label: '720p (HD)', value: '720' },
  { label: '480p (SD)', value: '480' },
  { label: '360p (Low)', value: '360' },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedQuality, setSelectedQuality] = useState('720');
  const [selectedFormat, setSelectedFormat] = useState('mp4');
  const [isDark, setIsDark] = useState(true);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    alert(`جاري تحضير التحميل لـ: "${searchQuery}" بجودة ${selectedQuality}p`);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -right-20 w-96 h-96 bg-brand-500/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 -left-20 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 blur-[100px] rounded-full"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 sticky top-0 w-full backdrop-blur-md bg-dark-900/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-glow">
                <Play className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white tracking-tight">Snaptube</h1>
                <p className="text-xs text-gray-400">تطبيق تحميل فاخر</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                aria-label="تبديل السمة"
              >
                {isDark ? (
                  <div className="w-4 h-4 rounded-full bg-yellow-400" />
                ) : (
                    <div className="w-4 h-4 rounded-full bg-blue-400" />
                  )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">

        {/* Hero Section */}
        <section className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 text-xs font-medium text-brand-400">
            <div className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
            <span>إصدار ويب فاخر — أداء عالي على جميع الأجهزة</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-balance mb-6 leading-tight">
              تحميل فيديوهاتك وموسيقاك المفضلة
              <br />
              بأسلوب فاخر وأداء استثنائي
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              أسرع تطبيق تحميل ويب يدعم أكثر من 20 موقعاً بما في ذلك يوتيوب، فيسبوك، إنستغرام، تيك توك، أنغامي والكثير غيرهم.
              جودة تصل إلى 1080p، تحميل فوري، وتصميم فاخر صُمم خصيصاً للمستخدم العربي.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <form onSubmit={handleDownload} className="flex w-full sm:w-auto max-w-xl">
                <div className="relative w-full">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    placeholder="اربط رابط الفيديو أو ابحث باسمه..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="input-premium pl-12"
                  />
                </div>
                <button type="submit" className="btn-premium flex items-center gap-2 ml-2 sm:ml-0 px-8">
                  ابدأ التحميل <ArrowRight className="w-5 h-5 ml-1" />
                </button>
              </form>
            </div>

            <div className="mt-10 flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4 text-brand-500" />
                <span>تحميل غير محدود</span>
              </div>
              <div className="w-px h-4 bg-gray-700" />
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-500" />
                <span>بدون تثبيت تطبيقات</span>
              </div>
              <div className="w-px h-4 bg-gray-700" />
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4 text-brand-500" />
                <span>جودة قابلة للتخصيص</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Settings Bar */}
        <div className="glass-card p-6 mb-16 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
            <div className="flex items-center gap-3 text-gray-400">
              <Video className="w-4 h-4" />
              <span>جودة الفيديو:</span>
            </div>
            <select
              value={selectedQuality}
              onChange={(e) => setSelectedQuality(e.target.value)}
              className="bg-dark-700/50 border border-white/10 text-white px-4 py-2 rounded-xl focus:outline-none focus:border-brand-500 transition-colors"
            >
              {QUALITY_OPTIONS.map((q) => (
                <option key={q.value} value={q.value}>
                  {q.label}
                </option>
              ))}
            </select>

            <div className="flex items-center gap-3 text-gray-400">
              <Music className="w-4 h-4" />
              <span>صيغة الملف:</span>
            </div>
            <select
              value={selectedFormat}
              onChange={(e) => setSelectedFormat(e.target.value)}
              className="bg-dark-700/50 border border-white/10 text-white px-4 py-2 rounded-xl focus:outline-none focus:border-brand-500 transition-colors"
            >
              <option value="mp4">MP4 (فيديو)</option>
              <option value="mp3">MP3 (صوت فقط)</option>
            </select>
          </div>
        </div>

        {/* Supported Sites */}
        <section className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">المواقع المدعومة</h3>
              <p className="text-gray-400 text-sm">more than 20 platforms supported</p>
            </div>
            <a href="#" className="text-brand-500 text-sm font-medium hover:text-brand-400 transition-colors">
              عرض الكل <ArrowRight className="w-4 h-4 inline ml-1" />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {SUPPORTED_SITES.map((site) => (
              <div
                key={site.id}
                className="site-card group"
                onClick={() => {
                  setSearchQuery('');
                  // In a real app, this would navigate to site-specific page
                }}
              >
                <div className="site-icon mx-auto mb-3 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {site.icon}
                </div>
                <span className="block text-sm font-medium text-white">{site.name}</span>
                <span className="block text-xs text-gray-500 mt-0.5">{site.category}</span>
              </div>
            ))}
          </div>
        </section>

        {/* تحميلاتي - Downloads Section */}
        <section className="mt-20 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white text-gradient mb-2">تحميلاتي</h3>
              <p className="text-gray-400 text-sm">إدارة ملفات التحميل الخاصة بك</p>
            </div>
            <button className="btn-ghost">
              عرض الكل <ArrowRight className="w-4 h-4 inline ml-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "فيديو تعليمي programming",
                site: "YouTube",
                quality: "1080p",
                status: "completed",
                progress: 100,
              },
              {
                title: "أغنية أنغامي الجديدة",
                site: "Anghami",
                quality: "320kbps",
                status: "downloading",
                progress: 65,
              },
              {
                title: "فيديو تيك توك مضحك",
                site: "TikTok",
                quality: "720p",
                status: "paused",
                progress: 40,
              },
            ].map((item, i) => (
              <div key={i} className="glass-card p-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shrink-0">
                    <Video className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-semibold text-white truncate">{item.title}</h4>
                      <span className="text-xs px-2 py-0.5 rounded-full {item.status === 'completed' ? 'bg-green-500/20 text-green-400' : item.status === 'downloading' ? 'bg-blue-500/20 text-blue-400' : 'bg-yellow-500/20 text-yellow-400'}">
                        {item.status === 'completed' ? 'مكتمل' : item.status === 'downloading' ? 'جارٍ التحميل' : 'متوقف'}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mb-3">{item.site} • {item.quality}</p>
                    <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-brand-500 to-brand-700 transition-all duration-500"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-400 mt-1 text-right">
                      {item.progress}%
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Grid */}
        <section className="mt-20">
          <div className="divider-luxury">
            <span>لماذا تختار Snaptube Web؟</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
              icon: <Download className="w-6 h-6" />,
              title: 'تحميل فوري',
              desc: 'خوادم سريعة مع دعم الاستئناف وإدارة التحميلات بفعالية.',
            }, {
              icon: <Play className="w-6 h-6" />,
              title: 'جودة عالية',
              desc: 'دعم تحميل حتى دقة 1080p مع خيارات متعددة للجودة والصيغة.',
            }, {
              icon: <Globe className="w-6 h-6" />,
              title: 'أكثر من 20 موقع',
              desc: 'يوتيوب، فيسبوك، إنستغرام، تيك توك، أنغامي، دايليموشن والكثير.',
            }].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card p-6"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-500 mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-dark-900/50 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-brand-500 flex items-center justify-center">
              <Play className="w-3 h-3 text-white" />
            </div>
            <span className="font-bold text-white">Snaptube Web</span>
          </div>
          <p className="text-gray-500 text-sm">
            تطبيق ويب فاخر للتحميل • تصميم فاخر • أداء استثنائي • دعم اللغة العربية
          </p>
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">خصوصية</a>
            <a href="#" className="hover:text-white transition-colors">شروط الاستخدام</a>
            <a href="#" className="hover:text-white transition-colors">اتصل بنا</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
