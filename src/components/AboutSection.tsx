import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  en: {
    title: "About Me",
    description: "My name is Mo, I'm 27 years old, and I'm a passionate AI Engineer and Web Developer specializing in solving complex problems with intelligent, data-driven solutions. My journey has been largely self-taught, driven by a deep curiosity for artificial intelligence and a fascination with turning ideas into functional applications.",
  },
  de: {
    title: "Über Mich",
    description: "Mein Name ist Mo, ich bin 27 Jahre alt und ein leidenschaftlicher AI Engineer und Web-Entwickler, der sich darauf spezialisiert hat, komplexe Probleme mit intelligenten, datengesteuerten Lösungen zu lösen. Mein Weg war grösstenteils autodidaktisch, angetrieben von einer tiefen Neugier für künstliche Intelligenz und der Faszination, Ideen in funktionierende Anwendungen zu verwandeln.",
  },
};

export function AboutSection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/70 backdrop-blur-sm">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {t.title}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}