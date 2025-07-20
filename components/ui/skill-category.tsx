import { Badge } from "@/components/ui/badge"
import type { LucideIcon } from "lucide-react"

interface SkillCategoryProps {
  icon: LucideIcon
  title: string
  skills: Array<{ name: string; color: string }>
  iconGradient?: string
}

export function SkillCategory({
  icon: Icon,
  title,
  skills,
  iconGradient = "from-primary to-blue-600",
}: SkillCategoryProps) {
  return (
    <div className="bg-card/40 backdrop-blur-sm border border-border/30 rounded-2xl p-8 hover:bg-card/60 transition-all duration-300 shadow-lg hover:shadow-purple-500/10">
      <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
        <div
          className={`w-8 h-8 bg-gradient-to-r ${iconGradient} rounded-lg flex items-center justify-center shadow-md`}
        >
          <Icon className="w-4 h-4 text-white" />
        </div>
        {title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            className={`bg-gradient-to-r ${skill.color} text-white border-0 hover:scale-105 transition-transform shadow-sm`}
          >
            {skill.name}
          </Badge>
        ))}
      </div>
    </div>
  )
}
