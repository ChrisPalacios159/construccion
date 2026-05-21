'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { qualitySection, images } from '@/components/landing/data';

export default function QualitySection() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            {qualitySection.title}
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full" style={{ backgroundColor: '#EA580C' }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Quality Points */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {qualitySection.points.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <CheckCircle2
                  className="h-5 w-5 mt-0.5 flex-shrink-0"
                  style={{ color: '#EA580C' }}
                />
                <span className="text-base text-gray-700 leading-relaxed">{point}</span>
              </motion.div>
            ))}

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <Button
                onClick={() => handleNavClick(qualitySection.ctaHref)}
                className="rounded-full px-8 py-6 text-base font-bold text-white shadow-lg transition-all duration-200 hover:scale-105"
                style={{ backgroundColor: '#EA580C' }}
                size="lg"
              >
                {qualitySection.cta}
              </Button>
            </motion.div>
          </motion.div>

          {/* Lab Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl shadow-xl"
          >
            <img
              src={images.lab}
              alt="Laboratorio de control de calidad"
              className="h-[350px] md:h-[450px] w-full object-cover"
            />
            {/* Orange corner accent */}
            <div className="absolute bottom-0 right-0 h-20 w-20">
              <div
                className="absolute bottom-0 right-0 h-full w-full rounded-tl-3xl"
                style={{ backgroundColor: '#EA580C' }}
              />
              <div className="absolute bottom-2 right-2">
                <CheckCircle2 className="h-6 w-6 text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
