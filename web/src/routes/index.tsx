// web/src/routes/index.tsx
import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Services } from '../components/Services'
import { Portfolio } from '../components/Portfolio'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}