import { strapi } from '@strapi/client'
import { env } from '#/env'

// Strapi base URL (without /api)
const STRAPI_BASE = env.STRAPI_URL

// Initialize the Strapi SDK with /api endpoint
const sdk = strapi({ baseURL: new URL('/api', STRAPI_BASE).href })

export { sdk }
