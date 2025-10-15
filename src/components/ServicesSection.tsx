import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code, BrainCircuit, ShieldCheck, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  en: {
    title: "My Services",
    subtitle: "I offer a range of services to bring your vision to life.",
    service1Title: "Custom Web Development",
    service1Desc: "Creation of tailor-made websites, online shops, and complex web applications—from concept to deployment.",
    service2Title: "AI & LLM Integration",
    service2Desc: "Integration of advanced language models (LLMs) and other AI services to make your applications smarter.",
    service3Title: "Swiss Hosting & Data Privacy",
    service3Desc: "Hosting your application in Switzerland with a strong focus on data protection and security to the highest standards.",
    service4Title: "SEO Optimization",
    service4Desc: "Professional SEO optimization directly in the code for any website (WordPress, HTML, modern frameworks), including Google Search Console setup, to avoid costly and inefficient plugins.",
  },
  de: {
    title: "Meine Services",
    subtitle: "Ich biete eine Reihe von Dienstleistungen an, um Ihre Vision zum Leben zu erwecken.",
    service1Title: "Individuelle Web-Entwicklung",
    service1Desc: "Erstellung von massgeschneiderten Websites, Online-Shops und komplexen Web-Anwendungen – vom Konzept bis zur Bereitstellung.",
    service2Title: "KI & LLM-Integration",
    service2Desc: "Integration fortschrittlicher Sprachmodelle (LLMs) und anderer KI-Dienste, um Ihre Anwendungen intelligenter zu machen.",
    service3Title: "Schweizer Hosting & Datenschutz",
    service3Desc: "Hosting Ihrer Anwendung in der Schweiz mit starkem Fokus auf Datenschutz und Sicherheit nach höchsten Standards.",
    service4Title: "SEO-Optimierung",
    service4Desc: "Professionelle SEO-Optimierung direkt im Code für jede Website (WordPress, HTML, moderne Frameworks), inklusive Einrichtung der Google Search Console, um kostspielige Plugins zu vermeiden.",
  },
};

export function ServicesSection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {t.title}
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t.subtitle}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 md:gap-12 mt-12">
          <Card className="bg-background/50 border-2 border-transparent hover:border-primary transition-colors">
            <CardHeader className="text-center items-center p-8">
              <Code className="h-12 w-12 mb-4 text-primary" />
              <CardTitle className="text-xl font-semibold">{t.service1Title}</CardTitle>
              <CardDescription className="mt-2">
                {t.service1Desc}
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-background/50 border-2 border-transparent hover:border-primary transition-colors">
            <CardHeader className="text-center items-center p-8">
              <BrainCircuit className="h-12 w-12 mb-4 text-primary" />
              <CardTitle className="text-xl font-semibold">{t.service2Title}</CardTitle>
              <CardDescription className="mt-2">
                {t.service2Desc}
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-background/50 border-2 border-transparent hover:border-primary transition-colors">
            <CardHeader className="text-center items-center p-8">
              <ShieldCheck className="h-12 w-12 mb-4 text-primary" />
              <CardTitle className="text-xl font-semibold">{t.service3Title}</CardTitle>
              <CardDescription className="mt-2">
                {t.service3Desc}
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-background/50 border-2 border-transparent hover:border-primary transition-colors">
            <CardHeader className="text-center items-center p-8">
              <TrendingUp className="h-12 w-12 mb-4 text-primary" />
              <CardTitle className="text-xl font-semibold">{t.service4Title}</CardTitle>
              <CardDescription className="mt-2">
                {t.service4Desc}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}