import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

// ============================
// Komponen 1: ServiceCard
// ============================
interface ServiceCardProps {
  image: string;
  title: string;
  desc: string;
  extraDesc: string;
}

const ServiceCard = ({ image, title, desc, extraDesc }: ServiceCardProps) => {
  // useState untuk toggle "Learn More" -> menampilkan detail tambahan tanpa pindah halaman
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>

        {isExpanded && (
          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            {extraDesc}
          </p>
        )}

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-800"
        >
          {isExpanded ? "Show Less" : "Learn More"}
          <span className={`transition-transform ${isExpanded ? "rotate-90" : ""}`}>
            →
          </span>
        </button>
      </div>
    </div>
  );
};

// ============================
// Komponen 2: ProcessStep
// ============================
interface ProcessStepProps {
  number: string;
  title: string;
  desc: string;
  showArrow: boolean;
}

const ProcessStep = ({ number, title, desc, showArrow }: ProcessStepProps) => {
  return (
    <div className="flex flex-1 items-start gap-4">
      <div className="flex flex-1 flex-col rounded-xl border border-slate-200 bg-white p-6">
        <span className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 text-sm font-bold text-slate-700">
          {number}
        </span>
        <h4 className="mt-4 text-lg font-bold text-slate-900">{title}</h4>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
      </div>

      {showArrow && (
        <span className="mt-8 hidden text-2xl text-slate-300 md:block">→</span>
      )}
    </div>
  );
};

// ============================
// Komponen 3: ServicesPage (Main)
// ============================
function ServicesPage() {
  const servicesData = [
    {
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      title: "Web Development",
      desc: "A clear description of the service offered. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      extraDesc: "We build fast, scalable, and maintainable websites using modern frameworks like React and Next.js.",
    },
    {
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
      title: "Mobile App Design",
      desc: "A clear description of the service offered. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      extraDesc: "Our design process focuses on intuitive navigation and seamless user experience across devices.",
    },
    {
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      title: "UI/UX Design",
      desc: "A clear description of the service offered. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      extraDesc: "From wireframes to high-fidelity prototypes, we ensure every interaction feels natural.",
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      title: "Digital Marketing",
      desc: "A clear description of the service offered. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      extraDesc: "We craft data-driven campaigns to grow your reach across social and search channels.",
    },
    {
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      title: "Cloud solutions",
      desc: "A clear description of the service offered. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      extraDesc: "Reliable, secure, and scalable cloud infrastructure tailored to your business needs.",
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      title: "Data Analytics",
      desc: "A clear description of the service offered. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      extraDesc: "Turn raw data into actionable insights with our custom dashboards and reporting tools.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Plan",
      desc: "We start by understanding your goals and requirements. Our team collaborates with you to create a detailed roadmap and strategy for your project.",
    },
    {
      number: "02",
      title: "Develop",
      desc: "Our experienced developers bring your vision to life using cutting edge technologies and best practices to ensure quality and performance.",
    },
    {
      number: "03",
      title: "Launch",
      desc: "We deploy your project with thorough testing and ongoing support to ensure everything runs smoothly and continues to perform.",
    },
  ];

  return (
      <main>
        <section className="w-full bg-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
              <h2 className="text-4xl font-bold text-slate-900">Our Services</h2>
              <p className="mt-4 text-slate-600">
                A clear, modern wireframe template designed to help you layout your
                company profile quickly and efficiently before diving into visual design.
              </p>
            </div>

            {/* Grid Kartu Layanan */}
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {servicesData.map((item, index) => (
                <ServiceCard key={index} {...item} />
              ))}
            </div>

            {/* How We Work */}
            <div className="mt-24 flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold text-slate-900">How We Work</h2>
              <p className="mt-4 max-w-xl text-slate-600">
                Our streamlined process ensures your project is delivered on time
                and exceeds expectations.
              </p>
            </div>

            <div className="mt-12 flex flex-col gap-6 md:flex-row">
              {processSteps.map((step, index) => (
                <ProcessStep
                  key={index}
                  {...step}
                  showArrow={index !== processSteps.length - 1}
                />
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
                Primary CTA
              </button>
              <button className="rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50">
                Secondary Action
              </button>
            </div>

          </div>
        </section>
      </main>
  );
}