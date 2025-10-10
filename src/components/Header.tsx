import { useState } from "react";
import { MountainIcon, Menu } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

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
  const isMobile = useIsMobile();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const navLinks = (
    <>
      <a
        href="#about"
        onClick={() => isMobile && setIsSheetOpen(false)}
        className="text-sm font-medium hover:underline underline-offset-4"
      >
        {t.about}
      </a>
      <a
        href="#services"
        onClick={() => isMobile && setIsSheetOpen(false)}
        className="text-sm font-medium hover:underline underline-offset-4"
      >
        {t.services}
      </a>
      <a
        href="#projects"
        onClick={() => isMobile && setIsSheetOpen(false)}
        className="text-sm font-medium hover:underline underline-offset-4"
      >
        {t.projects}
      </a>
      <a
        href="#contact"
        onClick={() => isMobile && setIsSheetOpen(false)}
        className="text-sm font-medium hover:underline underline-offset-4"
      >
        {t.contact}
      </a>
    </>
  );

  if (isMobile) {
    return (
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <a className="flex items-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="ml-2 font-semibold">mo-freelancer.ch</span>
        </a>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="grid gap-6 text-lg font-medium mt-8">
              {navLinks}
              <div className="absolute bottom-4 left-4">
                <LanguageToggle />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
    );
  }

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <a className="flex items-center justify-center" href="#">
        <MountainIcon className="h-6 w-6" />
        <span className="ml-2 font-semibold">mo-freelancer.ch</span>
      </a>
      <nav className="ml-auto flex items-center gap-4 sm:gap-6">
        {navLinks}
        <LanguageToggle />
      </nav>
    </header>
  );
}