import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code, BrainCircuit, ShieldCheck } from "lucide-react";

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Meine Dienstleistungen
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ich biete eine Reihe von Dienstleistungen an, um Ihre Vision in
              die Realität umzusetzen.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
          <Card>
            <CardHeader className="text-center items-center">
              <Code className="h-10 w-10 mb-4" />
              <CardTitle>Individuelle Web-Entwicklung</CardTitle>
              <CardDescription>
                Massgeschneiderte Web-Apps, die perfekt auf Ihre Bedürfnisse
                zugeschnitten sind – von der Konzeption bis zum Deployment.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="text-center items-center">
              <BrainCircuit className="h-10 w-10 mb-4" />
              <CardTitle>KI & LLM Integration</CardTitle>
              <CardDescription>
                Integration von fortschrittlichen Sprachmodellen (LLMs) und
                anderen KI-Diensten, um Ihre Anwendungen intelligenter zu
                machen.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="text-center items-center">
              <ShieldCheck className="h-10 w-10 mb-4" />
              <CardTitle>Schweizer Hosting & Datenschutz</CardTitle>
              <CardDescription>
                Hosting Ihrer Anwendung in der Schweiz mit einem starken Fokus
                auf Datenschutz und Sicherheit nach höchsten Standards.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}