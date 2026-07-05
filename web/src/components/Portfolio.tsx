// web/src/components/Portfolio.tsx
export const Portfolio = () => {
  const projects = [
    {
      image: "/image-with-fallback2.png",
      category: "Web App",
      title: "Project Alpha",
      icon: "/icon15.svg",
    },
    {
      image: "/image-with-fallback3.png",
      category: "E-Commerce",
      title: "Project Beta",
      icon: "/icon16.svg",
    },
    {
      image: "/image-with-fallback4.png",
      category: "Marketing Site",
      title: "Project Gamma",
      icon: "/icon17.svg",
    },
    {
      image: "/image-with-fallback5.png",
      category: "Dashboard UI",
      title: "Project Delta",
      icon: "/icon18.svg",
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Bagian Portfolio */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-wider text-indigo-600">
              Our Work
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Featured Case Studies
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Explore our latest projects where we've helped businesses
              transform their digital presence and achieve their goals.
            </p>
          </div>
          
          <button className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50">
            View All Projects
            <img className="h-4 w-4" src="/icon14.svg" alt="Arrow Right" />
          </button>
        </div>

        {/* Grid Daftar Proyek */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg"
            >
              {/* Gambar Proyek */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={project.image}
                  alt={project.title}
                />
              </div>
              
              {/* Detail Proyek */}
              <div className="flex items-center justify-between p-6 md:p-8">
                <div>
                  <span className="text-sm font-medium text-slate-500">
                    {project.category}
                  </span>
                  <h3 className="mt-2 text-2xl font-bold text-slate-900">
                    {project.title}
                  </h3>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 transition-colors group-hover:border-indigo-600 group-hover:bg-indigo-600">
                  <img
                    className="h-5 w-5 transition-transform group-hover:invert"
                    src={project.icon}
                    alt="Link Icon"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};