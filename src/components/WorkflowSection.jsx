import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileSpreadsheet, PlusCircle, AlignLeft, BarChart2, Download, ArrowRight, Monitor } from 'lucide-react'

export default function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      title: 'Create Spreadsheet',
      subtitle: 'Conversation-driven structure',
      icon: PlusCircle,
      desc: 'Type natural language commands in the OMNI chat assistant. The app instantly defines columns like Name, Class, Marks, and Roll No., and creates a clean spreadsheet grid.',
      image: '/screenshots/spreadsheet-main.png',
      detailBadge: 'OMNI AI Input'
    },
    {
      title: 'Add & Edit Data',
      subtitle: 'Automated cell entry',
      icon: FileSpreadsheet,
      desc: 'Watch as data rows are generated and ordered. The spreadsheet displays individual index items, cell entries, and allows direct manipulation like Excel.',
      image: '/screenshots/noamic-created-sheet.png',
      detailBadge: 'Structured Data Grid'
    },
    {
      title: 'Apply Formatting',
      subtitle: 'Productivity without complexity',
      icon: AlignLeft,
      desc: 'Use high-fidelity one-click actions to Bold, Italicize, Underline, and Align columns. Manage row/column additions and sort scores with no programming needed.',
      image: '/screenshots/noamic-data-formatting.png',
      detailBadge: 'Formatting Toolbar'
    },
    {
      title: 'Generate Graph',
      subtitle: 'Data to visual insights',
      icon: BarChart2,
      desc: 'Type "make bar graph". OMNI launches the column selector dialogue to bind axes (e.g. X-axis Categories to Name). Generates bar charts, line graphs, or histograms.',
      image: '/screenshots/noamic-graph-generation.png',
      extraImage: '/screenshots/noamic-column-selection.png',
      detailBadge: 'AI Graph & Binding Window'
    },
    {
      title: 'Export Excel',
      subtitle: 'Seamless integration',
      icon: Download,
      desc: 'Save your work directly in Excel (.xlsx) or CSV format. Maintain perfect compatibility with external workflows and team members on Microsoft 365.',
      image: '/screenshots/noamic-app-export.png',
      detailBadge: 'File Export Dialog'
    }
  ]

  return (
    <section id="workflow" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900/60">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-500 text-xs uppercase tracking-widest font-extrabold block mb-2">Step-by-Step Walkthrough</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Product Tour: Zero to Insight in Seconds
          </h2>
          <p className="text-base text-slate-400">
            See how NOAMIC Spreadsheet replaces complexity with simple workflows. Follow our workflow tour below to explore the desktop application.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-slate-900/40 p-2.5 rounded-2xl border border-slate-900 gap-2 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon
            const isActive = activeStep === idx
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`w-full flex items-center gap-3 py-3 px-4 rounded-xl text-left transition-all ${
                  isActive 
                    ? 'bg-blue-600/10 border border-blue-500/45 text-white' 
                    : 'border border-transparent text-slate-400 hover:text-white hover:bg-slate-900/40'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isActive ? 'bg-blue-600 text-white' : 'bg-slate-950 border border-slate-800 text-slate-500'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold font-display">{step.title}</div>
                  <div className="text-[10px] text-slate-500 font-semibold">{step.subtitle}</div>
                </div>
              </button>
            )
          })}
        </div>

        {/* Dynamic Display Panel */}
        <div className="glass-panel rounded-3xl p-8 border border-slate-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Step Left: Narrative info */}
            <div className="lg:col-span-5">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-extrabold uppercase tracking-wider text-blue-400 mb-6 inline-block">
                Step 0{activeStep + 1} • {steps[activeStep].detailBadge}
              </span>
              
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
                {steps[activeStep].title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {steps[activeStep].desc}
              </p>

              <div className="flex items-center gap-4">
                {activeStep < steps.length - 1 ? (
                  <button 
                    onClick={() => setActiveStep(activeStep + 1)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Next workflow step
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <a 
                    href="#download"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Try it yourself now
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Step Right: Screenshot Showcase inside Laptop/Desktop window */}
            <div className="lg:col-span-7 flex justify-center relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.98, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="w-full relative"
                >
                  {/* Desktop Frame Mockup */}
                  <div className="w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl relative">
                    
                    {/* Window Controls header */}
                    <div className="bg-slate-950/80 px-4 py-3 flex items-center justify-between border-b border-slate-900">
                      <div className="flex items-center space-x-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-mono">
                        <Monitor className="w-3.5 h-3.5 text-slate-600" />
                        NOAMIC Desktop
                      </div>
                      <div className="w-12"></div>
                    </div>

                    {/* Screenshot Frame Area */}
                    <div className="relative aspect-[1.48/1] bg-slate-950 flex items-center justify-center overflow-hidden">
                      <img 
                        src={steps[activeStep].image} 
                        alt={steps[activeStep].title}
                        className="w-full h-full object-cover"
                      />

                      {/* Optional Overlay Image for binding popups */}
                      {steps[activeStep].extraImage && (
                        <motion.div
                          initial={{ opacity: 0, y: 20, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ delay: 0.3 }}
                          className="absolute bottom-6 left-6 max-w-[200px] rounded-lg shadow-2xl border border-blue-500/40 overflow-hidden"
                        >
                          <img 
                            src={steps[activeStep].extraImage} 
                            alt="Select column modal popup dialog"
                            className="w-full object-cover"
                          />
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
