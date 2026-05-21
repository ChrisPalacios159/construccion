'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X, Camera } from 'lucide-react';
import { gallerySection } from '@/components/landing/data';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="galeria" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0F1D32]" />

      {/* Subtle diagonal accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#EAB308] to-transparent" />

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
              Galería
            </span>
            <div className="w-10 h-1 bg-[#EAB308]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            {gallerySection.title}
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {gallerySection.subtitle}
          </p>
        </motion.div>

        {/* Gallery Grid - Masonry-style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {gallerySection.items.map((item, index) => {
            const isLarge = index === 0 || index === 3;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-50px' }}
                className={`relative group cursor-pointer overflow-hidden rounded-sm ${
                  isLarge ? 'sm:col-span-2 sm:row-span-1 lg:col-span-1' : ''
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-[#0A1628]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Play/Zoom icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#EAB308]/20 backdrop-blur-sm border border-[#EAB308]/50 flex items-center justify-center">
                    <Camera className="w-6 h-6 text-[#EAB308]" />
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-block bg-[#EAB308] text-[#0A1628] text-[10px] font-bold px-2.5 py-1 rounded-sm uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                {/* Title overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-gray-300 text-xs leading-relaxed">{item.description}</p>
                </div>

                {/* Video indicator for some items */}
                {(index === 0 || index === 2) && (
                  <div className="absolute top-3 right-3">
                    <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                      <Play className="w-3 h-3 text-white ml-0.5" fill="white" />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA below gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true, margin: '-50px' }}
          className="text-center mt-10"
        >
          <a
            href="#cotizacion"
            className="inline-flex items-center gap-2 bg-[#EAB308] hover:bg-[#CA8A04] text-[#0A1628] font-bold text-sm px-8 py-4 rounded-sm transition-all shadow-lg shadow-[#EAB308]/20 hover:shadow-[#EAB308]/40"
          >
            ¿Te gustó nuestro trabajo? Cotiza ahora
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={gallerySection.items[selectedImage].image}
              alt={gallerySection.items[selectedImage].title}
              className="w-full rounded-sm shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="text-white font-bold text-lg">
                {gallerySection.items[selectedImage].title}
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                {gallerySection.items[selectedImage].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
