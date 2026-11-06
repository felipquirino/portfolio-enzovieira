import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Process from '@/components/sections/Process'
import Projects from '@/components/sections/Projects'
import Testimonials from '@/components/sections/Testimonials'
import Faq from '@/components/sections/Faq'
import Contact from '@/components/sections/Contact'
import { useReveal } from '@/hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <div id="top" className="min-h-screen overflow-x-clip bg-white pt-14">
      <Header />
      <main>
        <Hero />
        <About />
        <Process />
        <Projects />
        <Testimonials />
        <Faq />
      </main>
      <Contact />
    </div>
  )
}
