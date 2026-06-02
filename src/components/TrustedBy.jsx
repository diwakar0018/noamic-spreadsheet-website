import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Award, Search, LineChart } from 'lucide-react'

export default function TrustedBy() {
  const groups = [
    { name: 'Students', desc: 'Create study trackers and automate project formulas.', icon: GraduationCap, color: 'from-blue-500/20 to-cyan-500/20' },
    { name: 'Professionals', desc: 'Manage workflows and operations offline with local security.', icon: Briefcase, color: 'from-blue-600/20 to-indigo-600/20' },
    { name: 'Teachers', desc: 'Organize student marks and generate histograms instantly.', icon: Award, color: 'from-purple-500/20 to-pink-500/20' },
    { name: 'Researchers', desc: 'Handle large data tables securely without internet requirements.', icon: Search, color: 'from-emerald-500/20 to-teal-500/20' },
    { name: 'Analysts', desc: 'Run regressions and build charts through conversational commands.', icon: LineChart, color: 'from-amber-500/20 to-orange-500/20' },
  ]

  return (
    <section className="py-12 bg-slate-950 border-t border-b border-slate-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-500 mb-8">
          Empowering Smarter Spreadsheet Workflows Across Fields
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {groups.map((group, idx) => {
            const Icon = group.icon
            return (
              <motion.div
                key={group.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-panel p-4 rounded-xl text-center group cursor-pointer hover:border-slate-800 transition-all flex flex-col items-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}></div>
                
                {/* Icon wrapper */}
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800/80 flex items-center justify-center text-slate-400 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-all mb-3">
                  <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </div>

                <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-blue-100 transition-colors">
                  {group.name}
                </h3>
                <p className="text-[11px] text-slate-500 leading-normal max-w-[120px]">
                  {group.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
