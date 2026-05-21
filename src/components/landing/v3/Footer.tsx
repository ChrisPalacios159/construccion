'use client'

import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'
import { navItems, socialLinks } from '@/components/landing/data'

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden" style={{ background: '#0A0F1A' }}>
      {/* Green accent line at top */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#10B981] to-transparent shadow-[0_0_10px_rgba(16,185,129,0.5)]" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`fh-${i}`}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"
            style={{ top: `${i * 12}%` }}
          />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`fv-${i}`}
            className="absolute h-full w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"
            style={{ left: `${i * 12}%` }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-[#2563EB] via-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent">
                CONCREPRE
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Concreto premezclado de calidad garantizada. Tecnología e innovación para tu proyecto.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#10B981] hover:border-[#10B981]/30 hover:shadow-[0_0_10px_rgba(16,185,129,0.3)] transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon === 'facebook' && <Facebook className="w-4 h-4" />}
                  {social.icon === 'instagram' && <Instagram className="w-4 h-4" />}
                  {social.icon === 'youtube' && <Youtube className="w-4 h-4" />}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-gray-400 hover:text-[#10B981] transition-colors duration-300 text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNavClick('#cotizacion')}
                  className="text-[#10B981] hover:text-[#10B981]/80 font-semibold transition-colors duration-300 text-sm"
                >
                  Solicitar Cotización
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+5112345678" className="flex items-center gap-2 text-gray-400 hover:text-[#10B981] transition-colors duration-300 text-sm">
                  <Phone className="w-4 h-4 text-[#2563EB]" />
                  +51 123 456 78
                </a>
              </li>
              <li>
                <a href="mailto:info@concrepre.com" className="flex items-center gap-2 text-gray-400 hover:text-[#10B981] transition-colors duration-300 text-sm">
                  <Mail className="w-4 h-4 text-[#2563EB]" />
                  info@concrepre.com
                </a>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Plantas
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <span>Villa El Salvador, Lima</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <span>Chilca, Lima</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-xs">
              &copy; {new Date().getFullYear()} CONCREPRE. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] shadow-[0_0_6px_rgba(16,185,129,0.8)] animate-pulse" />
              <span className="text-gray-600 text-xs font-mono">Sistema activo</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
