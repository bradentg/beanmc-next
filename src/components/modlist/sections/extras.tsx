import React from 'react'
import ModItem from '../mod-item'

const Extras = (): React.JSX.Element => {
  return (
    <div className="space-y-4">
      <p><strong>These mods are visual/audio enhancements and will perform better on higher-end PCs. If you experience lag or frame drops, remove these first.</strong></p>
      <ModItem title="Sound Physics Remastered" href="https://www.curseforge.com/minecraft/mc-mods/sound-physics-remastered">
        <p>More realistic sound physics, with reverb and absorption depending on block type.</p>
      </ModItem>
      <ModItem title="Oculus" href="https://www.curseforge.com/minecraft/mc-mods/oculus">
        <p>Despite the name, this has nothing to do with VR. This mod allows players to install shader packs and use shaders. If you don&apos;t plan on using shaders, feel free to remove this from your CurseForge profile.</p>
      </ModItem>
    </div>
  )
}

export default Extras
