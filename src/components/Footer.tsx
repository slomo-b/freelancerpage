import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  en: {
    copyright: "© 2025 mo-freelancer.ch. All rights reserved.",
  },
  de: {
    copyright: "© 2025 mo-freelancer.ch. Alle Rechte vorbehalten.",
  },
};

export function Footer() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-muted-foreground">
        {t.copyright}
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <a
          href="mailto:contact@mo-freelancer.ch"
          className="text-xs hover:underline underline-offset-4 text-muted-foreground"
        >
          contact@mo-freelancer.ch
        </a>
      </nav>
    </footer>
  );
}