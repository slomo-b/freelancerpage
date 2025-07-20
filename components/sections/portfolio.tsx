"use client"

import { SectionHeader } from "@/components/ui/section-header"
import { ProjectCard } from "@/components/ui/project-card"
import { useLanguage } from "@/components/language/language-provider"

export function Portfolio() {
  const { t } = useLanguage()

  const projects = [
    {
      title: "RAGFlow",
      description: t("ragflowDescription"),
      longDescription: t("ragflowLongDescription"),
      technologies: ["Next.js", "TypeScript", "Python", "FastAPI", "AI/ML", "RAG", "Vector Database"],
      features: [t("ragflowFeature1"), t("ragflowFeature2"), t("ragflowFeature3"), t("ragflowFeature4")],
      status: t("inDevelopment"),
      githubUrl: "https://github.com/slomo-b/ragflow",
      gradient: "from-purple-500 via-blue-500 to-cyan-500",
      shadowColor: "purple-500/20",
      isCurrentProject: true,
    },
  ]

  return (
    <section id="portfolio" className="py-16 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5"></div>
      <div className="container mx-auto relative z-10">
        <SectionHeader title={t("portfolioTitle")} />
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-muted-foreground text-lg mb-4">{t("moreProjectsComing")}</p>
            <div className="flex justify-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-100"></div>
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
