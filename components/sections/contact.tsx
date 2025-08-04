"use client"

import { SectionHeader } from "@/components/ui/section-header"
import { ContactCard } from "@/components/ui/contact-card"
import { useLanguage } from "@/components/language/language-provider"

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-16 px-6 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-cyan-500/5">
      <div className="container mx-auto">
        <SectionHeader title={t("contactTitle")} />
        <div className="max-w-4xl mx-auto">
            <div>
              <ContactCard />
            </div>
        
          </div>
        </div>
      </div>
    </section>
  )
}
