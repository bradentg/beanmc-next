import React from 'react'
import ExtLink from '../../ext-link'
import ModItem from '../mod-item'

const ExplorationMods = (): React.JSX.Element => {
  return (
    <div className="space-y-4">
      <ModItem title="FTB Quests" href="https://www.curseforge.com/minecraft/mc-mods/ftb-quests-forge">
        <p>BeanPack 3 includes plenty of quests (mostly derived from <ExtLink href="https://allthemods.github.io/alltheguides/atm9/"><em>All The Mods 9</em></ExtLink>) to help you learn the core mods of the pack. Open your inventory and look for the FTB Quests button at the top left of the screen to access the menu. Each time you complete a request, claim the reward.</p>
      </ModItem>
      <ModItem title="When Dungeons Arise" href="https://www.curseforge.com/minecraft/mc-mods/when-dungeons-arise">
        <p>Generates massive above-ground dungeons full of unique monsters and loot. Each type of dungeon found grants an achievement.</p>
      </ModItem>
      <ModItem title="Dungeon Crawl" href="https://www.curseforge.com/minecraft/mc-mods/dungeon-crawl">
        <p>Same as above, but underground. The entrances, however, will generate above ground, so be on the lookout for strange stone structures.</p>
      </ModItem>
      <ModItem title="Artifacts" href="https://www.curseforge.com/minecraft/mc-mods/artifacts">
        <p>Adds special artifacts which cannot be crafted, only found by exploring. Each one has its own magical power.</p>
        <p>[ <ExtLink href="https://www.youtube.com/watch?v=7bxA8ysIqGo">Video Guide</ExtLink> ]</p>
      </ModItem>
      <ModItem title="Lootr" href="https://www.curseforge.com/minecraft/mc-mods/lootr">
        <p>Makes all loot chests instanced per-player. That means any number of players can find the same chest and still get loot.</p>
      </ModItem>
      <ModItem title="Clickable Advancements" href="https://www.curseforge.com/minecraft/mc-mods/clickable-advancements">
        <p>Each time an achievement/advancement appears in chat, click on it to be taken straight to the advancements page for that mod.</p>
      </ModItem>
      <ModItem title="Small Ships" href="https://www.curseforge.com/minecraft/mc-mods/small-ships">
        <p>Craftable ships with varying speeds and storage capacities. Includes cogs, briggs, galleys, and drakkars. Cannons can be attached for sea warfare.</p>
        <p>[ <ExtLink href="https://www.youtube.com/watch?v=0bF95JpwQTw">Video Guide</ExtLink> ]</p>
      </ModItem>
      <ModItem title="Comforts" href="https://www.curseforge.com/minecraft/mc-mods/comforts">
        <p>Easy sleeping on the go. Just three wool to craft a sleeping bag. Use a hammock to skip the day and go straight to night.</p>
      </ModItem>
    </div>
  )
}

export default ExplorationMods
