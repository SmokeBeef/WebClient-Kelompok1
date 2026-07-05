// web/src/components/Services.tsx
export const Services = () => {
  const servicesData = [
    {
      icon: "/icon8.svg",
      title: "User Interface Design",
      desc: "Crafting beautiful, intuitive interfaces that engage users and drive conversions with modern design patterns.",
    },
    {
      icon: "/icon9.svg",
      title: "Content Strategy",
      desc: "Developing compelling narratives and organizing information architecture to clearly communicate your brand's value.",
    },
    {
      icon: "/icon10.svg",
      title: "Frontend Development",
      desc: "Building fast, responsive, and accessible web applications using cutting-edge React technologies.",
    },
    {
      icon: "/icon11.svg",
      title: "Mobile Optimization",
      desc: "Delivering seamless mobile-first experiences that look and perform perfectly across all devices.",
    },
    {
      icon: "/icon12.svg",
      title: "SEO Optimization",
      desc: "Implementing technical SEO best practices to ensure your platform ranks high and reaches the right audience.",
    },
    {
      icon: "/icon13.svg",
      title: "System Architecture",
      desc: "Designing scalable, secure, and robust technical foundations that support your long-term business goals.",
    },
  ];

  return (
    <section className="w-full bg-indigo-50/50 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Bagian Header Services */}
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-indigo-600">
            Our Expertise
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to succeed online.
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            From initial concept to final deployment, we provide end-to-end
            digital solutions designed to elevate your brand and drive
            measurable growth.
          </p>
        </div>

        {/* Grid Kotak Layanan */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-100/80">
                <img className="h-7 w-7" src={item.icon} alt={item.title} />
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};