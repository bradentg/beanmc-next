import React from 'react'
import ExtLink from '../../ext-link'
import ModItem from '../mod-item'

const Wheelery = (): React.JSX.Element => {
  return (
    <div className="space-y-4">
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
    </div>
  )
}

export default Wheelery
