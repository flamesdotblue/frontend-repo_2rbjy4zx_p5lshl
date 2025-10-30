import React from 'react'
import { Cpu, Activity, Layers, Database, Shield, Server } from 'lucide-react'

const features = [
  {
    title: 'Asynchronous Orchestration',
    desc: 'Offload heavy work to distributed workers so the app stays snappy and reliable.',
    icon: Cpu,
  },
  {
    title: 'Real-time Feedback',
    desc: 'Live logs, progress, and metrics streamed over WebSockets for instant insights.',
    icon: Activity,
  },
  {
    title: 'Modular Model Registry',
    desc: 'Plug-and-play models. Drop a folder to add new analyze, clean, and train flows.',
    icon: Layers,
  },
  {
    title: 'Persistent Storage',
    desc: 'Backed by a robust SQL database with secure, isolated run directories.',
    icon: Database,
  },
  {
    title: 'Secure by Default',
    desc: 'JWT-protected APIs and authenticated WebSocket rooms per user and run.',
    icon: Shield,
  },
  {
    title: 'Scalable Architecture',
    desc: 'Horizontally scale workers and messaging to handle parallel training jobs.',
    icon: Server,
  },
]

const FeatureCard = ({ title, desc, Icon }) => (
  <div className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
    <div className="flex items-center gap-3">
      <div className="rounded-lg bg-purple-50 p-2 ring-1 ring-purple-100">
        <Icon className="h-5 w-5 text-purple-600" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
    </div>
    <p className="mt-3 text-slate-600 text-sm leading-relaxed">{desc}</p>
  </div>
)

const FeatureGrid = () => {
  return (
    <section id="features" className="py-14 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Why ML LearnLab
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            A learning-first platform that reveals the full ML lifecycle — analysis, cleaning,
            configuration, training, and interpretation — with transparency and control.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <FeatureCard key={f.title} title={f.title} desc={f.desc} Icon={f.icon} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureGrid
