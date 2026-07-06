import { getBlogCategoriesData } from './blog-categories'
import { getBlogBySlugData, getBlogsData } from './blogs'
import { submitContactFormData } from './contact-forms'
import { getPortfolioCategoriesData } from './portfolio-categories'
import { getPortfolioBySlugData, getPortfoliosData } from './portfolios'
import { getServicesData } from './services'

/**
 * Strapi API - Server functions for fetching data from Strapi
 */
export const strapiApi = {
  blogs: {
    getBlogsData,
    getBlogBySlugData,
  },
  blogCategories: {
    getBlogCategoriesData,
  },
  portfolios: {
    getPortfoliosData,
    getPortfolioBySlugData,
  },
  portfolioCategories: {
    getPortfolioCategoriesData,
  },
  services: {
    getServicesData,
  },
  contactForms: {
    submitContactFormData,
  },
}
