import React from 'react'
import ExtLink from '../../ext-link'
import ModItem from '../mod-item'

const Storage = (): React.JSX.Element => {
  return (
    <div className="space-y-4">
      <ModItem title="Silent Gear" href="https://www.curseforge.com/minecraft/mc-mods/silent-gear">
        <p>Like <em>Tinker&apos;s Construct</em> without the smeltery. Combine different materials to create powerful tools, weapons, and armor with different abilities and buffs.</p>
        <p>
          [ <ExtLink href="https://github.com/SilentChaos512/Silent-Gear/wiki">Wiki</ExtLink> ]
          [ <ExtLink href="https://www.youtube.com/watch?v=Rh8KeQZmVks">Video Guide</ExtLink> ]
        </p>
      </ModItem>
      <ModItem title="Sophisticated Storage" href="https://www.curseforge.com/minecraft/mc-mods/sophisticated-storage">
        <p>Adds customization and upgrades to chests, barrels, shulker boxes, and more. Use upgrades to filter items or increase the maximum capacity and stack size. Configure a container to show a certain block or item like <em>Storage Drawers</em>.</p>
        <p>
          [ <ExtLink href="https://youtu.be/ZNomlw4ffeo?si=uL4mtqMmwRVohRUW">Video Guide</ExtLink> ]
        </p>
      </ModItem>
      <ModItem title="Sophisticated Backpacks" href="https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks">
        <p>Craft a backpack to carry more stuff on your dungeon and mining expeditions. Includes many of the same upgrade types found in <em>Sophisticated Storage</em>.</p>
      </ModItem>
    </div>
  )
}

export default Storage
