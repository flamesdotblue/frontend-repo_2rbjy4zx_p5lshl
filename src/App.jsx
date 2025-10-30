import React from 'react'
import HeroCover from './components/HeroCover'
import FeatureGrid from './components/FeatureGrid'
import WorkflowShowcase from './components/WorkflowShowcase'
import FooterCTA from './components/FooterCTA'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <HeroCover />
      <FeatureGrid />
      <WorkflowShowcase />
      <FooterCTA />
    </div>
  )
}

export default App
