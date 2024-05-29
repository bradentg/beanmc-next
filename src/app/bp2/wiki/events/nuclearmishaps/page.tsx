import React from 'react'
import WikiLink from '../../../../../components/wiki/wiki-link'

const NuclearMishapsPage = (): React.JSX.Element => {
  return (
    <div className="container mx-auto my-10 space-y-10">
      <h1 className="text-3xl text-blue-700">Imperial Nuclear Mishaps</h1>
      <h3 className="text-xl">Welcome to the comprehensive list of all of the <WikiLink href="../sites/imperium">Imperiums</WikiLink> nuclear mishaps</h3>
      <hr />
      <p>
        In December of 2022 the reactor at MilFac 1 went into meltdown and destroyed the reactor, the safety system, and its fuel source, and contaminated the above river for at least a week.
      </p>
      <hr />
      <p>Author: CIC_Meme_Master (Emperor Meme)</p>
    </div>
  )
}

export default NuclearMishapsPage
