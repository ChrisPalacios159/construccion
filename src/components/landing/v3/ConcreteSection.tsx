'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Download, Beaker, Truck, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { concreteSection, institutionalText, images } from '@/components/landing/data'

export default function ConcreteSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="concreto" className="relative py-20 sm:py-28 overflow-hidden" style={{ background: '#0D1117' }}>
      {/* Subtle blue tint overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/5 via-transparent to-[#2563EB]/5" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              {/* Blue overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/30 to-transparent z-10" />
              <div className="absolute inset-0 bg-[#0D1117]/30 z-10" />
              <img
                src={images.mixerTruck}
                alt="Mixer de concreto"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
              {/* Scan line effect */}
              <motion.div
                animate={{ top: ['0%', '100%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                className="absolute left-0 right-0 h-px bg-[#2563EB]/40 z-20"
              />
            </div>

            {/* Corner accent */}
            <div className="absolute -top-3 -left-3 w-16 h-16">
              <div className="absolute top-0 left-0 w-8 h-px bg-[#2563EB]" />
              <div className="absolute top-0 left-0 w-px h-8 bg-[#2563EB]" />
            </div>
            <div className="absolute -bottom-3 -right-3 w-16 h-16">
              <div className="absolute bottom-0 right-0 w-8 h-px bg-[#10B981]" />
              <div className="absolute bottom-0 right-0 w-px h-8 bg-[#10B981]" />
            </div>

            {/* Floating metric */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -right-4 sm:right-4 backdrop-blur-xl bg-[#0A0F1A]/80 border border-[#2563EB]/30 rounded-xl p-4 shadow-[0_0_20px_rgba(37,99,235,0.2)]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#2563EB]/20 flex items-center justify-center">
                  <Truck className="w-5 h-5 text-[#60A5FA]" />
                </div>
                <div>
                  <div className="text-lg font-bold font-mono text-[#10B981]">24/7</div>
                  <div className="text-xs text-gray-400">Flota disponible</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              {concreteSection.title}
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {concreteSection.text}
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              {concreteSection.text2}
            </p>

            {/* Key metrics in monospace */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                <Clock className="w-5 h-5 text-[#60A5FA] shrink-0" />
                <div>
                  <div className="text-sm font-mono text-[#10B981] font-bold">2.5 hrs</div>
                  <div className="text-xs text-gray-500">Vida útil máxima</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                <Beaker className="w-5 h-5 text-[#60A5FA] shrink-0" />
                <div>
                  <div className="text-sm font-mono text-[#10B981] font-bold">120 m³/h</div>
                  <div className="text-xs text-gray-500">Capacidad</div>
                </div>
              </div>
            </div>

            {/* Institutional text box */}
            <div className="relative p-5 rounded-xl border border-[#10B981]/30 bg-[#10B981]/5 mb-8">
              <div className="absolute top-0 left-4 w-12 h-px bg-[#10B981]" />
              <p className="text-sm text-gray-300 leading-relaxed">
                {institutionalText}
              </p>
            </div>

            <Button
              className="group bg-transparent border-2 border-[#2563EB] text-[#60A5FA] hover:bg-[#2563EB]/10 font-semibold px-6 py-3 rounded-lg shadow-[0_0_15px_rgba(37,99,235,0.2)] hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] transition-all duration-300"
            >
              <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              {concreteSection.cta}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
