import { createFileRoute } from '@tanstack/react-router'
import { Mail, MapPin, Phone } from 'lucide-react'

import { Button } from '#/components/ui/button.tsx'
import { Input } from '#/components/ui/input.tsx'
import { Label } from '#/components/ui/label.tsx'
import { Textarea } from '#/components/ui/textarea.tsx'

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

        <form className="flex flex-col gap-4 rounded-xl border border-border bg-muted/20 p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" placeholder="Jane" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" placeholder="Doe" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="jane@example.com" />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="How can we help you?"
              className="min-h-32"
            />
          </div>

          <Button type="submit" size="lg" className="mt-2 w-full">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  )
}
