'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { heroSlides, images } from '@/components/landing/data'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  const handleCtaClick = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={images.heroTech}
          alt="Concreto Tecnológico"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay with blue tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1A]/80 via-[#0A0F1A]/70 to-[#0A0F1A]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/20 via-transparent to-[#2563EB]/10" />
      </div>

      {/* Animated Grid Lines Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Horizontal grid lines */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#2563EB]/15 to-transparent"
            style={{ top: `${i * 5}%` }}
          />
        ))}
        {/* Vertical grid lines */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute h-full w-px bg-gradient-to-b from-transparent via-[#2563EB]/10 to-transparent"
            style={{ left: `${i * 5}%` }}
          />
        ))}
        {/* Animated scanning line */}
        <motion.div
          animate={{ top: ['0%', '100%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent"
        />
        {/* Floating particles */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            animate={{
              x: [0, 30, -20, 10, 0],
              y: [0, -40, 20, -10, 0],
              opacity: [0.2, 0.6, 0.3, 0.8, 0.2],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.8,
            }}
            className="absolute w-1 h-1 rounded-full bg-[#2563EB]"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + i * 10}%`,
              boxShadow: '0 0 10px rgba(37,99,235,0.8)',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 w-full">
        <div className="max-w-4xl">
          {/* Tech badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2563EB]/40 bg-[#2563EB]/10 backdrop-blur-sm mb-8"
          >
            <Zap className="w-3.5 h-3.5 text-[#2563EB]" />
            <span className="text-xs font-semibold text-[#60A5FA] tracking-wider uppercase">
              Tecnología e Innovación
            </span>
          </motion.div>

          {/* Slide Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6">
                <span className="bg-gradient-to-r from-white via-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent">
                  {heroSlides[currentSlide].title}
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl font-light">
                {heroSlides[currentSlide].subtitle}
              </p>
              <Button
                onClick={() => handleCtaClick(heroSlides[currentSlide].ctaHref)}
                className="group bg-[#10B981] hover:bg-[#10B981]/90 text-white font-bold px-8 py-4 text-lg rounded-lg shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_50px_rgba(16,185,129,0.6)] transition-all duration-300 border border-[#10B981]/50"
              >
                {heroSlides[currentSlide].cta}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicators */}
          <div className="flex items-center gap-4 mt-12">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="relative group"
              >
                <div
                  className={`h-1 rounded-full transition-all duration-500 ${
                    currentSlide === index
                      ? 'w-12 bg-[#2563EB] shadow-[0_0_10px_rgba(37,99,235,0.6)]'
                      : 'w-6 bg-white/20 group-hover:bg-white/40'
                  }`}
                />
                {currentSlide === index && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -top-1 left-0 right-0 h-3 rounded-full bg-[#2563EB]/20 blur-sm"
                  />
                )}
              </button>
            ))}
            <span className="text-sm text-gray-500 font-mono ml-2">
              {String(currentSlide + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0F1A] to-transparent z-10" />

      {/* Decorative corner elements */}
      <div className="absolute top-24 right-8 sm:right-16 lg:right-24 z-10 hidden md:block">
        <div className="relative w-32 h-32">
          <div className="absolute top-0 right-0 w-16 h-px bg-[#2563EB]/50" />
          <div className="absolute top-0 right-0 w-px h-16 bg-[#2563EB]/50" />
          <div className="absolute bottom-0 left-0 w-16 h-px bg-[#2563EB]/30" />
          <div className="absolute bottom-0 left-0 w-px h-16 bg-[#2563EB]/30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="w-12 h-12 border border-[#2563EB]/30 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-1 border border-[#10B981]/30 rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
