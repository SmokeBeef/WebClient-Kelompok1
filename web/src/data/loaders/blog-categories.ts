import { createServerFn } from '@tanstack/react-start'

import { sdk } from '@/data/strapi-sdk'
import type {
  TBlogCategory,
  TStrapiResponseCollection,
} from '@/types/strapi'

const blogCategories = sdk.collection('blog-categories')

const getBlogCategories = async () => {
  return blogCategories.find({
    sort: ['name:asc'],
    status: 'published',
    populate: ['blogs'],
  }) as Promise<TStrapiResponseCollection<TBlogCategory>>
}

export const getBlogCategoriesData = createServerFn({
  method: 'GET',
}).handler(async (): Promise<TStrapiResponseCollection<TBlogCategory>> => {
  const response = await getBlogCategories()
  return response
})
