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

type FormData = Record<string, string>;

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
        toast.success('¡Cotización enviada con éxito!', {
          description: 'Nos pondremos en contacto contigo pronto.',
        });
        setFormData({});
      } else {
        toast.error('Error al enviar la cotización', {
          description: 'Por favor, intente nuevamente.',
        });
      }
    } catch {
      toast.error('Error de conexión', {
        description: 'Por favor, verifique su conexión e intente nuevamente.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="cotizacion" className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#EA580C' }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/20 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-white/10 translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-12 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-white">
            {quoteSection.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/85 leading-relaxed">
            {quoteSection.text}
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl"
        >
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-white p-6 sm:p-8 shadow-2xl"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              {formFields.map((field) => {
                if (field.type === 'select') {
                  return (
                    <div key={field.name} className="space-y-2">
                      <Label htmlFor={field.name} className="text-sm font-medium text-gray-700">
                        {field.label}
                      </Label>
                      <Select
                        value={formData[field.name] || ''}
                        onValueChange={(val) => handleChange(field.name, val)}
                      >
                        <SelectTrigger className="w-full h-10 rounded-lg">
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
                      <Label htmlFor={field.name} className="text-sm font-medium text-gray-700">
                        {field.label}
                      </Label>
                      <Textarea
                        id={field.name}
                        placeholder={field.placeholder}
                        value={formData[field.name] || ''}
                        onChange={(e) => handleChange(field.name, e.target.value)}
                        className="min-h-[100px] rounded-lg"
                      />
                    </div>
                  );
                }

                return (
                  <div key={field.name} className="space-y-2">
                    <Label htmlFor={field.name} className="text-sm font-medium text-gray-700">
                      {field.label}
                    </Label>
                    <Input
                      id={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.name] || ''}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                      className="h-10 rounded-lg"
                    />
                  </div>
                );
              })}
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full py-6 text-base font-bold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-xl disabled:opacity-70"
                style={{ backgroundColor: '#EA580C' }}
                size="lg"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    {quoteSection.cta}
                  </>
                )}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
