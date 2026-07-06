import { strapi } from "@strapi/client";
import { env } from "#/env";

// Initialize the Strapi SDK with /api endpoint
const sdk = strapi({
  baseURL: new URL("/api", env.STRAPI_URL).href,
  auth: env.STRAPI_API_TOKEN,
});

export { sdk };
