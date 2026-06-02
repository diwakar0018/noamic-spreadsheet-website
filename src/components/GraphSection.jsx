import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BarChart, LineChart, PieChart, Sparkles, Cpu, MousePointerClick } from 'lucide-react'

export default function GraphSection() {
  const [activeChartTab, setActiveChartTab] = useState('bar')
  const [step, setStep] = useState(0)

  // Auto loop through workflow steps for visual demo
  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 3)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  const charts = [
    { id: 'bar', label: 'Bar Chart', icon: BarChart },
    { id: 'line', label: 'Line Graph', icon: LineChart },
    { id: 'histogram', label: 'Histogram', icon: PieChart }
  ]

  // Data for the animated charts
  const barData = [
    { label: 'Diwakar', val: 85, color: '#3b82f6' },
    { label: 'Adi', val: 33, color: '#60a5fa' },
    { label: 'Dev', val: 85, color: '#2563eb' },
    { label: 'Diya', val: 63, color: '#06b6d4' },
    { label: 'Akshat', val: 72, color: '#22d3ee' }
  ]

  const lineData = [10, 45, 23, 85, 52, 90, 70]

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900/60">
      {/* Decorative Radial Grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-radial-glow-cyan pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Visual workflow mockup representing the actual images */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            
            {/* The Simulation Box */}
            <div className="w-full max-w-[500px] rounded-2xl overflow-hidden glass-panel border border-slate-800 shadow-2xl relative bg-slate-950/80">
              
              {/* Header */}
              <div className="bg-slate-950 px-4 py-3 flex items-center justify-between border-b border-slate-900">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                </div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Smart Graph Workflow</div>
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              </div>

              {/* Simulation States */}
              <div className="p-6 h-[340px] flex flex-col justify-between">
                
                {/* State 0: Command Typing */}
                {step === 0 && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4 flex-1 flex flex-col justify-center"
                  >
                    <div className="text-xs text-slate-500 uppercase font-mono">1. User Inputs Command</div>
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-mono text-[9px] font-bold">You</div>
                        <span className="text-xs font-mono text-slate-200">make bar graph</span>
                      </div>
                      <span className="w-1.5 h-4 bg-blue-500 animate-pulse"></span>
                    </div>
                    <p className="text-xs text-slate-400 italic">
                      The user commands OMNI AI to build a bar visualization of marks.
                    </p>
                  </motion.div>
                )}

                {/* State 1: Selector Window (Mimics spreadsheet-select-column.png) */}
                {step === 1 && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4 flex-1 flex flex-col justify-center"
                  >
                    <div className="text-xs text-slate-500 uppercase font-mono">2. Axis Mapping (Select Column Dialog)</div>
                    <div className="bg-slate-900 border border-blue-500/30 rounded-xl p-4 shadow-xl max-w-[320px] mx-auto w-full relative">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
                        <span className="text-xs font-bold text-slate-200">Select Column</span>
                        <span className="text-[10px] text-slate-500">❌</span>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <label className="text-[10px] font-semibold text-slate-400 block mb-1">X-axis (Categories):</label>
                          <div className="bg-slate-950 border border-slate-850 px-2.5 py-1.5 rounded text-xs text-white font-mono flex justify-between items-center">
                            <span>Name</span>
                            <span className="text-[8px]">▼</span>
                          </div>
                        </div>

                        <div className="flex justify-end gap-2 pt-2">
                          <button className="px-3 py-1 bg-slate-800 text-[10px] rounded text-slate-300">Cancel</button>
                          <button className="px-3 py-1 bg-blue-600 text-[10px] rounded text-white font-semibold flex items-center gap-1">
                            Generate <MousePointerClick className="w-2.5 h-2.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* State 2: Resulting Chart */}
                {step === 2 && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4 flex-1 flex flex-col justify-center"
                  >
                    <div className="text-xs text-slate-500 uppercase font-mono">3. Output Generated Instantly</div>
                    
                    {/* SVG Chart visualization */}
                    <div className="flex items-end justify-between h-36 px-4 bg-slate-900/60 rounded-xl p-3 border border-slate-900">
                      {barData.map((bar, idx) => (
                        <div key={idx} className="flex flex-col items-center w-[15%]">
                          <motion.div 
                            initial={{ height: 0 }}
                            animate={{ height: `${bar.val * 0.9}px` }}
                            transition={{ duration: 0.6, type: 'spring' }}
                            className="w-full rounded-t"
                            style={{ backgroundColor: bar.color }}
                          ></motion.div>
                          <span className="text-[8px] text-slate-500 font-mono mt-1">{bar.label}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Progress Indicators */}
                <div className="flex justify-center space-x-1.5 mt-4">
                  {[0, 1, 2].map((s) => (
                    <button
                      key={s}
                      onClick={() => setStep(s)}
                      className={`h-1.5 rounded-full transition-all ${step === s ? 'w-6 bg-cyan-400' : 'w-1.5 bg-slate-800'}`}
                    ></button>
                  ))}
                </div>

              </div>

            </div>

          </div>

          {/* Right Column: Title and Details */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-6">
              <BarChart className="w-3.5 h-3.5" />
              <span>Native Graph Generation</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Turn Data Into Insights
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Forget exporting data sets to complex third-party BI software. Generate, configure, and display visual plots directly inside your primary workspace sheet. 
            </p>

            {/* Custom chart tabs selector for preview */}
            <div className="flex bg-slate-900/50 p-1 rounded-xl border border-slate-900 mb-6">
              {charts.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveChartTab(tab.id)}
                    className={`flex items-center justify-center gap-2 flex-1 py-2 text-xs font-bold rounded-lg transition-colors ${
                      activeChartTab === tab.id 
                        ? 'bg-blue-600/15 border border-blue-500/35 text-white' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Icon className="w-4.5 h-4.5" />
                    {tab.label}
                  </button>
                )
              })}
            </div>

            {/* Dynamic interactive chart detail */}
            <div className="bg-slate-900/30 rounded-xl p-5 border border-slate-900">
              <AnimatePresence mode="wait">
                {activeChartTab === 'bar' && (
                  <motion.div
                    key="bar-details"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                  >
                    <h4 className="text-sm font-semibold text-white mb-1">Bar Charts</h4>
                    <p className="text-xs text-slate-500 leading-normal">
                      Perfect for categorical comparisons. OMNI automatically sets categories and binds series, rendering clean vector bars with customizable layout scales.
                    </p>
                  </motion.div>
                )}
                {activeChartTab === 'line' && (
                  <motion.div
                    key="line-details"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                  >
                    <h4 className="text-sm font-semibold text-white mb-1">Line Graphs</h4>
                    <p className="text-xs text-slate-500 leading-normal">
                      Ideal for plotting indices over time or sequential item values. Adjust stroke widths, smoothing curves, and grid indicators offline.
                    </p>
                  </motion.div>
                )}
                {activeChartTab === 'histogram' && (
                  <motion.div
                    key="hist-details"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                  >
                    <h4 className="text-sm font-semibold text-white mb-1">Histograms</h4>
                    <p className="text-xs text-slate-500 leading-normal">
                      Display distributions across custom score buckets. Essential for student testing logs, research stats, and financial reports.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
