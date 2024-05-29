import React from 'react'
import Image from 'next/image'
import WikiLink from '../../../../../components/wiki/wiki-link'

const OrchardPage = (): React.JSX.Element => {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl text-blue-700 mb-10">The Orchard</h1>
      <h2 className="text-2xl mb-5">A Land of Food and Magic</h2>
      <p>Founded by <WikiLink href="../people/farmer">The Farmer</WikiLink>, The Orchard grew to be one of the largest cities in the world of Kolob. The Orchard was very little technologically advanced, as the residents chose to focus more on magic and agriculture rather than on poluting the land.</p>
      <Image src="/orchard2.jpg" alt="The Orchard pic1" width={1000} height={300} />
      <Image src="/orchard1.jpg" alt="The Orchard pic2" width={1000} height={300} />
      <h2 className="text-2xl my-5">Safe Haven</h2>
      <p>The Orchard soon became a safe haven for folks not wanting to deal with the Imperium unimaginable power.</p>
    </div>
  )
}

export default OrchardPage
