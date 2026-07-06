import { createFileRoute } from '@tanstack/react-router'

const svgPaths = {
p13e20900: "M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88",
p161d4800: "M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z",
p17134c00: "M6 8L7.33333 9.33333L10 6.66667",
p190dabf0: "M14 21C17.866 21 21 17.866 21 14C21 10.134 17.866 7 14 7C10.134 7 7 10.134 7 14C7 17.866 10.134 21 14 21Z",
p1b8b3180: "M4 14C3.81077 14.0006 3.62523 13.9476 3.46495 13.847C3.30468 13.7464 3.17623 13.6024 3.09455 13.4317C3.01287 13.261 2.98129 13.0706 3.0035 12.8827C3.02571 12.6947 3.10078 12.517 3.22 12.37L13.12 2.17C13.1943 2.08428 13.2955 2.02636 13.407 2.00573C13.5185 1.98511 13.6337 2.00301 13.7337 2.0565C13.8337 2.11 13.9126 2.1959 13.9573 2.30011C14.0021 2.40432 14.0101 2.52065 13.98 2.63L12.06 8.65C12.0034 8.80152 11.9844 8.96452 12.0046 9.12501C12.0248 9.28549 12.0837 9.43868 12.1761 9.57143C12.2685 9.70417 12.3918 9.81251 12.5353 9.88716C12.6788 9.96181 12.8382 10.0005 13 10H20C20.1892 9.99935 20.3748 10.0524 20.535 10.153C20.6953 10.2536 20.8238 10.3976 20.9055 10.5683C20.9871 10.739 21.0187 10.9294 20.9965 11.1173C20.9743 11.3053 20.8992 11.483 20.78 11.63L10.88 21.83C10.8057 21.9157 10.7045 21.9736 10.593 21.9943C10.4815 22.0149 10.3663 21.997 10.2663 21.9435C10.1663 21.89 10.0874 21.8041 10.0427 21.6999C9.99791 21.5957 9.98992 21.4794 10.02 21.37L11.94 15.35C11.9966 15.1985 12.0156 15.0355 11.9954 14.875C11.9752 14.7145 11.9163 14.5613 11.8239 14.4286C11.7315 14.2958 11.6082 14.1875 11.4647 14.1128C11.3212 14.0382 11.1618 13.9995 11 14H4Z",
p1d820380: "M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21",
p1dff4600: "M19 14C20.49 12.54 22 10.79 22 8.5C22 7.04131 21.4205 5.64236 20.3891 4.61091C19.3576 3.57946 17.9587 3 16.5 3C14.74 3 13.5 3.5 12 5C10.5 3.5 9.26 3 7.5 3C6.04131 3 4.64236 3.57946 3.61091 4.61091C2.57946 5.64236 2 7.04131 2 8.5C2 10.8 3.5 12.55 5 14L12 21L19 14Z",
p1ea91d80: "M15 14C15.2 13 15.7 12.3 16.5 11.5C17.5 10.6 18 9.3 18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 9 6.2 10.2 7.5 11.5C8.2 12.2 8.8 13 9 14",
p1fa66600: "M14 25.6667C20.4433 25.6667 25.6667 20.4433 25.6667 14C25.6667 7.55668 20.4433 2.33333 14 2.33333C7.55668 2.33333 2.33333 7.55668 2.33333 14C2.33333 20.4433 7.55668 25.6667 14 25.6667Z",
p25c6f00: "M14 17.5C15.933 17.5 17.5 15.933 17.5 14C17.5 12.067 15.933 10.5 14 10.5C12.067 10.5 10.5 12.067 10.5 14C10.5 15.933 12.067 17.5 14 17.5Z",
p2981fe00: "M22 21V19C21.9993 18.1137 21.7044 17.2528 21.1614 16.5523C20.6184 15.8519 19.8581 15.3516 19 15.13",
p2a9abe70: "M14 16.3333C15.2887 16.3333 16.3333 15.2887 16.3333 14C16.3333 12.7113 15.2887 11.6667 14 11.6667C12.7113 11.6667 11.6667 12.7113 11.6667 14C11.6667 15.2887 12.7113 16.3333 14 16.3333Z",
p39ee6532: "M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33333 8 1.33333C4.3181 1.33333 1.33333 4.3181 1.33333 8C1.33333 11.6819 4.3181 14.6667 8 14.6667Z",
p3f3d8e00: "M20 13C20 18 16.5 20.5 12.34 21.95C12.1222 22.0238 11.8855 22.0203 11.67 21.94C7.5 20.5 4 18 4 13V6C4 5.73478 4.10536 5.48043 4.29289 5.29289C4.48043 5.10536 4.73478 5 5 5C7 5 9.5 3.8 11.24 2.28C11.4519 2.099 11.7214 1.99955 12 1.99955C12.2786 1.99955 12.5481 2.099 12.76 2.28C14.51 3.81 17 5 19 5C19.2652 5 19.5196 5.10536 19.7071 5.29289C19.8946 5.48043 20 5.73478 20 6V13Z",
p5dd9e80: "M2.40567 13.594C2.30844 13.8559 2.30844 14.1441 2.40567 14.406C3.35265 16.7022 4.9601 18.6655 7.02423 20.047C9.08836 21.4285 11.5162 22.1659 14 22.1659C16.4838 22.1659 18.9116 21.4285 20.9758 20.047C23.0399 18.6655 24.6473 16.7022 25.5943 14.406C25.6916 14.1441 25.6916 13.8559 25.5943 13.594C24.6473 11.2978 23.0399 9.33455 20.9758 7.95305C18.9116 6.57155 16.4838 5.83405 14 5.83405C11.5162 5.83405 9.08836 6.57155 7.02423 7.95305C4.9601 9.33455 3.35265 11.2978 2.40567 13.594Z",
pace200: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
}

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function CheckIcon() {
  return (
    <div className="relative shrink-0 size-4">
      <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 16 16">
        <g clipPath="url(#check-clip)">
          <path d={svgPaths.p39ee6532} stroke="#4F39F6" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p17134c00} stroke="#4F39F6" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="check-clip">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BriefcaseIcon() {
  return (
    <svg className="size-6" fill="none" viewBox="0 0 24 24">
      <g clipPath="url(#briefcase-clip)">
        <path d={svgPaths.p1fa66600} stroke="#4F39F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d={svgPaths.p190dabf0} stroke="#4F39F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d={svgPaths.p2a9abe70} stroke="#4F39F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
      <defs>
        <clipPath id="briefcase-clip"><rect fill="white" height="24" width="24" /></clipPath>
      </defs>
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className="size-6" fill="none" viewBox="0 0 24 24">
      <g clipPath="url(#globe-clip)">
        <path d={svgPaths.p5dd9e80} stroke="#4F39F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d={svgPaths.p25c6f00} stroke="#4F39F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
      <defs>
        <clipPath id="globe-clip"><rect fill="white" height="24" width="24" /></clipPath>
      </defs>
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="size-6" fill="none" viewBox="0 0 24 24">
      <path d={svgPaths.pace200} stroke="#4F39F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg className="size-6" fill="none" viewBox="0 0 24 24">
      <path d={svgPaths.p1dff4600} stroke="#4F39F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg className="size-6" fill="none" viewBox="0 0 24 24">
      <path d={svgPaths.p1d820380} stroke="#4F39F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p161d4800} stroke="#4F39F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p2981fe00} stroke="#4F39F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p13e20900} stroke="#4F39F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function BulbIcon() {
  return (
    <svg className="size-6" fill="none" viewBox="0 0 24 24">
      <path d={svgPaths.p1ea91d80} stroke="#4F39F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M9 18H15" stroke="#4F39F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M10 22H14" stroke="#4F39F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function IntegrityIcon() {
  return (
    <svg className="size-6" fill="none" viewBox="0 0 24 24">
      <path d={svgPaths.p3f3d8e00} stroke="#4F39F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="size-6" fill="none" viewBox="0 0 24 24">
      <path d={svgPaths.p1b8b3180} stroke="#4F39F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-[#eef2ff] rounded-2xl size-14 shrink-0 flex items-center justify-center shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]">
      {children}
    </div>
  );
}

function SmallIconBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-[#eef2ff] rounded-2xl size-12 shrink-0 flex items-center justify-center shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]">
      {children}
    </div>
  );
}

// ─── Hero Section ────────────────────────────────────────────────────────────

function HeroSection() {
  const bullets = [
    "Award-winning digital agency",
    "Data-driven strategic planning",
    "8+ years of industry experience",
    "25+ talented team members",
  ];

  return (
    <section className="bg-[#f8fafc] w-full">
      <div className="max-w-[1280px] mx-auto px-8 py-32 flex flex-col lg:flex-row items-center gap-16">
        {/* Image */}
        <div className="bg-[#e2e8f0] rounded-3xl shadow-[0px_0px_0px_1px_rgba(15,23,43,0.05),0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0 overflow-clip relative w-full max-w-[512px] lg:w-[512px] h-[384px]">
          <img
            alt="Team working together"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            src="https://placehold.co/600x400"
          />
          <div className="absolute inset-0 bg-[rgba(79,57,246,0.1)] rounded-3xl" />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          {/* Label */}
          <div className="flex items-center gap-3 mb-6">
            <span className="font-['Inter',sans-serif] font-bold text-[14px] text-[#4f39f6] tracking-[1.4px] uppercase">About Us</span>
            <div className="bg-[#4f39f6] h-[2px] w-12 rounded-full" />
          </div>

          <h1 className="font-['Inter',sans-serif] font-black text-[48px] leading-[1.1] tracking-[-1.2px] text-[#0f172b] mb-6">
            Building digital experiences that matter.
          </h1>

          <p className="font-['Inter',sans-serif] font-normal text-[18px] leading-[1.625] text-[#45556c] mb-8">
            {"We're a team of designers, developers, and strategists dedicated to creating exceptional digital products that make a real impact. Our multidisciplinary approach transforms complex challenges into elegant, intuitive solutions."}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-10">
            {bullets.map((b) => (
              <div key={b} className="flex items-center gap-3">
                <CheckIcon />
                <span className="font-['Inter',sans-serif] font-semibold text-[14px] text-[#314158]">{b}</span>
              </div>
            ))}
          </div>

          <button className="bg-[#030213] text-white font-['Inter',sans-serif] font-semibold text-[16px] leading-6 px-8 h-12 rounded-full drop-shadow-[0px_4px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] hover:bg-[#1a1a2e] transition-colors">
            Learn More About Us
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Stats Section ────────────────────────────────────────────────────────────

function StatsSection() {
  const stats = [
    { value: "150+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
    { value: "8", label: "Years Experience" },
    { value: "25+", label: "Team Members" },
  ];

  return (
    <section className="bg-[#020618] w-full">
      <div className="max-w-[1280px] mx-auto px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2">
              <span className="font-['Inter',sans-serif] font-extrabold text-[56px] leading-none text-white">{s.value}</span>
              <span className="font-['Inter',sans-serif] font-medium text-[16px] text-[#90a1b9] text-center">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Mission / Vision Section ─────────────────────────────────────────────────

function MissionVisionCard({
  icon,
  title,
  paragraphs,
}: {
  icon: React.ReactNode;
  title: string;
  paragraphs: string[];
}) {
  return (
    <div className="bg-white rounded-3xl p-10 drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] border border-[#e2e8f0] flex-1 min-w-0">
      <IconBadge>{icon}</IconBadge>
      <h3 className="font-['Inter',sans-serif] font-bold text-[32px] leading-[1.25] text-[#0f172b] mt-6 mb-0">{title}</h3>
      {paragraphs.map((p, i) => (
        <p key={i} className="font-['Inter',sans-serif] font-normal text-[16px] leading-[26px] text-[#45556c] mt-4">{p}</p>
      ))}
    </div>
  );
}

function MissionVisionSection() {
  return (
    <section className="bg-[#f8fafc] w-full">
      <div className="max-w-[1280px] mx-auto px-8 py-32">
        <div className="flex flex-col lg:flex-row gap-6">
          <MissionVisionCard
            icon={<BriefcaseIcon />}
            title="Our Mission"
            paragraphs={[
              "To empower businesses through innovative digital solutions that drive growth and create meaningful connections with their audiences.",
              "We believe in the transformative power of great design and technology, and we're committed to delivering exceptional results that exceed expectations.",
            ]}
          />
          <MissionVisionCard
            icon={<GlobeIcon />}
            title="Our Vision"
            paragraphs={[
              "To be the world's most trusted partner for businesses seeking to transform their digital presence and create lasting impact.",
              "We envision a future where every interaction between brands and their customers is seamless, delightful, and memorable.",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

// ─── Values Section ───────────────────────────────────────────────────────────

function ValueCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white rounded-3xl p-8 drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] border border-[#e2e8f0]">
      <SmallIconBadge>{icon}</SmallIconBadge>
      <h4 className="font-['Inter',sans-serif] font-bold text-[18px] leading-[28px] text-[#0f172b] mt-4 mb-3">{title}</h4>
      <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[22.75px] text-[#45556c]">{description}</p>
    </div>
  );
}

function ValuesSection() {
  const values = [
    { icon: <StarIcon />, title: "Excellence", description: "We strive for excellence in every project, ensuring the highest quality standards in our deliverables." },
    { icon: <HeartIcon />, title: "Passion", description: "We love what we do and bring genuine enthusiasm to every challenge we tackle." },
    { icon: <UsersIcon />, title: "Collaboration", description: "We believe in the power of teamwork and foster a collaborative environment." },
    { icon: <BulbIcon />, title: "Innovation", description: "We embrace new technologies and creative solutions to stay ahead of the curve." },
    { icon: <IntegrityIcon />, title: "Integrity", description: "We operate with transparency and honesty in all our business relationships." },
    { icon: <ShieldIcon />, title: "Creativity", description: "We push boundaries and think outside the box to deliver unique solutions." },
  ];

  return (
    <section className="bg-white w-full">
      <div className="max-w-[1280px] mx-auto px-8 py-32">
        <div className="text-center mb-12">
          <h2 className="font-['Inter',sans-serif] font-bold text-[44px] leading-none text-[#0f172b] mb-4">Our Values</h2>
          <p className="font-['Inter',sans-serif] font-normal text-[18px] text-[#62748e]">The principles that guide everything we do</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v) => (
            <ValueCard key={v.title} icon={v.icon} title={v.title} description={v.description} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Team Section ─────────────────────────────────────────────────────────────

function TeamMember({ photo, name, role }: { photo: string; name: string; role: string }) {
  return (
    <div className="flex flex-col items-center gap-0">
      <div className="bg-[#f1f5f9] rounded-2xl shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] overflow-clip w-full aspect-[3/4]">
        <img alt={name} className="w-full h-full object-cover pointer-events-none" src={photo} />
      </div>
      <p className="font-['Inter',sans-serif] font-bold text-[18px] leading-[28px] text-[#0f172b] text-center mt-4">{name}</p>
      <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] text-[#62748e] text-center mt-1">{role}</p>
    </div>
  );
}

function TeamSection() {
  const team = [
    { photo: "https://placehold.co/600x400", name: "Sarah Johnson", role: "CEO & Founder" },
    { photo: "https://placehold.co/600x400", name: "Michael Chen", role: "CTO" },
    { photo: "https://placehold.co/600x400", name: "Emily Davis", role: "Head of Design" },
    { photo: "https://placehold.co/600x400", name: "James Wilson", role: "Lead Developer" },
  ];

  return (
    <section className="bg-[#f8fafc] w-full">
      <div className="max-w-[1280px] mx-auto px-8 py-32">
        <div className="text-center mb-12">
          <h2 className="font-['Inter',sans-serif] font-bold text-[44px] leading-none text-[#0f172b] mb-4">Meet the Team</h2>
          <p className="font-['Inter',sans-serif] font-normal text-[18px] text-[#62748e]">The talented people behind our success</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((m) => (
            <TeamMember key={m.name} photo={m.photo} name={m.name} role={m.role} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Section ──────────────────────────────────────────────────────────────

function CtaSection() {
  return (
    <section className="bg-[#020618] w-full">
      <div className="max-w-[1280px] mx-auto px-8 py-32 flex flex-col items-center text-center gap-6">
        <h2 className="font-['Inter',sans-serif] font-black text-[48px] leading-[1.25] tracking-[-1.2px] text-white max-w-[672px]">
          Ready to build something amazing?
        </h2>
        <p className="font-['Inter',sans-serif] font-normal text-[18px] leading-[1.625] text-[#90a1b9] max-w-[448px]">
          {"Let's work together to create digital experiences that make a real impact."}
        </p>
        <button className="mt-4 bg-[#4f39f6] text-white font-['Inter',sans-serif] font-semibold text-[16px] leading-6 px-8 h-12 rounded-full drop-shadow-[0px_4px_3px_rgba(79,57,246,0.2),0px_2px_2px_rgba(79,57,246,0.2)] hover:bg-[#3d2bd4] transition-colors">
          Get In Touch
        </button>
      </div>
    </section>
  );
}

function RouteComponent() {
  return (
    <>
        <HeroSection />
        <StatsSection />
        <MissionVisionSection />
        <ValuesSection />
        <TeamSection />
        <CtaSection />
    </>
  )
}
