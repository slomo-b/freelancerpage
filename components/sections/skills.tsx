"use client"

import { SectionHeader } from "@/components/ui/section-header"
import { SkillCategory } from "@/components/ui/skill-category"
import { Code, Database } from "lucide-react"
import { useLanguage } from "@/components/language/language-provider"

export function Skills() {
  const { t } = useLanguage()

  const frontendSkills = [
    { name: "Next.js", color: "from-blue-500 to-cyan-500" },
    { name: "React", color: "from-cyan-500 to-blue-500" },
    { name: "TypeScript", color: "from-blue-600 to-purple-500" },
    { name: "JavaScript", color: "from-yellow-500 to-orange-500" },
    { name: "HTML5", color: "from-orange-500 to-red-500" },
    { name: "CSS3", color: "from-blue-500 to-purple-500" },
    { name: "Tailwind CSS", color: "from-cyan-500 to-teal-500" },
    { name: "Responsive Design", color: "from-green-500 to-emerald-500" },
  ]

  const backendSkills = [
    { name: "Python", color: "from-yellow-500 to-blue-500" },
    { name: "FastAPI", color: "from-green-500 to-teal-500" },
    { name: "Node.js", color: "from-green-600 to-lime-500" },
    { name: "API Development", color: "from-purple-500 to-pink-500" },
    { name: "LLM Integration", color: "from-pink-500 to-rose-500" },
    { name: "RAG Systems", color: "from-purple-600 to-indigo-500" },
    { name: "Vector Databases", color: "from-indigo-500 to-blue-500" },
    { name: "Cloud Deployment", color: "from-cyan-500 to-blue-600" },
  ]

  return (
    <section id="skills" className="py-16 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="container mx-auto relative z-10">
        <SectionHeader title={t("technicalExpertise")} />
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <SkillCategory
              icon={Code}
              title={t("frontend")}
              skills={frontendSkills}
              iconGradient="from-blue-500 to-cyan-500"
            />
            <SkillCategory
              icon={Database}
              title={t("backendAi")}
              skills={backendSkills}
              iconGradient="from-purple-500 to-pink-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
