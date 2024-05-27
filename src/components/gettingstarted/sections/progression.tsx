import React from 'react'

const Progression = (): React.JSX.Element => {
  return (
    <div className="space-y-4">
        <p>
            The pack includes two very handy mods that will aid you in your progression: Clickable Advancements and FTB Quests.
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

export default Progression
