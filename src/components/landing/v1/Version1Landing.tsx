'use client';

import Header from './Header';
import Hero from './Hero';
import Stats from './Stats';
import ConcreteSection from './ConcreteSection';
import ProcessSection from './ProcessSection';
import RoofingSection from './RoofingSection';
import PlantsSection from './PlantsSection';
import QualitySection from './QualitySection';
import ProjectsSection from './ProjectsSection';
import GallerySection from './GallerySection';
import QuoteForm from './QuoteForm';
import Footer from './Footer';

export default function Version1Landing() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <ConcreteSection />
        <ProcessSection />
        <RoofingSection />
        <PlantsSection />
        <QualitySection />
        <ProjectsSection />
        <GallerySection />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
}
