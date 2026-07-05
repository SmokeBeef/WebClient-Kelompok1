// web/src/components/Footer.tsx
export const Footer = () => {
  return (
    <footer className="w-full bg-slate-950 pb-8 pt-16 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          
          {/* Kolom 1 & 2: Identitas Perusahaan */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 shadow-md">
                <img className="h-5 w-5" src="/icon22.svg" alt="Nexus Logo" />
              </div>
              <span className="text-xl font-black text-white">Nexus</span>
            </div>
            <p className="mt-6 max-w-sm text-base leading-relaxed">
              We design and build digital experiences that empower businesses to scale, innovate, and thrive.
            </p>
          </div>

          {/* Kolom 3: Tautan Company */}
          <div>
            <h4 className="text-base font-bold text-white">Company</h4>
            <ul className="mt-6 flex flex-col gap-4 text-sm font-medium">
              <li><a href="#" className="transition-colors hover:text-white">About Us</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Careers</a></li>
              <li><a href="#" className="transition-colors hover:text-white">News</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Kolom 4: Tautan Services */}
          <div>
            <h4 className="text-base font-bold text-white">Services</h4>
            <ul className="mt-6 flex flex-col gap-4 text-sm font-medium">
              <li><a href="#" className="transition-colors hover:text-white">Web Development</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Mobile Apps</a></li>
              <li><a href="#" className="transition-colors hover:text-white">UI/UX Design</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Consulting</a></li>
            </ul>
          </div>

          {/* Kolom 5: Tautan Legal */}
          <div>
            <h4 className="text-base font-bold text-white">Legal</h4>
            <ul className="mt-6 flex flex-col gap-4 text-sm font-medium">
              <li><a href="#" className="transition-colors hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Cookie Policy</a></li>
            </ul>
          </div>

        </div>

        {/* Bagian Bawah: Hak Cipta dan Media Sosial */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-sm">
            © 2026 Nexus Digital. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="transition-opacity hover:opacity-80">
              <img className="h-5 w-5" src="/icon23.svg" alt="Social 1" />
            </a>
            <a href="#" className="transition-opacity hover:opacity-80">
              <img className="h-5 w-5" src="/icon24.svg" alt="Social 2" />
            </a>
            <a href="#" className="transition-opacity hover:opacity-80">
              <img className="h-5 w-5" src="/icon25.svg" alt="Social 3" />
            </a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};