import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const content = {
  en: {
    title: "Featured Project: Haidi AI Chat",
    overview: "Haidi AI is a full-stack web application built from the ground up, designed as a secure and privacy-focused AI assistant. The platform is 100% developed and operated in Switzerland, offering users a powerful alternative to global AI services with the promise that all data never leaves the country.",
    coreFeaturesTitle: "Core Features Implemented",
    tabs: [
      {
        trigger: "Chat",
        title: "Advanced Chat Functionality",
        features: [
          "Dynamic interface with real-time streaming of AI responses from the Infomaniak AI API.",
          "Support for multiple AI models (e.g., Llama 3, Qwen 3) switchable per chat.",
          "Features like editing, deleting, and regenerating messages, plus a feedback system.",
          "AI-powered, automatic generation of chat titles based on the first user message."
        ]
      },
      {
        trigger: "RAG",
        title: "Document Analysis with RAG",
        features: [
          "Complex RAG pipeline allowing users to upload documents (PDF, DOCX, images) and ask questions about them.",
          "Multimodal AI for text extraction from visual formats.",
          "Text chunking, vector embeddings, and storage in a PostgreSQL database with pgvector.",
          "Hybrid search combining semantic vector search and keyword search for precise, source-cited answers."
        ]
      },
      {
        trigger: "Image Gen",
        title: "AI Image Generation",
        features: [
          "Integration of the Infomaniak Image API to create images from text prompts.",
          "Choice of models (Flux, SDXL Lightning), styles, sizes, and quality levels.",
          "AI-powered prompt enhancement to turn vague inputs into detailed, effective prompts.",
          "A personal image gallery for each user."
        ]
      }
    ],
    techDetailsTitle: "Further Technical Details",
    accordion: [
      {
        trigger: "Full-Stack Architecture & Security",
        details: [
          "Built with Next.js App Router for a modern, server-rendered React application.",
          "Backend logic fully handled via Next.js API Routes (Route Handlers).",
          "Custom, secure JWT-based authentication system.",
          "User data secured in PostgreSQL with bcryptjs for password hashing."
        ]
      },
      {
        trigger: "Subscription & Billing System",
        details: [
          "Full integration of Stripe for managing multi-tier subscriptions (Free, Starter, Pro).",
          "Secure payment processing via Stripe Checkout and a customer portal.",
          "Stripe Webhooks for syncing subscription status and assigning monthly token quotas."
        ]
      },
      {
        trigger: "Modern Frontend & State Management",
        details: [
          "Fully responsive and intuitive UI built with Tailwind CSS and shadcn/ui.",
          "Global state management for auth and chat using React Context API.",
          "Custom internationalization (i18n) solution for German and English."
        ]
      }
    ],
    techStackTitle: "Technology Stack",
    techStack: ["React 19", "Next.js 15", "TypeScript", "Tailwind CSS", "shadcn/ui", "PostgreSQL", "pgvector", "Stripe", "Infomaniak AI API", "Custom JWT Auth"],
    button: "To the App",
  },
  de: {
    title: "Vorgestelltes Projekt: Haidi AI Chat",
    overview: "Haidi AI ist eine von Grund auf neu entwickelte, voll funktionsfähige Full-Stack-Webanwendung, die als sicherer und datenschutzorientierter KI-Assistent konzipiert ist. Die Plattform wird zu 100 % in der Schweiz entwickelt und betrieben und bietet Nutzern eine leistungsstarke Alternative zu globalen KI-Diensten, mit dem Versprechen, dass alle Daten das Land niemals verlassen.",
    coreFeaturesTitle: "Implementierte Kernfunktionen",
    tabs: [
      {
        trigger: "Chat",
        title: "Fortschrittliche Chat-Funktionalität",
        features: [
          "Dynamische Chat-Oberfläche, die Echtzeit-Streaming von KI-Antworten der Infomaniak AI API unterstützt.",
          "Unterstützung für mehrere KI-Modelle (z.B. Llama 3, Qwen 3), zwischen denen der Benutzer pro Chat wechseln kann.",
          "Funktionen wie das Bearbeiten, Löschen und Regenerieren von Nachrichten sowie ein Feedback-System (Like/Dislike).",
          "Automatische, KI-gestützte Generierung von Chat-Titeln basierend auf der ersten Benutzernachricht."
        ]
      },
      {
        trigger: "RAG",
        title: "Dokumentenanalyse mit RAG",
        features: [
          "Komplexe RAG-Pipeline, die es Benutzern ermöglicht, Dokumente (PDFs, DOCX, Bilder) hochzuladen und Fragen dazu zu stellen.",
          "Einsatz eines multimodalen KI-Modells zur Texterkennung aus visuellen Formaten.",
          "Aufteilung der Texte, Umwandlung in Vektor-Embeddings und Speicherung in PostgreSQL mit pgvector.",
          "Hybride Suche aus semantischer Vektorsuche und Schlüsselwortsuche für präzise, mit Quellen belegte Antworten."
        ]
      },
      {
        trigger: "Image Gen",
        title: "KI-Bildgenerierung",
        features: [
          "Integration der Infomaniak Image API zur Erstellung von Bildern aus Textbeschreibungen.",
          "Wahl zwischen verschiedenen Modellen (Flux, SDXL Lightning), Stilen, Grössen und Qualitätsstufen.",
          "KI-gestützte Prompt-Verbesserung, die vage Eingaben in detaillierte Prompts umwandelt.",
          "Eine persönliche Bildergalerie für jeden Benutzer."
        ]
      }
    ],
    techDetailsTitle: "Weitere technische Details",
    accordion: [
      {
        trigger: "Full-Stack-Architektur & Sicherheit",
        details: [
          "Realisierung mit dem Next.js App Router für eine moderne, serverseitig gerenderte React-Anwendung.",
          "Backend vollständig über Next.js API Routes (Route Handlers) implementiert.",
          "Implementierung eines benutzerdefinierten, sicheren Authentifizierungssystems auf Basis von JWT.",
          "Sichere Speicherung von Benutzerdaten in PostgreSQL mit bcryptjs für das Hashing von Passwörtern."
        ]
      },
      {
        trigger: "Abonnement- & Abrechnungssystem",
        details: [
          "Vollständige Integration von Stripe zur Verwaltung von Abonnements mit mehreren Tarifen (Kostenlos, Starter, Pro).",
          "Sicherer Bezahlvorgang über Stripe Checkout und ein Kundenportal zur Verwaltung.",
          "Nutzung von Stripe Webhooks zur Synchronisierung des Abonnementstatus und Zuweisung von Token-Kontingenten."
        ]
      },
      {
        trigger: "Modernes Frontend & State Management",
        details: [
          "Vollständig responsive und intuitive Benutzeroberfläche mit Tailwind CSS und shadcn/ui.",
          "Globales State Management für Authentifizierung und Chat-Zustand mit React Context API.",
          "Implementierung einer benutzerdefinierten Internationalisierungs-Lösung (i18n) für Deutsch und Englisch."
        ]
      }
    ],
    techStackTitle: "Technologie-Stack",
    techStack: ["React 19", "Next.js 15", "TypeScript", "Tailwind CSS", "shadcn/ui", "PostgreSQL", "pgvector", "Stripe", "Infomaniak AI API", "Custom JWT Auth"],
    button: "Zur App",
  },
};

