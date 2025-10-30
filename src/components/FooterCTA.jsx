import React from 'react'
import { Rocket } from 'lucide-react'

const FooterCTA = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 to-purple-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs">
              <Rocket className="h-4 w-4 text-purple-300" />
              <span>Learn by Doing</span>
            </div>
            <h3 className="mt-3 text-2xl font-bold">Ready to launch your first ML run?</h3>
            <p className="mt-1 text-white/80 max-w-xl">
              Spin up a project, pick a model, and see your data come to life with real-time insights.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-4 py-2 font-medium shadow hover:bg-slate-100 transition-colors"
            >
              Explore Features
            </a>
            <a
              href="#workflow"
              className="inline-flex items-center justify-center rounded-lg bg-purple-500 text-white px-4 py-2 font-medium shadow hover:bg-purple-600 transition-colors"
            >
              Start Now
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/70 flex flex-col md:flex-row justify-between gap-3">
          <p>© {new Date().getFullYear()} ML LearnLab. All rights reserved.</p>
          <p>Made for students, hobbyists, and future ML practitioners.</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterCTA
