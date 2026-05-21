'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, BarChart3 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { projects } from '@/components/landing/data';

const categories = ['Todos', 'Vial', 'Urbano', 'Inmobiliario', 'Estructural'] as const;

const categoryColors: Record<string, string> = {
  Vial: 'bg-blue-900 text-blue-100',
  Urbano: 'bg-emerald-900 text-emerald-100',
  Inmobiliario: 'bg-amber-900 text-amber-100',
  Estructural: 'bg-red-900 text-red-100',
};

export default function ProjectsSection() {
  const [filter, setFilter] = useState<string>('Todos');

  const filtered =
    filter === 'Todos' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="proyectos" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-50px' }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-1 bg-[#EAB308]" />
            <span className="text-[#EAB308] text-sm font-bold uppercase tracking-widest">
              Portafolio
            </span>
            <div className="w-10 h-1 bg-[#EAB308]" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0A1628] leading-tight">
            Proyectos Realizados
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <Tabs value={filter} onValueChange={setFilter}>
            <TabsList className="bg-white shadow-sm border border-gray-200">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat}
                  value={cat}
                  className="data-[state=active]:bg-[#0A1628] data-[state=active]:text-white text-sm font-medium"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-sm shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group"
              >
                {/* Top accent bar */}
                <div className="h-1 bg-[#0A1628] group-hover:bg-[#EAB308] transition-colors" />

                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="text-[#0A1628] font-bold text-sm leading-snug flex-1">
                      {project.title}
                    </h3>
                    <Badge
                      className={`text-[10px] font-bold border-0 shrink-0 ${
                        categoryColors[project.category] || 'bg-gray-800 text-gray-100'
                      }`}
                    >
                      {project.category}
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    {project.volume && (
                      <div className="flex items-center gap-2 text-gray-500 text-xs">
                        <BarChart3 className="w-3.5 h-3.5 text-[#EAB308]" />
                        <span>{project.volume}</span>
                      </div>
                    )}
                    {project.duration && (
                      <div className="flex items-center gap-2 text-gray-500 text-xs">
                        <Clock className="w-3.5 h-3.5 text-[#EAB308]" />
                        <span>{project.duration}</span>
                      </div>
                    )}
                    {!project.volume && !project.duration && (
                      <div className="flex items-center gap-2 text-gray-400 text-xs">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>Proyecto completado</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
