import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { APP_TITLE } from "@/const";
import {
  BarChart3,
  TrendingUp,
  Shield,
  Zap,
  Brain,
  Lock,
  ArrowRight,
  Check,
  ChevronDown,
  IndianRupee,
} from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">{t.hero.title}</span> {t.hero.titleHighlight}
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                {t.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  {t.hero.startTrial} <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-border hover:bg-card">
                  {t.hero.watchDemo}
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-8">
                <div>
                  <div className="text-2xl font-bold">50,000+</div>
                  <div className="text-sm text-muted-foreground">{t.hero.activeTraders}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">₹10,000 Cr+</div>
                  <div className="text-sm text-muted-foreground">{t.hero.assetsManaged}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">99.9%</div>
                  <div className="text-sm text-muted-foreground">{t.hero.uptime}</div>
                </div>
              </div>
            </div>
            <div className="relative h-96 md:h-full">
              <img
                src="/hero-dashboard.jpg"
                alt="BlockVista Terminal Dashboard"
                className="rounded-lg shadow-2xl glow-effect w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 bg-card/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.features.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1: NSE/BSE Real-time Data */}
            <Card className="bg-card border-border hover:border-accent/50 transition p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold">{t.features.nseData}</h3>
              <p className="text-muted-foreground">
                {t.features.nseDataDesc}
              </p>
              <img
                src="/market-data.jpg"
                alt="Real-time Market Data"
                className="rounded-lg w-full h-48 object-cover mt-4"
              />
            </Card>

            {/* Feature 2: AI Research Tools */}
            <Card className="bg-card border-border hover:border-accent/50 transition p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Brain className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold">{t.features.aiAnalysis}</h3>
              <p className="text-muted-foreground">
                {t.features.aiAnalysisDesc}
              </p>
              <img
                src="/ai-research.jpg"
                alt="AI Research Tools"
                className="rounded-lg w-full h-48 object-cover mt-4"
              />
            </Card>

            {/* Feature 3: F&O Support */}
            <Card className="bg-card border-border hover:border-accent/50 transition p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold">{t.features.foSupport}</h3>
              <p className="text-muted-foreground">
                {t.features.foSupportDesc}
              </p>
              <img
                src="/blockchain-insights.jpg"
                alt="Derivatives Trading"
                className="rounded-lg w-full h-48 object-cover mt-4"
              />
            </Card>

            {/* Feature 4: SEBI Compliance */}
            <Card className="bg-card border-border hover:border-accent/50 transition p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl font-bold">{t.features.sebiCompliance}</h3>
              <p className="text-muted-foreground">
                {t.features.sebiComplianceDesc}
              </p>
              <img
                src="/compliance-monitoring.jpg"
                alt="SEBI Compliance"
                className="rounded-lg w-full h-48 object-cover mt-4"
              />
            </Card>

            {/* Feature 5: Portfolio Management */}
            <Card className="bg-card border-border hover:border-accent/50 transition p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Lock className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold">{t.features.portfolio}</h3>
              <p className="text-muted-foreground">
                {t.features.portfolioDesc}
              </p>
              <img
                src="/portfolio-intelligence.jpg"
                alt="Portfolio Management"
                className="rounded-lg w-full h-48 object-cover mt-4"
              />
            </Card>

            {/* Feature 6: Smart Alerts */}
            <Card className="bg-card border-border hover:border-accent/50 transition p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold">{t.features.alerts}</h3>
              <p className="text-muted-foreground">
                {t.features.alertsDesc}
              </p>
              <div className="rounded-lg w-full h-48 bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center mt-4">
                <Zap className="w-16 h-16 text-accent/40" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                {t.capabilities.title}
              </h2>
              <div className="space-y-4">
                {t.capabilities.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96">
              <img
                src="/hero-dashboard.jpg"
                alt="Professional Trading Interface"
                className="rounded-lg shadow-2xl glow-effect w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trading Hours Section */}
      <section className="py-20 md:py-32 bg-card/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.tradingHours.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.tradingHours.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card border-border p-6 space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <IndianRupee className="w-5 h-5 text-accent" />
                {t.tradingHours.nseEquity}
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>{t.tradingHours.nseEquityHours.preOpen}</strong></p>
                <p><strong>{t.tradingHours.nseEquityHours.normal}</strong></p>
                <p><strong>{t.tradingHours.nseEquityHours.postClose}</strong></p>
              </div>
            </Card>

            <Card className="bg-card border-border p-6 space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <IndianRupee className="w-5 h-5 text-secondary" />
                {t.tradingHours.nsefo}
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>{t.tradingHours.nseFoHours.preOpen}</strong></p>
                <p><strong>{t.tradingHours.nseFoHours.normal}</strong></p>
                <p><strong>{t.tradingHours.nseFoHours.afterMarket}</strong></p>
              </div>
            </Card>

            <Card className="bg-card border-border p-6 space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <IndianRupee className="w-5 h-5 text-accent" />
                {t.tradingHours.bseEquity}
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>{t.tradingHours.bseEquityHours.preOpen}</strong></p>
                <p><strong>{t.tradingHours.bseEquityHours.normal}</strong></p>
                <p><strong>{t.tradingHours.bseEquityHours.postClose}</strong></p>
              </div>
            </Card>

            <Card className="bg-card border-border p-6 space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <IndianRupee className="w-5 h-5 text-secondary" />
                {t.tradingHours.mcx}
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>{t.tradingHours.mcxHours.morning}</strong></p>
                <p><strong>{t.tradingHours.mcxHours.evening}</strong></p>
                <p><strong>{t.tradingHours.mcxHours.night}</strong></p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.pricing.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.pricing.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((plan, i) => (
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
      <section id="faq" className="py-20 md:py-32 bg-card/30">
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
              <Card
                key={i}
                className="border-border hover:border-accent/50 transition cursor-pointer"
                onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
              >
                <div className="p-6 flex items-center justify-between">
                  <h3 className="font-semibold text-lg">{item.q}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition ${
                      expandedFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {expandedFaq === i && (
                  <div className="px-6 pb-6 text-muted-foreground border-t border-border pt-4">
                    {item.a}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-accent/10 to-secondary/10">
        <div className="container text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            {t.cta.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              {t.cta.startTrial} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-card">
              {t.cta.scheduleDemo}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
