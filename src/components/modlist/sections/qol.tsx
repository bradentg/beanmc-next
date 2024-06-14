import React from 'react'
import ExtLink from '../../ext-link'
import ModItem from '../mod-item'

const QOL = (): React.JSX.Element => {
  return (
    <div className="space-y-4">
      <ModItem title="Simple Hats" href="https://www.curseforge.com/minecraft/mc-mods/simplehats">
        <p>Find hats in chests or from grab bags. Keep the ones you like, and turn the rest into scrap to craft more grab bags. Some are incredibly rare. How many will you collect?</p>
      </ModItem>
      <ModItem title="HT's TreeChop" href="https://www.curseforge.com/minecraft/mc-mods/treechop">
        <p>Realistic tree chopping. Chop trees from the bottom. Bigger trees need more chops.</p>
      </ModItem>
      <ModItem title="Cosmetic Armor Reworked" href="https://www.curseforge.com/minecraft/mc-mods/cosmetic-armor-reworked">
        <p>Protect yourself without sacrificing style. Creates separate armor slots for protection and cosmetics.</p>
      </ModItem>
      <ModItem title="Easier Sleeping" href="https://www.curseforge.com/minecraft/mc-mods/easier-sleeping">
        <p>Only 50% of online players have to be in a bed to skip the night.</p>
      </ModItem>
      <ModItem title="Jade" href="https://www.curseforge.com/minecraft/mc-mods/jade">
        <p>Modern version of the <em>Here&apos;s What You&apos;re Looking At</em> mod. Tells you what you&apos;re looking at. Very useful for learning new mods.</p>
      </ModItem>
      <ModItem title="AppleSkin" href="https://www.curseforge.com/minecraft/mc-mods/appleskin">
        <p>Shows your current hunger saturation and how much the food you&apos;re holding will fill your hunger. Useful info to have on a dungeon run.</p>
      </ModItem>
      <ModItem title="Just Enough Items" href="https://www.curseforge.com/minecraft/mc-mods/jei">
        <p>Makes all the items in the pack easily searchable on the right side of your inventory. Hover over an item and press <strong>r</strong> to see how it&apos;s crafted or <strong>u</strong> to see how it&apos;s used. While at a crafting table, click the <strong>+</strong> next to a JEI recipe to populate the crafting grid (provided you have the materials).</p>
      </ModItem>
    </div>
  )
}

export default QOL
