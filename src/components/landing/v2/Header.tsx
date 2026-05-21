'use client';

import { useSyncExternalStore } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { navItems } from '@/components/landing/data';

const subscribeToScroll = (callback: () => void) => {
  window.addEventListener('scroll', callback);
  return () => window.removeEventListener('scroll', callback);
};

const getScrollSnapshot = () => window.scrollY > 10;
const getServerSnapshot = () => false;

export default function Header() {
  const scrolled = useSyncExternalStore(subscribeToScroll, getScrollSnapshot, getServerSnapshot);

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-white shadow-sm'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2"
        >
          <span className="text-2xl font-extrabold tracking-tight" style={{ color: '#EA580C' }}>
            CONCREPRE
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="text-sm font-medium transition-colors duration-200 hover:text-[#EA580C]"
              style={{ color: '#4B5563' }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            onClick={() => handleNavClick('#cotizacion')}
            className="rounded-full px-6 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: '#EA580C' }}
            size="lg"
          >
            Cotizar Ahora
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-[#4B5563]">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-white">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <span className="text-xl font-extrabold" style={{ color: '#EA580C' }}>
                    CONCREPRE
                  </span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2 px-4 pt-4">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      className="rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-200 hover:bg-orange-50 hover:text-[#EA580C]"
                      style={{ color: '#4B5563' }}
                    >
                      {item.label}
                    </a>
                  </SheetClose>
                ))}
                <div className="mt-4 pt-4 border-t">
                  <SheetClose asChild>
                    <Button
                      onClick={() => handleNavClick('#cotizacion')}
                      className="w-full rounded-full text-sm font-semibold text-white shadow-lg"
                      style={{ backgroundColor: '#EA580C' }}
                      size="lg"
                    >
                      Cotizar Ahora
                    </Button>
                  </SheetClose>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
