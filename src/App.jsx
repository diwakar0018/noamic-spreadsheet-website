import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import FeaturesGrid from './components/FeaturesGrid'
import OmniAiShowcase from './components/OmniAiShowcase'
import WorkflowSection from './components/WorkflowSection'
import GraphSection from './components/GraphSection'
import PrivacySection from './components/PrivacySection'
import CompatibilitySection from './components/CompatibilitySection'
import Testimonials from './components/Testimonials'
import DownloadSection from './components/DownloadSection'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans antialiased overflow-x-hidden">
      {/* Background Decorative Blur Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute top-[120vh] left-0 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Main Sections */}
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <TrustedBy />
        <FeaturesGrid />
        <OmniAiShowcase />
        <WorkflowSection />
        <GraphSection />
        <PrivacySection />
        <CompatibilitySection />
        <Testimonials />
        <DownloadSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
