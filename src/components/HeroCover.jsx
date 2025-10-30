import React from 'react'
import Spline from '@splinetool/react-spline'
import { Rocket, Upload, LineChart } from 'lucide-react'

const HeroCover = () => {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for readability (won't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-center">
        <div className="backdrop-blur-[2px]">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm text-slate-700 shadow-sm">
            <Rocket className="h-4 w-4 text-purple-600" />
            <span>Interactive ML Workflow Platform</span>
          </div>

          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            ML LearnLab
          </h1>
          <p className="mt-3 md:mt-4 max-w-2xl text-base md:text-lg text-slate-700">
            Learn machine learning by doing. Upload your data, watch real-time analysis,
            clean with interactive feedback, configure models, and see training unfold live.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#workflow"
              className="inline-flex items-center gap-2 rounded-lg bg-purple-600 text-white px-4 py-2 font-medium shadow hover:bg-purple-700 transition-colors"
            >
              <Upload className="h-4 w-4" />
              Start a Run
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-lg bg-white text-slate-800 px-4 py-2 font-medium shadow border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              <LineChart className="h-4 w-4 text-purple-600" />
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroCover
