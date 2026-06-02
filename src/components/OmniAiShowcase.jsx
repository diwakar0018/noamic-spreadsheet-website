import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cpu, Send, CheckCircle, Database, Shield, Zap, Sparkles } from 'lucide-react'

export default function OmniAiShowcase() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      title: '1. Create via Conversation',
      prompt: 'make spreadsheet and columns Name, Class, Marks, Roll no.',
      response: 'Created a new spreadsheet with columns: Name, Class, Marks, Roll no.',
      image: '/screenshots/spreadsheet-main.png',
      desc: 'Instruct the built-in OMNI AI in plain English. It creates columns, structures tables, and populates data instantly without manual cell editing.'
    },
    {
      title: '2. Perform Complex Actions',
      prompt: 'make bar graph',
      response: 'Opening Select Column window to bind data to visual axes...',
      image: '/screenshots/spreadsheet-ai-chat.png',
      desc: 'Ask OMNI to perform complex tasks like graphing. It scans your worksheet rows and prompts you with options in real time.'
    }
  ]

  const capabilities = [
    'Create structured tables using natural language instructions',
    'Apply formulas automatically based on your column contexts',
    'Generate charts and filter rows dynamically via chat commands',
    'Organize and format cell contents (bolding, sorting, coloring)',
    '100% Offline execution for local calculations and database reads',
  ]

  return (
    <section id="omni-ai" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900/60">
      {/* Glow backgrounds */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Feature Description */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-6">
              <Cpu className="w-3.5 h-3.5" />
              <span>Built-in OMNI A.I. Assistant</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Meet OMNI A.I.
            </h2>
            <p className="text-lg text-blue-300 font-semibold mb-6">
              Create spreadsheets through simple conversation.
            </p>
            <p className="text-slate-400 mb-8 text-sm leading-relaxed">
              OMNI is a local, privacy-first intelligence agent integrated directly into the desktop workspace. Build schemas, calculate formulas, and organize data sheets by simply explaining what you want.
            </p>

            {/* List of capabilities */}
            <div className="space-y-4 mb-8">
              {capabilities.map((cap, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm text-slate-300">{cap}</span>
                </div>
              ))}
            </div>

            {/* Offline notification card */}
            <div className="p-4 rounded-xl glass-panel border-cyan-500/10 flex items-start gap-4">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">Local & Offline First</h4>
                <p className="text-xs text-slate-500 leading-normal">
                  Most AI functions run directly on your hardware. Internet connectivity is only required for premium cloud LLM operations.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Conversational Showcase with Screenshots */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* Steps Navigation Bar */}
            <div className="flex bg-slate-900/60 p-1.5 rounded-xl border border-slate-900 w-full max-w-[500px] mb-6">
              {steps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-all ${
                    activeStep === idx 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
                  }`}
                >
                  {step.title}
                </button>
              ))}
            </div>

            {/* Showcase Viewport */}
            <div className="w-full max-w-[580px] rounded-xl overflow-hidden glass-panel border border-slate-800 shadow-2xl relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Mock Window Title Bar */}
                  <div className="bg-slate-950 px-4 py-2.5 flex items-center justify-between border-b border-slate-900">
                    <div className="flex items-center space-x-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-800"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-800"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-800"></span>
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono">
                      OMNI AI Chat Log Session
                    </div>
                    <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                  </div>

                  {/* Conversation Chat simulation */}
                  <div className="bg-slate-950/40 p-4 border-b border-slate-900">
                    <div className="space-y-3">
                      {/* User Input Bubble */}
                      <div className="flex items-start justify-end gap-2.5">
                        <div className="bg-blue-600/10 border border-blue-500/20 px-3.5 py-2 rounded-2xl rounded-tr-none text-xs text-blue-200 font-medium">
                          {steps[activeStep].prompt}
                        </div>
                        <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white shrink-0">
                          You
                        </div>
                      </div>
                      
                      {/* AI Response Bubble */}
                      <div className="flex items-start gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                          <Cpu className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div className="bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-2xl rounded-tl-none text-xs text-slate-300 font-medium">
                          <span className="text-cyan-400 font-semibold block mb-0.5">OMNI AI</span>
                          {steps[activeStep].response}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Screenshot Image Container */}
                  <div className="relative aspect-[1.48/1] overflow-hidden bg-slate-950">
                    <img 
                      src={steps[activeStep].image} 
                      alt="OMNI AI screenshot interaction"
                      className="w-full h-full object-cover opacity-90"
                    />
                    
                    {/* Dark gradient shadow inside */}
                    <div className="absolute inset-0 shadow-inner pointer-events-none"></div>
                  </div>

                  {/* Step Description Bar */}
                  <div className="p-5 bg-slate-950/80 border-t border-slate-900">
                    <p className="text-xs text-slate-400 leading-relaxed font-medium">
                      {steps[activeStep].desc}
                    </p>
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
