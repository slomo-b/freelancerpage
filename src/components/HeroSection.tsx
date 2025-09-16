import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="hero" className="w-full py-20 md:py-32 lg:py-40 xl:py-56 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-background dark:to-blue-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
              Crafting Intelligent Web Experiences
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              As a passionate AI Engineer, I build custom web applications with LLM integration, hosted securely in Switzerland with a maximum focus on data privacy.
            </p>
          </div>
          <div className="space-x-4">
            <a href="#contact">
              <Button>Request a Project</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}