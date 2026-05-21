'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { processSteps } from '@/components/landing/data';

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Diagonal decorative element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] -skew-x-12 translate-x-1/3 -translate-y-1/2">
        <div className="w-full h-full border border-[#EAB308]/10 rotate-45" />
      </div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] -skew-x-12 -translate-x-1/3 translate-y-1/2">
        <div className="w-full h-full border border-[#EAB308]/10 rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              Proceso
            </span>
            <div className="w-10 h-1 bg-[#EAB308]" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0A1628] leading-tight max-w-3xl mx-auto">
            Proceso de Producción del Concreto Premezclado
          </h2>
        </motion.div>

        {/* Steps timeline - Desktop */}
        <div className="hidden md:flex items-start justify-between gap-2 relative">
          {/* Connecting line */}
          <div className="absolute top-10 left-[10%] right-[10%] h-0.5 bg-gray-300 z-0" />
          <div
            className="absolute top-10 left-[10%] h-0.5 bg-[#EAB308] z-0 transition-all duration-1000"
            style={{ width: '80%' }}
          />

          {processSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true, margin: '-50px' }}
              className="flex flex-col items-center text-center w-1/5 relative z-10"
            >
              {/* Step number circle */}
              <div className="w-20 h-20 rounded-full bg-[#0A1628] border-4 border-[#EAB308] flex items-center justify-center mb-5 shadow-lg">
                <span className="text-2xl font-black text-[#EAB308]">{step.step}</span>
              </div>

              {/* Card */}
              <div className="bg-white rounded-sm p-5 shadow-md border border-gray-100 w-full">
                <h3 className="text-[#0A1628] font-bold text-sm mb-2">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.description}</p>
              </div>

              {/* Arrow between steps */}
              {idx < processSteps.length - 1 && (
                <div className="absolute top-10 -right-3 z-20 text-[#EAB308]">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Steps timeline - Mobile */}
        <div className="md:hidden space-y-0 relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300" />

          {processSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true, margin: '-30px' }}
              className="flex gap-4 pb-8 relative"
            >
              {/* Step number */}
              <div className="relative z-10 w-12 h-12 shrink-0 rounded-full bg-[#0A1628] border-3 border-[#EAB308] flex items-center justify-center">
                <span className="text-lg font-black text-[#EAB308]">{step.step}</span>
              </div>

              {/* Card */}
              <div className="bg-white rounded-sm p-4 shadow-md border border-gray-100 flex-1">
                <h3 className="text-[#0A1628] font-bold text-sm mb-1">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
