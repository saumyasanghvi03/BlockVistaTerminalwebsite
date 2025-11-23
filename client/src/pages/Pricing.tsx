import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { useState } from "react";
import { useLocation } from "wouter";

export default function Pricing() {
  const { language } = useLanguage();
  const t = translations[language];
  const [, setLocation] = useLocation();
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const plans = [
    {
      name: t.pricing.basic,
      price: "₹999",
      period: t.pricing.perMonth,
      description: t.pricing.basicDesc,
      features: t.pricing.features.basic,
    },
    {
      name: t.pricing.pro,
      price: "₹2,999",
      period: t.pricing.perMonth,
      description: t.pricing.proDesc,
      features: t.pricing.features.pro,
      highlighted: true,
    },
    {
      name: t.pricing.enterprise,
      price: t.pricing.enterprise,
      period: t.pricing.customPricing,
      description: t.pricing.enterpriseDesc,
      features: t.pricing.features.enterprise,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-accent/5 to-transparent">
        <div className="container space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t.pricing.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t.pricing.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <Card
                key={i}
                className={`p-8 space-y-6 border transition ${
                  plan.highlighted
                    ? "border-accent bg-accent/5 scale-105"
                    : "border-border hover:border-accent/50"
                }`}
              >
                <div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>
                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                      : "bg-card border border-border hover:bg-card/80"
                  }`}
                >
                  {t.pricing.getStarted}
                </Button>
                <div className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-card/30">
        <div className="container max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.faq.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.faq.subtitle}
            </p>
          </div>

          <div className="space-y-4">
            {t.faq.questions.map((item, i) => (
              <Card key={i} className="border-border p-6">
                <details className="cursor-pointer">
                  <summary className="font-semibold text-lg flex items-center justify-between">
                    {item.q}
                    <span className="text-muted-foreground">+</span>
                  </summary>
                  <div className="mt-4 text-muted-foreground border-t border-border pt-4">
                    {item.a}
                  </div>
                </details>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Demo CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-accent/10 to-secondary/10">
        <div className="container text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            {language === 'en' && 'Need a Custom Solution?'}
            {language === 'hi' && 'कस्टम समाधान की आवश्यकता है?'}
            {language === 'gu' && 'કસ્ટમ સમાધાન જોઈએ છે?'}
            {language === 'mr' && 'कस्टम सोल्यूशन आवश्यक आहे?'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'en' && 'Schedule a demo with our experts to discuss your specific trading requirements and get a personalized plan.'}
            {language === 'hi' && 'अपनी विशिष्ट ट्रेडिंग आवश्यकताओं पर चर्चा करने और एक व्यक्तिगत योजना प्राप्त करने के लिए हमारे विशेषज्ञों के साथ एक डेमो शेड्यूल करें।'}
            {language === 'gu' && 'તમારી ચોક્કસ ટ્રેડિંગ આવશ્યકતાઓ પર ચર્ચા કરવા અને વ્યક્તિગતકૃત યોજના મેળવવા માટે આપણા નિષ્ણાતો સાથે ડેમો શેડ્યુલ કરો.'}
            {language === 'mr' && 'आपल्या विशिष्ट ट्रेडिंग आवश्यकतांवर चर्चा करण्यासाठी आणि व्यक्तिगत योजना मिळवण्यासाठी आमच्या तज्ञांसह डेमो शेड्यूल करा.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => setDemoModalOpen(true)}
            >
              {language === 'en' && 'Schedule a Demo'} {language === 'hi' && 'डेमो शेड्यूल करें'} {language === 'gu' && 'ડેમો શેડ્યુલ કરો'} {language === 'mr' && 'डेमो शेड्यूल करा'} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border hover:bg-card"
              onClick={() => setLocation('/contact')}
            >
              {language === 'en' && 'Contact Sales'} {language === 'hi' && 'बिक्रय से संपर्क करें'} {language === 'gu' && 'વિક્રય સાથે સંપર્ક કરો'} {language === 'mr' && 'विक्रय संपर्क'}
            </Button>
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      {demoModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="bg-card border-border max-w-md w-full p-8 space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                {language === 'en' && 'Schedule a Demo'}
                {language === 'hi' && 'डेमो शेड्यूल करें'}
                {language === 'gu' && 'ડેમો શેડ્યુલ કરો'}
                {language === 'mr' && 'डेमो शेड्यूल करा'}
              </h2>
              <p className="text-muted-foreground">
                {language === 'en' && 'Fill in your details and our team will contact you shortly.'}
                {language === 'hi' && 'अपने विवरण भरें और हमारी टीम जल्द ही आपसे संपर्क करेगी।'}
                {language === 'gu' && 'તમારી વિગતો ભરો અને આપણી ટીમ તમારો સંપર્ક કરશે.'}
                {language === 'mr' && 'आपली तपशीले भरा आणि आमची टीम लवकरच आपल्याशी संपर्क साधेल.'}
              </p>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder={language === 'en' ? 'Full Name' : language === 'hi' ? 'पूरा नाम' : language === 'gu' ? 'સંપૂર્ણ નામ' : 'संपूर्ण नाव'}
                className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground"
              />
              <input
                type="email"
                placeholder={language === 'en' ? 'Email Address' : language === 'hi' ? 'ईमेल पता' : language === 'gu' ? 'ઈમેલ સરનામું' : 'ईमेल पत्ता'}
                className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground"
              />
              <input
                type="tel"
                placeholder={language === 'en' ? 'Phone Number' : language === 'hi' ? 'फोन नंबर' : language === 'gu' ? 'ફોન નંબર' : 'फोन नंबर'}
                className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground"
              />
              <textarea
                placeholder={language === 'en' ? 'Tell us about your trading needs...' : language === 'hi' ? 'अपनी ट्रेडिंग आवश्यकताओं के बारे में बताएं...' : language === 'gu' ? 'તમારી ટ્રેડિંગ જરૂરિયાતો વિશે જણાવો...' : 'आपल्या ट्रेडिंग आवश्यकतांबद्दल सांगा...'}
                className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground h-24 resize-none"
              />
            </div>
            <div className="flex gap-4">
              <Button 
                className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => setDemoModalOpen(false)}
              >
                {language === 'en' && 'Submit'} {language === 'hi' && 'जमा करें'} {language === 'gu' && 'સબમિટ કરો'} {language === 'mr' && 'सबमिट करा'}
              </Button>
              <Button 
                className="flex-1"
                variant="outline"
                onClick={() => setDemoModalOpen(false)}
              >
                {language === 'en' && 'Cancel'} {language === 'hi' && 'रद्द करें'} {language === 'gu' && 'રદ કરો'} {language === 'mr' && 'रद्द करा'}
              </Button>
            </div>
          </Card>
        </div>
      )}

      <Footer />
    </div>
  );
}
