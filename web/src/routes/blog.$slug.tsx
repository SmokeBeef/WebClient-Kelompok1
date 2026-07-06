import { createFileRoute, Link, notFound } from '@tanstack/react-router'

import { MarkdownContent } from '@/components/markdown-content'
import { StrapiImage } from '@/components/strapi-image'
import { strapiApi } from '@/data/loaders'

export const Route = createFileRoute('/blog/$slug')({
  loader: async ({ params }) => {
    const response = await strapiApi.blogs.getBlogBySlugData({
      data: params.slug,
    })
    const blog = response.data[0]

    if (!blog) {
      throw notFound()
    }

    return { blog }
  },
  component: BlogDetailPage,
})

function BlogDetailPage() {
  const { blog } = Route.useLoaderData()

  return (
    <main className="flex-1 pb-16 pt-12 md:pb-24 md:pt-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link
          to="/blog"
          className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
        >
          &larr; Back to Blog
        </Link>

        <div className="mt-8 overflow-hidden rounded-2xl bg-slate-100">
          <StrapiImage
            src={blog.thumbnail?.url}
            alt={blog.thumbnail?.alternativeText || blog.title}
            className="aspect-[16/9] w-full object-cover"
          />
        </div>

        <div className="mt-8">
          <div className="flex flex-wrap gap-2">
            {blog.blog_categories?.map((category) => (
              <span
                key={category.documentId}
                className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600"
              >
                {category.name}
              </span>
            ))}
          </div>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            {blog.title}
          </h1>
        </div>

        <div className="mt-10">
          <MarkdownContent content={blog.content} />
        </div>
      </div>
    </main>
  )
}
