import React from 'react'
import TableOfContents from '../../../components/nav/tableofcontents'
import FirstDay from '../../../components/gettingstarted/sections/firstday'
import Progression from '../../../components/gettingstarted/sections/progression'
import Building from '../../../components/gettingstarted/sections/building'

const HomePage = (): React.JSX.Element => {
  const sections = [
    { id: 'intro', title: 'Introduction' },
    { id: 'firstday', title: 'Your First Day' },
    { id: 'progression', title: 'Progression' },
    { id: 'building', title: 'Building' },
    { id: 'exploration', title: 'Exploration' }
  ]

  return (
    <div className="flex">
      <div className="w-1/5">
        <TableOfContents sections={sections} />
      </div>
      <div className="w-3/5 space-y-10">
        <section id="intro">
          <h1 className="text-3xl mb-5">Introduction</h1>
          This will be the lore introduction for Beanpack 3.
        </section>
        <section id="firstday">
          <h1 className="text-3xl mb-5">Your First Day</h1>
          <FirstDay />
        </section>
        <section id="progression">
          <h1 className="text-3xl mb-5">Progression</h1>
          <Progression />
        </section>
        <section id="building">
          <h1 className="text-3xl mb-5">Building</h1>
          <Building />
        </section>
      </div>
      <div className="w-1/5"></div>
    </div>
  )
}

export default HomePage
