import React from 'react'
import { motion } from 'framer-motion'
import { Bold, Italic, Underline, ArrowUpDown, RefreshCw, Copy, PlusCircle, BarChart3, ShieldCheck, FileSpreadsheet } from 'lucide-react'

export default function FeaturesGrid() {
  const formattingTools = [
    { name: 'Bold', icon: Bold },
    { name: 'Italic', icon: Italic },
    { name: 'Underline', icon: Underline },
    { name: 'Sort', icon: ArrowUpDown },
    { name: 'Replace', icon: RefreshCw },
    { name: 'Copy/Paste', icon: Copy },
    { name: 'Row/Col Admin', icon: PlusCircle },
  ]

  return (
    <section id="features" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial-glow pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Next-Generation Spreadsheet Architecture
          </h2>
          <p className="text-base text-slate-400">
            Get all the flexibility of traditional calculation software upgraded with smart local intelligence, native compatibility, and automated layouts.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Smart Formatting Tools (Col-span 7) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 glass-panel rounded-2xl p-8 relative overflow-hidden border-glow-hover flex flex-col justify-between min-h-[380px]"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                <PlusCircle className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-white mb-2">
                Productivity Without Complexity
              </h3>
              <p className="text-sm text-slate-400 mb-6 max-w-md">
                No need to memorize complex formulas or hunt through nested navigation menus. Achieve clean, professional worksheets with unified row/column operations and one-click styling tools.
              </p>
            </div>

            {/* Smart Action Simulation Mockup */}
            <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-900 shadow-inner">
              <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-2.5 font-semibold">Instant Actions Toolbar</div>
              <div className="flex flex-wrap gap-2">
                {formattingTools.map((tool) => {
                  const Icon = tool.icon
                  return (
                    <div 
                      key={tool.name}
                      className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:bg-blue-500/5 text-xs text-slate-300 hover:text-blue-300 flex items-center gap-1.5 cursor-pointer transition-all duration-200"
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{tool.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Card 2: Offline First (Col-span 5) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-5 glass-panel rounded-2xl p-8 relative overflow-hidden border-glow-hover flex flex-col justify-between min-h-[380px]"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-600/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-white mb-2">
                Your Data. Your Control.
              </h3>
              <p className="text-sm text-slate-400 mb-6">
                Designed primarily for local operation. Your files stay on your hardware. NOAMIC operates fully offline with local SQLite DB instances, requiring internet access only for premium cloud models.
              </p>
            </div>

            {/* Shield and Privacy Indicators */}
            <div className="glass-card-blue p-4 rounded-xl border border-blue-500/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse"></div>
                <span className="text-xs font-semibold tracking-wide text-slate-300">Privacy Mode Active</span>
              </div>
              <span className="text-[10px] text-cyan-400 uppercase tracking-widest font-bold">100% Local</span>
            </div>
          </motion.div>

          {/* Card 3: Graph Generation (Col-span 5) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-5 glass-panel rounded-2xl p-8 relative overflow-hidden border-glow-hover flex flex-col justify-between min-h-[380px]"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-white mb-2">
                Turn Data Into Insights
              </h3>
              <p className="text-sm text-slate-400 mb-6">
                Build beautiful visualizations directly from calculation sheets. Supported formats include bar charts, line graphs, and histograms with smart automatic column matching.
              </p>
            </div>

            {/* Mini Graph Simulator Mockup */}
            <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-900 relative h-32 overflow-hidden flex items-end justify-between">
              <div className="absolute top-2 left-3 text-[9px] text-slate-500 uppercase tracking-widest font-semibold">Active Visualization</div>
              <div className="w-[12%] h-[60%] bg-blue-600/35 rounded-t border-t border-blue-400"></div>
              <div className="w-[12%] h-[40%] bg-cyan-500/35 rounded-t border-t border-cyan-400"></div>
              <div className="w-[12%] h-[80%] bg-blue-600/40 rounded-t border-t border-blue-400"></div>
              <div className="w-[12%] h-[55%] bg-cyan-500/40 rounded-t border-t border-cyan-400"></div>
              <div className="w-[12%] h-[95%] bg-gradient-to-t from-blue-600/40 to-cyan-500/40 rounded-t border-t border-cyan-400"></div>
            </div>
          </motion.div>

          {/* Card 4: Excel Compatibility (Col-span 7) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-7 glass-panel rounded-2xl p-8 relative overflow-hidden border-glow-hover flex flex-col justify-between min-h-[380px]"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-600/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-white mb-2">
                Compatible With Your Existing Workflow
              </h3>
              <p className="text-sm text-slate-400 mb-6">
                No vendor lock-in. Seamlessly save your calculations as standard Excel (.xlsx) files or export CSV formats. Worksheets open directly in Microsoft Excel and similar professional software.
              </p>
            </div>

            {/* Export Mockup UI */}
            <div className="bg-slate-950/80 rounded-xl p-3 border border-slate-900 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-200">monthly_finance_audit.xlsx</div>
                  <div className="text-[10px] text-slate-500">Excel Spreadsheet File • 48 KB</div>
                </div>
              </div>
              <span className="px-2.5 py-1 text-[10px] font-semibold text-green-400 bg-green-500/10 rounded-full border border-green-500/20">
                Ready to Open in Excel
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
