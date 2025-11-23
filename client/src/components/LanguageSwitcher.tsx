import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिंदी' },
    { code: 'gu', label: 'ગુજરાતી' },
    { code: 'mr', label: 'मराठी' },
  ] as const;

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-muted-foreground" />
      <div className="flex gap-1">
        {languages.map((lang) => (
          <Button
            key={lang.code}
            variant={language === lang.code ? 'default' : 'ghost'}
            size="sm"
            className={`text-xs px-2 py-1 h-auto ${
              language === lang.code
                ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                : 'text-muted-foreground hover:text-foreground'
            }`}
            onClick={() => setLanguage(lang.code as any)}
          >
            {lang.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
