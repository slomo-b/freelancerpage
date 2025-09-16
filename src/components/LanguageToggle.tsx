import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button variant="ghost" onClick={toggleLanguage} className="font-semibold w-12">
      {language === 'en' ? 'DE' : 'EN'}
    </Button>
  );
}