import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  gradient?: string
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  gradient = "from-primary to-blue-600",
}: FeatureCardProps) {
  return (
    <div className="text-center group">
      <div
        className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
      >
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-foreground font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  )
}
