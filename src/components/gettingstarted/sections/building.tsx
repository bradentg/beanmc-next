import React from 'react'
import ExtLink from '../../ext-link'

const Building = (): React.JSX.Element => {
  return (
    <div className="space-y-4">
        <p>
          {'Planning in Creative and building in Survival is a breeze in Beanpack 3 using the '}
          {<ExtLink href="https://create.fandom.com/wiki/Schematicannon">Schematicannon</ExtLink>}
          {' from Create. Design your builds in a Creative world, then use a '}
          {<ExtLink href="https://create.fandom.com/wiki/Schematic_And_Quill">Schematic and Quill</ExtLink>}
          {' to save it as a Create schematic. In survival, place an '}
          {<em>Empty Schematic</em>}
          {' into the '}
          {<em>Schematic Table</em>}
          {' to load your schematic. With this you can select its placement in the world and give it to the '}
          {<em>Schematicannon</em>}
          {' to receive a checklist of required resources. Provide the cannon with gunpowder and an adjacent chest full of resources, then watch it build! '}
          {'For more info on using schematics in Create, check out '}
          {<ExtLink href="https://www.youtube.com/watch?v=vFEkajTVCg8">this video guide</ExtLink>}
          {'.'}
        </p>
        <p>
          The pack also includes <strong>MineColonies</strong>, which you can use to construct a living, breathing city with the help of NPC citizens. Many different themes are available in the latest version to complement your location, playstyle, and lore.
        </p>
        <p>
          {'Want to protect your claims and mark them on the map? You can with '}
          {<strong>FTB Chunks</strong>}{'! '}
          {'First, create an FTB Team. Chunks you claim will belong to that team. Open up your JourneyMap and use the FTB Chunks feature to claim chunks on the map. '}
          {'Each player starts with a limit of 50 chunks. This is to prevent players claiming large areas and leaving them empty. '}
          {'This limit can always be increased if it\'s clear that you\'re actually using your current claims. Just ask an admin. '}
          {'Limits are per-player, so a team of two players, for example, will start with 100 chunks.'}
        </p>
    </div>
  )
}

export default Building
