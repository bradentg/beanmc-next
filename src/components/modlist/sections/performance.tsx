import React from 'react'
import ModItem from '../mod-item'

const Performance = (): React.JSX.Element => {
  return (
    <div className="space-y-4">
      <ModItem title="Embeddium" href="https://www.curseforge.com/minecraft/mc-mods/embeddium">
        <p>Like Optifine, but better. A more updated version of Rubidium. Gives finer control over video settings and helps improve FPS on lower-end PCs.</p>
      </ModItem>
      <ModItem title="ModernFix" href="https://www.curseforge.com/minecraft/mc-mods/modernfix">
        <p>Improvements to game launch and general performance, particularly for Forge mod packs. Can be removed if causing issues.</p>
      </ModItem>
      <ModItem title="FerriteCore" href="https://www.curseforge.com/minecraft/mc-mods/ferritecore">
        <p>Reduces memory usage. Can be removed if causing issues.</p>
      </ModItem>
    </div>
  )
}

export default Performance
