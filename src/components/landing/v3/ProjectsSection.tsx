'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Building2, Route, Home, Landmark } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { projects, images } from '@/components/landing/data'

const categoryIcons: Record<string, typeof Building2> = {
  Vial: Route,
  Urbano: Landmark,
  Estructural: Building2,
  Inmobiliario: Home,
}

const categoryColors: Record<string, string> = {
  Vial: 'from-[#2563EB] to-[#60A5FA]',
  Urbano: 'from-[#10B981] to-[#34D399]',
  Estructural: 'from-[#F59E0B] to-[#FBBF24]',
  Inmobiliario: 'from-[#8B5CF6] to-[#A78BFA]',
}

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="proyectos" className="relative py-20 sm:py-28 overflow-hidden" style={{ background: '#0D1117' }}>
      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Proyectos{' '}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#10B981] bg-clip-text text-transparent">
              Realizados
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experiencia comprobada en proyectos de gran envergadura
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {projects.map((project, index) => {
            const Icon = categoryIcons[project.category] || Building2
            const gradient = categoryColors[project.category] || 'from-[#2563EB] to-[#60A5FA]'

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                className="group relative"
              >
                {/* Hover glow */}
                <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-[#2563EB]/0 via-[#2563EB]/0 to-[#2563EB]/0 group-hover:from-[#2563EB]/20 group-hover:via-[#10B981]/10 group-hover:to-[#2563EB]/20 rounded-xl blur-sm transition-all duration-700" />

                <div className="relative backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-xl p-5 sm:p-6 hover:border-[#2563EB]/30 transition-all duration-500 h-full flex flex-col">
                  {/* Top row: Icon + Category */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <Badge className="bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 text-[10px] font-bold uppercase tracking-wider px-2.5">
                      {project.category}
                    </Badge>
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-semibold text-sm sm:text-base leading-snug mb-4 group-hover:text-[#60A5FA] transition-colors duration-300 flex-1">
                    {project.title}
                  </h3>

                  {/* Metrics */}
                  <div className="space-y-2">
                    {project.volume && (
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] shadow-[0_0_6px_rgba(16,185,129,0.6)]" />
                        <span className="text-xs font-mono text-[#10B981] font-semibold">{project.volume}</span>
                      </div>
                    )}
                    {project.duration && (
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] shadow-[0_0_6px_rgba(96,165,250,0.6)]" />
                        <span className="text-xs font-mono text-gray-400">{project.duration}</span>
                      </div>
                    )}
                    {!project.volume && !project.duration && (
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                        <span className="text-xs text-gray-600">Proyecto completado</span>
                      </div>
                    )}
                  </div>

                  {/* Bottom accent line */}
                  <div className="mt-4 pt-3 border-t border-white/5">
                    <div className="h-0.5 rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:via-[#2563EB]/30 transition-all duration-500" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
