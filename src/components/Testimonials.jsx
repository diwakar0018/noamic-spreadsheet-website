import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const reviews = [
    {
      quote: "Creating project spreadsheets now takes minutes instead of hours. The offline AI is an absolute game-changer for class assignments.",
      author: "Elena Rostova",
      role: "Graduate Student",
      category: "Education",
      avatarInitials: "ER",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      quote: "The AI assistance helps me organize student data quickly. I just type 'make table for roll numbers' and the grading sheets format themselves.",
      author: "Marcus Vance",
      role: "Secondary School Teacher",
      category: "Teacher",
      avatarInitials: "MV",
      gradient: "from-cyan-500 to-teal-400"
    },
    {
      quote: "The graph generation saves significant time. Being able to bind columns dynamically to axes through conversation is incredibly efficient.",
      author: "Sarah Jenkins",
      role: "Lead Financial Analyst",
      category: "Finance",
      avatarInitials: "SJ",
      gradient: "from-blue-600 to-indigo-500"
    },
    {
      quote: "Offline access and Excel compatibility make it perfect for my small business. Our bookkeeping details remain locally secure, yet easily exportable.",
      author: "David K.",
      role: "Boutique Agency Owner",
      category: "Business",
      avatarInitials: "DK",
      gradient: "from-purple-500 to-pink-500"
    }
  ]

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900/60">
      {/* Glow backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial-glow pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-500 text-xs uppercase tracking-widest font-extrabold block mb-2">User Feedback</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Tested & Trusted by Modern Builders
          </h2>
          <p className="text-base text-slate-400">
            Hear from the students, teachers, analysts, and business owners who have upgraded their calculating routines.
          </p>
        </div>

        {/* Grid of Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.author}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-panel p-8 rounded-2xl border border-slate-900 hover:border-slate-800 transition-all flex flex-col justify-between relative group"
            >
              {/* Quote Mark SVG */}
              <div className="absolute right-6 top-6 text-slate-900 group-hover:text-blue-500/5 transition-colors">
                <Quote className="w-12 h-12 stroke-[1.5]" />
              </div>

              <div>
                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                <p className="text-slate-300 italic text-sm leading-relaxed mb-6 relative z-10">
                  "{rev.quote}"
                </p>
              </div>

              {/* User info */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-900/60">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${rev.gradient} flex items-center justify-center font-display font-bold text-xs text-white uppercase`}>
                  {rev.avatarInitials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-none mb-1">{rev.author}</h4>
                  <div className="text-[11px] text-slate-500 font-semibold">{rev.role} • <span className="text-blue-500">{rev.category}</span></div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
