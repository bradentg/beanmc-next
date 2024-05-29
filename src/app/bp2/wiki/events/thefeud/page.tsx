import React from 'react'
import WikiLink from '../../../../../components/wiki/wiki-link'
import Image from 'next/image'

const TheFeudPage = (): React.JSX.Element => {
  return (
    <div className="container mx-auto my-10 space-y-10">
      <h1 className="text-3xl text-blue-700">The Feud of Magic and Technology</h1>
      <p>A rift in the balance of time where a simple <WikiLink href="../people/farmer">Farmer</WikiLink> and a corrupt <WikiLink href="../people/meme">Emperor</WikiLink> argued about whether technology was more superior than magic or vice versa.</p>
      <Image src="/targetrosey.jpg" alt="Rosey being targeted" width={1000} height={500} />
      <hr />
      <p>Author: Little_Rose13_ (The Farmer)</p>
    </div>
  )
}

export default TheFeudPage
