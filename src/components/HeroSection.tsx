import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  en: {
    title: "Crafting Intelligent Web Experiences",
    subtitle: "As a passionate AI Engineer & Web Developer, I create custom websites and intelligent web applications. From AI integration and professional SEO to secure Swiss hosting, I deliver comprehensive digital solutions with a focus on data privacy.",
    button: "Request a Project",
  },
  de: {
    title: "Gestaltung intelligenter Web-Erlebnisse",
    subtitle: "Als passionierter AI Engineer & Web-Entwickler erstelle ich massgeschneiderte Websites und intelligente Webanwendungen. Von der KI-Integration über professionelle SEO-Optimierung bis hin zum sicheren Schweizer Hosting – ich biete umfassende digitale Lösungen mit Fokus auf Datenschutz.",
    button: "Projekt anfragen",
  },
};

export function HeroSection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="hero" className="w-full py-24 md:py-32 lg:py-48 xl:py-64">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-foreground">
              {t.title}
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              {t.subtitle}
            </p>
          </div>
          <div className="space-x-4">
            <a href="#contact">
              <Button size="lg">{t.button}</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}