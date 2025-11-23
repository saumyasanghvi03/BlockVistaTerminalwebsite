import { TrendingUp, Globe } from "lucide-react";
import { APP_TITLE } from "@/const";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Footer() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिंदी' },
    { code: 'gu', label: 'ગુજરાતી' },
    { code: 'mr', label: 'मराठी' },
  ] as const;

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="font-bold gradient-text">{APP_TITLE}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t.footer.tagline}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t.footer.product}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {t.footer.productLinks.map((link, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-accent transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t.footer.company}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {t.footer.companyLinks.map((link, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-accent transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {t.footer.legalLinks.map((link, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-accent transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">{t.footer.copyright}</p>
          <div className="flex gap-6">
            {t.footer.social.map((social, i) => (
              <a key={i} href="#" className="text-sm text-muted-foreground hover:text-accent transition">
                {social}
              </a>
            ))}
          </div>
          
          {/* Language Selection */}
          <div className="relative">
            <Button
              variant="outline"
              size="sm"
              className="border-border hover:bg-card flex items-center gap-2"
              onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
            >
              <Globe className="w-4 h-4" />
              {languages.find(l => l.code === language)?.label}
            </Button>
            
            {languageMenuOpen && (
              <div className="absolute bottom-full right-0 mb-2 bg-card border border-border rounded-lg shadow-lg z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code as any);
                      setLanguageMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm transition ${
                      language === lang.code
                        ? 'bg-accent/20 text-accent font-semibold'
                        : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                    } ${lang.code === 'en' ? 'rounded-t-lg' : ''} ${lang.code === 'mr' ? 'rounded-b-lg' : ''}`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
