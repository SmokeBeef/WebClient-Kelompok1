import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog')({
  component: RouteComponent,
})

function RouteComponent() {
  return <App />
}

import svgPaths from "@/imports/BlogHifiDekstop/svg-nbcra9weez";
import img0 from "@/imports/BlogHifiMobile/a28887077ce6931ab6959ea2c0046dabd073b8fa.png";
import img1 from "@/imports/BlogHifiMobile/6744fe6bec24d6e56ddcca5f3803ca48f6f513af.png";
import img2 from "@/imports/BlogHifiMobile/cd496cd465aa7b28be6f70e1f331a650af235711.png";
import img3 from "@/imports/BlogHifiMobile/1143abfb2372efa84aae36821c5064ea12be87f2.png";
import img4 from "@/imports/BlogHifiMobile/3534f3dfee8d05c219d33295b961a616bc327386.png";
import img5 from "@/imports/BlogHifiMobile/0183256697be67b8900e4b365b755b889b9b3e63.png";
import img6 from "@/imports/BlogHifiMobile/b0b01f350e772da53e2a62c3009eaf59e397059b.png";
import img7 from "@/imports/BlogHifiMobile/2c73c3229f983cd14c4a8bedab9be9fea0ed2c59.png";
import { useState } from "react";

// ─── Logo Icon ────────────────────────────────────────────────────────────────
function LogoIcon() {
  return (
    <div className="bg-[#e5e7eb] rounded-[4px] shrink-0 size-8 flex items-center justify-center">
      <svg className="size-5" fill="none" viewBox="0 0 19.991 19.991">
        <path
          d={svgPaths.p3fe57500}
          stroke="#6A7282"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.49933"
        />
        <path
          d="M9.9955 17.9919V9.9955"
          stroke="#6A7282"
          strokeLinecap="round"
          strokeWidth="1.49933"
        />
      </svg>
    </div>
  );
}

// ─── Hamburger Icon ───────────────────────────────────────────────────────────
function HamburgerIcon() {
  return (
    <svg className="size-5" fill="none" viewBox="0 0 19.991 19.991">
      <path d="M3.33183 9.9955H16.6592" stroke="#101828" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66592" />
      <path d="M3.33183 4.99775H16.6592" stroke="#101828" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66592" />
      <path d="M3.33183 14.9932H16.6592" stroke="#101828" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66592" />
    </svg>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
const navLinks = ["Home", "Services", "Portfolio", "Contact", "Blog"];

function Navbar() {
  const [activeNav, setActiveNav] = useState("Blog");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-[#e5e7eb] w-full sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo — always visible */}
        <div className="flex items-center gap-2">
          <LogoIcon />
          <span className="font-bold text-[#101828] text-[20px] leading-[30px] tracking-[-0.5px] font-['Inter',sans-serif]">
            LogoIPSUM
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => setActiveNav(link)}
              className={`px-3 py-2 rounded-full text-[14px] font-medium font-['Inter',sans-serif] transition-colors ${
                activeNav === link
                  ? "bg-[rgba(27,2,2,0.1)] text-[#4a5565]"
                  : "text-[#4a5565] hover:bg-gray-100"
              }`}
            >
              {link}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button className="hidden lg:block bg-[#101828] text-white text-[14px] font-medium font-['Inter',sans-serif] px-5 py-2 rounded-[4px] hover:bg-[#1f2937] transition-colors">
          Get Started
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="lg:hidden p-2 rounded-[4px] hover:bg-gray-100 transition-colors"
          aria-label="Menu"
        >
          <HamburgerIcon />
        </button>
      </div>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-[#e5e7eb] px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => { setActiveNav(link); setMenuOpen(false); }}
              className={`w-full text-left px-3 py-2 rounded-[8px] text-[14px] font-medium font-['Inter',sans-serif] transition-colors ${
                activeNav === link ? "bg-[#111] text-white" : "text-[#4a5565] hover:bg-gray-100"
              }`}
            >
              {link}
            </button>
          ))}
          <button className="mt-2 bg-[#101828] text-white text-[14px] font-medium font-['Inter',sans-serif] px-5 py-2 rounded-[4px] hover:bg-[#1f2937] transition-colors text-center">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}

