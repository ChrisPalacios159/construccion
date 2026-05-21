'use client'

import { useState, useSyncExternalStore } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { navItems } from '@/components/landing/data'

const subscribeToScroll = (callback: () => void) => {
  window.addEventListener('scroll', callback)
  return () => window.removeEventListener('scroll', callback)
}

const getScrollSnapshot = () => window.scrollY > 20
const getServerSnapshot = () => false

export default function Header() {
  const scrolled = useSyncExternalStore(subscribeToScroll, getScrollSnapshot, getServerSnapshot)
  const [open, setOpen] = useState(false)

  const handleNavClick = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-[#0A0F1A]/80 border-b border-white/10 shadow-[0_0_30px_rgba(37,99,235,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-[#2563EB]/30 blur-lg rounded-full group-hover:bg-[#2563EB]/50 transition-all duration-500" />
              <span className="relative text-2xl sm:text-3xl font-black tracking-tighter bg-gradient-to-r from-[#2563EB] via-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent">
                CONCREPRE
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-[#2563EB]/0 group-hover:bg-[#2563EB]/10 rounded-lg transition-all duration-300" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#2563EB] group-hover:w-3/4 transition-all duration-300 shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
              </button>
            ))}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            <Button
              onClick={() => handleNavClick('#cotizacion')}
              className="hidden sm:flex items-center gap-2 bg-[#10B981] hover:bg-[#10B981]/90 text-white font-semibold px-5 py-2.5 rounded-lg shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300 border border-[#10B981]/50"
            >
              <Phone className="w-4 h-4" />
              Cotizar
            </Button>

            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-white hover:bg-white/10"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-[#0A0F1A]/95 backdrop-blur-xl border-l border-[#2563EB]/30 w-[280px]"
              >
                <SheetTitle className="sr-only">Menu de navegación</SheetTitle>
                <div className="flex flex-col gap-2 mt-8">
                  <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-[#2563EB] via-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent mb-6">
                    CONCREPRE
                  </span>
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.href}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleNavClick(item.href)}
                      className="text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-[#2563EB]/10 rounded-lg transition-all duration-300 font-medium border border-transparent hover:border-[#2563EB]/30"
                    >
                      {item.label}
                    </motion.button>
                  ))}
                  <Button
                    onClick={() => handleNavClick('#cotizacion')}
                    className="mt-4 bg-[#10B981] hover:bg-[#10B981]/90 text-white font-semibold shadow-[0_0_20px_rgba(16,185,129,0.3)] border border-[#10B981]/50"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Cotizar
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
