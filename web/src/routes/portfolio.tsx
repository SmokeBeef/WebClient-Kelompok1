import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react' // Import hook state dari React
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export const Route = createFileRoute('/portfolio')({
  component: PortfolioPage,
})

function PortfolioPage() {
  // State untuk melacak kategori yang aktif (Default: 'All')
  const [activeCategory, setActiveCategory] = useState('All')

  // Daftar kategori yang ada di desain Figma
  const categories = ['All', 'Web App', 'E-Commerce', 'Mobile App', 'Branding', 'Marketing Site']

  // Data proyek simulasi (sesuaikan gambar/ikon dengan aset public-mu nanti)
  const projects = [
    { image: "/image-with-fallback2.png", category: "Web App", title: "Project Alpha", icon: "/icon15.svg" },
    { image: "/image-with-fallback3.png", category: "E-Commerce", title: "Project Beta", icon: "/icon16.svg" },
    { image: "/image-with-fallback4.png", category: "Marketing Site", title: "Project Gamma", icon: "/icon17.svg" },
    { image: "/image-with-fallback5.png", category: "Dashboard UI", title: "Project Delta", icon: "/icon18.svg" },
    { image: "/image-with-fallback9.png", category: "Mobile App", title: "Project Epsilon", icon: "/icon15.svg" },
    { image: "/image-with-fallback10.png", category: "Branding", title: "Project Zeta", icon: "/icon16.svg" },
    { image: "/image-with-fallback6.png", category: "Web App", title: "Project Eta", icon: "/icon17.svg" },
    { image: "/image-with-fallback7.png", category: "UI/UX Design", title: "Project Theta", icon: "/icon18.svg" },
    { image: "/image-with-fallback8.png", category: "Marketing Site", title: "Project Iota", icon: "/icon15.svg" },
  ]

  // Logika Filter: Tampilkan semua jika 'All', jika tidak, cocokkan dengan kategori
  const filteredProjects = projects.filter(project => 
    activeCategory === 'All' || project.category === activeCategory
  )

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-white">
      <Navbar />
      
      <main className="flex-1 pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header Halaman Portfolio */}
          <div className="max-w-3xl">
            <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
              Our Portfolio
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Explore our extensive collection of case studies, projects, and successful digital products built for clients worldwide.
            </p>
          </div>

          {/* Kategori Tab (Scrollable di Mobile) */}
          <div className="mt-10 flex overflow-x-auto whitespace-nowrap border-b border-slate-200 pb-px scrollbar-hide">
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-colors ${
                    activeCategory === category
                      ? 'bg-indigo-600 text-white' // Style untuk tab aktif
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100' // Style untuk tab pasif
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Proyek yang Telah Difilter */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
                
                <div className="flex items-center justify-between p-6">
                  <div>
                    <span className="text-sm font-medium text-slate-500">
                      {project.category}
                    </span>
                    <h3 className="mt-1 text-xl font-bold text-slate-900">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 transition-colors group-hover:border-indigo-600 group-hover:bg-indigo-600">
                    <img
                      className="h-4 w-4 transition-transform group-hover:invert"
                      src={project.icon}
                      alt="Link Icon"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Kondisi jika tidak ada proyek di kategori tertentu */}
          {filteredProjects.length === 0 && (
            <div className="mt-16 flex flex-col items-center justify-center py-12 text-center">
              <span className="text-lg font-medium text-slate-500">No projects found in this category.</span>
            </div>
          )}

        </div>
      </main>
      
      <Footer />
    </div>
  )
}