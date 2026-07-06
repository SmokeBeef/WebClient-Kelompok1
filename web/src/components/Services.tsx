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

        <div className={showHeader ? 'mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3' : 'grid gap-8 sm:grid-cols-2 lg:grid-cols-3'}>
          {services.map((service) => (
            <div
              key={service.documentId}
              className="flex flex-col items-start rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-indigo-100/80">
                {service.thumbnail ? (
                  <StrapiImage
                    src={service.thumbnail.url}
                    alt={service.thumbnail.alternativeText || service.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <img
                    className="h-7 w-7"
                    src={defaultIcon}
                    alt={service.title}
                  />
                )}
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                {service.short_description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
