// web/src/components/Contact.tsx
export const Contact = () => {
  return (
    <section className="w-full bg-slate-50 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          
          {/* Kolom Kiri: Informasi Kontak */}
          <div className="flex flex-col justify-center">
            <span className="text-sm font-bold uppercase tracking-wider text-indigo-600">
              Get In Touch
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Let's build something amazing together.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Whether you have a specific project in mind or just want to explore
              possibilities, our team is ready to help you take the next step.
            </p>
            
            <div className="mt-10 flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100">
                  <img className="h-6 w-6" src="/icon19.svg" alt="Email" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Email Us</h3>
                  <p className="mt-1 text-slate-600">hello@nexus.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100">
                  <img className="h-6 w-6" src="/icon20.svg" alt="Location" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Headquarters</h3>
                  <p className="mt-1 text-slate-600">100 Innovation Drive<br />San Francisco, CA 94105</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100">
                  <img className="h-6 w-6" src="/icon21.svg" alt="Phone" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Call Us</h3>
                  <p className="mt-1 text-slate-600">+1 (800) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Formulir */}
          <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200 sm:p-10">
            <h3 className="text-2xl font-bold text-slate-900">Send us a message</h3>
            <form 
              className="mt-8 flex flex-col gap-6" 
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700">First Name</label>
                  <input type="text" placeholder="Jane" className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-colors focus:border-indigo-600 focus:bg-white focus:ring-1 focus:ring-indigo-600" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700">Last Name</label>
                  <input type="text" placeholder="Doe" className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-colors focus:border-indigo-600 focus:bg-white focus:ring-1 focus:ring-indigo-600" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">Email Address</label>
                <input type="email" placeholder="jane@example.com" className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-colors focus:border-indigo-600 focus:bg-white focus:ring-1 focus:ring-indigo-600" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">Message</label>
                <textarea placeholder="Tell us about your project..." rows={4} className="resize-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-colors focus:border-indigo-600 focus:bg-white focus:ring-1 focus:ring-indigo-600"></textarea>
              </div>
              <button type="submit" className="mt-2 w-full rounded-xl bg-slate-950 py-4 font-bold text-white shadow-md transition-transform hover:scale-[1.02]">
                Send Message
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};