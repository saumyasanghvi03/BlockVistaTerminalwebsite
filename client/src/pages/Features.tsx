import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BarChart3, Brain, TrendingUp, Shield, Lock, Zap, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { useLocation } from "wouter";

export default function Features() {
  const { language } = useLanguage();
  const t = translations[language];
  const [, setLocation] = useLocation();

  const features = [
    {
      icon: BarChart3,
      title: t.features.nseData,
      description: t.features.nseDataDesc,
      image: '/market-data.jpg',
      details: language === 'en' ? [
        'Real-time NSE and BSE data',
        'Live stock prices and volumes',
        'Market indices tracking',
        'Intraday and historical charts',
      ] : language === 'hi' ? [
        'रीयल-टाइम NSE और BSE डेटा',
        'लाइव स्टॉक प्राइस और वॉल्यूम',
        'बाजार सूचकांक ट्रैकिंग',
        'इंट्राडे और ऐतिहासिक चार्ट',
      ] : language === 'gu' ? [
        'રીયલ-ટાઇમ NSE અને BSE ડેટા',
        'લાઇવ સ્ટોક ભાવ અને વોલ્યુમ',
        'બજાર સૂચકાંક ટ્રેકિંગ',
        'ઇન્ટ્રાડે અને ઐતિહાસિક ચાર્ટ',
      ] : [
        'रीयल-टाइम NSE आणि BSE डेटा',
        'लाइव स्टॉक किंमत आणि व्हॉल्यूम',
        'बाजार निर्देशांक ट्रॅकिंग',
        'इंट्राडे आणि ऐतिहासिक चार्ट',
      ],
    },
    {
      icon: Brain,
      title: t.features.aiAnalysis,
      description: t.features.aiAnalysisDesc,
      image: '/ai-research.jpg',
      details: language === 'en' ? [
        'AI-powered technical analysis',
        'Pattern recognition',
        'Stock recommendations',
        'Sentiment analysis',
      ] : language === 'hi' ? [
        'AI-संचालित तकनीकी विश्लेषण',
        'पैटर्न पहचान',
        'स्टॉक सिफारिशें',
        'भावना विश्लेषण',
      ] : language === 'gu' ? [
        'AI-સંચાલિત તકનીકી વિશ્લેષણ',
        'પેટર્ન ઓળખ',
        'સ્ટોક ભલામણો',
        'સેન્ટિમેન્ટ વિશ્લેષણ',
      ] : [
        'AI-संचालित तांत्रिक विश्लेषण',
        'पॅटर्न ओळख',
        'स्टॉक शिफारसी',
        'भावना विश्लेषण',
      ],
    },
    {
      icon: TrendingUp,
      title: t.features.foSupport,
      description: t.features.foSupportDesc,
      image: '/blockchain-insights.jpg',
      details: language === 'en' ? [
        'Futures trading support',
        'Options strategies',
        'Greeks calculation',
        'Risk management tools',
      ] : language === 'hi' ? [
        'फ्यूचर्स ट्रेडिंग समर्थन',
        'विकल्प रणनीतियां',
        'ग्रीक्स गणना',
        'जोखिम प्रबंधन उपकरण',
      ] : language === 'gu' ? [
        'ફ્યુચર્સ ટ્રેડિંગ સપોર્ટ',
        'ઓપશન્સ સ્ટ્રેટેજીઝ',
        'ગ્રીક્સ કેલ્કુલેશન',
        'જોખમ વ્યવસ્થાપન સાધનો',
      ] : [
        'फ्यूचर्स ट्रेडिंग समर्थन',
        'ऑप्शन्स रणनीती',
        'ग्रीक्स गणना',
        'जोखीम व्यवस्थापन साधने',
      ],
    },
    {
      icon: Shield,
      title: t.features.sebiCompliance,
      description: t.features.sebiComplianceDesc,
      image: '/compliance-monitoring.jpg',
      details: language === 'en' ? [
        'SEBI compliance',
        'KYC verification',
        'AML checks',
        'Secure transactions',
      ] : language === 'hi' ? [
        'SEBI अनुपालन',
        'KYC सत्यापन',
        'AML जांच',
        'सुरक्षित लेनदेन',
      ] : language === 'gu' ? [
        'SEBI કમ્પ્લાયન્સ',
        'KYC ચકાસણી',
        'AML તપાસ',
        'સુરક્ષિત લેનદેન',
      ] : [
        'SEBI कमप्लायन्स',
        'KYC सत्यापन',
        'AML तपासणी',
        'सुरक्षित व्यवहार',
      ],
    },
    {
      icon: Lock,
      title: t.features.portfolio,
      description: t.features.portfolioDesc,
      image: '/portfolio-intelligence.jpg',
      details: language === 'en' ? [
        'Portfolio tracking',
        'P&L calculation',
        'Tax reports',
        'Asset allocation',
      ] : language === 'hi' ? [
        'पोर्टफोलियो ट्रैकिंग',
        'P&L गणना',
        'कर रिपोर्ट',
        'संपत्ति आवंटन',
      ] : language === 'gu' ? [
        'પોર્ટફોલિયો ટ્રેકિંગ',
        'P&L કેલ્કુલેશન',
        'ટેક્સ રિપોર્ટ',
        'એસેટ એલોકેશન',
      ] : [
        'पोर्टफोलिओ ट्रॅकिंग',
        'P&L गणना',
        'कर अहवाल',
        'मालमत्ता वाटप',
      ],
    },
    {
      icon: Zap,
      title: t.features.alerts,
      description: t.features.alertsDesc,
      details: language === 'en' ? [
        'Price alerts',
        'Volume alerts',
        'Technical indicators',
        'Custom notifications',
      ] : language === 'hi' ? [
        'कीमत अलर्ट',
        'वॉल्यूम अलर्ट',
        'तकनीकी संकेतक',
        'कस्टम सूचनाएं',
      ] : language === 'gu' ? [
        'કિંમત એલર્ટ',
        'વોલ્યુમ એલર્ટ',
        'તકનીકી સૂચકાંક',
        'કસ્ટમ નોટિફિકેશન',
      ] : [
        'किंमत सतर्कता',
        'व्हॉल्यूम सतर्कता',
        'तांत्रिक संकेतक',
        'कस्टम सूचना',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-accent/5 to-transparent">
        <div className="container space-y-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {language === 'en' && 'Powerful Features'}
              {language === 'hi' && 'शक्तिशाली विशेषताएं'}
              {language === 'gu' && 'શક્તિશાળી વિશેષતાઓ'}
              {language === 'mr' && 'शक्तिशाली वैशिष्ट्ये'}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t.features.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-32">
        <div className="container space-y-20">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="grid md:grid-cols-2 gap-12 items-center">
                {i % 2 === 0 ? (
                  <>
                    <div className="space-y-6">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <h2 className="text-3xl font-bold">{feature.title}</h2>
                      <p className="text-lg text-muted-foreground">{feature.description}</p>
                      <div className="space-y-3 pt-4">
                        {feature.details.map((detail, j) => (
                          <div key={j} className="flex items-center gap-3">
                            <Check className="w-5 h-5 text-accent flex-shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {feature.image && (
                      <div className="relative h-96">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="rounded-lg shadow-2xl glow-effect w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    {feature.image && (
                      <div className="relative h-96">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="rounded-lg shadow-2xl glow-effect w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="space-y-6">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <h2 className="text-3xl font-bold">{feature.title}</h2>
                      <p className="text-lg text-muted-foreground">{feature.description}</p>
                      <div className="space-y-3 pt-4">
                        {feature.details.map((detail, j) => (
                          <div key={j} className="flex items-center gap-3">
                            <Check className="w-5 h-5 text-accent flex-shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-accent/10 to-secondary/10">
        <div className="container text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            {language === 'en' && 'Experience All Features'}
            {language === 'hi' && 'सभी विशेषताओं का अनुभव करें'}
            {language === 'gu' && 'તમામ વિશેષતાઓનો અનુભવ કરો'}
            {language === 'mr' && 'सर्व वैशिष्ट्यांचा अनुभव घ्या'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'en' && 'Start your free trial today and unlock the full potential of BlockVista Terminal.'}
            {language === 'hi' && 'आज ही अपना निःशुल्क परीक्षण शुरू करें और BlockVista Terminal की पूरी क्षमता को अनलॉक करें।'}
            {language === 'gu' && 'આજ જ તમારું મફત ટ્રાયલ શરૂ કરો અને BlockVista Terminal ની સંપૂર્ણ સંભાવનાને અનલૉક કરો.'}
            {language === 'mr' && 'आज जच तुमचा मुक्त चाचणी सुरू करा आणि BlockVista Terminal ची पूर्ण संभाव्यता अनलॉक करा.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => setLocation('/pricing')}
            >
              {language === 'en' && 'View Pricing'} {language === 'hi' && 'मूल्य देखें'} {language === 'gu' && 'કિંમત જુઓ'} {language === 'mr' && 'मूल्य पहा'} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}