// ─── Page Header ──────────────────────────────────────────────────────────────
function PageHeader() {
  return (
    <div className="w-full border-b border-[#f0f0f0]">
      <div className="max-w-[1280px] mx-auto px-5 py-10 lg:py-14 flex flex-col items-center text-center">
        <p className="font-semibold text-[11px] tracking-[1.1px] uppercase text-[#999] font-['Inter',sans-serif]">
          Blog
        </p>
        <h1 className="mt-3 font-bold text-[24px] lg:text-[42px] leading-[1.2] text-[#111] font-['Inter',sans-serif] max-w-[296px] lg:max-w-none">
          {`Insights, guides & design thinking.`}
        </h1>
        <p className="mt-4 text-[13px] lg:text-[16px] font-normal text-[#777] leading-[1.7] max-w-[312px] lg:max-w-[504px] font-['Inter',sans-serif]">
          Thoughts on design, development, and building digital products that last.
          Written by our team of practitioners.
        </p>
      </div>
    </div>
  );
}

// ─── Category data ────────────────────────────────────────────────────────────
const categories = [
  { label: "All", count: 8 },
  { label: "Design", count: 2 },
  { label: "Development", count: 2 },
  { label: "Strategy", count: 2 },
  { label: "Case Study", count: 1 },
  { label: "Tutorial", count: 1 },
];

