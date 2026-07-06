import { createFileRoute, Link } from '@tanstack/react-router'
import { useMemo, useState } from 'react'

import { StrapiImage } from '@/components/strapi-image'
import { strapiApi } from '@/data/loaders'

export const Route = createFileRoute('/portfolio')({
  loader: async () => {
    const [portfoliosResponse, categoriesResponse] = await Promise.all([
      strapiApi.portfolios.getPortfoliosData({ data: { limit: 100 } }),
      strapiApi.portfolioCategories.getPortfolioCategoriesData(),
    ])

    return {
      portfolios: portfoliosResponse.data,
      categories: categoriesResponse.data,
    }
  },
  component: PortfolioPage,
})

function PortfolioPage() {
  const { portfolios, categories } = Route.useLoaderData()
  const [activeCategory, setActiveCategory] = useState('All')

  const categoryNames = useMemo(
    () => ['All', ...categories.map((category) => category.name)],
    [categories],
  )

  const filteredProjects = portfolios.filter(
    (project) =>
      activeCategory === 'All' ||
      project.portfolio_category?.name === activeCategory,
  )

  return (
    <main className="flex-1 pb-16 pt-12 md:pb-24 md:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Our Portfolio
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Explore our extensive collection of case studies, projects, and
            successful digital products built for clients worldwide.
          </p>
        </div>

        <div className="scrollbar-hide mt-10 flex overflow-x-auto whitespace-nowrap border-b border-slate-200 pb-px">
          <div className="flex gap-2">
            {categoryNames.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-colors ${
                  activeCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Link
              key={project.documentId}
              to="/portfolio/$slug"
              params={{ slug: project.slug }}
              className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <StrapiImage
                  src={project.thumbnail?.url}
                  alt={project.thumbnail?.alternativeText || project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex items-center justify-between p-6">
                <div>
                  <span className="text-sm font-medium text-slate-500">
                    {project.portfolio_category?.name ?? 'Uncategorized'}
                  </span>
                  <h3 className="mt-1 text-xl font-bold text-slate-900">
                    {project.title}
                  </h3>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 transition-colors group-hover:border-indigo-600 group-hover:bg-indigo-600">
                  <img
                    className="h-4 w-4 transition-transform group-hover:invert"
                    src="/icon15.svg"
                    alt="Link Icon"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="mt-16 flex flex-col items-center justify-center py-12 text-center">
            <span className="text-lg font-medium text-slate-500">
              No projects found in this category.
            </span>
          </div>
        )}
      </div>
    </main>
  )
}
