import { createFileRoute, Link } from '@tanstack/react-router'
import { useMemo, useState } from 'react'

import { StrapiImage } from '@/components/strapi-image'
import { strapiApi } from '@/data/loaders'
import type { TBlog, TBlogCategory } from '@/types/strapi'

export const Route = createFileRoute('/blog')({
  loader: async () => {
    const [blogsResponse, categoriesResponse] = await Promise.all([
      strapiApi.blogs.getBlogsData({ data: { limit: 100 } }),
      strapiApi.blogCategories.getBlogCategoriesData(),
    ])

    return {
      blogs: blogsResponse.data,
      categories: categoriesResponse.data,
    }
  },
  component: BlogPage,
})

function getExcerpt(content?: string, maxLength = 160) {
  if (!content) return ''

  const plain = content
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#*_`>\[\]()!]/g, '')
    .replace(/\s+/g, ' ')
    .trim()

  return plain.length > maxLength ? `${plain.slice(0, maxLength)}...` : plain
}

function formatReadTime(content?: string) {
  const words = (content ?? '').split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.round(words / 200))
  return `${minutes} min read`
}

function PageHeader() {
  return (
    <div className="w-full border-b border-slate-200">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-10 text-center sm:px-6 lg:px-8 lg:py-14">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
          Blog
        </p>
        <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
          Insights, guides & design thinking.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600">
          Thoughts on design, development, and building digital products that
          last. Written by our team of practitioners.
        </p>
      </div>
    </div>
  )
}

function MobileCategoryBar({
  categories,
  active,
  setActive,
}: {
  categories: Array<{ label: string; count: number }>
  active: string
  setActive: (category: string) => void
}) {
  return (
    <div className="sticky top-16 z-40 w-full overflow-x-auto border-b border-slate-200 bg-white/95 lg:hidden">
      <div className="flex w-max gap-2 px-4 py-3">
        {categories.map((category) => (
          <button
            key={category.label}
            type="button"
            onClick={() => setActive(category.label)}
            className={`h-9 whitespace-nowrap rounded-full border px-4 text-sm font-medium transition-colors ${
              active === category.label
                ? 'border-slate-900 bg-slate-900 text-white'
                : 'border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  )
}

function Sidebar({
  categories,
  popularPosts,
  active,
  setActive,
}: {
  categories: Array<{ label: string; count: number }>
  popularPosts: TBlog[]
  active: string
  setActive: (category: string) => void
}) {
  return (
    <aside className="hidden w-72 shrink-0 flex-col gap-8 lg:flex">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
          Categories
        </p>
        <div className="mt-3 flex flex-col gap-1">
          {categories.map((category) => (
            <button
              key={category.label}
              type="button"
              onClick={() => setActive(category.label)}
              className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
                active === category.label
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <span>{category.label}</span>
              <span
                className={
                  active === category.label
                    ? 'text-white/70'
                    : 'text-slate-400'
                }
              >
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="h-px bg-slate-200" />

      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
          Popular
        </p>
        <div className="mt-2">
          {popularPosts.map((post, index) => (
            <Link
              key={post.documentId}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="flex gap-3 rounded-lg px-2 py-4 transition-colors hover:bg-slate-50"
            >
              <span className="pt-0.5 text-2xl font-bold leading-none text-slate-200">
                {index + 1}
              </span>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium leading-snug text-slate-800">
                  {post.title}
                </p>
                <p className="text-xs text-slate-400">
                  {formatReadTime(post.content)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}

function BlogCard({ blog }: { blog: TBlog }) {
  const category = blog.blog_categories?.[0]?.name ?? 'Uncategorized'

  return (
    <Link
      to="/blog/$slug"
      params={{ slug: blog.slug }}
      className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow hover:shadow-md"
    >
      <div className="relative h-48 bg-slate-100 sm:h-56">
        <StrapiImage
          src={blog.thumbnail?.url}
          alt={blog.thumbnail?.alternativeText || blog.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute top-3 left-3 rounded-full border border-slate-200 bg-white/90 px-3 py-1">
          <span className="text-xs font-medium text-slate-600">{category}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-semibold leading-snug text-slate-900">
          {blog.title}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-slate-600">
          {getExcerpt(blog.content)}
        </p>
        <div className="mt-auto flex items-center justify-between pt-1">
          <span className="text-xs text-slate-500">Nexus Team</span>
          <span className="text-xs text-slate-400">
            {formatReadTime(blog.content)}
          </span>
        </div>
      </div>
    </Link>
  )
}

function CTASection() {
  return (
    <div className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-16 text-center sm:px-6 lg:py-20">
        <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
          Want to join our team?
        </h2>
        <p className="mt-4 text-base text-slate-600 sm:text-lg">
          We're always looking for talented people to join our mission.
        </p>
        <Link
          to="/contact"
          className="mt-8 rounded-xl bg-slate-900 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
        >
          Get In Touch
        </Link>
      </div>
    </div>
  )
}

function buildCategoryList(
  blogs: TBlog[],
  categories: TBlogCategory[],
): Array<{ label: string; count: number }> {
  const counts = new Map<string, number>()

  for (const blog of blogs) {
    for (const category of blog.blog_categories ?? []) {
      counts.set(category.name, (counts.get(category.name) ?? 0) + 1)
    }
  }

  for (const category of categories) {
    if (!counts.has(category.name)) {
      counts.set(category.name, 0)
    }
  }

  return [
    { label: 'All', count: blogs.length },
    ...Array.from(counts.entries()).map(([label, count]) => ({ label, count })),
  ]
}

function BlogPage() {
  const { blogs, categories } = Route.useLoaderData()
  const [activeCategory, setActiveCategory] = useState('All')

  const categoryList = useMemo(
    () => buildCategoryList(blogs, categories),
    [blogs, categories],
  )

  const filteredBlogs = useMemo(() => {
    if (activeCategory === 'All') return blogs

    return blogs.filter((blog) =>
      blog.blog_categories?.some((category) => category.name === activeCategory),
    )
  }, [activeCategory, blogs])

  const popularPosts = blogs.slice(0, 4)

  return (
    <>
      <PageHeader />
      <MobileCategoryBar
        categories={categoryList}
        active={activeCategory}
        setActive={setActiveCategory}
      />

      <div className="mx-auto flex max-w-7xl items-start gap-12 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <Sidebar
          categories={categoryList}
          popularPosts={popularPosts}
          active={activeCategory}
          setActive={setActiveCategory}
        />

        <main className="min-w-0 flex-1">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.documentId} blog={blog} />
            ))}
          </div>

          {filteredBlogs.length === 0 && (
            <p className="py-16 text-center text-slate-500">
              No posts in this category yet.
            </p>
          )}
        </main>
      </div>

      <CTASection />
    </>
  )
}
