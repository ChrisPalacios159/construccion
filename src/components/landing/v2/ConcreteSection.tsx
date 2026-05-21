'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { concreteSection, images, institutionalText } from '@/components/landing/data';

export default function ConcreteSection() {
  return (
    <section id="concreto" className="py-16 md:py-24" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl shadow-xl"
          >
            <img
              src={images.mixerTruck}
              alt="Mixer de concreto premezclado"
              className="h-[350px] md:h-[450px] w-full object-cover"
            />
            <div className="absolute top-4 left-4 h-1 w-16 rounded-full" style={{ backgroundColor: '#EA580C' }} />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight" style={{ color: '#111827' }}>
              {concreteSection.title}
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              {concreteSection.text}
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              {concreteSection.text2}
            </p>

            <div>
              <Button
                variant="outline"
                className="gap-2 rounded-full border-2 px-6 text-sm font-semibold transition-all duration-200 hover:scale-105"
                style={{ borderColor: '#EA580C', color: '#EA580C' }}
                size="lg"
              >
                <Download className="h-4 w-4" />
                {concreteSection.cta}
              </Button>
            </div>

            {/* Institutional Text Box */}
            <div
              className="rounded-xl border-l-4 p-5"
              style={{ borderColor: '#EA580C', backgroundColor: '#FFF7ED' }}
            >
              <p className="text-sm text-gray-700 leading-relaxed">
                {institutionalText}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
