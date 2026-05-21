'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { formFields, quoteSection } from '@/components/landing/data';
import { toast } from 'sonner';

interface FormData {
  [key: string]: string;
}

export default function QuoteForm() {
  const [formData, setFormData] = useState<FormData>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success('¡Cotización enviada!', {
          description: 'Nos pondremos en contacto contigo pronto.',
        });
        setFormData({});
      } else {
        toast.error('Error al enviar', {
          description: 'Por favor, intente nuevamente.',
        });
      }
    } catch {
      toast.error('Error de conexión', {
        description: 'Verifique su conexión a internet.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="cotizacion" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A1628]" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 border border-white rotate-45" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 border border-white rotate-12" />
      </div>

      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#EAB308]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-50px' }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-1 bg-[#EAB308]" />
            <span className="text-[#EAB308] text-sm font-bold uppercase tracking-widest">
              Cotización
            </span>
            <div className="w-10 h-1 bg-[#EAB308]" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-3">
            {quoteSection.title}
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto leading-relaxed">
            {quoteSection.text}
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: '-50px' }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-6 md:p-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {formFields.map((field) => {
              if (field.type === 'select') {
                return (
                  <div key={field.name} className="space-y-2">
                    <Label htmlFor={field.name} className="text-gray-300 text-sm font-medium">
                      {field.label}
                    </Label>
                    <Select
                      value={formData[field.name] || ''}
                      onValueChange={(value) => handleChange(field.name, value)}
                    >
                      <SelectTrigger className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-[#EAB308] focus:ring-[#EAB308]/30">
                        <SelectValue placeholder="Seleccione..." />
                      </SelectTrigger>
                      <SelectContent>
                        {field.options?.map((opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                );
              }

              if (field.type === 'textarea') {
                return (
                  <div key={field.name} className="space-y-2 sm:col-span-2">
                    <Label htmlFor={field.name} className="text-gray-300 text-sm font-medium">
                      {field.label}
                    </Label>
                    <Textarea
                      id={field.name}
                      value={formData[field.name] || ''}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                      placeholder={field.placeholder}
                      rows={4}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-[#EAB308] focus:ring-[#EAB308]/30 resize-none"
                    />
                  </div>
                );
              }

              return (
                <div key={field.name} className="space-y-2">
                  <Label htmlFor={field.name} className="text-gray-300 text-sm font-medium">
                    {field.label}
                  </Label>
                  <Input
                    id={field.name}
                    type={field.type}
                    value={formData[field.name] || ''}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    placeholder={field.placeholder}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-[#EAB308] focus:ring-[#EAB308]/30"
                  />
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#EAB308] hover:bg-[#CA8A04] text-[#0A1628] font-bold text-base px-10 py-6 rounded-sm h-auto shadow-lg shadow-[#EAB308]/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  {quoteSection.cta}
                </>
              )}
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
