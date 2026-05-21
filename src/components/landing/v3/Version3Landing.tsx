'use client'

import Header from './Header'
import Hero from './Hero'
import Stats from './Stats'
import ConcreteSection from './ConcreteSection'
import ProcessSection from './ProcessSection'
import PlantsSection from './PlantsSection'
import QualitySection from './QualitySection'
import ProjectsSection from './ProjectsSection'
import QuoteForm from './QuoteForm'
import Footer from './Footer'

export default function Version3Landing() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#0A0F1A' }}>
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <ConcreteSection />
        <ProcessSection />
        <PlantsSection />
        <QualitySection />
        <ProjectsSection />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  )
}
