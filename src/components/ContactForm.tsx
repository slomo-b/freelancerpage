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

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase
      .from("contacts")
      .insert([{ name, email, message }]);

    setLoading(false);

    if (error) {
      showError(`Failed to send: ${error.message}`);
    } else {
      showSuccess("Thank you! Your message has been sent.");
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
            <CardTitle>Contact Me</CardTitle>
            <CardDescription>
              Have a project in mind? Fill out the form or send me an email at{" "}
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
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="your@email.com"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Describe your project"
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
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}