import React from 'react'
import TableOfContents from '../../../components/nav/tableofcontents'
import ScrollSection from '../../../components/scroll-section'
import Wizardry from '../../../components/modlist/sections/wizardry'
import Wheelery from '../../../components/modlist/sections/wheelery'
import Farming from '../../../components/modlist/sections/farming'
import BuildingMods from '../../../components/modlist/sections/building-mods'
import ExplorationMods from '../../../components/modlist/sections/exploration-mods'
import Storage from '../../../components/modlist/sections/storage'
import QOL from '../../../components/modlist/sections/qol'
import Factions from '../../../components/modlist/sections/factions'
import World from '../../../components/modlist/sections/world'
import Performance from '../../../components/modlist/sections/performance'
import Extras from '../../../components/modlist/sections/extras'

const ModListPage = (): React.JSX.Element => {
  const sections = [
    { id: 'wizardry', title: '🧙‍♂️ Wizardry' },
    { id: 'wheelery', title: '🎡 Wheelery' },
    { id: 'farming', title: '🌽 Farming' },
    { id: 'building', title: '🏗️ Building & Decor' },
    { id: 'exploration', title: '🧭 Exploration' },
    { id: 'storage', title: '🧰 Tools & Storage' },
    { id: 'qol', title: '👒 QOL & Cosmetics' },
    { id: 'factions', title: '🏛️ Factions & Economy' },
    { id: 'world', title: '🌎 World' },
    { id: 'performance', title: '⚙️ Performance' },
    { id: 'extras', title: '✨ Extras' }
  ]

  return (
    <div className="flex">
      <div className="w-1/5">
        <TableOfContents sections={sections} />
      </div>
      <div className="w-3/5 space-y-10">
        <p>Click on a mod below to visit its CurseForge page.</p>
        <ScrollSection id={sections[0].id} title={sections[0].title}>
          <Wizardry />
        </ScrollSection>
        <ScrollSection id={sections[1].id} title={sections[1].title}>
          <Wheelery />
        </ScrollSection>
        <ScrollSection id={sections[2].id} title={sections[2].title}>
          <Farming />
        </ScrollSection>
        <ScrollSection id={sections[3].id} title={sections[3].title}>
          <BuildingMods />
        </ScrollSection>
        <ScrollSection id={sections[4].id} title={sections[4].title}>
          <ExplorationMods />
        </ScrollSection>
        <ScrollSection id={sections[5].id} title={sections[5].title}>
          <Storage />
        </ScrollSection>
        <ScrollSection id={sections[6].id} title={sections[6].title}>
          <QOL />
        </ScrollSection>
        <ScrollSection id={sections[7].id} title={sections[7].title}>
          <Factions />
        </ScrollSection>
        <ScrollSection id={sections[8].id} title={sections[8].title}>
          <World />
        </ScrollSection>
        <ScrollSection id={sections[9].id} title={sections[9].title}>
          <Performance />
        </ScrollSection>
        <ScrollSection id={sections[10].id} title={sections[10].title}>
          <Extras />
        </ScrollSection>
      </div>
      <div className="w-1/5"></div>
    </div>
  )
}

export default ModListPage
