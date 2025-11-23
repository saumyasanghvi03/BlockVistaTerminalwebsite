import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { useState } from "react";

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-accent/5 to-transparent">
        <div className="container space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {language === 'en' && 'Get in Touch'}
              {language === 'hi' && 'संपर्क में रहें'}
              {language === 'gu' && 'સંપર્કમાં રહો'}
              {language === 'mr' && 'संपर्कात रहा'}
            </h1>
            <p className="text-xl text-muted-foreground">
              {language === 'en' && 'Have questions? We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.'}
              {language === 'hi' && 'सवाल हैं? हम आपसे सुनना पसंद करेंगे। हमें एक संदेश भेजें और हम जल्द से जल्द जवाब देंगे।'}
              {language === 'gu' && 'પ્રશ્નો છે? અમે તમારી પાસેથી સાંભળવા માટે આતુર છીએ. અમને સંદેશ મોકલો અને અમે શક્ય તેટલી જલ્દીથી જવાબ આપીશું.'}
              {language === 'mr' && 'प्रश्न आहेत? आम्ही तुमच्याकडून ऐकू इच्छितो. आमच्याला संदेश पाठवा आणि आम्ही लवकरच प्रतिक्रिया देऊ.'}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Email */}
            <Card className="bg-card border-border p-8 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold">
                {language === 'en' && 'Email'}
                {language === 'hi' && 'ईमेल'}
                {language === 'gu' && 'ઈમેલ'}
                {language === 'mr' && 'ईमेल'}
              </h3>
              <p className="text-muted-foreground">support@blockvista.com</p>
              <p className="text-muted-foreground text-sm">
                {language === 'en' && 'We\'ll get back to you within 24 hours'}
                {language === 'hi' && 'हम 24 घंटे के भीतर आपको वापस जवाब देंगे'}
                {language === 'gu' && 'આમ 24 કલાકમાં તમને જવાબ આપીશું'}
                {language === 'mr' && 'आम 24 तासांमध्ये तुम्हाला प्रतिक्रिया देऊ'}
              </p>
            </Card>

            {/* Phone */}
            <Card className="bg-card border-border p-8 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold">
                {language === 'en' && 'Phone'}
                {language === 'hi' && 'फोन'}
                {language === 'gu' && 'ફોન'}
                {language === 'mr' && 'फोन'}
              </h3>
              <p className="text-muted-foreground">+91 (800) 123-4567</p>
              <p className="text-muted-foreground text-sm">
                {language === 'en' && 'Available 24/7 in multiple languages'}
                {language === 'hi' && '24/7 कई भाषाओं में उपलब्ध'}
                {language === 'gu' && '24/7 બહુ ભાષાઓમાં ઉપલબ્ધ'}
                {language === 'mr' && '24/7 अनेक भाषांमध्ये उपलब्ध'}
              </p>
            </Card>

            {/* Address */}
            <Card className="bg-card border-border p-8 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold">
                {language === 'en' && 'Office'}
                {language === 'hi' && 'कार्यालय'}
                {language === 'gu' && 'કાર્યાલય'}
                {language === 'mr' && 'कार्यालय'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en' && 'Mumbai, India' || 'मुंबई, भारत' || 'મુંબઈ, ભારત' || 'मुंबई, भारत'}
              </p>
              <p className="text-muted-foreground text-sm">
                {language === 'en' && 'Visit us for a personalized demo'}
                {language === 'hi' && 'व्यक्तिगत डेमो के लिए हमारा दौरा करें'}
                {language === 'gu' && 'વ્યક્તિગત ડેમો માટે અમને મળવા આવો'}
                {language === 'mr' && 'व्यक्तिगत डेमोसाठी आमची भेट द्या'}
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border p-8 md:p-12 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {language === 'en' && 'Send us a Message'}
              {language === 'hi' && 'हमें एक संदेश भेजें'}
              {language === 'gu' && 'અમને સંદેશ મોકલો'}
              {language === 'mr' && 'आमच्याला संदेश पाठवा'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder={language === 'en' ? 'Your Name' : language === 'hi' ? 'आपका नाम' : language === 'gu' ? 'તમારું નામ' : 'आपले नाव'}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
                  required
                />
                <input
                  type="email"
                  placeholder={language === 'en' ? 'Your Email' : language === 'hi' ? 'आपका ईमेल' : language === 'gu' ? 'તમારું ઈમેલ' : 'आपला ईमेल'}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
                  required
                />
              </div>
              <input
                type="text"
                placeholder={language === 'en' ? 'Subject' : language === 'hi' ? 'विषय' : language === 'gu' ? 'વિષય' : 'विषय'}
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
                required
              />
              <textarea
                placeholder={language === 'en' ? 'Your Message' : language === 'hi' ? 'आपका संदेश' : language === 'gu' ? 'તમારો સંદેશ' : 'आपला संदेश'}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent h-32 resize-none"
                required
              />
              <Button 
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                {submitted ? (
                  <>
                    {language === 'en' && '✓ Message Sent!'}
                    {language === 'hi' && '✓ संदेश भेजा गया!'}
                    {language === 'gu' && '✓ સંદેશ મોકલાયો!'}
                    {language === 'mr' && '✓ संदेश पाठवला!'}
                  </>
                ) : (
                  <>
                    {language === 'en' && 'Send Message'} {language === 'hi' && 'संदेश भेजें'} {language === 'gu' && 'સંદેશ મોકલો'} {language === 'mr' && 'संदेश पाठवा'}
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </Card>
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

      <Footer />
    </div>
  );
}