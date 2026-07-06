import { createServerFn } from '@tanstack/react-start'

import { sdk } from '@/data/strapi-sdk'
import type {
  TPortfolioCategory,
  TStrapiResponseCollection,
} from '@/types/strapi'

const portfolioCategories = sdk.collection('portfolio-categories')

const getPortfolioCategories = async () => {
  return portfolioCategories.find({
    sort: ['name:asc'],
    status: 'published',
  }) as Promise<TStrapiResponseCollection<TPortfolioCategory>>
}

export const getPortfolioCategoriesData = createServerFn({
  method: 'GET',
}).handler(
  async (): Promise<TStrapiResponseCollection<TPortfolioCategory>> => {
    const response = await getPortfolioCategories()
    return response
  },
)
