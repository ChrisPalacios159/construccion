'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Building, Warehouse, Calculator, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { roofingSection, images } from '@/components/landing/data';

const iconMap: Record<string, React.ReactNode> = {
  aligerada: <Home className="w-6 h-6" />,
  maciza: <Building className="w-6 h-6" />,
  reticular: <Warehouse className="w-6 h-6" />,
};

export default function RoofingSection() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState({ longitud: '', ancho: '', espesor: '' });
  const [showResult, setShowResult] = useState(false);

  const calculateVolume = () => {
    const l = parseFloat(dimensions.longitud) || 0;
    const a = parseFloat(dimensions.ancho) || 0;
    const e = parseFloat(dimensions.espesor) || 0;
    if (l > 0 && a > 0 && e > 0) {
      return l * a * e;
    }
    return 0;
  };

  const volume = calculateVolume();
  const recommendedVolume = volume * 1.08;

  const handleCalculate = () => {
    if (volume > 0) {
      setShowResult(true);
    }
  };

  const handleDimensionChange = (field: string, value: string) => {
    setDimensions((prev) => ({ ...prev, [field]: value }));
    setShowResult(false);
  };

  return (
    <section id="techar" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A1628]" />

      {/* Diagonal decorative element top */}
      <div className="absolute top-0 left-0 right-0 h-16 clip-diagonal-top-reverse bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 40%, 0 100%)' }} />

      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-10 left-10 w-40 h-40 border border-white rotate-45" />
        <div className="absolute bottom-20 right-20 w-60 h-60 border border-white rotate-12" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 border border-white -rotate-12" />
      </div>

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
              Techado
            </span>
            <div className="w-10 h-1 bg-[#EAB308]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            {roofingSection.title}
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {roofingSection.description}
          </p>
        </motion.div>

        {/* Roofing Images Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14"
        >
          {[
            { src: images.roofingConcrete, alt: "Techado con concreto premezclado", label: "Vaciado de Concreto" },
            { src: images.roofingHouse, alt: "Techado de vivienda", label: "Techado Residencial" },
            { src: images.roofingSlab, alt: "Losa de techado", label: "Losa de Concreto" },
          ].map((img, i) => (
            <div key={i} className="relative group overflow-hidden rounded-sm aspect-[16/10]">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="inline-block bg-[#EAB308] text-[#0A1628] text-xs font-bold px-3 py-1 rounded-sm">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Roofing Type Selector */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: '-50px' }}
          className="mb-14"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-8">
            Seleccione su tipo de techado
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {roofingSection.roofingTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(selectedType === type.id ? null : type.id)}
                className={`relative text-left p-6 rounded-sm border-2 transition-all duration-300 group ${
                  selectedType === type.id
                    ? 'border-[#EAB308] bg-[#EAB308]/10 shadow-lg shadow-[#EAB308]/10'
                    : 'border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10'
                }`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-sm flex items-center justify-center mb-4 transition-colors ${
                  selectedType === type.id
                    ? 'bg-[#EAB308] text-[#0A1628]'
                    : 'bg-white/10 text-gray-400 group-hover:text-[#EAB308]'
                }`}>
                  {iconMap[type.id]}
                </div>

                {/* Title */}
                <h4 className={`text-lg font-bold mb-2 transition-colors ${
                  selectedType === type.id ? 'text-[#EAB308]' : 'text-white'
                }`}>
                  {type.name}
                </h4>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  {type.description}
                </p>

                {/* Specs */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500">Espesor:</span>
                    <span className="text-white font-mono text-sm">{type.thickness}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500">Uso:</span>
                    <span className="text-gray-300 text-sm">{type.typicalUse}</span>
                  </div>
                </div>

                {/* Selected indicator */}
                {selectedType === type.id && (
                  <div className="absolute top-4 right-4">
                    <CheckCircle2 className="w-6 h-6 text-[#EAB308]" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Concrete Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm overflow-hidden">
            {/* Calculator Header */}
            <div className="bg-[#EAB308] px-6 py-4">
              <div className="flex items-center gap-3">
                <Calculator className="w-6 h-6 text-[#0A1628]" />
                <div>
                  <h3 className="text-[#0A1628] font-black text-lg">
                    {roofingSection.calculator.title}
                  </h3>
                  <p className="text-[#0A1628]/70 text-sm">
                    {roofingSection.calculator.subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Calculator Body */}
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
                {roofingSection.calculator.fields.map((field) => (
                  <div key={field.name} className="space-y-2">
                    <Label htmlFor={field.name} className="text-gray-300 text-sm font-medium">
                      {field.label}
                    </Label>
                    <Input
                      id={field.name}
                      type="number"
                      step="0.01"
                      min="0"
                      value={dimensions[field.name as keyof typeof dimensions]}
                      onChange={(e) => handleDimensionChange(field.name, e.target.value)}
                      placeholder={field.placeholder}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-[#EAB308] focus:ring-[#EAB308]/30 font-mono text-lg"
                    />
                  </div>
                ))}
              </div>

              {/* Calculate Button */}
              <Button
                onClick={handleCalculate}
                disabled={volume <= 0}
                className="w-full bg-[#EAB308] hover:bg-[#CA8A04] text-[#0A1628] font-black text-base py-6 rounded-sm h-auto disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                {roofingSection.calculator.cta}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              {/* Result */}
              <AnimatePresence>
                {showResult && volume > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 bg-[#EAB308]/10 border border-[#EAB308]/30 rounded-sm p-5">
                      <div className="text-center mb-4">
                        <p className="text-gray-400 text-sm mb-1">{roofingSection.calculator.resultLabel}</p>
                        <p className="text-[#EAB308] font-black text-4xl font-mono">
                          {volume.toFixed(2)} m³
                        </p>
                      </div>
                      <div className="bg-[#0A1628]/50 rounded-sm p-4 mb-4">
                        <p className="text-white text-sm text-center">
                          {roofingSection.calculator.recommendationPrefix}{' '}
                          <span className="text-[#EAB308] font-bold font-mono text-lg">
                            {recommendedVolume.toFixed(2)}
                          </span>{' '}
                          {roofingSection.calculator.recommendationSuffix}
                        </p>
                      </div>
                      <a href="#cotizacion">
                        <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-[#EAB308]/50 font-bold py-5 rounded-sm h-auto transition-all">
                          {roofingSection.calculator.ctaQuote}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Type hint when selected */}
              {selectedType && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-center"
                >
                  <p className="text-gray-400 text-xs">
                    Tipo de techado seleccionado:{' '}
                    <span className="text-[#EAB308] font-bold">
                      {roofingSection.roofingTypes.find(t => t.id === selectedType)?.name}
                    </span>
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
