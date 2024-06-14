import React from 'react'

const OtherTips = (): React.JSX.Element => {
  return (
    <div className="space-y-4">
        <p>
          {'The Beanpack 3 world is FILLED TO THE BRIM with places to explore. '}
          {<strong>When Dungeons Arise</strong>}
          {' and '}
          {<strong>Dungeon Crawl</strong>}
          {' are two mods that generate a variety of beautiful (and terrifying) dungeons both above ground and below. '}
          {' Why risk life and limb exploring these dungeons? They\'re the best places to find the best loot! '}
          {'There\'s an achievement for each type of dungeon you can find in the '}
          {<strong>When Dungeons Arise</strong>}
          {' mod. Only the most adventurous will find them all...'}
        </p>
        <p>
          {' In addition to valuable items from vanilla and core mods, you may even stumble upon a rare artifact from the '}
          {<strong>Artifacts</strong>}
          {' mod. These items CANNOT be crafted and can only be found through exploration. '}
          {' To create a better multiplayer experience, the pack also includes the '}
          {<strong>Lootr</strong>}
          {' mod, which makes every loot chest instanced per-player. That way you can still benefit from exploring the places others have already found.'}
        </p>
        <p>
          {<strong>JourneyMap</strong>}
          {' is your best friend in the exploration of BP3. Create waypoints for important spots, and explore new areas to fill out your map. '}
          {'As an added reference, you can access the Bluemap (linked at the top of the page) for a 3D view of the known world.'}
        </p>
    </div>
  )
}

export default OtherTips
