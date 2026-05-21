'use client';

import { motion } from 'framer-motion';
import { Warehouse, Scale, ArrowRightLeft, Truck, ShieldCheck } from 'lucide-react';
import { processSteps } from '@/components/landing/data';

const stepIcons = [Warehouse, Scale, ArrowRightLeft, Truck, ShieldCheck];

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
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
            Proceso de Producción del Concreto Premezclado
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full" style={{ backgroundColor: '#EA580C' }} />
        </motion.div>

        {/* Steps */}
        <div className="relative mx-auto max-w-2xl">
          {/* Vertical dotted line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-0.5 md:left-6"
            style={{
              backgroundImage: 'repeating-linear-gradient(to bottom, #EA580C 0, #EA580C 8px, transparent 8px, transparent 16px)',
            }}
          />

          {processSteps.map((step, idx) => {
            const Icon = stepIcons[idx];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="relative mb-10 last:mb-0 flex items-start gap-5"
              >
                {/* Number Circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full text-white font-bold text-lg shadow-lg"
                    style={{ backgroundColor: '#EA580C' }}
                  >
                    {step.step}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 rounded-xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-lg"
                      style={{ backgroundColor: '#FFF7ED' }}
                    >
                      <Icon className="h-5 w-5" style={{ color: '#EA580C' }} />
                    </div>
                    <h3 className="text-lg font-bold" style={{ color: '#111827' }}>
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
