"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles } from "lucide-react"
import { useLanguage } from "@/components/language/language-provider"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Vibrant background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-cyan-500/10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-pink-500/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-300 dark:text-purple-200">
            <Sparkles className="w-3 h-3 mr-2" />
            <span className="text-xs">{t("availableForProjects")}</span>
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
            <span className="text-foreground">Freelance</span>
            <br />
            <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Web Developer
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            {t("heroDescription")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="gradient-purple-blue text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
            >
              <a href="#contact" className="flex items-center gap-2">
                {t("startYourProject")}
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500/30 text-purple-600 dark:text-purple-400 hover:bg-purple-500/10 transition-all duration-200 bg-transparent"
            >
              <a href="#services">{t("exploreServices")}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
