'use client';

import { useEffect, useRef, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { Truck, FlaskConical, Factory, Clock } from 'lucide-react';
import { stats } from '@/components/landing/data';

const statIcons = [Factory, FlaskConical, Factory, Clock];

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const displayRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  const animateNumber = useCallback(() => {
    if (!displayRef.current) return;

    const numericPart = value.replace(/[^0-9.]/g, '');
    const num = parseFloat(numericPart);

    if (isNaN(num)) {
      displayRef.current.textContent = value;
      return;
    }

    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      if (!displayRef.current) return;
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(num * eased);

      if (value.includes("'")) {
        displayRef.current.textContent = current.toLocaleString().replace(',', "'");
      } else if (value.includes('.')) {
        displayRef.current.textContent = (num * eased).toFixed(1);
      } else {
        displayRef.current.textContent = current.toString();
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        displayRef.current.textContent = value;
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  useEffect(() => {
    if (isInView) {
      requestAnimationFrame(animateNumber);
    }
  }, [isInView, animateNumber]);

  return (
    <span ref={ref} className="text-3xl sm:text-4xl md:text-5xl font-extrabold" style={{ color: '#EA580C' }}>
      <span ref={displayRef}>0</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, idx) => {
            const Icon = statIcons[idx];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div
                  className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: '#FFF7ED' }}
                >
                  <Icon className="h-6 w-6" style={{ color: '#EA580C' }} />
                </div>
                <div className="flex items-baseline gap-1">
                  <AnimatedNumber value={stat.value} />
                  {stat.unit && (
                    <span className="text-sm font-medium text-gray-500">{stat.unit}</span>
                  )}
                </div>
                <p className="mt-2 text-xs sm:text-sm font-medium text-gray-500">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
