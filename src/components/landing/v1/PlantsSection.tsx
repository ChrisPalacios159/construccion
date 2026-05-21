'use client';

import { motion } from 'framer-motion';
import { MapPin, Beaker, FlaskConical, Target } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { plantsSection, images } from '@/components/landing/data';

export default function PlantsSection() {
  const featureIcons = [Beaker, FlaskConical, Target];

  return (
    <section id="plantas" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={images.plant}
          alt="Planta de concreto"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0A1628]/92" />
      </div>

      {/* Diagonal decoration */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#EAB308] via-[#EAB308]/50 to-[#EAB308]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-50px' }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-1 bg-[#EAB308]" />
            <span className="text-[#EAB308] text-sm font-bold uppercase tracking-widest">
              Infraestructura
            </span>
            <div className="w-10 h-1 bg-[#EAB308]" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-4">
            {plantsSection.title}
          </h2>
          <p className="text-gray-300 text-base max-w-2xl mx-auto leading-relaxed">
            {plantsSection.text}
          </p>
        </motion.div>

        {/* Plant cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {plantsSection.plants.map((plant, idx) => (
            <motion.div
              key={plant.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true, margin: '-50px' }}
              className="relative bg-white/5 backdrop-blur-sm border border-[#EAB308]/30 rounded-sm p-6 md:p-8 hover:border-[#EAB308]/60 transition-colors group"
            >
              {/* Yellow top accent */}
              <div className="absolute top-0 left-0 w-16 h-1 bg-[#EAB308]" />

              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{plant.name}</h3>
                  <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                    <MapPin className="w-3.5 h-3.5 text-[#EAB308]" />
                    {plant.location}
                  </div>
                </div>
                <Badge className="bg-[#EAB308] text-[#0A1628] font-bold border-0 text-xs px-3 py-1">
                  {plant.capacity}
                </Badge>
              </div>

              <div className="space-y-3 mt-6">
                {plant.features.map((feature, fIdx) => {
                  const Icon = featureIcons[fIdx % featureIcons.length];
                  return (
                    <div key={fIdx} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-sm bg-[#EAB308]/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#EAB308]" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  );
                })}
              </div>

              {/* Decorative diagonal line */}
              <div className="absolute -bottom-1 -right-1 w-16 h-16 border-b-2 border-r-2 border-[#EAB308]/20 rounded-br-sm group-hover:border-[#EAB308]/40 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
