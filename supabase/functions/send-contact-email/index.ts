import { serve } from "https://deno.land/std@0.190.0/http/server.ts"
import { Resend } from 'npm:resend'

// Holt den API-Schlüssel aus den Supabase Secrets
const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Behandelt CORS Preflight-Anfragen
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY ist in den Umgebungsvariablen nicht gesetzt.')
    }
    
    const resend = new Resend(RESEND_API_KEY)
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Name, E-Mail und Nachricht sind erforderlich.' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    // Sendet die E-Mail
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Formular <formular@mo-freelancer.ch>', // WICHTIG: Diese Domain muss in Resend verifiziert sein.
      to: ['contact@mo-freelancer.ch'],
      subject: `Neue Kontaktanfrage von ${name}`,
      reply_to: email,
      html: `
        <h1>Neue Nachricht von Ihrer Portfolio-Webseite</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <hr>
        <p><strong>Nachricht:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    })

    if (error) {
      console.error({ error })
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})