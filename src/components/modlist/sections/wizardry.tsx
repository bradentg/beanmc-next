import React from 'react'
import ExtLink from '../../ext-link'
import ModItem from '../mod-item'

const Wizardry = (): React.JSX.Element => {
  return (
    <div className="space-y-4">
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
    </div>
  )
}

export default Wizardry
