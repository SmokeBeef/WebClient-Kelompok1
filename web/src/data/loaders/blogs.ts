import { createServerFn } from '@tanstack/react-start'

import { sdk } from '@/data/strapi-sdk'
import type {
  TBlog,
  TStrapiResponseCollection,
} from '@/types/strapi'

const PAGE_SIZE = 9

const blogs = sdk.collection('blogs')

const getBlogBySlug = async (slug: string) => {
  return blogs.find({
    status: 'published',
    filters: {
      slug: { $eq: slug },
    },
    populate: ['thumbnail', 'blog_categories'],
  }) as Promise<TStrapiResponseCollection<TBlog>>
}

export const getBlogsData = createServerFn({
  method: 'GET',
})
  .inputValidator(
    (input?: { page?: number; category?: string; limit?: number }) => input,
  )
  .handler(async ({ data }): Promise<TStrapiResponseCollection<TBlog>> => {
    const response = await blogs.find({
      sort: ['createdAt:desc'],
      status: 'published',
      pagination: {
        page: data?.page || 1,
        pageSize: data?.limit || PAGE_SIZE,
      },
      populate: ['thumbnail', 'blog_categories'],
      filters: data?.category
        ? {
            blog_categories: {
              name: { $eq: data.category },
            },
          }
        : undefined,
    })

    return response as TStrapiResponseCollection<TBlog>
  })

export const getBlogBySlugData = createServerFn({
  method: 'GET',
})
  .inputValidator((slug: string) => slug)
  .handler(
    async ({ data: slug }): Promise<TStrapiResponseCollection<TBlog>> => {
      const response = await getBlogBySlug(slug)
      return response
    },
  )
