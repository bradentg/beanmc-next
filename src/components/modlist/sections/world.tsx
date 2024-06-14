import React from 'react'
import ModItem from '../mod-item'
import ExtLink from '../../ext-link'

const World = (): React.JSX.Element => {
  return (
    <div className="space-y-4">
      <ModItem title="Biomes O' Plenty" href="https://www.curseforge.com/minecraft/mc-mods/biomes-o-plenty">
        <p>Over 50 new biomes added to the base game. Includes new plants, trees, and blocks.</p>
      </ModItem>
      <ModItem title="Enhanced Celestials" href="https://www.curseforge.com/minecraft/mc-mods/enhanced-celestials">
        <p>Adds three special moons to the game, which can occur randomly on any given night. Visit the CurseForge page to see a video preview of each moon and how it affects gameplay.</p>
      </ModItem>
      <ModItem title="Naturalist" href="https://www.curseforge.com/minecraft/mc-mods/naturalist">
        <p>Because there are not enough animals in vanilla Minecraft.</p>
        <p>[ <ExtLink href="https://starfish-studios.com/mods/naturalist">Wiki</ExtLink> ]</p>
      </ModItem>
    </div>
  )
}

export default World
