import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProjectHighlight } from "@/components/ProjectHighlight";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { BlurryBackground } from "@/components/BlurryBackground";
import { AnimatedSection } from "@/components/AnimatedSection";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen text-foreground">
      <BlurryBackground />
      <Header />
      <main className="flex-grow">
        <AnimatedSection>
          <HeroSection />
        </AnimatedSection>
        <AnimatedSection>
          <AboutSection />
        </AnimatedSection>
        <AnimatedSection>
          <ServicesSection />
        </AnimatedSection>
        <AnimatedSection>
          <ProjectHighlight />
        </AnimatedSection>
        <AnimatedSection>
          <ContactForm />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default Index;