export function ProjectHighlight() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted/70 backdrop-blur-sm">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t.title}
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              {t.overview}
            </p>
          </div>

          <div className="mx-auto aspect-video overflow-auto rounded-lg my-8 border bg-white">
            <iframe
              src="https://haidi.app"
              title="Haidi AI Live Demo"
              className="w-full h-full"
              allow="fullscreen"
            />
          </div>

          <div className="space-y-12">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">{t.coreFeaturesTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue={t.tabs[0].trigger} className="w-full">
                  <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto sm:h-10">
                    <TabsTrigger value={t.tabs[0].trigger}>Chat</TabsTrigger>
                    <TabsTrigger value={t.tabs[1].trigger}>Document Analysis (RAG)</TabsTrigger>
                    <TabsTrigger value={t.tabs[2].trigger}>Image Generation</TabsTrigger>
                  </TabsList>
                  {t.tabs.map((tab) => (
                    <TabsContent key={tab.trigger} value={tab.trigger} className="mt-6">
                      <div className="p-6 border rounded-lg bg-background/50">
                        <h3 className="text-xl font-semibold mb-4">{tab.title}</h3>
                        <ul className="space-y-3">
                          {tab.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle2 className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">{t.techDetailsTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {t.accordion.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-lg text-left hover:no-underline">
                        {item.trigger}
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-3 pt-2 pl-2">
                          {item.details.map((detail, dIndex) => (
                            <li key={dIndex} className="flex items-start">
                              <CheckCircle2 className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                              <span className="text-muted-foreground">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">{t.techStackTitle}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap justify-center gap-3">
                {t.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <a href="https://haidi.app" target="_blank" rel="noopener noreferrer">
              <Button size="lg">{t.button}</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}