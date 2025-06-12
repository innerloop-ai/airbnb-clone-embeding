import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import PropertyGrid from './components/PropertyGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <PropertyGrid />
      <Footer />
    </div>
  )
}

export default App
