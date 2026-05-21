'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Zap, FlaskConical, Gauge, Target } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { plantsSection, images } from '@/components/landing/data'

export default function PlantsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="plantas" className="relative py-20 sm:py-28 overflow-hidden" style={{ background: '#0D1117' }}>
      {/* Tech grid overlay */}
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`plh-${i}`}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#2563EB]/10 to-transparent"
            style={{ top: `${i * 7}%` }}
          />
        ))}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`plv-${i}`}
            className="absolute h-full w-px bg-gradient-to-b from-transparent via-[#2563EB]/10 to-transparent"
            style={{ left: `${i * 7}%` }}
          />
        ))}
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            {plantsSection.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            {plantsSection.text}
          </p>
        </motion.div>

        {/* Plant Cards */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {plantsSection.plants.map((plant, index) => (
            <motion.div
              key={plant.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="group relative"
            >
              {/* Holographic border effect */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-[#2563EB]/40 via-[#10B981]/40 to-[#2563EB]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />

              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#2563EB]/30 transition-all duration-500">
                {/* Image header */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={index === 0 ? images.plant : images.plant}
                    alt={plant.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/50 to-transparent" />
                  <div className="absolute inset-0 bg-[#2563EB]/10" />

                  {/* Capacity badge */}
                  <div className="absolute top-4 right-4 backdrop-blur-xl bg-[#0A0F1A]/70 border border-[#10B981]/40 rounded-lg px-4 py-2 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                    <div className="flex items-center gap-2">
                      <Gauge className="w-4 h-4 text-[#10B981]" />
                      <span className="text-lg font-black font-mono text-[#10B981]">120</span>
                      <span className="text-xs text-[#60A5FA] font-mono">m³/h</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#60A5FA] transition-colors duration-300">
                    {plant.name}
                  </h3>

                  <div className="flex items-center gap-2 text-gray-400 mb-6">
                    <MapPin className="w-4 h-4 text-[#2563EB]" />
                    <span className="text-sm">{plant.location}</span>
                  </div>

                  {/* Capacity bar */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Capacidad</span>
                      <span className="text-sm font-mono text-[#10B981] font-bold">{plant.capacity}</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: '85%' } : {}}
                        transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                        className="h-full bg-gradient-to-r from-[#2563EB] to-[#10B981] rounded-full shadow-[0_0_10px_rgba(16,185,129,0.4)]"
                      />
                    </div>
                  </div>

                  {/* Features as tags */}
                  <div className="flex flex-wrap gap-2">
                    {plant.features.map((feature) => (
                      <Badge
                        key={feature}
                        className="bg-[#2563EB]/10 text-[#60A5FA] border border-[#2563EB]/20 hover:bg-[#2563EB]/20 font-medium text-xs px-3 py-1"
                      >
                        {feature === 'Laboratorio equipado' && <FlaskConical className="w-3 h-3 mr-1" />}
                        {feature === 'Diseño de mezcla' && <Target className="w-3 h-3 mr-1" />}
                        {feature === 'Dosificación precisa' && <Zap className="w-3 h-3 mr-1" />}
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
