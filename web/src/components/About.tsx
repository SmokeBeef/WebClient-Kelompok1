// web/src/components/About.tsx
export const About = () => {
  return (
    <section className="w-full bg-slate-50 py-16 md:py-24 lg:py-32">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:px-8">
        
        {/* Kolom Kiri: Gambar dengan Efek Offset */}
        <div className="relative w-full flex-1 max-w-md lg:max-w-none">
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl bg-indigo-600/10 sm:translate-x-6 sm:translate-y-6"></div>
          <img
            className="relative z-10 w-full rounded-2xl object-cover shadow-xl ring-1 ring-slate-900/5"
            src="/image-with-fallback1.png"
            alt="About Us"
          />
        </div>

        {/* Kolom Kanan: Teks dan Daftar Keahlian */}
        <div className="flex w-full flex-1 flex-col items-start lg:pl-8">
          
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold uppercase tracking-wider text-indigo-600">About Us</span>
            <div className="h-0.5 w-12 rounded-full bg-indigo-600"></div>
          </div>
          
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            We build digital experiences that deliver results.
          </h2>
          
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Our multidisciplinary team of designers, developers, and
            strategists work closely with you to transform complex
            challenges into elegant, intuitive solutions. We believe
            in building the foundation right the first time.
          </p>

          {/* Render List secara Dinamis */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { icon: "/icon4.svg", text: "Data-driven strategic planning" },
              { icon: "/icon5.svg", text: "Seamless responsive engineering" },
              { icon: "/icon6.svg", text: "Conversion-optimized user flows" },
              { icon: "/icon7.svg", text: "Scalable, maintainable architecture" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100">
                  <img className="h-4 w-4" src={item.icon} alt="List Icon" />
                </div>
                <span className="text-sm font-semibold text-slate-700">{item.text}</span>
              </div>
            ))}
          </div>

          <button className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-8 font-semibold text-white shadow-lg transition-transform hover:scale-105">
            Learn More About Us
          </button>
          
        </div>
      </div>
    </section>
  );
};