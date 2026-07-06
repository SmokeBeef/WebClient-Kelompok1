import { createServerFn } from "@tanstack/react-start";

import { sdk } from "@/data/strapi-sdk";
import type { TService, TStrapiResponseCollection } from "@/types/strapi";

const services = sdk.collection("services");

export const getServicesData = createServerFn({
  method: "GET",
})
  .inputValidator((input?: { limit?: number }) => input)
  .handler(async ({ data }): Promise<TStrapiResponseCollection<TService>> => {
    const response = await services.find({
      sort: ["createdAt:desc"],
      status: "published",
      pagination: {
        page: 1,
        pageSize: data?.limit || 100,
      },
      populate: ["thumbnail"],
    });

    return response as TStrapiResponseCollection<TService>;
  });
