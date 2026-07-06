import { createFileRoute } from '@tanstack/react-router'

import { Services } from '@/components/Services'
import { strapiApi } from '@/data/loaders'

export const Route = createFileRoute('/services')({
  loader: async () => {
    const response = await strapiApi.services.getServicesData()
    return { services: response.data }
  },
  component: ServicesPage,
})

function ServicesPage() {
  const { services } = Route.useLoaderData()

  return (
    <main className="flex-1 pb-16 pt-12 md:pb-24 md:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            End-to-end digital solutions designed to elevate your brand and
            drive measurable growth.
          </p>
        </div>
      </div>
      <Services services={services} showHeader={false} />
    </main>
  )
}
