"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "./language-provider"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "de" : "en")}
      className="h-9 px-3 text-sm font-medium hover:bg-accent"
    >
      {language === "en" ? "DE" : "EN"}
    </Button>
  )
}
