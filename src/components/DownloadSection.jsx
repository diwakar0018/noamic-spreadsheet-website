import React from 'react'
import { motion } from 'framer-motion'
import { Download, Monitor, CheckCircle2, ShieldAlert, Cpu } from 'lucide-react'

export default function DownloadSection() {
  const specs = [
    { label: 'Version Number', val: '1.2.0-stable' },
    { label: 'Release Date', val: 'June 02, 2026' },
    { label: 'File Size', val: '48.2 MB' },
    { label: 'Offline Support', val: '100% Local Processing' },
    { label: 'Compatibility', val: 'Microsoft Excel (.xlsx)' },
  ]

  const directDownloadUrl = "https://drive.google.com/file/d/1w0Kmb8xuOPc4qpGnK4TS32-nANwHstKd/view?usp=sharing"

  return (
    <section id="download" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900/60">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial-glow pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="glass-panel rounded-3xl p-8 md:p-12 border border-slate-900 bg-radial-glow shadow-2xl relative overflow-hidden">
          
          {/* Subtle design accent lines */}
          <div className="absolute top-0 right-0 w-24 h-24 border-r border-t border-blue-500/20 rounded-tr-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 border-l border-b border-blue-500/20 rounded-bl-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            
            {/* Download Info (Col-span 7) */}
            <div className="md:col-span-7">
              <span className="text-blue-500 text-xs uppercase tracking-widest font-extrabold block mb-3">Get Started Today</span>
              
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
                Download NOAMIC Spreadsheet
              </h2>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Experience modern spreadsheet productivity powered by OMNI A.I. Runs directly on your Windows desktop with 100% local confidentiality.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={directDownloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-755 text-white font-semibold shadow-lg shadow-blue-600/20 hover:shadow-blue-600/35 transition-all"
                >
                  <Download className="w-5 h-5" />
                  Download for Windows
                </a>
                
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-semibold transition-all"
                >
                  Download Latest Version
                </a>
              </div>

              {/* Security Banner */}
              <div className="flex items-center gap-3 text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                <span className="text-xs">SHA-256 verified build • 100% Malware-Free & Signed Installer</span>
              </div>
            </div>

            {/* Software Spec Card (Col-span 5) */}
            <div className="md:col-span-5">
              <div className="bg-slate-950/80 rounded-2xl border border-slate-900 p-6 shadow-inner relative overflow-hidden">
                <div className="scan-line absolute inset-x-0 top-0 h-1.5 opacity-50"></div>
                
                <div className="flex items-center gap-3 border-b border-slate-900 pb-4 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Monitor className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">System Installer</h4>
                    <span className="text-[10px] text-slate-500">Windows 10 / 11 (64-bit)</span>
                  </div>
                </div>

                {/* Specs List */}
                <div className="space-y-3">
                  {specs.map((spec) => (
                    <div key={spec.label} className="flex justify-between items-center text-xs">
                      <span className="text-slate-500">{spec.label}</span>
                      <span className="font-mono text-slate-300 font-semibold">{spec.val}</span>
                    </div>
                  ))}
                </div>

                {/* Local Engine Note */}
                <div className="mt-5 p-3 rounded-lg bg-blue-950/30 border border-blue-500/10 flex items-start gap-2.5">
                  <Cpu className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-[10px] text-slate-400 leading-normal">
                    Includes OMNI local core binaries and pre-compiled SQLite computation runtimes. No database configuration required.
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
