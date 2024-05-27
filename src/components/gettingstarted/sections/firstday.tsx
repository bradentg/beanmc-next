import React from 'react'

const FirstDay = (): React.JSX.Element => {
  return (
    <div className="space-y-4">
        <p>
            You&apos;ve arrived on the Central Island! Take some time to look around the gardens which showcase some of the best mods in the pack.
            When you&apos;re ready to begin, hop on the North, South, East, or West line and the conductor will take you to the nearest shore.
        </p>
        <p>
            With the Comforts mod, sleeping can be done on-the-go with a Sleeping Bag. Craft one as soon as possible to make your travels easier.
            Exploration is a huge element of this server, and with that comes plenty of dangers. Death is inevitable.
            Luckily, the Corail Tombstone mod will preserve your items in a tomb upon death. As you increase your Knowledge of Death, you'll
            start to unlock greater magical powers from this mod.
        </p>
        <p>
            The pack also includes two very handy mods that will aid you in your progression: Clickable Advancements and FTB Quests.
            Any time you unlock an achievement or advancement, pay attention to the chat. You&apos;ll notice the highlighted advancement is clickable
            and will bring you straight to the relevant advancements page for that mod.
        </p>
        <p>
            {'Similarly, take a look at the FTB Quests menu for a whole host of questlines pertaining to different mods in the pack. ' +
            'This will help you get started and progress through mods you\'re not familiar with. '}
            <strong>{'Be sure to claim your reward in the FTB Quests menu each time you complete a quest.'}</strong>
        </p>
    </div>
  )
}

export default FirstDay
