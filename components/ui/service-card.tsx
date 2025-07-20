import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  gradient?: string
  shadowColor?: string
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  gradient = "from-primary to-blue-600",
  shadowColor = "primary/20",
}: ServiceCardProps) {
  return (
    <Card
      className={`bg-card/40 backdrop-blur-sm border-border/30 hover:bg-card/60 transition-all duration-300 hover:shadow-lg hover:shadow-${shadowColor} group h-full hover:scale-105`}
    >
      <CardHeader className="pb-3">
        <div
          className={`w-12 h-12 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200 shadow-md`}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>
        <CardTitle className="text-foreground text-lg mb-2">{title}</CardTitle>
        <CardDescription className="text-muted-foreground text-sm leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="text-muted-foreground text-sm space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className={`w-1 h-1 bg-gradient-to-r ${gradient} rounded-full flex-shrink-0`}></div>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
