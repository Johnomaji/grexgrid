import GridCanvas from './components/landing/GridCanvas'
import Nav from './components/landing/Nav'
import Hero from './components/landing/Hero'
import Ticker from './components/landing/Ticker'
import Problem from './components/landing/Problem'
import Products from './components/landing/Products'
import HowItWorks from './components/landing/HowItWorks'
import Impact from './components/landing/Impact'
import Team from './components/landing/Team'
import Pricing from './components/landing/Pricing'
import Manifesto from './components/landing/Manifesto'
import Footer from './components/landing/Footer'

export default function Home() {
  return (
    <>
      <GridCanvas />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Problem />
        <Products />
        <HowItWorks />
        <Impact />
        <Team />
        <Pricing />
        <Manifesto />
      </main>
      <Footer />
    </>
  )
}
