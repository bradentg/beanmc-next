import React from 'react'
import TableOfContents from '../../../components/nav/tableofcontents'
import ScrollSection from '../../../components/scroll-section'
import FirstDay from '../../../components/gettingstarted/sections/firstday'
import Progression from '../../../components/gettingstarted/sections/progression'
import Building from '../../../components/gettingstarted/sections/building'
import Exploration from '../../../components/gettingstarted/sections/exploration'
import Transportation from '../../../components/gettingstarted/sections/transportation'
import OtherTips from '../../../components/gettingstarted/sections/othertips'

const HomePage = (): React.JSX.Element => {
  const sections = [
    { id: 'intro', title: '💡 Introduction' },
    { id: 'firstday', title: '🌄 Your First Day' },
    { id: 'progression', title: '📈 Progression' },
    { id: 'building', title: '⚒️ Building' },
    { id: 'exploration', title: '🗺️ Exploration' },
    { id: 'transportation', title: '🧹 Transportation' },
    { id: 'othertips', title: '✍️ Other Tips' }
  ]

  return (
    <div className="flex">
      <div className="w-1/5">
        <TableOfContents sections={sections} />
      </div>
      <div className="w-3/5 space-y-10">
        <div className="text-5xl text-purple-300">
          Beanpack 3: Wizards and Wheels
        </div>
        <ScrollSection id={sections[0].id} title={sections[0].title}>
          This will be the lore introduction for Beanpack 3.
        </ScrollSection>

        <ScrollSection id={sections[1].id} title={sections[1].title}>
          <FirstDay />
        </ScrollSection>

        <ScrollSection id={sections[2].id} title={sections[2].title}>
          <Progression />
        </ScrollSection>

        <ScrollSection id={sections[3].id} title={sections[3].title}>
          <Building />
        </ScrollSection>

        <ScrollSection id={sections[4].id} title={sections[4].title}>
          <Exploration />
        </ScrollSection>

        <ScrollSection id={sections[5].id} title={sections[5].title}>
          <Transportation />
        </ScrollSection>

        <ScrollSection id={sections[6].id} title={sections[6].title}>
          <OtherTips />
        </ScrollSection>
      </div>
      <div className="w-1/5"></div>
    </div>
  )
}

export default HomePage
