'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { projects, images } from '@/components/landing/data';

const projectImages = [
  images.roadProject,
  images.urbanNight,
  images.concretePour,
  images.residential,
  images.concretePour,
  images.roadProject,
  images.residential,
  images.roadProject,
  images.roadProject,
  images.urbanNight,
];

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="py-16 md:py-24" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight" style={{ color: '#111827' }}>
            Proyectos Realizados
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full" style={{ backgroundColor: '#EA580C' }} />
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={projectImages[idx]}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <Badge
                    className="rounded-full px-3 py-1 text-xs font-semibold text-white shadow-md"
                    style={{ backgroundColor: '#EA580C' }}
                  >
                    {project.category}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-sm font-bold leading-snug mb-2" style={{ color: '#111827' }}>
                  {project.title}
                </h3>
                {project.volume && (
                  <p className="text-xs text-gray-500 mb-1">
                    📊 {project.volume}
                  </p>
                )}
                {project.duration && (
                  <p className="text-xs text-gray-500">
                    📅 {project.duration}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
