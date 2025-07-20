import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Sparkles, Zap } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  longDescription: string
  technologies: string[]
  features: string[]
  status: string
  githubUrl?: string
  liveUrl?: string
  gradient?: string
  shadowColor?: string
  isCurrentProject?: boolean
}

export function ProjectCard({
  title,
  description,
  longDescription,
  technologies,
  features,
  status,
  githubUrl,
  liveUrl,
  gradient = "from-primary to-blue-600",
  shadowColor = "primary/20",
  isCurrentProject = false,
}: ProjectCardProps) {
  return (
    <Card
      className={`bg-card/40 backdrop-blur-sm border-border/30 hover:bg-card/60 transition-all duration-500 hover:shadow-xl hover:shadow-${shadowColor} group relative overflow-hidden`}
    >
      {/* Background gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
      ></div>

      {/* Current project indicator */}
      {isCurrentProject && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className={`bg-gradient-to-r ${gradient} text-white border-0 shadow-lg animate-pulse`}>
            <Zap className="w-3 h-3 mr-1" />
            {status}
          </Badge>
        </div>
      )}

      <CardHeader className="relative z-10 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div
            className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
          >
            <Sparkles className="w-8 h-8 text-white" />
          </div>
        </div>

        <CardTitle className="text-foreground text-2xl mb-2 flex items-center gap-2">
          {title}
          {isCurrentProject && <Zap className="w-5 h-5 text-yellow-500" />}
        </CardTitle>

        <CardDescription className="text-muted-foreground text-base leading-relaxed mb-4">
          {description}
        </CardDescription>

        <p className="text-muted-foreground text-sm leading-relaxed">{longDescription}</p>
      </CardHeader>

      <CardContent className="relative z-10 space-y-6">
        {/* Technologies */}
        <div>
          <h4 className="text-foreground font-semibold mb-3 text-sm uppercase tracking-wide">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-muted/50 text-foreground border-border/50 hover:scale-105 transition-transform text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div>
          <h4 className="text-foreground font-semibold mb-3 text-sm uppercase tracking-wide">Key Features</h4>
          <ul className="text-muted-foreground text-sm space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className={`w-1.5 h-1.5 bg-gradient-to-r ${gradient} rounded-full flex-shrink-0 mt-2`}></div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          {githubUrl && (
            <Button
              variant="outline"
              size="sm"
              className="flex-1 border-border/50 hover:bg-accent transition-all duration-200 bg-transparent"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View Code
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button
              size="sm"
              className={`flex-1 bg-gradient-to-r ${gradient} text-white shadow-md hover:shadow-lg transition-all duration-200`}
              asChild
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
