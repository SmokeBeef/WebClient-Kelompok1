/**
 * Strapi type definitions matching the CMS collections
 */

export type TImage = {
  id: number
  documentId: string
  alternativeText: string | null
  url: string
}

export type TBlogCategory = {
  id: number
  documentId: string
  name: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export type TBlog = {
  id: number
  documentId: string
  title: string
  slug: string
  content?: string
  thumbnail?: TImage
  blog_categories?: TBlogCategory[]
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export type TPortfolioCategory = {
  id: number
  documentId: string
  name: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export type TPortfolio = {
  id: number
  documentId: string
  title: string
  slug: string
  content?: string
  thumbnail?: TImage
  portfolio_category?: TPortfolioCategory | null
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export type TService = {
  id: number
  documentId: string
  title: string
  short_description: string
  content?: string
  thumbnail?: TImage
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export type TContactFormInput = {
  first_name: string
  last_name?: string
  email: string
  message: string
}

export type TContactForm = TContactFormInput & {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export type TStrapiResponseSingle<T> = {
  data: T
  meta?: {
    pagination?: TStrapiPagination
  }
}

export type TStrapiResponseCollection<T> = {
  data: Array<T>
  meta?: {
    pagination?: TStrapiPagination
  }
}

export type TStrapiPagination = {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

export type TStrapiError = {
  status: number
  name: string
  message: string
  details?: Record<string, Array<string>>
}

export type TStrapiResponse<T = null> = {
  data?: T
  error?: TStrapiError
  meta?: {
    pagination?: TStrapiPagination
  }
}
