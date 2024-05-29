import React from 'react'
import Image from 'next/image'
import WikiLink from '../../../../../components/wiki/wiki-link'

const BrewersPage = (): React.JSX.Element => {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl text-blue-700 mb-10">Bean&apos;s Independent Brewers</h1>
      <p>Bean&apos;s Independent Brewers is a scenic tavern situated in the lush savannas north of <WikiLink href="beangapore">Beangapore</WikiLink>. The tavern was constructed by <WikiLink href="../people/farmer">Farmer Rosey</WikiLink> circa late 2022. Perhaps the tavern&apos;s most intriguing feature is its Pride Enclosure, which allows a pride of lions to roam in and out of the tavern within the confines of the enclosure.</p>
      <Image src="/hipsters.jpg" alt="Beer drinkers" width={500} height={500} className="inline" />
      <Image src="/ailions.jpg" alt="lions" width={500} height={500} className="inline" />
    </div>
  )
}

export default BrewersPage
