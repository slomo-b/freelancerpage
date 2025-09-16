import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code, BrainCircuit, ShieldCheck } from "lucide-react";

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My Services
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I offer a range of services to bring your vision to life.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
          <Card>
            <CardHeader className="text-center items-center">
              <Code className="h-10 w-10 mb-4" />
              <CardTitle>Custom Web Development</CardTitle>
              <CardDescription>
                Tailor-made web apps perfectly suited to your needs—from concept to deployment.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="text-center items-center">
              <BrainCircuit className="h-10 w-10 mb-4" />
              <CardTitle>AI & LLM Integration</CardTitle>
              <CardDescription>
                Integration of advanced language models (LLMs) and other AI services to make your applications smarter.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="text-center items-center">
              <ShieldCheck className="h-10 w-10 mb-4" />
              <CardTitle>Swiss Hosting & Data Privacy</CardTitle>
              <CardDescription>
                Hosting your application in Switzerland with a strong focus on data protection and security to the highest standards.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}