'use client';

import { motion } from 'framer-motion';
import { Download, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { concreteSection, images, institutionalText } from '@/components/landing/data';

export default function ConcreteSection() {
  return (
    <section id="concreto" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-50px' }}
          >
            {/* Section accent */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-1 bg-[#EAB308]" />
              <span className="text-[#EAB308] text-sm font-bold uppercase tracking-widest">
                Concreto Premezclado
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0A1628] leading-tight mb-6">
              {concreteSection.title}
            </h2>

            <p className="text-gray-600 text-base leading-relaxed mb-4">
              {concreteSection.text}
            </p>

            <p className="text-gray-600 text-base leading-relaxed mb-6">
              {concreteSection.text2}
            </p>

            {/* Institutional text box */}
            <div className="bg-gray-50 border-l-4 border-[#EAB308] p-5 mb-8 rounded-r-sm">
              <p className="text-gray-700 text-sm leading-relaxed font-medium">
                {institutionalText}
              </p>
            </div>

            <Button className="bg-[#0A1628] hover:bg-[#0A1628]/90 text-white font-bold rounded-sm px-6 py-5 h-auto group">
              <Download className="w-4 h-4 mr-2" />
              {concreteSection.cta}
              <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: '-50px' }}
            className="relative"
          >
            <div className="relative rounded-sm overflow-hidden shadow-2xl">
              <img
                src={images.concretePour}
                alt="Concreto vertido en obra"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/40 to-transparent" />
            </div>
            {/* Decorative corner element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-[#EAB308]/40 rounded-tr-sm" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-[#EAB308]/40 rounded-bl-sm" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
