'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { stats } from '@/components/landing/data'

function CounterAnimation({ value, duration = 2 }: { value: string; duration?: number }) {
  const spanRef = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true })

  useEffect(() => {
    if (!isInView || hasAnimated.current || !spanRef.current) return
    hasAnimated.current = true

    const numericMatch = value.match(/(\d+)/)
    if (!numericMatch) {
      if (spanRef.current) spanRef.current.textContent = value
      return
    }

    const target = parseInt(numericMatch[1], 10)
    const prefix = value.substring(0, value.indexOf(numericMatch[1]))
    const suffix = value.substring(value.indexOf(numericMatch[1]) + numericMatch[1].length)
    const startTime = Date.now()
    const el = spanRef.current

    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(eased * target)

      el.textContent = `${prefix}${current}${suffix}`

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        el.textContent = value
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, value, duration])

  return (
    <div ref={containerRef}>
      <span ref={spanRef}>0</span>
    </div>
  )
}

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden" style={{ background: '#111827' }}>
      {/* Grid pattern */}
      <div className="absolute inset-0">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={`gh-${i}`}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"
            style={{ top: `${i * 10}%` }}
          />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={`gv-${i}`}
            className="absolute h-full w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"
            style={{ left: `${i * 10}%` }}
          />
        ))}
      </div>

      <div ref={containerRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Glow effect */}
              <div className="absolute -inset-px bg-gradient-to-r from-[#2563EB]/20 via-[#10B981]/20 to-[#2563EB]/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 text-center hover:border-[#2563EB]/30 transition-all duration-500">
                {/* Green indicator dot */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.8)]" />

                <div className="text-4xl sm:text-5xl lg:text-6xl font-black font-mono text-[#10B981] mb-2 leading-none">
                  <CounterAnimation value={stat.value} />
                </div>
                {stat.unit && (
                  <div className="text-sm sm:text-base font-semibold text-[#60A5FA] font-mono mb-2">
                    {stat.unit}
                  </div>
                )}
                <div className="text-sm text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
