import React from 'react'
import ExtLink from '../../ext-link'

const OtherTips = (): React.JSX.Element => {
  return (
    <div className="space-y-4">
        <p>
          {'The economy in Beanpack 3 is handled with '}
          {<strong>Lightman's Currency Mod</strong>}
          {'. With this mod you can mint coins of different value from copper, iron, gold, emerald, diamond, and netherite. '}
          {'Use an ATM to exchange big change for small, or vice versa. It also includes a variety of different shop blocks like vending machines and bookshelfs to sell your wares. '}
          {'By changing the settings of these blocks, you have control over who can access them, what\'s for sale, where the revenue goes, and much more. ' }
          {'Craft a wallet to carry around large sums of coin conveniently, or make a bank deposit for safekeeping. To see more, check out the Lightman\'s Currency showcase in spawn.'}
        </p>
        <p>
          {'Make sure you\'re prepared for the various moons in the '}
          {<strong>Enhanced Celestials</strong>}
          {' mod. During a Blood Moon, you\'ll be unable to sleep and the monster spawn cap will increase. A good time to retreat to your doomsday bunker and watch reruns of Friends. '}
          {'The Harvest Moon is every farmer\'s dream. Not only will your crops grow faster, but their drop rates will also increase. Go out and harvest! '}
          {'Finally, the Blue Moon gives you Luck and increases loot quality. Perfect time for a dungeon run.'}
        </p>
        <p>
          {'For more info on any of the mods mentioned in this page, check out the '}
          {<ExtLink href="/bp3/modlist">Mod List</ExtLink>}
          {' where each mod in the pack includes a link to its CurseForge page (and sometimes a guide).'}
        </p>
    </div>
  )
}

export default OtherTips
