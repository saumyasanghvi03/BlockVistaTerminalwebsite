import { Button } from "@/components/ui/button";
import { TrendingUp, Menu, X } from "lucide-react";
import { APP_TITLE } from "@/const";
import { useState } from "react";
import { useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Header() {
  const { language } = useLanguage();
  const t = translations[language];
  const [location, setLocation] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t.nav.home || "Home", href: "/" },
    { label: t.nav.about || "About Us", href: "/about" },
    { label: t.nav.features, href: "/features" },
    { label: t.nav.pricing, href: "/pricing" },
    { label: t.nav.contact, href: "/contact" },
  ];

  const isActive = (href: string) => location === href;

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 hover:opacity-80 transition">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-accent-foreground" />
          </div>
          <span className="text-xl font-bold gradient-text">{APP_TITLE}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                setLocation(item.href);
                setMobileMenuOpen(false);
              }}
              className={`text-sm transition ${
                isActive(item.href)
                  ? "text-accent font-semibold"
                  : "text-muted-foreground hover:text-accent"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
          <Button className="hidden md:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground">
            {t.nav.getStarted}
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="container py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setLocation(item.href);
                  setMobileMenuOpen(false);
                }}
                className={`block text-sm py-2 transition ${
                  isActive(item.href)
                    ? "text-accent font-semibold"
                    : "text-muted-foreground hover:text-accent"
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-border space-y-4">
              <LanguageSwitcher />
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                {t.nav.getStarted}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
