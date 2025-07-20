"use client"

import { SectionHeader } from "@/components/ui/section-header"
import { FeatureCard } from "@/components/ui/feature-card"
import { Zap, Sparkles, Rocket } from "lucide-react"
import { useLanguage } from "@/components/language/language-provider"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-16 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5"></div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title={t("aboutMo")} />

          <div className="bg-gradient-to-br from-card/40 via-card/30 to-card/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 md:p-10 shadow-lg shadow-purple-500/5">
            <div className="space-y-6 mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed">{t("aboutDescription1")}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{t("aboutDescription2")}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <FeatureCard
                icon={Zap}
                title={t("fastDelivery")}
                description={t("fastDeliveryDesc")}
                gradient="from-orange-500 to-pink-500"
              />
              <FeatureCard
                icon={Sparkles}
                title={t("modernTech")}
                description={t("modernTechDesc")}
                gradient="from-purple-500 to-blue-500"
              />
              <FeatureCard
                icon={Rocket}
                title={t("scalableSolutions")}
                description={t("scalableSolutionsDesc")}
                gradient="from-cyan-500 to-green-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
