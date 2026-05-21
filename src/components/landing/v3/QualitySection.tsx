'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, CheckCircle2, ArrowRight, Beaker, ClipboardCheck, FlaskConical, FileText, TestTube, Microscope, Ruler } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { qualitySection, images } from '@/components/landing/data'

const icons = [
  ClipboardCheck, Beaker, FlaskConical, TestTube,
  Microscope, FileText, Ruler, CheckCircle2,
]

export default function QualitySection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const handleCtaClick = () => {
    const el = document.querySelector(qualitySection.ctaHref)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden" style={{ background: '#111827' }}>
      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Quality Points - Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#10B981]/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#10B981]" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                {qualitySection.title}
              </h2>
            </div>

            <div className="w-16 h-1 bg-gradient-to-r from-[#10B981] to-[#2563EB] rounded-full mb-8 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />

            {/* Quality metric cards grid */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {qualitySection.points.map((point, index) => {
                const IconComponent = icons[index % icons.length]
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                    className="group relative flex items-start gap-3 p-3.5 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-[#10B981]/30 transition-all duration-300"
                  >
                    <div className="shrink-0 mt-0.5">
                      <div className="w-8 h-8 rounded-lg bg-[#10B981]/10 flex items-center justify-center group-hover:bg-[#10B981]/20 transition-colors">
                        <IconComponent className="w-4 h-4 text-[#10B981]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-300 leading-snug">{point}</p>
                    </div>
                    {/* Green indicator */}
                    <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-[#10B981] shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
                  </motion.div>
                )
              })}
            </div>

            <Button
              onClick={handleCtaClick}
              className="group bg-[#10B981] hover:bg-[#10B981]/90 text-white font-bold px-8 py-4 text-lg rounded-lg shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_50px_rgba(16,185,129,0.6)] transition-all duration-300 border border-[#10B981]/50"
            >
              {qualitySection.cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              {/* Blue overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/20 to-[#10B981]/10 z-10" />
              <div className="absolute inset-0 bg-[#111827]/20 z-10" />
              <img
                src={images.lab}
                alt="Laboratorio de calidad"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />

              {/* Scan line */}
              <motion.div
                animate={{ top: ['0%', '100%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                className="absolute left-0 right-0 h-px bg-[#10B981]/40 z-20"
              />
            </div>

            {/* Floating quality score */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -top-4 -left-4 sm:left-4 backdrop-blur-xl bg-[#0A0F1A]/80 border border-[#10B981]/30 rounded-xl p-4 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#10B981]/20 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
                </div>
                <div>
                  <div className="text-lg font-bold font-mono text-[#10B981]">10+</div>
                  <div className="text-xs text-gray-400">Ensayos de calidad</div>
                </div>
              </div>
            </motion.div>

            {/* Corner accents */}
            <div className="absolute -bottom-3 -right-3 w-12 h-12">
              <div className="absolute bottom-0 right-0 w-6 h-px bg-[#10B981]" />
              <div className="absolute bottom-0 right-0 w-px h-6 bg-[#10B981]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
