import React from 'react'
import TableOfContents from '../../../components/nav/tableofcontents'
import ScrollSection from '../../../components/scroll-section'
import FirstDay from '../../../components/gettingstarted/sections/firstday'
import Progression from '../../../components/gettingstarted/sections/progression'
import Building from '../../../components/gettingstarted/sections/building'
import Exploration from '../../../components/gettingstarted/sections/exploration'
import Transportation from '../../../components/gettingstarted/sections/transportation'

const HomePage = (): React.JSX.Element => {
  const sections = [
    { id: 'intro', title: 'Introduction' },
    { id: 'firstday', title: 'Your First Day' },
    { id: 'progression', title: 'Progression' },
    { id: 'building', title: 'Building' },
    { id: 'exploration', title: 'Exploration' },
    { id: 'transportation', title: 'Transportation' }
  ]

  return (
    <div className="flex">
      <div className="w-1/5">
        <TableOfContents sections={sections} />
      </div>
      <div className="w-3/5 space-y-10">
        <ScrollSection id="intro" title="💡 Introduction">
          This will be the lore introduction for Beanpack 3.
        </ScrollSection>

        <ScrollSection id="firstday" title="🌄 Your First Day">
          <FirstDay />
        </ScrollSection>

        <ScrollSection id="progression" title="📈 Progression">
          <Progression />
        </ScrollSection>

        <ScrollSection id="building" title="⚒️ Building">
          <Building />
        </ScrollSection>

        <ScrollSection id="exploration" title="🗺️ Exploration">
          <Exploration />
        </ScrollSection>

        <ScrollSection id="transportation" title="🧹 Transportation">
          <Transportation />
        </ScrollSection>
      </div>
      <div className="w-1/5"></div>
    </div>
  )
}

export default HomePage
