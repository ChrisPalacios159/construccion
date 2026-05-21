'use client';

import { motion } from 'framer-motion';
import {
  ClipboardCheck,
  ThermometerSun,
  Cylinder,
  Droplets,
  Dumbbell,
  FileText,
  Microscope,
  HardHat,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { qualitySection, images } from '@/components/landing/data';

const qualityIcons = [
  ClipboardCheck,
  ThermometerSun,
  Cylinder,
  Droplets,
  Dumbbell,
  FileText,
  Microscope,
  HardHat,
];

export default function QualitySection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-50px' }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-1 bg-[#EAB308]" />
            <span className="text-[#EAB308] text-sm font-bold uppercase tracking-widest">
              Calidad
            </span>
            <div className="w-10 h-1 bg-[#EAB308]" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0A1628] leading-tight max-w-3xl mx-auto">
            {qualitySection.title}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {/* Quality points grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {qualitySection.points.map((point, idx) => {
              const Icon = qualityIcons[idx % qualityIcons.length];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  viewport={{ once: true, margin: '-30px' }}
                  className="flex items-start gap-4 p-4 rounded-sm border border-gray-100 hover:border-[#EAB308]/30 hover:shadow-md transition-all group bg-white"
                >
                  <div className="w-10 h-10 shrink-0 rounded-sm bg-[#0A1628] flex items-center justify-center group-hover:bg-[#EAB308] transition-colors">
                    <Icon className="w-5 h-5 text-[#EAB308] group-hover:text-[#0A1628] transition-colors" />
                  </div>
                  <p className="text-gray-700 text-sm font-medium leading-relaxed pt-2">{point}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Lab image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: '-50px' }}
            className="relative hidden lg:block"
          >
            <div className="rounded-sm overflow-hidden shadow-xl">
              <img
                src={images.lab}
                alt="Laboratorio de control de calidad"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/50 to-transparent" />
            </div>
            {/* Corner accent */}
            <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-[#EAB308]/40 rounded-tl-sm" />
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href={qualitySection.ctaHref}>
            <Button className="bg-[#EAB308] hover:bg-[#CA8A04] text-[#0A1628] font-bold text-base px-8 py-6 rounded-sm h-auto shadow-lg shadow-[#EAB308]/20">
              {qualitySection.cta}
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
