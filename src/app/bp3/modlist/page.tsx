import React from 'react'
import TableOfContents from '../../../components/nav/tableofcontents'
import ScrollSection from '../../../components/scroll-section'
import ModItem from '../../../components/modlist/mod-item'
import ExtLink from '../../../components/ext-link'

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
              <p>Learn spells, upgrade your spellbook, and increase your power. Automate things with magic and magical creatures.</p>
              <p>[ <ExtLink href="https://www.arsnouveau.wiki/">Wiki</ExtLink> ]</p>
            </ModItem>
            <ModItem title="Ars Elemental" href="https://www.curseforge.com/minecraft/mc-mods/ars-elemental">
              <p>Adds multiple new schools of magic to Ars Nouveau, each with its advantages and disadvantages. Also adds new glyphs, items, familiars, armor, and more.</p>
              <p>[ <ExtLink href="https://youtu.be/2p3XIUfxnsk?si=D-rho9o5YuNhc0KA">Video Guide</ExtLink> ]</p>
            </ModItem>
            <ModItem title="EvilCraft" href="https://www.curseforge.com/minecraft/mc-mods/evilcraft">
              <p>A treacherous school of magic powered by blood and sacrifice.</p>
              <p>[ <ExtLink href="https://evilcraft.rubensworks.net/book/">Wiki</ExtLink> ]</p>
            </ModItem>
            <ModItem title="Corail Tombstone" href="https://www.curseforge.com/minecraft/mc-mods/corail-tombstone">
              <p>This mod does more than protect your items in a grave when you die. Increase your Knowledge of Death to unlock the powers that lie within.</p>
              <p>[ <ExtLink href="https://www.youtube.com/watch?v=FLDBp0vF4I0">Video Guide</ExtLink> ]</p>
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
