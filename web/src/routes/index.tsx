import { createFileRoute } from '@tanstack/react-router'

import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Hero } from '@/components/Hero'
import { Portfolio } from '@/components/Portfolio'
import { Services } from '@/components/Services'
import { strapiApi } from '@/data/loaders'

export const Route = createFileRoute('/')({
  loader: async () => {
    const [servicesResponse, portfoliosResponse] = await Promise.all([
      strapiApi.services.getServicesData({ data: { limit: 6 } }),
      strapiApi.portfolios.getPortfoliosData({ data: { limit: 4 } }),
    ])

    return {
      services: servicesResponse.data,
      portfolios: portfoliosResponse.data,
    }
  },
  component: Index,
})

function Index() {
  const { services, portfolios } = Route.useLoaderData()

  return (
    <>
      <Hero />
      <About />
      <Services services={services} />
      <Portfolio projects={portfolios} />
      <Contact />
    </>
  )
}
