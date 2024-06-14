import React from 'react'
import Image from 'next/image'
import ExtLink from '../../ext-link'
import ModItem from '../mod-item'

const Farming = (): React.JSX.Element => {
  return (
    <div className="space-y-4">
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
      <ModItem title="Cooking For Blockheads" href="https://www.curseforge.com/minecraft/mc-mods/cooking-for-blockheads">
        <p>Adds a whole suite of kitchen blocks including ovens, fridges, and counters, which can all be connected via the Kitchen Floor. Get infinite water from the Sink and store milk using a Cow In A Jar.</p>
        <p>
          [ <ExtLink href="https://mods.twelveiterations.com/mc/cooking-for-blockheads/">Wiki</ExtLink> ]
          [ <ExtLink href="https://youtu.be/0pqHw-aGclI?si=UTqGaPGMSHfazTgz_">Video Guide</ExtLink> ]
        </p>
      </ModItem>
      <ModItem title="Spice of Life: Carrot Edition" href="https://www.curseforge.com/minecraft/mc-mods/spice-of-life-carrot-edition">
        <p>Increase your max health by trying new foods.</p>
      </ModItem>
      <ModItem title="Butcher's Delight" href="https://www.curseforge.com/minecraft/mc-mods/butchers-delight">
        <Image src="/uncanny.jpg" alt="uncanny" width={100} height={100} />
      </ModItem>
    </div>
  )
}

export default Farming
