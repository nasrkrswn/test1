import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, Clock, Leaf, Utensils, Target, Heart, 
  ShieldCheck, Smartphone, Recycle, Star, Facebook, 
  Instagram, Twitter, Phone, Mail, ChevronLeft,
  Flame, Dumbbell, Briefcase, Users, X, CreditCard, Info,
  Sun, Moon, Languages, Menu
} from 'lucide-react';

const translations = {
  ar: {
    nav: { features: "المميزات", audience: "لمن وجباتنا؟", pricing: "الخطط والأسعار", menu: "المنيو", testimonials: "آراء العملاء" },
    hero: {
      badge: "🌿 صحتك تبدأ من طبقك",
      title: "استمتع بتجربة تغذية استثنائية تصلك ",
      titleAccent: "لباب منزلك يومياً",
      desc: "نقدم لك حلول تغذية ذكية ومبتكرة، مصممة خصيصاً لتلبي احتياجاتك الصحية وتناسب جدولك المزدحم. اختر خطتك الآن وابدأ رحلتك نحو حياة أفضل.",
      ctaPrimary: "ابدأ الآن واحصل على خصم الأسبوع",
      ctaSecondary: "استكشف المنيو"
    },
    payment: { title: "إتمام الاشتراك", plan: "خطة", name: "الاسم على البطاقة", card: "رقم البطاقة", expiry: "تاريخ الانتهاء", cvc: "رمز الأمان", confirm: "تأكيد الدفع", secure: "مدفوعات آمنة ومشفرة 100%", success: "تم الدفع والاشتراك بنجاح! مرحباً بك في ميل بريب برو." },
    features: {
      title: "لماذا تختار وجباتنا؟",
      subtitle: "نقدم لك تجربة متكاملة تجمع بين المذاق الرائع، الفائدة الصحية، والراحة التامة.",
      items: [
        { title: 'وجبات صحية جاهزة', desc: 'معدة بواسطة شيفات محترفين لضمان أعلى جودة ومذاق.' },
        { title: 'محسوبة السعرات والماكروز', desc: 'بشكل دقيق لجميع الأنظمة الغذائية لتصل لهدفك أسرع.' },
        { title: 'توصيل يومي صباحي', desc: 'تصلك وجباتك طازجة يومياً من 7 إلى 9 صباحاً.' },
        { title: 'قائمة متنوعة أسبوعياً', desc: 'أكثر من 20 وجبة تتغير أسبوعياً لكسر الملل.' },
        { title: 'خطط مخصصة لأهدافك', desc: 'خسارة وزن، بناء عضلات، كيتو، أو نباتي.' },
        { title: 'مكونات طازجة 100%', desc: 'نستخدم أفضل المكونات وبدون أي مواد حافظة.' }
      ]
    },
    audience: {
      painTitle: "هل تعاني من هذه المشاكل؟",
      painItems: [
        { title: 'مافيش وقت للطبخ', desc: 'يومك زحمة ومفيش وقت للطهي اليومي.' },
        { title: 'الأكل الجاهز غير صحي', desc: 'غالبًا مليء بالدهون والمواد الحافظة وغير مفيد.' },
        { title: 'المطاعم الصحية غالية', desc: 'مفيش قدرة على دفع تكاليف عالية يومياً.' },
        { title: 'صعوبة حساب السعرات', desc: 'حاجة معقدة ومرهقة بتخليك توقف الدايت.' }
      ],
      targetTitle: "نحن هنا من أجلك!",
      targetSubtitle: "صممنا وجباتنا لتناسب نمط حياتك، مهما كان مشغولاً أو دقيقاً.",
      targetItems: [
        { title: 'المهنيين المشغولين', desc: 'لا وقت للطهي' },
        { title: 'الرياضيين', desc: 'نظام غذائي دقيق' },
        { title: 'الباحثين عن الصحة', desc: 'خسارة وزن أو بناء عضل' },
        { title: 'العائلات والأمهات', desc: 'راحة من حيرة الطبخ' }
      ]
    },
    pricing: {
      title: "خطط تناسب أهدافك",
      subtitle: "اختر الباقة التي تناسب احتياجاتك اليومية وميزانيتك.",
      currency: "ج.م / أسبوع",
      choose: "اشترك الان",
      mostPopular: "الأكثر طلباً",
      special: {
        title: "أنظمة الكيتو والنباتي (Keto & Vegan)",
        desc: "نوفر أسعار وخيارات مخصصة بالكامل حسب نظامك الغذائي الخاص.",
        cta: "تواصل معنا للتفاصيل"
      }
    },
    footer: {
      desc: "وفر وقتك، كل صحي بدون تضحيات، وحقق هدفك سواء كان خسارة الوزن أو بناء العضلات.",
      contact: "تواصل معنا",
      follow: "تابعنا",
      rights: "جميع الحقوق محفوظة.",
      terms: "الشروط والأحكام",
      privacy: "سياسة الخصوصية"
    }
  },
  en: {
    nav: { features: "Features", audience: "For Whom?", pricing: "Plans", menu: "Menu", testimonials: "Testimonials" },
    hero: {
      badge: "🌿 Health starts from your plate",
      title: "Experience exceptional nutrition delivered ",
      titleAccent: "to your door daily",
      desc: "We provide smart and innovative nutrition solutions, specifically designed to meet your health needs and fit your busy schedule. Choose your plan now and start your journey towards a better life.",
      ctaPrimary: "Start Now & Get Weekly Discount",
      ctaSecondary: "Explore Menu"
    },
    payment: { title: "Complete Subscription", plan: "Plan", name: "Name on Card", card: "Card Number", expiry: "Expiry Date", cvc: "CVC", confirm: "Confirm Payment", secure: "100% Secure & Encrypted Payments", success: "Payment and subscription successful! Welcome to MealPrep Pro." },
    features: {
      title: "Why Choose Our Meals?",
      subtitle: "We offer a complete experience combining great taste, health benefits, and total convenience.",
      items: [
        { title: 'Ready Healthy Meals', desc: 'Prepared by professional chefs to ensure the highest quality and taste.' },
        { title: 'Calculated Calories & Macros', desc: 'Accurately for all diets to reach your goal faster.' },
        { title: 'Daily Morning Delivery', desc: 'Fresh meals delivered daily from 7 to 9 AM.' },
        { title: 'Weekly Varied Menu', desc: 'More than 20 meals changing weekly to break the boredom.' },
        { title: 'Customized Goal Plans', desc: 'Weight loss, muscle building, Keto, or Vegan.' },
        { title: '100% Fresh Ingredients', desc: 'We use the best ingredients with no preservatives.' }
      ]
    },
    audience: {
      painTitle: "Do You Suffer from These Problems?",
      painItems: [
        { title: 'No Time to Cook', desc: 'Your day is busy and there is no time for daily cooking.' },
        { title: 'Unhealthy Ready Food', desc: 'Often full of fats and preservatives and not beneficial.' },
        { title: 'Expensive Healthy Restaurants', desc: 'No ability to pay high costs daily.' },
        { title: 'Difficulty Calculating Calories', desc: 'Something complex and exhausting that makes you stop your diet.' }
      ],
      targetTitle: "We Are Here for You!",
      targetSubtitle: "We designed our meals to fit your lifestyle, no matter how busy or precise.",
      targetItems: [
        { title: 'Busy Professionals', desc: 'No time for cooking' },
        { title: 'Athletes', desc: 'Precise nutritional system' },
        { title: 'Health Seekers', desc: 'Weight loss or muscle building' },
        { title: 'Families & Mothers', desc: 'Comfort from cooking confusion' }
      ]
    },
    pricing: {
      title: "Plans for Your Goals",
      subtitle: "Choose the package that suits your daily needs and budget.",
      currency: "EGP / Week",
      choose: "Subscribe Now",
      mostPopular: "Most Popular",
      special: {
        title: "Keto & Vegan Systems",
        desc: "We provide fully customized prices and options according to your special diet.",
        cta: "Contact us for details"
      }
    },
    footer: {
      desc: "Save your time, eat healthy without sacrifices, and achieve your goal whether it's weight loss or muscle building.",
      contact: "Contact Us",
      follow: "Follow Us",
      rights: "All rights reserved.",
      terms: "Terms & Conditions",
      privacy: "Privacy Policy"
    }
  }
};

