import React from 'react'
import { User, FolderPlus, Layers, Upload, Search, Wand2, Settings, PlayCircle, LineChart, FileCheck2 } from 'lucide-react'

const steps = [
  {
    title: 'Authenticate & Create Task',
    desc: 'Sign up or log in. Create a new project task to organize your experiment.',
    icon: User,
  },
  {
    title: 'Pick a Model',
    desc: 'Browse the registry: Random Forest, CNNs, Transformers, and more.',
    icon: Layers,
  },
  {
    title: 'Upload Data',
    desc: 'Guided requirements per model (CSV, image ZIP, text). Files are isolated per run.',
    icon: Upload,
  },
  {
    title: 'Live Analysis',
    desc: 'Kick off analysis and watch structure, stats, and quality issues appear in real time.',
    icon: Search,
  },
  {
    title: 'Interactive Cleaning',
    desc: 'Impute, scale, and encode with immediate, visual feedback and preview tables.',
    icon: Wand2,
  },
  {
    title: 'Configure Model',
    desc: 'Dynamic forms from each model’s config manifest. Choose target, hyperparameters.',
    icon: Settings,
  },
  {
    title: 'Train Live',
    desc: 'Follow progress bars and charts streaming metrics from workers as they learn.',
    icon: PlayCircle,
  },
  {
    title: 'Results & Insights',
    desc: 'Review metrics, curves, and an educational summary. Download artifacts.',
    icon: LineChart,
  },
]

const Step = ({ Icon, title, desc, index }) => (
  <div className="relative pl-10">
    <div className="absolute left-0 top-1.5 flex items-center justify-center h-7 w-7 rounded-full bg-purple-600 text-white text-sm font-semibold shadow-sm">
      {index}
    </div>
    <div className="flex items-start gap-3">
      <Icon className="h-5 w-5 text-purple-600 mt-1" />
      <div>
        <h3 className="text-base md:text-lg font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600 mt-1">{desc}</p>
      </div>
    </div>
  </div>
)

const WorkflowShowcase = () => {
  return (
    <section id="workflow" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">The Guided Workflow</h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            From upload to results — every step is observable, instructive, and repeatable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {steps.slice(0, 4).map((s, i) => (
              <Step key={s.title} Icon={s.icon} title={s.title} desc={s.desc} index={i + 1} />
            ))}
          </div>
          <div className="space-y-6">
            {steps.slice(4).map((s, i) => (
              <Step key={s.title} Icon={s.icon} title={s.title} desc={s.desc} index={i + 5} />
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <FileCheck2 className="h-4 w-4 text-green-600" />
            Built for concurrency, fault-tolerance, and clarity — perfect for classrooms and self-paced learning.
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkflowShowcase
