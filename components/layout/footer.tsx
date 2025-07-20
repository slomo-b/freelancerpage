"use client"

import { useLanguage } from "@/components/language/language-provider"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-card/10 border-t border-border/20 py-8 px-6">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">
            <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              mo-freelancer - Freelance Web Developer
            </span>
          </h3>
          <p className="text-muted-foreground text-sm">{t("footerTagline")}</p>
        </div>
        <div className="text-muted-foreground/60 text-xs">© 2025 mo-freelancer. {t("allRightsReserved")}</div>
      </div>
    </footer>
  )
}
