'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { processSteps } from '@/components/landing/data'

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden" style={{ background: '#111827' }}>
      {/* Subtle grid */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`ph-${i}`}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/[0.03] to-transparent"
            style={{ top: `${i * 8}%` }}
          />
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`pv-${i}`}
            className="absolute h-full w-px bg-gradient-to-b from-transparent via-white/[0.03] to-transparent"
            style={{ left: `${i * 8}%` }}
          />
        ))}
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-[#2563EB] via-[#60A5FA] to-[#10B981] bg-clip-text text-transparent">
              Proceso de Producción
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Cada etapa está diseñada con precisión para garantizar la máxima calidad
          </p>
        </motion.div>

        {/* Process Steps - Desktop: Horizontal Flow */}
        <div className="hidden lg:block">
          <div className="relative flex items-start justify-between gap-4">
            {/* Connection line */}
            <div className="absolute top-12 left-[10%] right-[10%] h-px">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-[#2563EB]/50 via-[#10B981]/50 to-[#2563EB]/50 origin-left"
              />
              {/* Glow on the line */}
              <div className="absolute inset-0 h-px bg-gradient-to-r from-[#2563EB] via-[#10B981] to-[#2563EB] blur-sm" />
            </div>

            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                className="relative flex flex-col items-center w-1/5"
              >
                {/* Node circle */}
                <div className="relative z-10 mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.2, type: 'spring' }}
                    className="w-24 h-24 rounded-full border-2 border-[#10B981]/50 bg-[#0A0F1A] flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center">
                      <span className="text-2xl font-black font-mono text-[#10B981]">
                        {String(step.step).padStart(2, '0')}
                      </span>
                    </div>
                  </motion.div>
                  {/* Pulsing ring */}
                  <div className="absolute inset-0 rounded-full border border-[#10B981]/20 animate-ping" style={{ animationDuration: '3s' }} />
                </div>

                {/* Content card */}
                <div className="text-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-5 w-full hover:border-[#2563EB]/30 transition-all duration-500 group">
                  <h3 className="text-white font-bold text-sm mb-2 group-hover:text-[#60A5FA] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Steps - Mobile: Vertical Flow */}
        <div className="lg:hidden space-y-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="relative flex gap-4"
            >
              {/* Vertical connection line */}
              {index < processSteps.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-px -mb-6">
                  <div className="w-full h-full bg-gradient-to-b from-[#10B981]/50 to-[#2563EB]/30" />
                  <div className="absolute inset-0 w-full bg-gradient-to-b from-[#10B981] to-[#2563EB] blur-sm" />
                </div>
              )}

              {/* Node */}
              <div className="relative z-10 shrink-0">
                <div className="w-12 h-12 rounded-full border-2 border-[#10B981]/50 bg-[#0A0F1A] flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                  <span className="text-lg font-black font-mono text-[#10B981]">
                    {String(step.step).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-5 flex-1 hover:border-[#2563EB]/30 transition-all duration-500">
                <h3 className="text-white font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
