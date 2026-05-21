'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { heroSlides, images } from '@/components/landing/data';

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const total = heroSlides.length;

  const next = useCallback(() => setCurrent((prev) => (prev + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((prev) => (prev - 1 + total) % total), [total]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={images.heroIndustrial}
          alt="Concreto Industrial"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay with diagonal gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#0A1628]/75 to-[#0A1628]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-transparent to-transparent" />
      </div>

      {/* Diagonal decorative element */}
      <div className="absolute -bottom-1 left-0 right-0 h-24 bg-[#0A1628] clip-diagonal-top" />

      {/* Content */}
      <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-3xl pt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              {/* Yellow accent line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 bg-[#EAB308] mb-6"
              />

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-4">
                {heroSlides[current].title}
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl">
                {heroSlides[current].subtitle}
              </p>

              <a href={heroSlides[current].ctaHref}>
                <Button className="bg-[#EAB308] hover:bg-[#CA8A04] text-[#0A1628] font-bold text-base px-8 py-6 rounded-sm h-auto shadow-lg shadow-[#EAB308]/20 transition-all hover:shadow-[#EAB308]/40">
                  {heroSlides[current].cta}
                </Button>
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-sm text-white transition-colors"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-sm text-white transition-colors"
        aria-label="Siguiente slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`transition-all duration-300 ${
              idx === current
                ? 'w-8 h-2 bg-[#EAB308] rounded-full'
                : 'w-2 h-2 bg-white/50 hover:bg-white/80 rounded-full'
            }`}
            aria-label={`Ir al slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-12 right-8 z-20 text-white/60 text-sm font-mono hidden md:block">
        {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>
    </section>
  );
}
