import { useState } from 'react'
import { StrapiImage } from '@/components/strapi-image'
import type { TService } from '@/types/strapi'

const defaultIcon = '/icon8.svg'

type ServicesProps = {
  services: TService[]
  showHeader?: boolean
}

export const Services = ({ services, showHeader = true }: ServicesProps) => {
  return (
    <section className="w-full bg-indigo-50/50 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-indigo-600">
              Our Expertise
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Everything you need to succeed online.
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              From initial concept to final deployment, we provide end-to-end
              digital solutions designed to elevate your brand and drive
              measurable growth.
            </p>
          </div>
        )}
        <div
          className={
            showHeader
              ? 'mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'
              : 'grid gap-8 sm:grid-cols-2 lg:grid-cols-3'
          }
        >
          {services.map((service) => (
            <ServiceCard key={service.documentId} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

const ServiceCard = ({ service }: { service: TService }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="flex flex-col items-start rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md">
      <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-indigo-100/80">
        {service.thumbnail ? (
          <StrapiImage
            src={service.thumbnail.url}
            alt={service.thumbnail.alternativeText || service.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <img className="h-7 w-7" src={defaultIcon} alt={service.title} />
        )}
      </div>
      <h3 className="mt-6 text-xl font-bold text-slate-900">
        {service.title}
      </h3>
      <p className="mt-3 leading-relaxed text-slate-600">
        {service.short_description}
      </p>

      {isExpanded && (
        <p className="mt-2 leading-relaxed text-slate-500">
          Want to know more about how our {service.title.toLowerCase()} service
          can help your business grow? Reach out to our team for a free
          consultation tailored to your needs.
        </p>
      )}

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-800"
      >
        {isExpanded ? 'Show Less' : 'Learn More'}
        <span className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`}>
          →
        </span>
      </button>
    </div>
  )
}
