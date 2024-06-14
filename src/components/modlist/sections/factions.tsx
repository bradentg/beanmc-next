import React from 'react'
import ModItem from '../mod-item'
import ExtLink from '../../ext-link'

const Factions = (): React.JSX.Element => {
  return (
    <div className="space-y-4">
      <ModItem title="FTB Chunks" href="https://www.curseforge.com/minecraft/mc-mods/ftb-chunks-forge">
        <p>Thanks to the <em>JourneyMap Integration</em> mod, JourneyMap includes a chunk claiming mode to make claims using FTB Chunks. See the <em>Getting Started</em> page for more info on chunk claiming.</p>
      </ModItem>
      <ModItem title="FTB Teams" href="https://www.curseforge.com/minecraft/mc-mods/ftb-teams-forge">
        <p>Required to claim chunks in FTB Chunks. Can also be used for team progression in FTB Quests if you choose.</p>
      </ModItem>
      <ModItem title="Lightman's Currency" href="https://www.curseforge.com/minecraft/mc-mods/lightmans-currency">
        <p>Coin-based economy with sophisticated machines for buying, selling, and trading. Just don&apos;t get addicted to the Slot Machine. For an intro, read <em>Getting Started</em> or visit the mod showcase in spawn. For a comprehensive look at all the mod has to offer, visit the Wiki linked below.</p>
        <p>
          [ <ExtLink href="https://github.com/Lightman314/LightmansCurrency/wiki">Wiki</ExtLink> ]
          [ <ExtLink href="https://www.youtube.com/watch?v=B_tm_RzumVM">Video Guide</ExtLink> ]
        </p>
      </ModItem>
    </div>
  )
}

export default Factions
