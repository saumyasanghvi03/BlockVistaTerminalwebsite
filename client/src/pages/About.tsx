import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Target, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { useLocation } from "wouter";

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-accent/5 to-transparent">
        <div className="container space-y-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {language === 'en' && 'About BlockVista Terminal'}
              {language === 'hi' && 'BlockVista Terminal के बारे में'}
              {language === 'gu' && 'BlockVista Terminal વિશે'}
              {language === 'mr' && 'BlockVista Terminal बद्दल'}
            </h1>
            <p className="text-xl text-muted-foreground">
              {language === 'en' && 'We are on a mission to revolutionize trading for Indian stock market professionals with cutting-edge AI technology and real-time market intelligence.'}
              {language === 'hi' && 'हम अत्याधुनिक AI तकनीक और रीयल-टाइम बाजार बुद्धिमत्ता के साथ भारतीय शेयर बाजार पेशेवरों के लिए ट्रेडिंग में क्रांति लाने के मिशन पर हैं।'}
              {language === 'gu' && 'અમે અত્યાધુનિક AI તકનીક અને રીયલ-ટાઇમ બજાર બુદ્ધિમત્તા સાથે ભારતીય શેર બજાર વ્યાવસાયિકો માટે ટ્રેડિંગમાં ક્રાંતિ લાવવાના મિશન પર છીએ.'}
              {language === 'mr' && 'आम्ही अत्याधुनिक AI तंत्रज्ञान आणि रीयल-टाइम बाजार बुद्धिमत्तेसह भारतीय शेअर बाजार व्यावसायिकांसाठी ट्रेडिंगमध्ये क्रांती घडवण्याच्या मिशनवर आहोत.'}
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border p-8 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">
                {language === 'en' && 'Our Mission'}
                {language === 'hi' && 'हमारा मिशन'}
                {language === 'gu' && 'આપણું મિશન'}
                {language === 'mr' && 'आमचे मिशन'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en' && 'Empower Indian traders with intelligent tools and real-time insights to make informed decisions and maximize returns across NSE, BSE, and F&O markets.'}
                {language === 'hi' && 'भारतीय ट्रेडर्स को बुद्धिमान उपकरण और रीयल-टाइम अंतर्दृष्टि के साथ सशक्त बनाएं ताकि वे NSE, BSE, और F&O बाजारों में सूचित निर्णय ले सकें।'}
                {language === 'gu' && 'ભારતીય ટ્રેડર્સને બુદ્ધિમાન સાધનો અને રીયલ-ટાઇમ અંતર્દૃષ્ટિ સાથે સશક્ત બનાવો જેથી તેઓ NSE, BSE, અને F&O બજારોમાં જાણકારીપૂર્ણ નિર્ણયો લઈ શકે.'}
                {language === 'mr' && 'भारतीय व्यापार्यांना बुद्धिमान साधने आणि रीयल-टाइम अंतर्दृष्टीने सशक्त करा जेणेकरून ते NSE, BSE, आणि F&O बाजारांमध्ये माहितीपूर्ण निर्णय घेऊ शकतील.'}
              </p>
            </Card>

            <Card className="bg-card border-border p-8 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold">
                {language === 'en' && 'Our Vision'}
                {language === 'hi' && 'हमारी दृष्टि'}
                {language === 'gu' && 'આપણું દૃષ્ટિ'}
                {language === 'mr' && 'आमचे दृष्टिकोन'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en' && 'To become the most trusted AI-powered trading platform in India, enabling millions of traders to succeed in the stock market with confidence and clarity.'}
                {language === 'hi' && 'भारत में सबसे विश्वसनीय AI-संचालित ट्रेडिंग प्लेटफॉर्म बनना, जो लाखों ट्रेडर्स को आत्मविश्वास और स्पष्टता के साथ शेयर बाजार में सफल होने में सक्षम बनाता है।'}
                {language === 'gu' && 'ભારતમાં સૌથી વિશ્વસ્ત AI-સંચાલિત ટ્રેડિંગ પ્લેટફોર્મ બનવું, જે લાખો ટ્રેડર્સને આત્મવિશ્વાસ અને સ્પષ્ટતા સાથે શેર બાજારમાં સફળ થવા માટે સક્ષમ બનાવે.'}
                {language === 'mr' && 'भारतातील सर्वात विश्वसनीय AI-संचालित ट्रेडिंग प्लेटफॉर्म बनणे, जे लाखो व्यापार्यांना आत्मविश्वास आणि स्पष्टतेसह शेअर बाजारात यशस्वी होण्यास सक्षम करते.'}
              </p>
            </Card>

            <Card className="bg-card border-border p-8 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">
                {language === 'en' && 'Our Values'}
                {language === 'hi' && 'हमारे मूल्य'}
                {language === 'gu' && 'આપણું મૂલ્યો'}
                {language === 'mr' && 'आमचे मूल्य'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en' && 'Transparency, security, innovation, and customer-first approach. We believe in building long-term relationships with our traders through trust and excellence.'}
                {language === 'hi' && 'पारदर्शिता, सुरक्षा, नवाचार, और ग्राहक-प्रथम दृष्टिकोण। हम विश्वास और उत्कृष्टता के माध्यम से हमारे ट्रेडर्स के साथ दीर्घकालिक संबंध बनाने में विश्वास करते हैं।'}
                {language === 'gu' && 'પારદર્શિતા, સુરક્ષા, નવાચાર, અને ગ્રાહક-પ્રથમ દૃષ્ટિકોણ. આমે વિશ્વાસ અને શ્રેષ્ઠતા દ્વારા આપણા ટ્રેડર્સ સાથે લાંબા મુદતના સંબંધો બનાવવામાં વિશ્વાસ કરીએ છીએ.'}
                {language === 'mr' && 'पारदर्शकता, सुरक्षा, नवीकरण, आणि ग्राहक-प्रथम दृष्टिकोन. आम्ही विश्वास आणि उत्कृष्टतेद्वारे आमच्या व्यापार्यांसह दीर्घकालीन संबंध बांधण्यास विश्वास करतो.'}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32 bg-card/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'en' && 'Our Team'}
              {language === 'hi' && 'हमारी टीम'}
              {language === 'gu' && 'આપણી ટીમ'}
              {language === 'mr' && 'आमची टीम'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'en' && 'Built by fintech experts, data scientists, and trading professionals with decades of combined experience.'}
              {language === 'hi' && 'फिनटेक विशेषज्ञों, डेटा वैज्ञानिकों, और ट्रेडिंग पेशेवरों द्वारा निर्मित जिनके पास दशकों का संयुक्त अनुभव है।'}
              {language === 'gu' && 'ફિનટેક નિષ્ણાતો, ડેટા વૈજ્ઞાનિકો, અને ટ્રેડિંગ વ્યાવસાયિકો દ્વારા બનાવવામાં આવ્યું જેમની પાસે દશકોનો સંયુક્ત અનુભવ છે.'}
              {language === 'mr' && 'फिनटेक तज्ञ, डेटा शास्त्रज्ञ, आणि ट्रेडिंग व्यावसायिकांद्वारे बांधलेले ज्यांच्याकडे दशकांचा संयुक्त अनुभव आहे.'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: language === 'en' ? 'Rajesh Kumar' : language === 'hi' ? 'राजेश कुमार' : language === 'gu' ? 'રાજેશ કુમાર' : 'राजेश कुमार',
                role: language === 'en' ? 'CEO & Founder' : language === 'hi' ? 'CEO और संस्थापक' : language === 'gu' ? 'CEO અને સંસ્થાપક' : 'CEO आणि संस्थापक',
                bio: language === 'en' ? '15+ years in fintech and algorithmic trading' : language === 'hi' ? 'फिनटेक और एल्गोरिदमिक ट्रेडिंग में 15+ वर्ष' : language === 'gu' ? 'ફિનટેક અને એલ્ગોરિધમિક ટ્રેડિંગમાં 15+ વર્ષ' : 'फिनटेक आणि अल्गोरिदमिक ट्रेडिंगमध्ये 15+ वर्ष',
              },
              {
                name: language === 'en' ? 'Priya Sharma' : language === 'hi' ? 'प्रिया शर्मा' : language === 'gu' ? 'પ્રિયા શર્મા' : 'प्रिया शर्मा',
                role: language === 'en' ? 'CTO & AI Lead' : language === 'hi' ? 'CTO और AI लीड' : language === 'gu' ? 'CTO અને AI લીડ' : 'CTO आणि AI लीड',
                bio: language === 'en' ? 'PhD in Machine Learning, ex-Google' : language === 'hi' ? 'मशीन लर्निंग में पीएचडी, पूर्व-गूगल' : language === 'gu' ? 'મશીન લર્નિંગમાં પીએચડી, પૂર્વ-ગૂગલ' : 'मशीन लर्निंगमध्ये PhD, पूर्व-गूगल',
              },
              {
                name: language === 'en' ? 'Amit Patel' : language === 'hi' ? 'अमित पटेल' : language === 'gu' ? 'અમિત પટેલ' : 'अमित पटेल',
                role: language === 'en' ? 'Head of Operations' : language === 'hi' ? 'संचालन के प्रमुख' : language === 'gu' ? 'ઓપરેશનના પ્રમુખ' : 'ऑपरेशन्सचे प्रमुख',
                bio: language === 'en' ? 'Ex-NSE compliance officer' : language === 'hi' ? 'पूर्व-NSE अनुपालन अधिकारी' : language === 'gu' ? 'પૂર્વ-NSE કમ્પ્લાયન્સ અધિકારી' : 'पूर्व-NSE कमप्लायन्स अधिकारी',
              },
            ].map((member, i) => (
              <Card key={i} className="bg-card border-border p-6 text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-secondary mx-auto" />
                <div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-accent font-semibold text-sm">{member.role}</p>
                  <p className="text-muted-foreground text-sm mt-2">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            {language === 'en' && 'Ready to Join Us?'}
            {language === 'hi' && 'हमारे साथ जुड़ने के लिए तैयार हैं?'}
            {language === 'gu' && 'આમાં સામેલ થવા માટે તૈયાર છો?'}
            {language === 'mr' && 'आमच्यासोबत सामील होण्यासाठी तयार आहात?'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'en' && 'Start your journey with BlockVista Terminal and experience the future of trading.'}
            {language === 'hi' && 'BlockVista Terminal के साथ अपनी यात्रा शुरू करें और ट्रेडिंग का भविष्य अनुभव करें।'}
            {language === 'gu' && 'BlockVista Terminal સાથે તમારી યાત્રા શરૂ કરો અને ટ્રેડિંગનું ભવિષ્ય અનુભવો.'}
            {language === 'mr' && 'BlockVista Terminal सह आपली यात्रा सुरू करा आणि ट्रेडिंगचे भविष्य अनुभवा.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => setLocation('/pricing')}
            >
              {language === 'en' && 'View Pricing'} {language === 'hi' && 'मूल्य देखें'} {language === 'gu' && 'કિંમત જુઓ'} {language === 'mr' && 'मूल्य पहा'} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border hover:bg-card"
              onClick={() => setLocation('/contact')}
            >
              {language === 'en' && 'Contact Us'} {language === 'hi' && 'हमसे संपर्क करें'} {language === 'gu' && 'આમને સંપર્ક કરો'} {language === 'mr' && 'आमच्याशी संपर्क साधा'}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}