"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { showSuccess, showError } from "@/utils/toast";
import { Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  en: {
    title: "Contact Me",
    description: "Have a project in mind? Fill out the form or send me an email at",
    nameLabel: "Name",
    namePlaceholder: "Your Name",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    messageLabel: "Message",
    messagePlaceholder: "Describe your project",
    sendButton: "Send Message",
    sendingButton: "Sending...",
    successMessage: "Thank you! Your message has been sent.",
    errorMessage: "Failed to send:",
  },
  de: {
    title: "Kontaktieren Sie mich",
    description: "Haben Sie ein Projekt im Kopf? Füllen Sie das Formular aus oder senden Sie mir eine E-Mail an",
    nameLabel: "Name",
    namePlaceholder: "Ihr Name",
    emailLabel: "Email",
    emailPlaceholder: "ihre@email.com",
    messageLabel: "Nachricht",
    messagePlaceholder: "Beschreiben Sie Ihr Projekt",
    sendButton: "Nachricht senden",
    sendingButton: "Senden...",
    successMessage: "Vielen Dank! Ihre Nachricht wurde gesendet.",
    errorMessage: "Senden fehlgeschlagen:",
  },
};

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { language } = useLanguage();
  const t = content[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase
      .from("contacts")
      .insert([{ name, email, message }]);

    setLoading(false);

    if (error) {
      showError(`${t.errorMessage} ${error.message}`);
    } else {
      showSuccess(t.successMessage);
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <Card className="mx-auto max-w-xl">
          <CardHeader>
            <CardTitle>{t.title}</CardTitle>
            <CardDescription>
              {t.description}{" "}
              <a
                href="mailto:contact@mo-freelancer.ch"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                contact@mo-freelancer.ch
              </a>
              .
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">{t.nameLabel}</Label>
                <Input
                  id="name"
                  placeholder={t.namePlaceholder}
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{t.emailLabel}</Label>
                <Input
                  id="email"
                  placeholder={t.emailPlaceholder}
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">{t.messageLabel}</Label>
                <Textarea
                  id="message"
                  placeholder={t.messagePlaceholder}
                  required
                  className="min-h-[100px]"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <Button className="w-full" type="submit" disabled={loading}>
                {loading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : null}
                {loading ? t.sendingButton : t.sendButton}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}