const MEALS_DATA = [
  { 
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80', 
    title: 'سلطة كينوا بالدجاج',
    titleEn: 'Chicken Quinoa Salad',
    category: 'salads',
    calories: 350,
    protein: '25g',
    carbs: '15g',
    fat: '12g',
    ingredients: ['صدر دجاج مشوي', 'كينوا', 'أفوكادو', 'طماطم كرزية', 'خس', 'صلصة الليمون وزيت الزيتون']
  },
  { 
    img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80', 
    title: 'سلطة دجاج يونانية',
    titleEn: 'Greek Chicken Salad',
    category: 'salads',
    calories: 320,
    protein: '28g',
    carbs: '12g',
    fat: '18g',
    ingredients: ['دجاج مشوي', 'خيار', 'طماطم', 'زيتون كالاماتا', 'جبنة فيتا', 'بصل أحمر', 'صلصة يونانية']
  },
  { 
    img: 'https://images.unsplash.com/photo-1515516969-d4008cc6241a?auto=format&fit=crop&w=600&q=80', 
    title: 'سلطة اللحم بالكينوا',
    titleEn: 'Beef & Quinoa Salad',
    category: 'salads',
    calories: 420,
    protein: '32g',
    carbs: '25g',
    fat: '20g',
    ingredients: ['شرائح لحم بقري مشوي', 'كينوا حمراء', 'جرجير', 'فلفل ألوان', 'بذور دوار الشمس', 'صلصة الخل والبلسميك']
  },
  { 
    img: 'https://images.unsplash.com/photo-1518133683791-0b9de5a055f0?auto=format&fit=crop&w=600&q=80', 
    title: 'مسقعة صحية باللحم المفروم',
    titleEn: 'Diet Moussaka with Minced Meat',
    category: 'main',
    calories: 350,
    protein: '25g',
    carbs: '20g',
    fat: '12g',
    ingredients: ['باذنجان مشوي', 'لحم مفروم قليل الدسم', 'صلصة طماطم طبيعية', 'فلفل أخضر', 'بهارات مصرية']
  },
  { 
    img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80', 
    title: 'سلمون مشوي بني',
    titleEn: 'Grilled Salmon Brown',
    category: 'main',
    calories: 450,
    protein: '30g',
    carbs: '45g',
    fat: '15g',
    ingredients: ['سلمون مشوي', 'أرز بني', 'بروكلي مطهو على البخار', 'جزر', 'صلصة ترياكي خفيفة']
  },
  { 
    img: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=600&q=80', 
    title: 'باستا صحية',
    titleEn: 'Healthy Pasta',
    category: 'main',
    calories: 400,
    protein: '20g',
    carbs: '50g',
    fat: '10g',
    ingredients: ['مكرونة القمح الكامل', 'صلصة طماطم طازجة', 'لحم مفروم قليل الدسم', 'ريحان', 'جبن بارميزان مبشور']
  },
  { 
    img: 'https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&w=600&q=80', 
    title: 'فطور مليء بالطاقة',
    titleEn: 'Energy Breakfast',
    category: 'breakfast',
    calories: 300,
    protein: '15g',
    carbs: '40g',
    fat: '8g',
    ingredients: ['شوفان', 'حليب لوز', 'موز', 'توت بري', 'بذور الشيا', 'عسل طبيعي']
  },
  { 
    img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80', 
    title: 'خيارات نباتية',
    titleEn: 'Vegan Options',
    category: 'vegan',
    calories: 380,
    protein: '18g',
    carbs: '55g',
    fat: '14g',
    ingredients: ['حمص مشوي', 'بطاطا حلوة', 'سبانخ', 'طحينة', 'بذور اليقطين']
  },
];

