import React from 'react'
import { motion } from 'framer-motion'
import { Download, Play, Shield, Terminal, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-24 overflow-hidden flex items-center bg-slate-950">
      {/* Decorative Radial Backgrounds */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-6"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Version 1.2.0 is now live</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight"
            >
              Stop Memorizing Formulas.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 text-glow-blue">
                Start Working Smarter.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              NOAMIC Spreadsheet combines spreadsheet power, AI assistance, graph generation, Excel compatibility, and privacy-first offline operation into one modern desktop application.
              <span className="block mt-3 text-slate-500 text-sm">Built for students, professionals, analysts, researchers, and everyday users.</span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#download"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-xl shadow-blue-600/20 hover:shadow-blue-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all gap-2"
              >
                <Download className="w-5 h-5" />
                Download Now
              </a>
              <a
                href="#workflow"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-semibold transition-all gap-2"
              >
                <Play className="w-4 h-4 fill-slate-300" />
                Watch Demo
              </a>
            </motion.div>

            {/* Sub-Hero Features Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-xs text-slate-500"
            >
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-blue-500" /> Privacy-First Offline
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-800"></span>
              <span>100% Excel Compatible</span>
              <span className="w-1 h-1 rounded-full bg-slate-800"></span>
              <span>OMNI AI Assistance</span>
            </motion.div>
          </div>

          {/* Hero Right Showcase (Premium Mockup with Slight Angle) */}
          <div className="lg:col-span-6 flex justify-center items-center relative">
            {/* Glowing Backdrop Circle */}
            <div className="absolute w-[80%] h-[80%] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none animate-pulse-slow"></div>

            {/* Desktop Mockup container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotateY: 5, rotateX: 5 }}
              animate={{ opacity: 1, scale: 1, rotateY: -6, rotateX: 6 }}
              whileHover={{ rotateY: 0, rotateX: 0, scale: 1.02 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
              className="w-full max-w-[580px] rounded-xl overflow-hidden glass-panel border border-slate-800 shadow-2xl shadow-blue-500/5 relative group cursor-pointer"
            >
              {/* Window Header */}
              <div className="bg-slate-950/80 px-4 py-3 flex items-center justify-between border-b border-slate-900">
                <div className="flex items-center space-x-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                </div>
                <div className="text-xs text-slate-500 font-medium tracking-wide">
                  NOAMIC Spreadsheet — OMNI A.I.
                </div>
                <div className="w-10"></div>
              </div>

              {/* Window Body Containing Spreadsheet Main Image */}
              <div className="relative aspect-[1.48/1] overflow-hidden bg-slate-950">
                <img 
                  src="/screenshots/spreadsheet-main.png" 
                  alt="NOAMIC Spreadsheet main interface screenshot"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                {/* Floating Chat Bubble Indicator overlay */}
                <div className="absolute right-4 bottom-4 glass-card-blue px-3 py-2 rounded-lg border border-blue-500/30 flex items-center gap-2 max-w-[200px] shadow-lg animate-float">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  <span className="text-[10px] text-blue-300 font-medium">OMNI AI: Table created</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
