import { MountainIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";

const content = {
  en: {
    about: "About",
    services: "Services",
    projects: "Projects",
    contact: "Contact",
  },
  de: {
    about: "Über Mich",
    services: "Services",
    projects: "Projekte",
    contact: "Kontakt",
  },
};

export function Header() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <a className="flex items-center justify-center" href="#">
        <MountainIcon className="h-6 w-6" />
        <span className="ml-2 font-semibold">mo-freelancer.ch</span>
      </a>
      <nav className="ml-auto flex items-center gap-2 sm:gap-4">
        <a
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#about"
        >
          {t.about}
        </a>
        <a
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#services"
        >
          {t.services}
        </a>
        <a
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#projects"
        >
          {t.projects}
        </a>
        <a
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#contact"
        >
          {t.contact}
        </a>
        <LanguageToggle />
      </nav>
    </header>
  );
}