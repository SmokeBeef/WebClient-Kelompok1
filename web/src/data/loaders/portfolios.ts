import { createServerFn } from '@tanstack/react-start'

import { sdk } from '@/data/strapi-sdk'
import type {
  TPortfolio,
  TStrapiResponseCollection,
} from '@/types/strapi'

const PAGE_SIZE = 12

const portfolios = sdk.collection('portfolios')

const getPortfolioBySlug = async (slug: string) => {
  return portfolios.find({
    status: 'published',
    filters: {
      slug: { $eq: slug },
    },
    populate: ['thumbnail', 'portfolio_category'],
  }) as Promise<TStrapiResponseCollection<TPortfolio>>
}

export const getPortfoliosData = createServerFn({
  method: 'GET',
})
  .inputValidator(
    (input?: { page?: number; category?: string; limit?: number }) => input,
  )
  .handler(async ({ data }): Promise<TStrapiResponseCollection<TPortfolio>> => {
    const response = await portfolios.find({
      sort: ['createdAt:desc'],
      status: 'published',
      pagination: {
        page: data?.page || 1,
        pageSize: data?.limit || PAGE_SIZE,
      },
      populate: ['thumbnail', 'portfolio_category'],
      filters: data?.category
        ? {
            portfolio_category: {
              name: { $eq: data.category },
            },
          }
        : undefined,
    })

    return response as TStrapiResponseCollection<TPortfolio>
  })

export const getPortfolioBySlugData = createServerFn({
  method: 'GET',
})
  .inputValidator((slug: string) => slug)
  .handler(
    async ({ data: slug }): Promise<TStrapiResponseCollection<TPortfolio>> => {
      const response = await getPortfolioBySlug(slug)
      return response
    },
  )
