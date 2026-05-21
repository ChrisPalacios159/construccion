'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Loader2, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from 'sonner'
import { formFields, quoteSection } from '@/components/landing/data'

export default function QuoteForm() {
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        toast.success('¡Cotización enviada!', {
          description: 'Nos pondremos en contacto contigo pronto.',
        })
        setFormData({})
      } else {
        toast.error('Error al enviar', {
          description: 'Por favor, intente de nuevo.',
        })
      }
    } catch {
      toast.error('Error de conexión', {
        description: 'Verifique su conexión a internet.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="cotizacion" className="relative py-20 sm:py-28 overflow-hidden" style={{ background: '#0A0F1A' }}>
      {/* Blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/10 via-transparent to-[#2563EB]/5" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={`qh-${i}`}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#2563EB]/10 to-transparent"
            style={{ top: `${i * 10}%` }}
          />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={`qv-${i}`}
            className="absolute h-full w-px bg-gradient-to-b from-transparent via-[#2563EB]/10 to-transparent"
            style={{ left: `${i * 10}%` }}
          />
        ))}
      </div>

      <div ref={ref} className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#10B981]/30 bg-[#10B981]/10 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
            <span className="text-xs font-semibold text-[#10B981] tracking-wider uppercase">
              Cotización en línea
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            {quoteSection.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {quoteSection.text}
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Glow border */}
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-[#2563EB]/30 via-[#10B981]/20 to-[#2563EB]/30 blur-sm" />

          <form
            onSubmit={handleSubmit}
            className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              {formFields.map((field, index) => {
                if (field.type === 'select') {
                  return (
                    <div key={field.name} className="space-y-2">
                      <Label className="text-sm font-medium text-gray-300">
                        {field.label}
                      </Label>
                      <Select
                        value={formData[field.name] || ''}
                        onValueChange={(value) => handleChange(field.name, value)}
                      >
                        <SelectTrigger className="w-full bg-white/5 border-[#2563EB]/30 text-white placeholder:text-gray-500 focus:ring-[#2563EB]/50 h-11 rounded-lg">
                          <SelectValue placeholder="Seleccione..." />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0A0F1A] border-[#2563EB]/30">
                          {field.options?.map((option) => (
                            <SelectItem
                              key={option}
                              value={option}
                              className="text-gray-300 focus:text-white focus:bg-[#2563EB]/20"
                            >
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )
                }

                if (field.type === 'textarea') {
                  return (
                    <div key={field.name} className="space-y-2 sm:col-span-2">
                      <Label className="text-sm font-medium text-gray-300">
                        {field.label}
                      </Label>
                      <Textarea
                        value={formData[field.name] || ''}
                        onChange={(e) => handleChange(field.name, e.target.value)}
                        placeholder={field.placeholder}
                        className="bg-white/5 border-[#2563EB]/30 text-white placeholder:text-gray-500 focus:ring-[#2563EB]/50 min-h-[120px] rounded-lg resize-none"
                      />
                    </div>
                  )
                }

                return (
                  <div key={field.name} className="space-y-2">
                    <Label className="text-sm font-medium text-gray-300">
                      {field.label}
                    </Label>
                    <Input
                      type={field.type}
                      value={formData[field.name] || ''}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                      placeholder={field.placeholder}
                      className="bg-white/5 border-[#2563EB]/30 text-white placeholder:text-gray-500 focus:ring-[#2563EB]/50 h-11 rounded-lg"
                    />
                  </div>
                )
              })}
            </div>

            {/* Submit Button */}
            <div className="mt-8 flex justify-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="group bg-[#10B981] hover:bg-[#10B981]/90 text-white font-bold px-10 py-4 text-lg rounded-lg shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_50px_rgba(16,185,129,0.6)] transition-all duration-300 border border-[#10B981]/50 disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    {quoteSection.cta}
                  </>
                )}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
