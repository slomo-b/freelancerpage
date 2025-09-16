import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  en: {
    title: "Featured Project: Haidi AI",
    description: "My reference app, Haidi AI, demonstrates the seamless integration of conversational AI and image generation. It is fully hosted in Switzerland to ensure maximum privacy and data security.",
    button: "View Live Demo (Coming Soon)",
  },
  de: {
    title: "Vorgestelltes Projekt: Haidi AI",
    description: "Meine Referenz-App, Haidi AI, demonstriert die nahtlose Integration von Konversations-KI und Bilderzeugung. Sie wird vollständig in der Schweiz gehostet, um maximale Privatsphäre und Datensicherheit zu gewährleisten.",
    button: "Live-Demo ansehen (in Kürze verfügbar)",
  },
};

export function ProjectHighlight() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted/70 backdrop-blur-sm">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t.title}
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {t.description}
          </p>
        </div>
        <img
          alt="Project"
          className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-cover"
          height="400"
          src="/placeholder.svg"
          width="800"
        />
        <Button disabled>{t.button}</Button>
      </div>
    </section>
  );
}