import { createFileRoute, Link, notFound } from '@tanstack/react-router'

import { MarkdownContent } from '@/components/markdown-content'
import { StrapiImage } from '@/components/strapi-image'
import { strapiApi } from '@/data/loaders'

export const Route = createFileRoute('/portfolio/$slug')({
  loader: async ({ params }) => {
    const response = await strapiApi.portfolios.getPortfolioBySlugData({
      data: params.slug,
    })
    const portfolio = response.data[0]

    if (!portfolio) {
      throw notFound()
    }

    return { portfolio }
  },
  component: PortfolioDetailPage,
})

function PortfolioDetailPage() {
  const { portfolio } = Route.useLoaderData()

  return (
    <main className="flex-1 pb-16 pt-12 md:pb-24 md:pt-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link
          to="/portfolio"
          className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
        >
          &larr; Back to Portfolio
        </Link>

        <div className="mt-8 overflow-hidden rounded-2xl bg-slate-100">
          <StrapiImage
            src={portfolio.thumbnail?.url}
            alt={portfolio.thumbnail?.alternativeText || portfolio.title}
            className="aspect-[16/9] w-full object-cover"
          />
        </div>

        <div className="mt-8">
          <span className="text-sm font-medium text-slate-500">
            {portfolio.portfolio_category?.name ?? 'Uncategorized'}
          </span>
          <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            {portfolio.title}
          </h1>
        </div>

        <div className="mt-10">
          <MarkdownContent content={portfolio.content} />
        </div>
      </div>
    </main>
  )
}
