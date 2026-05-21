'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { navItems, socialLinks } from '@/components/landing/data';

const socialIcons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
};

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#111827] pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <span className="text-2xl font-extrabold tracking-tight" style={{ color: '#EA580C' }}>
              CONCREPRE
            </span>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-xs">
              Concreto premezclado de calidad garantizada para viviendas y obras. Servicio profesional y compromiso con la excelencia.
            </p>
            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.icon];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-all duration-200 hover:scale-110 hover:text-white hover:bg-[#EA580C]"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Navegación
            </h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="text-sm text-gray-400 transition-colors duration-200 hover:text-[#EA580C]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#cotizacion"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#cotizacion');
                  }}
                  className="text-sm text-gray-400 transition-colors duration-200 hover:text-[#EA580C]"
                >
                  Cotización
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin className="h-4 w-4 flex-shrink-0" style={{ color: '#EA580C' }} />
                Villa El Salvador, Lima
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="h-4 w-4 flex-shrink-0" style={{ color: '#EA580C' }} />
                +51 999 999 999
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="h-4 w-4 flex-shrink-0" style={{ color: '#EA580C' }} />
                info@concrepre.com
              </li>
            </ul>
          </motion.div>

          {/* Plant Locations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Plantas
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#EA580C' }} />
                <span>Planta Villa El Salvador, Lima</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#EA580C' }} />
                <span>Planta Chilca, Lima</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} CONCREPRE. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-600">
            Concreto premezclado de calidad garantizada
          </p>
        </div>
      </div>
    </footer>
  );
}
