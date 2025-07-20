import { Header } from "@/components/layout/header"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Services } from "@/components/sections/services"
import { Portfolio } from "@/components/sections/portfolio"
import { Skills } from "@/components/sections/skills"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/layout/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
