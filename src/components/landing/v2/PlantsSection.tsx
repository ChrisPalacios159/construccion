'use client';

import { motion } from 'framer-motion';
import { MapPin, Zap, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { plantsSection, images } from '@/components/landing/data';

export default function PlantsSection() {
  return (
    <section id="plantas" className="py-16 md:py-24" style={{ backgroundColor: '#F9FAFB' }}>
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
            {plantsSection.title}
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full" style={{ backgroundColor: '#EA580C' }} />
          <p className="mx-auto mt-6 max-w-2xl text-base text-gray-600 leading-relaxed">
            {plantsSection.text}
          </p>
        </motion.div>

        {/* Plant Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {plantsSection.plants.map((plant, idx) => (
            <motion.div
              key={plant.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image Area */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={idx === 0 ? images.plant : images.plant}
                  alt={plant.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                {/* Capacity Badge */}
                <div className="absolute top-4 right-4">
                  <Badge
                    className="gap-1.5 rounded-full px-3 py-1 text-xs font-semibold text-white shadow-md"
                    style={{ backgroundColor: '#EA580C' }}
                  >
                    <Zap className="h-3 w-3" />
                    {plant.capacity}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Orange top accent */}
                <div className="mb-4 h-1 w-12 rounded-full" style={{ backgroundColor: '#EA580C' }} />

                <h3 className="text-xl font-bold mb-2" style={{ color: '#111827' }}>
                  {plant.name}
                </h3>

                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-4 w-4" style={{ color: '#EA580C' }} />
                  <span className="text-sm text-gray-500">{plant.location}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {plant.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium"
                      style={{ backgroundColor: '#FFF7ED', color: '#EA580C' }}
                    >
                      <CheckCircle className="h-3 w-3" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
