"use client"

import { SectionHeader } from "@/components/ui/section-header"
import { ServiceCard } from "@/components/ui/service-card"
import { Code, Database, Globe, Shield } from "lucide-react"
import { useLanguage } from "@/components/language/language-provider"

export function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Code,
      title: t("nextjsApps"),
      description: t("nextjsDesc"),
      features: [t("nextjsFeature1"), t("nextjsFeature2"), t("nextjsFeature3"), t("nextjsFeature4")],
      gradient: "from-blue-500 to-cyan-500",
      shadowColor: "blue-500/20",
    },
    {
      icon: Database,
      title: t("llmIntegration"),
      description: t("llmDesc"),
      features: [t("llmFeature1"), t("llmFeature2"), t("llmFeature3"), t("llmFeature4")],
      gradient: "from-purple-500 to-pink-500",
      shadowColor: "purple-500/20",
    },
    {
      icon: Shield,
      title: t("aiConsulting"),
      description: t("aiConsultingDesc"),
      features: [
        t("aiConsultingFeature1"),
        t("aiConsultingFeature2"),
        t("aiConsultingFeature3"),
        t("aiConsultingFeature4"),
      ],
      gradient: "from-emerald-500 to-teal-500",
      shadowColor: "emerald-500/20",
    },
    {
      icon: Globe,
      title: t("htmlCssWebsites"),
      description: t("htmlCssDesc"),
      features: [t("htmlCssFeature1"), t("htmlCssFeature2"), t("htmlCssFeature3"), t("htmlCssFeature4")],
      gradient: "from-orange-500 to-red-500",
      shadowColor: "orange-500/20",
    },
  ]

  return (
    <section id="services" className="py-16 px-6 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-cyan-500/5">
      <div className="container mx-auto">
        <SectionHeader title={t("servicesTitle")} />
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
