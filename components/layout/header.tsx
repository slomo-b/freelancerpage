"use client"

import { ThemeToggle } from "@/components/theme/theme-toggle"
import { LanguageToggle } from "@/components/language/language-toggle"
import { useLanguage } from "@/components/language/language-provider"

export function Header() {
  const { t } = useLanguage()

  return (
    <header className="border-b border-border/20 bg-background/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
          mo-freelancer
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex space-x-6">
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {t("about")}
            </a>
            <a
              href="#services"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {t("services")}
            </a>
            <a
              href="#portfolio"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {t("portfolio")}
            </a>
            <a
              href="#skills"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {t("skills")}
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {t("contact")}
            </a>
          </nav>
          <div className="flex items-center gap-1">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
