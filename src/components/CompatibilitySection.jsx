import React from 'react'
import { motion } from 'framer-motion'
import { FileSpreadsheet, CheckCircle, RefreshCcw, ArrowRight, Laptop } from 'lucide-react'

export default function CompatibilitySection() {
  const compatibilities = [
    'Export spreadsheets natively to .xlsx file format',
    'Open and read files directly in Microsoft Excel & Office 365',
    'Export data sheets in fast, lightweight comma-separated (.csv) formats',
    'Preserve standard sheet tabs, cell ranges, styles, and arithmetic calculations',
    'Maintain structural compatibility with corporate database systems',
  ]

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900/60">
      {/* Background Gradients */}
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[90px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-6">
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>Full Worksheets Interoperability</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Compatible With Your Existing Workflow
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              No need to retrain or migrate databases. NOAMIC Spreadsheet fits directly into your daily processes, exporting standard files that work out of the box in Microsoft Excel.
            </p>

            <div className="space-y-4 mb-8">
              {compatibilities.map((text, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm text-slate-300">{text}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2.5 p-4 rounded-xl bg-slate-900/50 border border-slate-900">
              <RefreshCcw className="w-5 h-5 text-blue-400 shrink-0 animate-spin-slow" />
              <p className="text-xs text-slate-500 leading-normal">
                Bi-directional sync ensures you can import existing Excel files, edit them using OMNI AI offline, and save them back.
              </p>
            </div>
          </div>

          {/* Right Column: Screenshot Showcase */}
          <div className="lg:col-span-7 flex justify-center">
            
            {/* Desktop Mockup container containing noamic-app-export.png */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-[540px] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl relative"
            >
              {/* Header */}
              <div className="bg-slate-950 px-4 py-3 flex items-center justify-between border-b border-slate-900">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-800"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-800"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-800"></span>
                </div>
                <div className="text-[10px] text-slate-500 font-mono flex items-center gap-1">
                  <Laptop className="w-3 h-3" />
                  Save / Export File Dialog
                </div>
                <div className="w-8"></div>
              </div>

              {/* Viewport Containing Screenshot */}
              <div className="relative aspect-[1.48/1] overflow-hidden bg-slate-950 flex items-center justify-center">
                <img 
                  src="/screenshots/noamic-app-export.png" 
                  alt="NOAMIC Spreadsheet Excel export dialogue screenshot"
                  className="w-full h-full object-cover opacity-90"
                />

                {/* Overlaid Badges for Excel and CSV */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="px-2.5 py-1 text-[10px] font-bold text-white bg-green-600/90 rounded-md border border-green-500/25 flex items-center gap-1 shadow-lg">
                    <span>XLSX</span>
                  </span>
                  <span className="px-2.5 py-1 text-[10px] font-bold text-white bg-slate-800/90 rounded-md border border-slate-700/50 flex items-center gap-1 shadow-lg">
                    <span>CSV</span>
                  </span>
                </div>
              </div>

              {/* Bottom detail footer */}
              <div className="p-4 bg-slate-950 border-t border-slate-900 flex items-center justify-between">
                <div className="text-[11px] text-slate-400 font-semibold">Active File: monthly_marks_report.xlsx</div>
                <div className="text-[10px] text-green-400 font-bold flex items-center gap-1 bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20">
                  Save Successful
                </div>
              </div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  )
}
