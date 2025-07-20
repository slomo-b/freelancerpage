"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Globe, MapPin, ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language/language-provider"

export function ContactCard() {
  const { t } = useLanguage()

  const contactItems = [
    {
      icon: Mail,
      text: "contact@mo-freelancer.ch",
      gradient: "from-blue-500 to-cyan-500",
      href: "mailto:contact@mo-freelancer.ch",
    },
    {
      icon: Globe,
      text: "mo-freelancer.ch",
      gradient: "from-purple-500 to-pink-500",
      href: "https://mo-freelancer.ch",
    },
    {
      icon: MapPin,
      text: "St. Gallen, Switzerland",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  return (
    <Card className="bg-gradient-to-br from-card/50 via-card/40 to-card/50 backdrop-blur-sm border border-purple-500/20 shadow-lg shadow-purple-500/10 h-fit">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-foreground text-xl mb-2">{t("getInTouch")}</CardTitle>
        <CardDescription className="text-muted-foreground">{t("contactDescription")}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {contactItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-3 bg-muted/20 rounded-xl hover:bg-muted/30 transition-colors group"
          >
            <div
              className={`w-10 h-10 bg-gradient-to-r ${item.gradient} rounded-lg flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform`}
            >
              <item.icon className="w-4 h-4 text-white" />
            </div>
            {item.href ? (
              <a
                href={item.href}
                className="text-foreground hover:text-primary transition-colors"
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {item.text}
              </a>
            ) : (
              <span className="text-foreground">{item.text}</span>
            )}
          </div>
        ))}

        <div className="pt-4">
          <p className="text-sm text-muted-foreground text-center mb-4">{t("preferEmail")}</p>
          <Button
            className="w-full gradient-purple-blue text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="mailto:contact@mo-freelancer.ch">
              <Mail className="w-4 h-4 mr-2" />
              {t("sendDirectEmail")}
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
