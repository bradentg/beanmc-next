import React from 'react'
import WikiLink from '../../../../components/wiki/wiki-link'

const WikiHomePage = (): React.JSX.Element => {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl text-blue-700 mb-10">Sites, Nations, Factions, and More</h1>
      <ul className="space-y-5">
        <span className="space-y-5 text-xl">
          <li><WikiLink href="sites/beangapore">Beangapore 🌃</WikiLink></li>
          <li><WikiLink href="sites/orchard">The Orchard 🍂</WikiLink></li>
          <li><WikiLink href="sites/imperium">The Imperium 💸</WikiLink></li>
          <li><WikiLink href="sites/shogunate">Kogane Shogunate ⛩️</WikiLink></li>
          <li><WikiLink href="sites/divineholdings">Beanish Divine Holdings, LLC</WikiLink></li>
          <li><WikiLink href="sites/brewers">Bean&apos;s Independent Brewers</WikiLink></li>
        </span>
        <li>Divine Collective (formerly Collective Enterprises and Beanish Divine Holdings, LLC)</li>
      </ul>
    </div>
  )
}

export default WikiHomePage