export default function App() {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [selectedMeal, setSelectedMeal] = useState<typeof MEALS_DATA[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [paymentData, setPaymentData] = useState({
    name: '',
    card: '',
    expiry: '',
    cvc: ''
  });

  const t = translations[lang];

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const handleSubscribe = (plan: string) => {
    setSelectedPlan(plan);
    setPaymentData({ name: '', card: '', expiry: '', cvc: '' });
    setIsPaymentOpen(true);
  };

  const handlePaymentConfirm = () => {
    if (!paymentData.name || !paymentData.card || !paymentData.expiry || !paymentData.cvc) {
      alert(lang === 'ar' ? 'يرجى ملء جميع الحقول' : 'Please fill all fields');
      return;
    }

    const message = `
طلب اشتراك جديد:
خطة: ${selectedPlan}

الاسم على البطاقة: ${paymentData.name}
رقم البطاقة: ${paymentData.card}
تاريخ الانتهاء: ${paymentData.expiry}
رمز الأمان: ${paymentData.cvc}
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/201110496424?text=${encodedMessage}`, '_blank');
    
    setIsPaymentOpen(false);
    setPaymentData({ name: '', card: '', expiry: '', cvc: '' });
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-emerald-200 selection:text-emerald-900 transition-colors duration-300 ${isDark ? 'bg-stone-950 text-stone-100' : 'bg-stone-50 text-stone-900'}`}>
      {/* Navbar */}
      <nav className={`sticky top-0 z-50 border-b transition-colors duration-300 ${isDark ? 'bg-stone-900/80 border-stone-800' : 'bg-white/80 border-stone-200'} backdrop-blur-md`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Leaf className="w-8 h-8 text-emerald-600" />
              <span className={`text-2xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-stone-800'}`}>
                MealPrep <span className="text-emerald-600">Pro</span>
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8 space-x-reverse">
              <a href="#features" className={`${isDark ? 'text-stone-400 hover:text-emerald-400' : 'text-stone-600 hover:text-emerald-600'} font-medium transition-colors`}>{t.nav.features}</a>
              <a href="#audience" className={`${isDark ? 'text-stone-400 hover:text-emerald-400' : 'text-stone-600 hover:text-emerald-600'} font-medium transition-colors`}>{t.nav.audience}</a>
              <a href="#menu" className={`${isDark ? 'text-stone-400 hover:text-emerald-400' : 'text-stone-600 hover:text-emerald-600'} font-medium transition-colors`}>{t.nav.menu}</a>
              <a href="#pricing" className={`${isDark ? 'text-stone-400 hover:text-emerald-400' : 'text-stone-600 hover:text-emerald-600'} font-medium transition-colors`}>{t.nav.pricing}</a>
              <a href="#testimonials" className={`${isDark ? 'text-stone-400 hover:text-emerald-400' : 'text-stone-600 hover:text-emerald-600'} font-medium transition-colors`}>{t.nav.testimonials}</a>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-full transition-colors ${isDark ? 'bg-stone-800 text-amber-400 hover:bg-stone-700' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
                title={isDark ? 'Light Mode' : 'Dark Mode'}
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button 
                onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
                className={`p-2 rounded-full transition-colors flex items-center gap-1 text-sm font-bold ${isDark ? 'bg-stone-800 text-emerald-400 hover:bg-stone-700' : 'bg-stone-100 text-emerald-600 hover:bg-stone-200'}`}
                title="Change Language"
              >
                <Languages className="w-5 h-5" />
                <span className="uppercase">{lang === 'ar' ? 'EN' : 'AR'}</span>
              </button>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`md:hidden p-2 rounded-full transition-colors ${isDark ? 'bg-stone-800 text-white hover:bg-stone-700' : 'bg-stone-100 text-stone-800 hover:bg-stone-200'}`}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden border-t overflow-hidden ${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'}`}
            >
              <div className="px-4 py-6 space-y-4">
                {[
                  { href: '#features', label: t.nav.features },
                  { href: '#audience', label: t.nav.audience },
                  { href: '#menu', label: t.nav.menu },
                  { href: '#pricing', label: t.nav.pricing },
                  { href: '#testimonials', label: t.nav.testimonials }
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-lg font-medium ${isDark ? 'text-stone-300 hover:text-emerald-400' : 'text-stone-600 hover:text-emerald-600'}`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className={`absolute inset-0 z-10 transition-colors duration-300 ${isDark ? 'bg-gradient-to-l from-stone-950 via-stone-950/90 to-transparent' : 'bg-gradient-to-l from-stone-50 via-stone-50/90 to-transparent'}`}></div>
          <img 
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1920&q=80" 
            alt="Healthy food background" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-800 font-semibold text-sm mb-6">
                {t.hero.badge}
              </span>
              <h1 className={`text-5xl md:text-6xl font-extrabold leading-tight mb-6 ${isDark ? 'text-white' : 'text-stone-900'}`}>
                {t.hero.title}<span className="text-emerald-600">{t.hero.titleAccent}</span>
              </h1>
              <p className={`text-lg md:text-xl mb-8 leading-relaxed ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>
                {t.hero.desc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
                  {t.hero.ctaPrimary} <ChevronLeft className={`w-5 h-5 transition-transform ${lang === 'en' ? 'rotate-180' : ''}`} />
                </button>
                <a href="#menu" className={`border px-8 py-4 rounded-full font-bold text-lg transition-all shadow-sm flex items-center justify-center gap-2 ${isDark ? 'bg-stone-800 text-white border-stone-700 hover:bg-stone-700' : 'bg-white text-stone-800 border-stone-200 hover:bg-stone-50'}`}>
                  {t.hero.ctaSecondary}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section id="features" className={`py-20 transition-colors duration-300 ${isDark ? 'bg-stone-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-stone-900'}`}>{t.features.title}</h2>
            <p className={`text-lg ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>{t.features.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Utensils, ...t.features.items[0] },
              { icon: Target, ...t.features.items[1] },
              { icon: Clock, ...t.features.items[2] },
              { icon: Flame, ...t.features.items[3] },
              { icon: Heart, ...t.features.items[4] },
              { icon: ShieldCheck, ...t.features.items[5] }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`rounded-2xl p-6 border transition-colors group ${isDark ? 'bg-stone-800 border-stone-700 hover:border-emerald-500' : 'bg-stone-50 border-stone-100 hover:border-emerald-200'}`}
              >
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-stone-900'}`}>{feature.title}</h3>
                <p className={`leading-relaxed ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience & Pain Points */}
      <section id="audience" className={`py-20 transition-colors duration-300 ${isDark ? 'bg-stone-950' : 'bg-stone-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Pain Points */}
            <div>
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-stone-900'}`}>{t.audience.painTitle}</h2>
              <div className="space-y-4">
                {t.audience.painItems.map((point, idx) => (
                  <div key={idx} className={`flex gap-4 items-start p-4 rounded-xl shadow-sm ${isDark ? 'bg-stone-900' : 'bg-white'}`}>
                    <div className="mt-1 bg-red-100 p-2 rounded-full">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className={`font-bold ${isDark ? 'text-white' : 'text-stone-900'}`}>{point.title}</h4>
                      <p className={`text-sm mt-1 ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Audience */}
            <div>
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-stone-900'}`}>{t.audience.targetTitle}</h2>
              <p className={`text-lg mb-8 ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>{t.audience.targetSubtitle}</p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Briefcase, ...t.audience.targetItems[0] },
                  { icon: Dumbbell, ...t.audience.targetItems[1] },
                  { icon: Target, ...t.audience.targetItems[2] },
                  { icon: Users, ...t.audience.targetItems[3] }
                ].map((audience, idx) => (
                  <div key={idx} className="bg-emerald-600 text-white p-6 rounded-2xl text-center">
                    <audience.icon className="w-8 h-8 mx-auto mb-3 opacity-80" />
                    <h4 className="font-bold text-lg mb-1">{audience.title}</h4>
                    <p className="text-emerald-100 text-sm">{audience.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className={`py-20 transition-colors duration-300 ${isDark ? 'bg-stone-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-stone-900'}`}>{lang === 'ar' ? 'استكشف قائمتنا المتنوعة' : 'Explore Our Varied Menu'}</h2>
            <p className={`text-lg ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>{lang === 'ar' ? 'وجبات طازجة، صحية، ومحضرة بعناية لتناسب أهدافك.' : 'Fresh, healthy meals prepared with care to suit your goals.'}</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: 'all', ar: 'الكل', en: 'All' },
              { id: 'salads', ar: 'سلطات', en: 'Salads' },
              { id: 'main', ar: 'أطباق رئيسية', en: 'Main Dishes' },
              { id: 'breakfast', ar: 'فطور', en: 'Breakfast' },
              { id: 'vegan', ar: 'نباتي', en: 'Vegan' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : isDark 
                      ? 'bg-stone-800 text-stone-400 hover:bg-stone-700' 
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {lang === 'ar' ? cat.ar : cat.en}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MEALS_DATA.filter(item => activeCategory === 'all' || item.category === activeCategory).map((item, idx) => (
              <motion.div 
                key={idx}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedMeal(item)}
                className={`group cursor-pointer rounded-3xl overflow-hidden border transition-all hover:shadow-2xl ${isDark ? 'bg-stone-800 border-stone-700' : 'bg-white border-stone-100'}`}
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-white font-bold flex items-center gap-2">
                      <Info className="w-5 h-5" /> {lang === 'ar' ? 'التفاصيل' : 'Details'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-stone-900'}`}>{lang === 'ar' ? item.title : item.titleEn}</h4>
                  <div className="flex items-center gap-4 text-sm font-medium">
                    <div className="flex items-center gap-1 text-emerald-600">
                      <Flame className="w-4 h-4" /> {item.calories}
                    </div>
                    <div className="flex items-center gap-1 text-stone-500">
                      <Target className="w-4 h-4" /> {item.protein}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-stone-900 via-emerald-900 to-stone-900 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.pricing.title}</h2>
            <p className="text-lg text-emerald-100/80">{t.pricing.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter */}
            <motion.div whileHover={{ y: -10 }} className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm hover:shadow-xl transition-all relative flex flex-col">
              <h3 className="text-2xl font-bold text-stone-900 mb-2">Starter <span className="text-stone-500 text-lg font-normal">({lang === 'ar' ? 'المبتدئ' : 'Beginner'})</span></h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-stone-900">899</span>
                <span className="text-stone-500 font-medium">{t.pricing.currency}</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-stone-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>{lang === 'ar' ? '3 وجبات يومياً × 5 أيام (15 وجبة)' : '3 meals daily x 5 days (15 meals)'}</span>
                </li>
                <li className="flex items-center gap-3 text-stone-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>1500 - 1800 {lang === 'ar' ? 'كالوري/يوم' : 'Cal/day'}</span>
                </li>
                <li className="flex items-center gap-3 text-stone-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>{lang === 'ar' ? 'توصيل مجاني' : 'Free Delivery'}</span>
                </li>
              </ul>
              <motion.button 
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                onClick={() => handleSubscribe('Starter')} 
                className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-colors shadow-md"
              >
                {t.pricing.choose}
              </motion.button>
            </motion.div>

            {/* Pro */}
            <motion.div whileHover={{ y: -10 }} className="bg-white rounded-3xl p-8 border-2 border-emerald-500 shadow-xl transform md:-translate-y-4 relative flex flex-col">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md whitespace-nowrap">
                {lang === 'ar' ? 'احصل علي خصم 20% علي الاحترافي' : 'Get 20% off Pro'}
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-2">Pro <span className="text-stone-500 text-lg font-normal">({lang === 'ar' ? 'الاحترافي' : 'Professional'})</span></h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-stone-900">1,499</span>
                <span className="text-stone-500 font-medium">{lang === 'ar' ? 'ج.م / وطني' : 'EGP / National'}</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-stone-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>{lang === 'ar' ? '3 وجبات رئيسية + 2 سناك × 5 أيام' : '3 main meals + 2 snacks x 5 days'}</span>
                </li>
                <li className="flex items-center gap-3 text-stone-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>{lang === 'ar' ? 'الإجمالي 25 فصلاً أسبوعياً' : 'Total 25 meals weekly'}</span>
                </li>
                <li className="flex items-center gap-3 text-stone-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>1800 - 2200 {lang === 'ar' ? 'كالوري/يوم' : 'Cal/day'}</span>
                </li>
                <li className="flex items-center gap-3 text-stone-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>{lang === 'ar' ? 'المزيد والمزيد مجاناً' : 'More and more for free'}</span>
                </li>
              </ul>
              <motion.button 
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}
                onClick={() => handleSubscribe('Pro')} 
                className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-colors shadow-md"
              >
                {t.pricing.choose}
              </motion.button>
            </motion.div>

            {/* Elite */}
            <motion.div whileHover={{ y: -10 }} className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm hover:shadow-xl transition-all relative flex flex-col">
              <h3 className="text-2xl font-bold text-stone-900 mb-2">Elite <span className="text-stone-500 text-lg font-normal">({lang === 'ar' ? 'النخبة' : 'Elite'})</span></h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-stone-900">1,999</span>
                <span className="text-stone-500 font-medium">{t.pricing.currency}</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-stone-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>{lang === 'ar' ? '3 وجبات رئيسية + 2 سناك × 7 أيام' : '3 main meals + 2 snacks x 7 days'}</span>
                </li>
                <li className="flex items-center gap-3 text-stone-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>{lang === 'ar' ? 'إجمالي 35 وجبة أسبوعياً' : 'Total 35 meals weekly'}</span>
                </li>
                <li className="flex items-center gap-3 text-stone-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>{lang === 'ar' ? 'سعرات قابلة للتخصيص بالكامل' : 'Fully customizable calories'}</span>
                </li>
                <li className="flex items-center gap-3 text-stone-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>{lang === 'ar' ? 'أولوية في التوصيل ودعم 24/7' : 'Priority delivery & 24/7 support'}</span>
                </li>
              </ul>
              <motion.button 
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.4 }}
                onClick={() => handleSubscribe('Elite')} 
                className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-colors shadow-md"
              >
                {t.pricing.choose}
              </motion.button>
            </motion.div>
          </div>

          <div className="mt-12 bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center max-w-3xl mx-auto border border-white/20">
            <h4 className="text-xl font-bold text-white mb-2">{t.pricing.special.title}</h4>
            <p className="text-emerald-100/80 mb-4">{t.pricing.special.desc}</p>
            <a href="tel:01110496424" className="text-emerald-400 font-bold underline hover:text-emerald-300 transition-colors flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              {t.pricing.special.cta}: 01110496424
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className={`py-20 transition-colors duration-300 ${isDark ? 'bg-stone-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-stone-900'}`}>{lang === 'ar' ? 'قصص نجاح عملائنا' : 'Our Customer Success Stories'}</h2>
            <p className={`text-lg ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>{lang === 'ar' ? 'انضم للآلاف ممن غيروا حياتهم للأفضل معنا.' : 'Join thousands who changed their lives for the better with us.'}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: lang === 'ar' ? 'أحمد م.' : 'Ahmed M.', role: lang === 'ar' ? 'خسارة وزن' : 'Weight Loss', text: lang === 'ar' ? 'خسرت 12 كج في 3 شهور بدون ما أحس إني عامل دايت، الأكل طعمه تحفة ومفيش حرمان.' : 'I lost 12 kg in 3 months without feeling like I was on a diet. The food tastes amazing and there is no deprivation.', stars: 5 },
              { name: lang === 'ar' ? 'كريم س.' : 'Karim S.', role: lang === 'ar' ? 'بناء عضلات' : 'Muscle Building', text: lang === 'ar' ? 'زاد وزني 6 كج عضل صافي، الماكروز محسوبة بالملي وده وفر عليا مجهود كبير جداً.' : 'I gained 6 kg of lean muscle. Macros are accurately calculated, which saved me a lot of effort.', stars: 5 },
              { name: lang === 'ar' ? 'محمود ع.' : 'Mahmoud A.', role: lang === 'ar' ? 'موظف مشغول' : 'Busy Employee', text: lang === 'ar' ? 'وفرت أكتر من 10 ساعات في الأسبوع كنت بضيعهم في الطبخ وغسيل المواعين. خدمة ممتازة.' : 'I saved more than 10 hours a week I used to waste on cooking and washing dishes. Excellent service.', stars: 5 },
              { name: lang === 'ar' ? 'سارة ن.' : 'Sara N.', role: lang === 'ar' ? 'أم عاملة' : 'Working Mother', text: lang === 'ar' ? 'أنقذني من حيرة الطبخ اليومي بعد الشغل. الأكل صحي ومطمنة وأنا باكله أنا وأولادي.' : 'It saved me from daily cooking confusion after work. The food is healthy and I feel safe eating it with my kids.', stars: 5 }
            ].map((testimonial, idx) => (
              <div key={idx} className={`p-6 rounded-2xl border transition-colors ${isDark ? 'bg-stone-800 border-stone-700' : 'bg-stone-50 border-stone-100'}`}>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className={`mb-6 italic ${isDark ? 'text-stone-300' : 'text-stone-700'}`}>"{testimonial.text}"</p>
                <div>
                  <h5 className={`font-bold ${isDark ? 'text-white' : 'text-stone-900'}`}>{testimonial.name}</h5>
                  <span className="text-sm text-emerald-600 font-medium">{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="py-16 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Target, title: lang === 'ar' ? 'تخصيص كامل' : 'Full Customization', desc: lang === 'ar' ? 'اختر وجباتك بنفسك' : 'Choose your own meals' },
              { icon: Star, title: lang === 'ar' ? 'شيفات محترفين' : 'Professional Chefs', desc: lang === 'ar' ? 'طعم لذيذ ومميز' : 'Delicious & unique taste' },
              { icon: Smartphone, title: lang === 'ar' ? 'تطبيق ذكي' : 'Smart App', desc: lang === 'ar' ? 'إدارة سهلة لاشتراكك' : 'Easy subscription management' },
              { icon: Recycle, title: lang === 'ar' ? 'صديقة للبيئة' : 'Eco-Friendly', desc: lang === 'ar' ? 'عبوات قابلة للتدوير' : 'Recyclable packaging' }
            ].map((usp, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-emerald-800 rounded-full flex items-center justify-center mb-4">
                  <usp.icon className="w-8 h-8 text-emerald-300" />
                </div>
                <h4 className="font-bold text-lg mb-1">{usp.title}</h4>
                <p className="text-emerald-200 text-sm">{usp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`transition-colors duration-300 ${isDark ? 'bg-stone-950 text-stone-400' : 'bg-stone-950 text-stone-300'} py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Leaf className="w-8 h-8 text-emerald-500" />
                <span className="text-2xl font-bold text-white tracking-tight">MealPrep <span className="text-emerald-500">Pro</span></span>
              </div>
              <p className="text-stone-400 mb-6 max-w-sm">
                {t.footer.desc}
              </p>
              <p className="text-emerald-500 font-medium text-lg tracking-widest uppercase">
                Healthy meals delivered daily
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">{t.footer.contact}</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-500" />
                  <a href="tel:01110496424" className="hover:text-emerald-500 transition-colors" dir="ltr">01110496424</a>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-emerald-500 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <a href="https://wa.me/201110496424" target="_blank" rel="noreferrer" className="hover:text-emerald-500 transition-colors" dir="ltr">WhatsApp</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-emerald-500" />
                  <a href="mailto:nasrkrswn@gmail.com" className="hover:text-emerald-500 transition-colors">nasrkrswn@gmail.com</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-lg">{t.footer.follow}</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-500">
            <p>© 2026 MealPrep Pro. {t.footer.rights}</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
              <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Payment Modal */}
      <AnimatePresence>
        {isPaymentOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500"></div>
              <button 
                onClick={() => setIsPaymentOpen(false)} 
                className="absolute top-6 left-6 text-stone-400 hover:text-stone-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-stone-900">{t.payment.title}</h3>
                  <p className="text-stone-500 text-sm">{t.payment.plan}: <span className="font-bold text-emerald-600">{selectedPlan}</span></p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-1">{t.payment.name}</label>
                  <input 
                    type="text" 
                    value={paymentData.name}
                    onChange={(e) => setPaymentData({...paymentData, name: e.target.value})}
                    className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-stone-900" 
                    placeholder={lang === 'ar' ? 'الاسم بالكامل' : 'Full Name'} 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-1">{t.payment.card}</label>
                  <input 
                    type="text" 
                    value={paymentData.card}
                    onChange={(e) => setPaymentData({...paymentData, card: e.target.value})}
                    className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-left text-stone-900" 
                    placeholder="0000 0000 0000 0000" 
                    dir="ltr" 
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-1">{t.payment.expiry}</label>
                    <input 
                      type="text" 
                      value={paymentData.expiry}
                      onChange={(e) => setPaymentData({...paymentData, expiry: e.target.value})}
                      className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-left text-stone-900" 
                      placeholder="MM/YY" 
                      dir="ltr" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-1">{t.payment.cvc}</label>
                    <input 
                      type="text" 
                      value={paymentData.cvc}
                      onChange={(e) => setPaymentData({...paymentData, cvc: e.target.value})}
                      className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-left text-stone-900" 
                      placeholder="123" 
                      dir="ltr" 
                    />
                  </div>
                </div>
                <button 
                  onClick={handlePaymentConfirm} 
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl mt-6 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  {t.payment.confirm}
                </button>
                <p className="text-center text-xs text-stone-400 mt-4 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-4 h-4" /> {t.payment.secure}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Meal Details Modal */}
      <AnimatePresence>
        {selectedMeal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm" onClick={() => setSelectedMeal(null)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-56">
                <img src={selectedMeal.img} alt={selectedMeal.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <button 
                  onClick={() => setSelectedMeal(null)} 
                  className="absolute top-4 left-4 bg-white/20 hover:bg-white/40 backdrop-blur-md p-2 rounded-full text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <h3 className="absolute bottom-4 right-6 text-2xl font-bold text-white">{selectedMeal.title}</h3>
              </div>
              <div className="p-6">
                <div className="flex gap-3 mb-6">
                  <div className="bg-emerald-50 px-3 py-2 rounded-xl text-center flex-1 border border-emerald-100">
                    <span className="block text-xs text-stone-500 mb-1">سعرات</span>
                    <span className="font-bold text-emerald-700">{selectedMeal.calories}</span>
                  </div>
                  <div className="bg-stone-50 px-3 py-2 rounded-xl text-center flex-1 border border-stone-200">
                    <span className="block text-xs text-stone-500 mb-1">بروتين</span>
                    <span className="font-bold text-stone-700">{selectedMeal.protein}</span>
                  </div>
                  <div className="bg-stone-50 px-3 py-2 rounded-xl text-center flex-1 border border-stone-200">
                    <span className="block text-xs text-stone-500 mb-1">كارب</span>
                    <span className="font-bold text-stone-700">{selectedMeal.carbs}</span>
                  </div>
                  <div className="bg-stone-50 px-3 py-2 rounded-xl text-center flex-1 border border-stone-200">
                    <span className="block text-xs text-stone-500 mb-1">دهون</span>
                    <span className="font-bold text-stone-700">{selectedMeal.fat}</span>
                  </div>
                </div>

                <h4 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
                  <Utensils className="w-5 h-5 text-emerald-600" /> المكونات الأساسية
                </h4>
                <ul className="space-y-3">
                  {selectedMeal.ingredients.map((ing, i) => (
                    <li key={i} className="flex items-center gap-3 text-stone-700 bg-stone-50 p-3 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      {ing}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Buttons */}
      <div className="fixed bottom-8 left-8 right-8 flex justify-between items-end z-40 pointer-events-none">
        {/* WhatsApp Button */}
        <div className="flex items-center gap-3 pointer-events-auto">
          <a 
            href="https://wa.me/201110496424" 
            target="_blank" 
            rel="noreferrer"
            className="p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 active:scale-95 bg-[#25D366] text-white"
            title="Chat on WhatsApp"
          >
            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </div>
        
        {/* Floating Back to Top */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-3 rounded-full shadow-2xl transition-all transform hover:scale-110 active:scale-95 bg-emerald-600 text-white pointer-events-auto"
          title="Back to Top"
        >
          <ChevronLeft className="w-6 h-6 rotate-90" />
        </button>
      </div>

      {/* Centered Discount Button */}
      <div className="fixed bottom-8 inset-x-0 flex justify-center z-40 pointer-events-none">
        <div className="pointer-events-auto">
          <a 
            href="#pricing" 
            className={`px-6 py-3 rounded-full shadow-2xl border animate-bounce transition-transform hover:scale-105 active:scale-95 flex items-center gap-2 ${isDark ? 'bg-stone-800 border-stone-700 text-emerald-400' : 'bg-white border-emerald-100 text-emerald-600'}`}
          >
            <Star className="w-5 h-5 fill-current" />
            <span className="font-bold text-base whitespace-nowrap">
              {lang === 'ar' ? 'احصل على خصم 20%' : 'Get 20% Discount'}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
