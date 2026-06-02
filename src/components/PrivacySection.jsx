import React from 'react'
import { motion } from 'framer-motion'
import { Shield, EyeOff, WifiOff, HardDrive, Cpu, Database } from 'lucide-react'

export default function PrivacySection() {
  const benefits = [
    {
      title: 'No Mandatory Cloud Storage',
      desc: 'Save files locally on your own desktop folder system. No remote database storage is enforced.',
      icon: EyeOff,
    },
    {
      title: 'No Forced Internet Connection',
      desc: 'NOAMIC is designed to run 100% offline. Calculation logic and chat tools do not ping remote endpoints.',
      icon: WifiOff,
    },
    {
      title: 'Local File Control',
      desc: 'Open, edit, and write files directly in standard directories (.xlsx, .csv). You own the file systems.',
      icon: HardDrive,
    },
    {
      title: 'Fast Performance',
      desc: 'Zero latency caused by API networks. Operations compile instantly on local runtime systems.',
      icon: Cpu,
    },
    {
      title: 'User-Owned Data',
      desc: 'No telemetry or logging of spreadsheet entries is sent. Your records are entirely your property.',
      icon: Database,
    },
  ]

  return (
    <section id="privacy" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900/60">
      {/* Background neon orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>Privacy-First Desktop Architecture</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Your Data. Your Control.
          </h2>
          <p className="text-base text-slate-400">
            NOAMIC Spreadsheet runs entirely locally on your machine. You choose when, where, and how your calculation files are synchronized or saved.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Main big card */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-1 glass-panel rounded-2xl p-8 border border-blue-500/10 bg-radial-glow flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/35 flex items-center justify-center text-blue-400 mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                Security-First Calculations
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Modern spreadsheets shouldn't require you to upload proprietary financial models or private research data to third-party databases. NOAMIC preserves traditional computing security.
              </p>
            </div>
            
            <div className="pt-4 border-t border-slate-900">
              <span className="text-[10px] text-slate-500 uppercase tracking-widest block mb-1">Local encryption</span>
              <span className="text-xs font-mono font-bold text-blue-300">SQLite AES-256 Native</span>
            </div>
          </motion.div>

          {/* Sub benefits grid */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.slice(0, 4).map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="glass-panel p-6 rounded-xl border border-slate-900 hover:border-slate-800 transition-all flex gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-850 flex items-center justify-center text-blue-500 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1.5">{item.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>

        </div>

        {/* Big Trust Bar */}
        <div className="mt-12 p-6 rounded-2xl glass-card-blue border border-blue-500/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center text-cyan-400">
              <Shield className="w-5 h-5" />
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-sm font-semibold text-slate-200">Regulatory Compliant by Default</h4>
              <p className="text-xs text-slate-500">Perfect for medical, financial, and educational data subject to strict offline regulations (HIPAA, GDPR, CCPA).</p>
            </div>
          </div>
          <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-bold shrink-0">
            Offline Compliance Guard
          </span>
        </div>

      </div>
    </section>
  )
}
