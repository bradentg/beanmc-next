import React from 'react'
import WikiLink from '../../../../../components/wiki/wiki-link'

const TheFeudPage = (): React.JSX.Element => {
  return (
    <div className="container mx-auto my-10 space-y-10">
      <h1 className="text-3xl text-blue-700">The Inaugural Beangapore Grand Prix</h1>
      <p>The first major race held at the server&apos;s first race track.</p>
      <p>The two main contenders were <WikiLink href="../people/farmer">The Farmer</WikiLink> and <WikiLink href="../people/meme">Emperor Meme</WikiLink>, chosen for their ongoing feud.</p>
      <p>Bimble, a third contender, was added at the last minute and won by a landslide. As a result, his winning condition was enacted: <WikiLink href="theplay">The Play</WikiLink></p>
      <p>(Photo documentation to be added...)</p>
    </div>
  )
}

export default TheFeudPage
