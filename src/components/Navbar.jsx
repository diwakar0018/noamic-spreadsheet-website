import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, Menu, X, Grid, Cpu, Shield, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Features', href: '#features', icon: Grid },
    { name: 'OMNI A.I.', href: '#omni-ai', icon: Cpu },
    { name: 'Workflow', href: '#workflow', icon: Sparkles },
    { name: 'Privacy', href: '#privacy', icon: Shield },
  ]

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-slate-950/85 backdrop-blur-md border-b border-slate-900 shadow-lg shadow-black/20' 
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/25 group-hover:border-blue-500/50 transition-colors">
              <div className="absolute inset-0 bg-blue-500/10 rounded-lg blur group-hover:blur-md transition-all"></div>
              <svg className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75h16.5M3.75 9h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-blue-100 transition-colors">
              NOAMIC<span className="text-blue-500 text-glow-blue">.</span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative py-2 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="#download"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-blue-600 to-cyan-500 group-hover:from-blue-600 group-hover:to-cyan-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-800 transition-all duration-300"
            >
              <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-slate-950 rounded-md group-hover:bg-opacity-0 flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download App
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white p-2 rounded-md focus:outline-none transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-slate-950 border-b border-slate-900 px-4 pt-2 pb-6 space-y-3"
          >
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 px-3 py-3 rounded-lg text-base font-medium text-slate-400 hover:text-white hover:bg-slate-900/50 transition-all"
                >
                  <Icon className="w-5 h-5 text-blue-500" />
                  <span>{item.name}</span>
                </a>
              )
            })}
            <div className="pt-4 border-t border-slate-900">
              <a
                href="#download"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-lg shadow-blue-600/20 transition-all"
              >
                <Download className="w-5 h-5" />
                Download Free App
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
