import React from 'react'
import { motion } from 'framer-motion'
import { Download, Sparkles, Grid } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900/60">
      {/* Radiant Glowing Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-xs font-semibold text-blue-400 mb-6"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Intelligent Calculating Awaits</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight"
        >
          Ready To Work Smarter?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-slate-400 mb-10 max-w-xl mx-auto"
        >
          Experience spreadsheets without complexity. Unleash the combined efficiency of local AI, automatic styling, and Excel interoperability.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#download"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-xl shadow-blue-600/20 transition-all gap-2 hover:-translate-y-0.5"
          >
            <Download className="w-5 h-5" />
            Download Now
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-semibold transition-all gap-2 hover:-translate-y-0.5"
          >
            <Grid className="w-4 h-4" />
            Explore Features
          </a>
        </motion.div>

      </div>
    </section>
  )
}
