import { createFileRoute } from '@tanstack/react-router'
import { Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

import { Button } from '#/components/ui/button.tsx'
import { Input } from '#/components/ui/input.tsx'
import { Label } from '#/components/ui/label.tsx'
import { Textarea } from '#/components/ui/textarea.tsx'
import { strapiApi } from '@/data/loaders'

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
})

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    detail: 'hello@wireframe.com',
  },
  {
    icon: MapPin,
    title: 'Office Location',
    detail: '123 Layout Street Grid City, GC 10101',
  },
  {
    icon: Phone,
    title: 'Call Us',
    detail: '+1 (555) 000-0000',
  },
]

function RouteComponent() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    const first_name = String(formData.get('first_name') ?? '').trim()
    const last_name = String(formData.get('last_name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()

    if (!first_name || !email || !message) {
      toast.error('Please fill in all required fields.')
      return
    }

    setIsSubmitting(true)

    try {
      await strapiApi.contactForms.submitContactFormData({
        data: {
          first_name,
          last_name: last_name || undefined,
          email,
          message,
        },
      })

      toast.success('Message sent successfully!')
      form.reset()
    } catch {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="container mx-auto px-4 py-12 sm:py-16 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground">
              We'd love to hear from you. Send us a message and we'll respond
              as soon as possible.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {contactInfo.map(({ icon: Icon, title, detail }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/40">
                  <Icon className="size-5 text-foreground" />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold">{title}</span>
                  <span className="text-muted-foreground">{detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form
          className="flex flex-col gap-4 rounded-xl border border-border bg-muted/20 p-6 sm:p-8"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="first-name">First Name</Label>
              <Input
                id="first-name"
                name="first_name"
                placeholder="Jane"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" name="last_name" placeholder="Doe" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="jane@example.com"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="How can we help you?"
              className="min-h-32"
              required
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="mt-2 w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </div>
    </section>
  )
}
