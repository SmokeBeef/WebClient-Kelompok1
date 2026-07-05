// web/src/components/Hero.tsx
export const Hero = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 lg:py-32">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 sm:px-6 md:flex-row md:justify-between lg:px-8">
        
        {/* Kolom Teks (Kiri di Desktop) */}
        <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
          
          {/* Badge Label */}
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/50 px-4 py-1.5 shadow-sm">
            <img className="h-4 w-4" src="/icon2.svg" alt="Icon" />
            <span className="text-sm font-semibold text-indigo-700">Next-Gen Digital Solutions</span>
          </div>
          
          {/* Judul Utama */}
          <h1 className="mt-8 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Empower your team with{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              boundless creativity.
            </span>
          </h1>
          
          {/* Deskripsi */}
          <p className="mt-6 max-w-2xl text-lg text-slate-600">
            We craft beautiful, high-performance web applications that scale with your business. Stop wireframing and start building the future today.
          </p>
          
          {/* Tombol Aksi */}
          <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <button className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-8 font-semibold text-white shadow-lg transition-transform hover:scale-105">
              Start Building
              <img className="h-5 w-5 invert" src="/icon3.svg" alt="Arrow Right" />
            </button>
            <button className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-8 font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50">
              View Our Work
            </button>
          </div>
        </div>

        {/* Kolom Gambar (Kanan di Desktop) */}
        <div className="flex w-full flex-1 justify-center md:justify-end">
          <div className="w-full max-w-lg overflow-hidden rounded-2xl bg-slate-100 shadow-2xl ring-1 ring-slate-200 lg:max-w-xl">
            <img
              className="h-auto w-full object-cover"
              src="/image-with-fallback0.png"
              alt="Dashboard Preview"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};