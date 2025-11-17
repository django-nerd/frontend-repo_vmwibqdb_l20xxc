import { useRef } from 'react'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import UseCases from './components/UseCases'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'

function App() {
  const demoRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToDemo = () => demoRef.current?.scrollIntoView({ behavior: 'smooth' })
  const scrollToContact = () => contactRef.current?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="font-semibold">Katie</div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <button onClick={scrollToDemo} className="hover:text-gray-700">How it Works</button>
            <button onClick={scrollToContact} className="rounded-lg bg-gray-900 text-white px-4 py-2 hover:bg-gray-800">Contact</button>
          </div>
        </div>
      </nav>
      <Hero onDemoClick={scrollToDemo} onContactClick={scrollToContact} />
      <div ref={demoRef}>
        <Benefits />
        <UseCases />
        <Testimonials />
        <FAQ />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <footer className="py-10 border-t border-gray-100 text-center text-sm text-gray-500">© {new Date().getFullYear()} Katie, Inc.</footer>
    </div>
  )
}

export default App
