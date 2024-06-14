import React from 'react'
import TableOfContents from '../../../components/nav/tableofcontents'
import ScrollSection from '../../../components/scroll-section'
import ModItem from '../../../components/modlist/mod-item'
import ExtLink from '../../../components/ext-link'

const HomePage = (): React.JSX.Element => {
  const sections = [
    { id: 'wizardry', title: '🧙‍♂️ Wizardry' },
    { id: 'wheelery', title: '🎡 Wheelery?' },
    { id: 'farming', title: '🌽 Farming' }
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
            <ModItem title="Create" href="https://www.curseforge.com/minecraft/mc-mods/create">
              <p>Engineering with the power of wheels.</p>
              <p>[ <ExtLink href="https://youtu.be/kURzOZi-04c?si=__CUupXlVBuBRhNy">Video Guide</ExtLink> ]</p>
            </ModItem>
            <ModItem title="Create: Slice & Dice" href="https://www.curseforge.com/minecraft/mc-mods/slice-and-dice">
              <p>Adds compatibility between Create and Farmer&apos;s delight. Automate growing, cutting, and cooking to enhance your restaurant or farmer&apos;s market.</p>
              <p>[ <ExtLink href="https://youtu.be/Iq4jwWoD9BM?si=QD6t6Lfwflfer4Iz">Video Guide</ExtLink> ]</p>
            </ModItem>
            <ModItem title="Ars Creo" href="https://www.curseforge.com/minecraft/mc-mods/ars-creo">
              <p>Adds compatibility between Create and Ars Nouveau, including the ability to power machines with a Starbuncle wheel.</p>
            </ModItem>
            <ModItem title="Pipez" href="https://www.curseforge.com/minecraft/mc-mods/pipez">
              <p>Not wheels, but it&apos;s tech so I&apos;m putting it here anyway. Lag-friendly way of transporting items and fluids through the world.</p>
              <p>[ <ExtLink href="https://youtu.be/-UUor9ThmmQ?si=yESeslmOyijmlPa_">Video Guide</ExtLink> ]</p>
            </ModItem>
          </ScrollSection>

          <ScrollSection id={sections[2].id} title={sections[2].title}>
            <ModItem title="Farmer's Delight" href="https://www.curseforge.com/minecraft/mc-mods/farmers-delight">
              <p>A classic mod that adds new crops and recipes. Pairs great with Cooking For Blockheads to build the ultimate kitchen or restaurant.</p>
              <p>
                [ <ExtLink href="https://github.com/vectorwing/FarmersDelight/wiki">Wiki</ExtLink> ]
                [ <ExtLink href="https://www.youtube.com/watch?v=PV5g-kx_CPE">Video Guide</ExtLink> ]
              </p>
            </ModItem>
            <ModItem title="Let's Do Vinery" href="https://www.curseforge.com/minecraft/mc-mods/lets-do-vinery">
              <p>Forage for a variety of grape seeds and grow them to make your own wines. Certain drinks give certain buffs such as regeneration and absorption.</p>
              <p>
                [ <ExtLink href="https://github.com/satisfyu/Vinery/wiki">Wiki</ExtLink> ]
                [ <ExtLink href="https://youtu.be/1X6r3lVDAAo?si=K8kLSONLF4RqYac_">Video Guide</ExtLink> ]
              </p>
            </ModItem>
          </ScrollSection>
      </div>
      <div className="w-1/5"></div>
    </div>
  )
}

export default HomePage
