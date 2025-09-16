import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier würde die Logik zum Senden des Formulars stehen
    alert("Vielen Dank für Ihre Nachricht! Das Formular ist derzeit noch nicht verbunden.");
  };

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <Card className="mx-auto max-w-xl">
          <CardHeader>
            <CardTitle>Kontaktieren Sie mich</CardTitle>
            <CardDescription>
              Haben Sie ein Projekt im Kopf? Ich freue mich, von Ihnen zu
              hören.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Ihr Name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="ihre@email.com"
                  required
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Nachricht</Label>
                <Textarea
                  id="message"
                  placeholder="Beschreiben Sie Ihr Projekt"
                  required
                  className="min-h-[100px]"
                />
              </div>
              <Button className="w-full" type="submit">
                Nachricht senden
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}