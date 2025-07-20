"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { useLanguage } from "@/components/language/language-provider"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormState {
  isSubmitting: boolean
  isSuccess: boolean
  error: string | null
}

export function ContactForm() {
  const { t, language } = useLanguage()

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSuccess: false,
    error: null,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (formState.error) {
      setFormState((prev) => ({ ...prev, error: null }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setFormState({ isSubmitting: true, isSuccess: false, error: null })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, language }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setFormState({ isSubmitting: false, isSuccess: true, error: null })
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        error: error instanceof Error ? error.message : "An unexpected error occurred",
      })
    }
  }

  if (formState.isSuccess) {
    return (
      <Card className="bg-gradient-to-br from-card/50 via-card/40 to-card/50 backdrop-blur-sm border border-green-500/20 shadow-lg shadow-green-500/10">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">{t("messageSentTitle")}</h3>
          <p className="text-muted-foreground mb-6">{t("messageSentDescription")}</p>
          <Button
            onClick={() => setFormState({ isSubmitting: false, isSuccess: false, error: null })}
            variant="outline"
            className="hover:bg-accent transition-all duration-200"
          >
            {t("sendAnotherMessage")}
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-gradient-to-br from-card/50 via-card/40 to-card/50 backdrop-blur-sm border border-purple-500/20 shadow-lg shadow-purple-500/10">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-foreground text-xl mb-2">{t("contactFormTitle")}</CardTitle>
        <CardDescription className="text-muted-foreground">{t("contactFormDescription")}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                {t("nameLabel")}
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="bg-background/50 border-border/50 focus:border-primary"
                placeholder={t("namePlaceholder")}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                {t("emailLabel")}
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-background/50 border-border/50 focus:border-primary"
                placeholder={t("emailPlaceholder")}
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
              {t("subjectLabel")}
            </label>
            <Input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className="bg-background/50 border-border/50 focus:border-primary"
              placeholder={t("subjectPlaceholder")}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              {t("messageLabel")}
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={5}
              className="bg-background/50 border-border/50 focus:border-primary resize-none"
              placeholder={t("messagePlaceholder")}
            />
          </div>

          {formState.error && (
            <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600 dark:text-red-400">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm">{formState.error}</span>
            </div>
          )}

          <Button
            type="submit"
            disabled={formState.isSubmitting}
            className="w-full gradient-purple-blue text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 disabled:hover:scale-100"
          >
            {formState.isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                {t("sendingMessage")}
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                {t("sendMessage")}
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
