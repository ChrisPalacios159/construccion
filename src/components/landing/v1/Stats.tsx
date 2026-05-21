'use client';

import { motion } from 'framer-motion';
import { stats } from '@/components/landing/data';

export default function Stats() {
  return (
    <section className="relative bg-[#0A1628] py-16 md:py-20 overflow-hidden">
      {/* Diagonal background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EAB308]/5 -skew-x-12 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#EAB308]/5 -skew-x-12 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true, margin: '-50px' }}
              className="flex flex-col items-center text-center p-6 rounded-sm border border-gray-800/50 bg-gradient-to-b from-white/5 to-transparent"
            >
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl sm:text-4xl md:text-5xl font-black text-[#EAB308]">
                  {stat.value}
                </span>
                {stat.unit && (
                  <span className="text-sm sm:text-base text-gray-400 font-medium">
                    {stat.unit}
                  </span>
                )}
              </div>
              <span className="text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
