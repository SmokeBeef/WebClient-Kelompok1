// web/src/components/Navbar.tsx
import { Link } from '@tanstack/react-router'

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo dan Teks */}
        <Link to="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 shadow-md">
            <img className="h-5 w-5" src="/icon0.svg" alt="Nexus Icon" />
          </div>
          <span className="text-xl font-black tracking-tight text-slate-900">Nexus</span>
        </Link>

        {/* Tab Navigasi Desktop (Disembunyikan di Mobile) */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link 
            to="/" 
            className="text-sm font-semibold text-slate-600 transition-colors hover:text-indigo-600 [&.active]:text-indigo-600"
            activeProps={{ className: "active" }}
          >
            Home
          </Link>
          <Link 
            to="/portfolio" 
            className="text-sm font-semibold text-slate-600 transition-colors hover:text-indigo-600 [&.active]:text-indigo-600"
            activeProps={{ className: "active" }}
          >
            Portfolio
          </Link>
        </nav>

        {/* Tombol Menu Mobile */}
        <button className="rounded-lg p-2 transition-colors hover:bg-slate-100 md:hidden">
          <img className="h-6 w-6" src="/icon1.svg" alt="Menu Toggle" />
        </button>
        
      </div>
    </header>
  );
};