'use client';

import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import { navItems, socialLinks } from '@/components/landing/data';

export default function Footer() {
  const socialIconMap = {
    facebook: Facebook,
    instagram: Instagram,
    youtube: Youtube,
  };

  return (
    <footer className="relative bg-[#060E1A]">
      {/* Top yellow accent line */}
      <div className="h-1 bg-[#EAB308]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#EAB308] rounded-sm flex items-center justify-center">
                <span className="text-[#0A1628] font-black text-sm">C</span>
              </div>
              <span className="text-white font-black text-xl tracking-wider">
                CONCRE<span className="text-[#EAB308]">PRE</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empresa líder en producción y distribución de concreto premezclado en Lima.
              Calidad garantizada con laboratorio propio y control riguroso.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-[#EAB308]" />
                <span>+51 999 888 777</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-[#EAB308]" />
                <span>info@concrepre.com</span>
              </div>
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[#EAB308] mt-0.5" />
                <span>Villa El Salvador, Lima, Perú</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Navegación
            </h3>
            <nav className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-gray-400 hover:text-[#EAB308] text-sm transition-colors py-1"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#cotizacion"
                className="block text-gray-400 hover:text-[#EAB308] text-sm transition-colors py-1"
              >
                Solicitar Cotización
              </a>
            </nav>
          </div>

          {/* Social & Certifications */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Síguenos
            </h3>
            <div className="flex items-center gap-3 mb-6">
              {socialLinks.map((social) => {
                const Icon = socialIconMap[social.icon as keyof typeof socialIconMap];
                return Icon ? (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#EAB308] hover:border-[#EAB308]/30 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ) : null;
              })}
            </div>

            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-3">
              Normativas
            </h3>
            <div className="flex flex-wrap gap-2">
              {['NTP', 'RNC E 0.60', 'ASTM', 'ACI', 'AASHTO'].map((norm) => (
                <span
                  key={norm}
                  className="text-[10px] font-bold text-gray-500 bg-white/5 border border-white/10 px-2 py-1 rounded-sm"
                >
                  {norm}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} CONCREPRE. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 text-xs">
            Concreto Premezclado de Calidad Garantizada
          </p>
        </div>
      </div>
    </footer>
  );
}
