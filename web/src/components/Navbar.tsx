import { Link } from '@tanstack/react-router'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
] as const

const linkClass =
  'text-sm font-semibold text-slate-600 transition-colors hover:text-indigo-600 [&.active]:text-indigo-600'

export const Navbar = () => {
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
              activeProps={{ className: 'active' }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 transition-colors hover:bg-slate-100 md:hidden"
          aria-label="Menu"
        >
          <img className="h-6 w-6" src="/icon1.svg" alt="Menu Toggle" />
        </button>
      </div>
    </header>
  )
}
