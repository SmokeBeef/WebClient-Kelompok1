import { createServerFn } from '@tanstack/react-start'

import { sdk } from '@/data/strapi-sdk'
import type {
  TContactForm,
  TContactFormInput,
  TStrapiResponseSingle,
} from '@/types/strapi'

const contactForms = sdk.collection('contact-forms')

const createContactForm = async (input: TContactFormInput) => {
  return contactForms.create(input) as Promise<TStrapiResponseSingle<TContactForm>>
}

export const submitContactFormData = createServerFn({
  method: 'POST',
})
  .inputValidator((input: TContactFormInput) => input)
  .handler(
    async ({ data }): Promise<TStrapiResponseSingle<TContactForm>> => {
      const response = await createContactForm(data)
      return response
    },
  )
