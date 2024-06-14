import React from 'react'
import ExtLink from '../../ext-link'

const Transportation = (): React.JSX.Element => {
  return (
    <div className="space-y-4">
        <p>
          {'There are many modes of travel in Beanpack 3, but the wizards among you likely have one in mind: '}
          {<em>flying</em>}
          {'. With the '}
          {<ExtLink href="https://evilcraft.rubensworks.net/book/second_age/tools/broom/introduction.html">EvilCraft broom</ExtLink>}
          {', you can soar the landscape on a highly-customizable broom. An essential for any magical aviation enthusiast. '}
          {'With the '}
          {<strong>Ars Nouveau</strong>}
          {' mod, craft a spell using the '}
          {<ExtLink href="https://www.arsnouveau.wiki/category/glyphs_1/entry/glyph_leap">Leap Glyph</ExtLink>}
          {' and apply it to yourself to be launched in whatever direction you\'re looking. With enough mana, it\'s essentially flying.'}
        </p>
        <p>
          {'Another mod of transit, which you\'ll see the moment you spawn, comes from the Create mod: T R A I N S . '}
          {'With Create\'s rail tracks and train stations, you can create trains of any size and shape and control them manually or automatically. '}
          {'This is a versatile option, as the trains and train systems can be as simple or complex as you want them to be.'}
        </p>
        <p>
          {'Finally, there are good ole fashioned boats from the '}
          {<strong>Small Ships</strong>}
          {' mod. From cogs to briggs to galleys, you can build your ship for speed, cargo, or even war (cannons).'}
        </p>
    </div>
  )
}

export default Transportation