// ─── Mobile category pills (horizontal scroll) ────────────────────────────────
function MobileCategoryBar({ active, setActive }: { active: string; setActive: (c: string) => void }) {
  return (
    <div className="lg:hidden bg-[rgba(255,255,255,0.95)] border-b border-[#f0f0f0] sticky top-16 z-40 w-full overflow-x-auto">
      <div className="flex gap-2 px-4 py-3 w-max">
        {categories.map((cat) => (
          <button
            key={cat.label}
            onClick={() => setActive(cat.label)}
            className={`h-[34px] px-4 rounded-full text-[13px] font-medium font-['Inter',sans-serif] whitespace-nowrap transition-colors border ${
              active === cat.label
                ? "bg-[#111] text-white border-[#111]"
                : "text-[#555] border-[#e5e7eb] hover:bg-gray-50"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Sidebar (desktop only) ───────────────────────────────────────────────────
const popularPosts = [
  { num: "1", title: "Why Wireframing Before Visual Design Saves Time and Budget", read: "5 min read" },
  { num: "2", title: "Building Responsive Layouts with CSS Grid: A Practical Guide", read: "8 min read" },
  { num: "3", title: "How to Define Your Brand Identity Before Building a Website", read: "6 min read" },
  { num: "4", title: "Redesigning a B2B SaaS Dashboard: From Chaos to Clarity", read: "10 min read" },
];

function Sidebar({ active, setActive }: { active: string; setActive: (c: string) => void }) {
  const [email, setEmail] = useState("");

  return (
    <aside className="hidden lg:flex w-[280px] shrink-0 flex-col gap-8">
      {/* Categories */}
      <div>
        <p className="font-semibold text-[11px] tracking-[1.1px] uppercase text-[#bbb] font-['Inter',sans-serif]">
          Categories
        </p>
        <div className="flex flex-col gap-0.5 mt-3">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setActive(cat.label)}
              className={`flex items-center justify-between px-3 py-2 rounded-[8px] text-[14px] font-['Inter',sans-serif] transition-colors ${
                active === cat.label
                  ? "bg-[#111] text-white"
                  : "text-[#555] hover:bg-gray-100"
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[12px] font-semibold ${active === cat.label ? "text-[rgba(255,255,255,0.6)]" : "text-[#bbb]"}`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="h-px bg-[#eee]" />

      {/* Newsletter */}
      <div>
        <p className="font-semibold text-[11px] tracking-[1.1px] uppercase text-[#bbb] font-['Inter',sans-serif]">
          Newsletter
        </p>
        <p className="mt-1 text-[13px] text-[#888] leading-[1.6] font-['Inter',sans-serif]">
          Weekly insights on design and development. No spam.
        </p>
        <div className="mt-4 flex flex-col gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full rounded-[10px] border border-[#e0e0e0] px-[13px] py-[11px] text-[13px] text-[#333] placeholder:text-[#ccc] font-['Inter',sans-serif] outline-none focus:border-[#aaa] transition-colors"
          />
          <button className="w-full bg-[#111] text-white rounded-[10px] py-[10px] text-[14px] font-medium font-['Inter',sans-serif] hover:bg-[#333] transition-colors">
            Subscribe
          </button>
        </div>
      </div>

      <div className="h-px bg-[#eee]" />

      {/* Popular */}
      <div>
        <p className="font-semibold text-[11px] tracking-[1.1px] uppercase text-[#bbb] font-['Inter',sans-serif]">
          Popular
        </p>
        <div className="mt-2">
          {popularPosts.map((post) => (
            <button
              key={post.num}
              className="flex gap-3 items-start px-2 py-4 rounded-[4px] w-full text-left hover:bg-gray-50 transition-colors"
            >
              <span className="font-bold text-[22px] leading-[22px] text-[#eee] shrink-0 pt-0.5 font-['Inter',sans-serif]">
                {post.num}
              </span>
              <div className="flex flex-col gap-1">
                <p className="font-medium text-[12px] leading-[1.375] text-[#333] font-['Inter',sans-serif]">
                  {post.title}
                </p>
                <p className="text-[10px] text-[#bbb] font-['Inter',sans-serif]">{post.read}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}

// ─── Blog data ────────────────────────────────────────────────────────────────
interface Author {
  initials: string;
  name: string;
  color: string;
  textColor: string;
}

interface BlogCardData {
  img: string;
  category: string;
  title: string;
  excerpt: string;
  author: Author;
  readTime: string;
}

const blogPosts: BlogCardData[] = [
  {
    img: img0,
    category: "Case Study",
    title: "Redesigning a B2B SaaS Dashboard: From Chaos to Clarity",
    excerpt: "A behind-the-scenes look at how we transformed a cluttered dashboard into a clean, data-driven interface for a logistics client.",
    author: { initials: "RW", name: "Rina Wulandari", color: "#d1fae5", textColor: "#065f46" },
    readTime: "10 min read",
  },
  {
    img: img1,
    category: "Tutorial",
    title: "Getting Started with React Router in 2026",
    excerpt: "React Router v7 brings a new data-mode API that changes how you think about routing. This step-by-step guide covers everything you need.",
    author: { initials: "AH", name: "Arif Hidayat", color: "#dbeafe", textColor: "#1e40af" },
    readTime: "7 min read",
  },
  {
    img: img2,
    category: "Design",
    title: "Typography Principles Every UI Designer Should Know",
    excerpt: "Good typography is invisible. Bad typography is everywhere. These foundational principles will sharpen your eye for typeface selection and hierarchy.",
    author: { initials: "RW", name: "Rina Wulandari", color: "#d1fae5", textColor: "#065f46" },
    readTime: "4 min read",
  },
  {
    img: img3,
    category: "Strategy",
    title: "Content-First Design: Why Words Come Before Pixels",
    excerpt: "Designing around placeholder text leads to layouts that break when real content arrives. Here's how to flip the process.",
    author: { initials: "SP", name: "Sari Pertiwi", color: "#fce7f3", textColor: "#9d174d" },
    readTime: "5 min read",
  },
  {
    img: img4,
    category: "Development",
    title: "Performance Optimization Techniques for Modern Web Apps",
    excerpt: "Fast websites aren't an accident. These proven techniques reduce load times, improve Core Web Vitals, and delight users.",
    author: { initials: "AH", name: "Arif Hidayat", color: "#dbeafe", textColor: "#1e40af" },
    readTime: "9 min read",
  },
  {
    img: img5,
    category: "Development",
    title: "Building Responsive Layouts with CSS Grid: A Practical Guide",
    excerpt: "CSS Grid has transformed how we approach responsive web layouts. This tutorial walks through practical patterns for real-world projects.",
    author: { initials: "AH", name: "Arif Hidayat", color: "#dbeafe", textColor: "#1e40af" },
    readTime: "8 min read",
  },
  {
    img: img6,
    category: "Design",
    title: "Why Wireframing Before Visual Design Saves Time and Budget",
    excerpt: "Skipping wireframes to jump straight into visuals is a common mistake. Learn why wireframing first leads to better, faster design outcomes.",
    author: { initials: "RW", name: "Rina Wulandari", color: "#d1fae5", textColor: "#065f46" },
    readTime: "5 min read",
  },
  {
    img: img7,
    category: "Strategy",
    title: "How to Define Your Brand Identity Before Building a Website",
    excerpt: "Your website is only as strong as the brand strategy behind it. Learn how to lock down your positioning before writing a single line of code.",
    author: { initials: "SP", name: "Sari Pertiwi", color: "#fce7f3", textColor: "#9d174d" },
    readTime: "6 min read",
  },
];

// ─── Blog Card ────────────────────────────────────────────────────────────────
function BlogCard({ card }: { card: BlogCardData }) {
  return (
    <div className="bg-white rounded-[14px] border border-[#e5e5e5] overflow-hidden flex flex-col hover:shadow-md transition-shadow cursor-pointer">
      {/* Image */}
      <div className="relative h-[187px] lg:h-[246px] bg-[#f4f4f4] shrink-0">
        <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute top-3 left-3 bg-[rgba(255,255,255,0.9)] border border-[#e0e0e0] rounded-full px-3 py-[5px]">
          <span className="text-[12px] text-[#555] font-['Inter',sans-serif]">{card.category}</span>
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <h3 className="font-semibold text-[15px] leading-[1.375] text-[#111] font-['Inter',sans-serif]">
          {card.title}
        </h3>
        <p className="text-[13px] leading-[1.625] text-[#777] font-['Inter',sans-serif] line-clamp-2">
          {card.excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto pt-1">
          <div className="flex items-center gap-2">
            <div
              className="rounded-full size-7 flex items-center justify-center shrink-0"
              style={{ backgroundColor: card.author.color }}
            >
              <span className="text-[10px] font-semibold font-['Inter',sans-serif]" style={{ color: card.author.textColor }}>
                {card.author.initials}
              </span>
            </div>
            <span className="text-[12px] text-[#999] font-['Inter',sans-serif]">{card.author.name}</span>
          </div>
          <span className="text-[11px] text-[#bbb] font-['Inter',sans-serif]">{card.readTime}</span>
        </div>
      </div>
    </div>
  );
}

// ─── CTA Section ──────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <div className="bg-white border-t border-[#f0f0f0] w-full">
      <div className="max-w-[600px] mx-auto px-5 py-16 lg:py-20 flex flex-col items-center text-center">
        <h2 className="font-extrabold text-[28px] lg:text-[36px] leading-[1.25] text-[#101828] font-['Inter',sans-serif]">
          Want to join our team?
        </h2>
        <p className="mt-4 mb-8 text-[16px] lg:text-[18px] text-[#6a7282] leading-[1.6] font-['Inter',sans-serif]">
          {`We're always looking for talented people to join our mission.`}
        </p>
        <button className="bg-[#101828] text-white text-[15px] font-medium font-['Inter',sans-serif] px-8 py-3 rounded-[14px] hover:bg-[#1f2937] transition-colors">
          View Open Positions
        </button>
      </div>
    </div>
  );
}

// ─── Root App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-white min-h-screen w-full font-['Inter',sans-serif]">
      <Navbar />
      <PageHeader />

      {/* Mobile horizontal category pills */}
      <MobileCategoryBar active={activeCategory} setActive={setActiveCategory} />

      {/* Main layout */}
      <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-6 lg:py-12 flex gap-12 items-start">
        {/* Desktop sidebar */}
        <Sidebar active={activeCategory} setActive={setActiveCategory} />

        {/* Blog grid */}
        <main className="flex-1 min-w-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            {filtered.map((post, i) => (
              <BlogCard key={i} card={post} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-[#999] py-16 font-['Inter',sans-serif]">
              No posts in this category yet.
            </p>
          )}
        </main>
      </div>

      <CTASection />
    </div>
  );
}
