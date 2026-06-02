import React from 'react'
import { Monitor } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900/60 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-900 pb-8 mb-8">
          
          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#" className="flex items-center space-x-2 mb-3">
              <span className="font-display font-bold text-lg tracking-tight text-white">
                NOAMIC CREATIONS<span className="text-blue-500">.</span>
              </span>
            </a>
            <p className="text-xs text-slate-500 max-w-xs leading-normal">
              Building next-generation desktop calculation software and local AI productivity assistants.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#features" className="text-slate-400 hover:text-white transition-colors">Features</a>
            <a href="#omni-ai" className="text-slate-400 hover:text-white transition-colors">OMNI A.I.</a>
            <a href="#privacy" className="text-slate-400 hover:text-white transition-colors">Privacy</a>
            <a href="#download" className="text-slate-400 hover:text-white transition-colors">Download</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="text-slate-400 hover:text-white transition-colors">Contact</a>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © 2026 NOAMIC CREATIONS. All Rights Reserved.
          </div>
          <div className="flex items-center gap-2">
            <Monitor className="w-3.5 h-3.5 text-slate-600" />
            <span>Designed for Desktop Computing</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
