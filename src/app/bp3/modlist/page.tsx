import React from 'react'
import TableOfContents from '../../../components/nav/tableofcontents'
import ScrollSection from '../../../components/scroll-section'
import ModItem from '../../../components/modlist/mod-item'

const HomePage = (): React.JSX.Element => {
  const sections = [
    { id: 'wizardry', title: '🧙‍♂️ Wizardry' },
    { id: 'wheelery', title: '🎡 Wheelery?' }
  ]

  return (
    <div className="flex">
      <div className="w-1/5">
        <TableOfContents sections={sections} />
      </div>
      <div className="w-3/5 space-y-10">
          <ScrollSection id={sections[0].id} title={sections[0].title}>
            <ModItem title="Ars Nouveau" href="https://www.curseforge.com/minecraft/mc-mods/ars-nouveau">
              Ars nouveau description
            </ModItem>
            <ModItem title="Ars Elemental" href="https://www.curseforge.com/minecraft/mc-mods/ars-elemental">
              Ars elemental description
            </ModItem>
            <ModItem title="EvilCraft" href="https://www.curseforge.com/minecraft/mc-mods/evilcraft">
              Ars elemental description
            </ModItem>
          </ScrollSection>
          <ScrollSection id={sections[1].id} title={sections[1].title}>
            These are the core mods
          </ScrollSection>
      </div>
      <div className="w-1/5"></div>
    </div>
  )
}

export default HomePage
