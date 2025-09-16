import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code, BrainCircuit, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  en: {
    title: "My Services",
    subtitle: "I offer a range of services to bring your vision to life.",
    service1Title: "Custom Web Development",
    service1Desc: "Tailor-made web apps perfectly suited to your needs—from concept to deployment.",
    service2Title: "AI & LLM Integration",
    service2Desc: "Integration of advanced language models (LLMs) and other AI services to make your applications smarter.",
    service3Title: "Swiss Hosting & Data Privacy",
    service3Desc: "Hosting your application in Switzerland with a strong focus on data protection and security to the highest standards.",
  },
  de: {
    title: "Meine Services",
    subtitle: "Ich biete eine Reihe von Dienstleistungen an, um Ihre Vision zum Leben zu erwecken.",
    service1Title: "Individuelle Web-Entwicklung",
    service1Desc: "Massgeschneiderte Web-Apps, die perfekt auf Ihre Bedürfnisse zugeschnitten sind – vom Konzept bis zur Bereitstellung.",
    service2Title: "KI & LLM-Integration",
    service2Desc: "Integration fortschrittlicher Sprachmodelle (LLMs) und anderer KI-Dienste, um Ihre Anwendungen intelligenter zu machen.",
    service3Title: "Schweizer Hosting & Datenschutz",
    service3Desc: "Hosting Ihrer Anwendung in der Schweiz mit starkem Fokus auf Datenschutz und Sicherheit nach höchsten Standards.",
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
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
          <Card>
            <CardHeader className="text-center items-center">
              <Code className="h-10 w-10 mb-4" />
              <CardTitle>{t.service1Title}</CardTitle>
              <CardDescription>
                {t.service1Desc}
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="text-center items-center">
              <BrainCircuit className="h-10 w-10 mb-4" />
              <CardTitle>{t.service2Title}</CardTitle>
              <CardDescription>
                {t.service2Desc}
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="text-center items-center">
              <ShieldCheck className="h-10 w-10 mb-4" />
              <CardTitle>{t.service3Title}</CardTitle>
              <CardDescription>
                {t.service3Desc}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}