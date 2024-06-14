import React from 'react'
import ExtLink from '../../ext-link'
import ModItem from '../mod-item'

const BuildingMods = (): React.JSX.Element => {
  return (
    <div className="space-y-4">
      <ModItem title="MineColonies" href="https://www.curseforge.com/minecraft/mc-mods/minecolonies">
        <p>Design a bustling town with the help of NPC builders, foresters, researchers, doctors, and more. Many love this mod. Some hate it. <strong>Pro Tip</strong>: You do not have to use MineColonies. I repeat, you do not have to use MineColonies.</p>
        <p>
          [ <ExtLink href="https://minecolonies.com/wiki/">Wiki</ExtLink> ]
          [ <ExtLink href="https://youtu.be/P-vSA_ynitA?si=DbXup7pJSLh01ug_">Video Guide</ExtLink> ]
        </p>
      </ModItem>
      <ModItem title="Handcrafted" href="https://www.curseforge.com/minecraft/mc-mods/handcrafted">
        <p>Furniture and decoration that fit the aesthetic of vanilla Minecraft. Includes functional beds and storage.</p>
      </ModItem>
      <ModItem title="Chimes" href="https://www.curseforge.com/minecraft/mc-mods/chimes">
        <p>Add beautiful ambience to your base with different types of windchimes.</p>
      </ModItem>
      <ModItem title="OpenBlocks Elevator" href="https://www.curseforge.com/minecraft/mc-mods/openblocks-elevator">
        <p>Simple, single-block elevators to conveniently traverse floors. Stand on the block, then press Space to go up or Shift to go down.</p>
      </ModItem>
      <ModItem title="Domum Ornamentum" href="https://www.curseforge.com/minecraft/mc-mods/domum-ornamentum">
        <p>A required mod for MineColonies, but it can be used separately too. Craft an Architect&apos;s Cutter and combine different blocks to create new styles.</p>
      </ModItem>
    </div>
  )
}

export default BuildingMods
