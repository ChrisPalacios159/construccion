'use client';

import { useSyncExternalStore } from 'react';
import { Menu, Facebook, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet';
import { navItems, socialLinks, companyShortName } from '@/components/landing/data';

const subscribeToScroll = (callback: () => void) => {
  window.addEventListener('scroll', callback, { passive: true });
  return () => window.removeEventListener('scroll', callback);
};

const getScrollSnapshot = () => window.scrollY > 20;
const getServerSnapshot = () => false;

export default function Header() {
  const scrolled = useSyncExternalStore(subscribeToScroll, getScrollSnapshot, getServerSnapshot);

  const socialIconMap = {
    facebook: Facebook,
    instagram: Instagram,
    youtube: Youtube,
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A1628]/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-[#0A1628]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-[#EAB308] rounded-sm flex items-center justify-center">
              <span className="text-[#0A1628] font-black text-sm">CE</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-black text-base tracking-wider">
                CONCRETO <span className="text-[#EAB308]">{companyShortName}</span>
              </span>
              <span className="text-gray-500 text-[10px] font-medium tracking-widest">S.A.C.</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#EAB308] transition-all duration-300 group-hover:w-3/4" />
              </a>
            ))}
            <a href="#cotizacion" className="ml-3">
              <Button className="bg-[#EAB308] hover:bg-[#CA8A04] text-[#0A1628] font-bold text-sm px-5 py-2 rounded-sm">
                Cotizar Ahora
              </Button>
            </a>
          </nav>

          {/* Social Icons (Desktop) */}
          <div className="hidden xl:flex items-center gap-3 ml-4">
            {socialLinks.map((social) => {
              const Icon = socialIconMap[social.icon as keyof typeof socialIconMap];
              return Icon ? (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-[#EAB308] transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ) : null;
            })}
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#0A1628] border-gray-800 w-[280px]">
              <SheetHeader>
                <SheetTitle className="text-white font-black text-base tracking-wider text-left">
                  CONCRETO <span className="text-[#EAB308]">{companyShortName}</span> <span className="text-gray-500 text-xs">S.A.C.</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4 mt-4">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <a
                      href={item.href}
                      className="px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-colors text-sm font-medium border-b border-gray-800/50"
                    >
                      {item.label}
                    </a>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <a href="#cotizacion" className="mt-4">
                    <Button className="w-full bg-[#EAB308] hover:bg-[#CA8A04] text-[#0A1628] font-bold rounded-sm">
                      Cotizar Ahora
                    </Button>
                  </a>
                </SheetClose>
              </nav>
              <div className="flex items-center gap-4 px-4 mt-8">
                {socialLinks.map((social) => {
                  const Icon = socialIconMap[social.icon as keyof typeof socialIconMap];
                  return Icon ? (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="text-gray-400 hover:text-[#EAB308] transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ) : null;
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
