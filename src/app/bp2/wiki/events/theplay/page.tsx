import React from 'react'
import WikiLink from '../../../../../components/wiki/wiki-link'

const ThePlayPage = (): React.JSX.Element => {
  return (
    <div className="container mx-auto my-10 space-y-10">
      <h1 className="text-3xl text-blue-700">The Play</h1>
      <p>
        As the undisputed victor of the <WikiLink href="grandprix">Inaugural Beangapore Grand Prix</WikiLink>, Bimble wished to see the losers, <WikiLink href="../people/farmer">Farmer Rosey</WikiLink> and <WikiLink href="../people/meme">Emperor Meme</WikiLink>, act in his very own play. Naturally, given the excellent relations between their nations (see <WikiLink href="thefeud">The Feud</WikiLink>), Rosey and Meme were forced to play the parts of two archenemies who eventually come to embrace the undying power of friendship.
      </p>
      <hr />
      <WikiLink href="https://www.youtube.com/watch?v=t79a60xR4uU"><span className="text-2xl">Emperor Meme POV 📽️</span></WikiLink>
    </div>
  )
}

export default ThePlayPage
