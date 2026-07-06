import { useState } from 'react'
import { X, Menu } from "lucide-react"
import { Link } from '@tanstack/react-router'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
] as const

const linkClass =
  'font-semibold text-[14px] leading-[20px] transition-colors hover:text-[#4f39f6]'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 shadow-md">
            <img className="h-5 w-5" src="/icon0.svg" alt="Nexus Icon" />
          </div>
          <span className="text-xl font-black tracking-tight text-slate-900">
            Nexus
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={linkClass}
              activeProps={{ className: 'text-[#4f39f6]' }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button className="hidden md:flex bg-[#030213] text-white font-semibold text-[14px] leading-[20px] px-6 py-2 rounded-full drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] hover:bg-[#1a1a2e] transition-colors">
          Get Started
        </button>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMenuOpen((v) => !v)}
          className="md:hidden p-2 -mr-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} className="text-[#45556c]" /> : <Menu size={24} className="text-[#45556c]" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#e5e7eb] px-4 py-6">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-left font-medium text-[16px] leading-[24px] text-[#45556c] pb-4 pl-0.5 hover:text-[#0f172b] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <button className="w-full bg-[#0f172b] text-white font-medium text-[14px] leading-[20px] py-3 rounded-[8px] mt-2 hover:bg-[#1a1a2e] transition-colors">
            Get Started
          </button>
        </div>
      )}
    </header>
  )
}
