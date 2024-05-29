import React from 'react'
import WikiLink from '../../../../components/wiki/wiki-link'

const PeoplePage = (): React.JSX.Element => {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl text-blue-700 mb-10">Notable Persons of Beanish History</h1>
      <ul className="space-y-5">
        <span className="space-y-5 text-xl">
          <li><WikiLink href="people/prophet">The Prophet 🙏</WikiLink></li>
          <li><WikiLink href="people/farmer">The Farmer 🥔</WikiLink></li>
          <li><WikiLink href="people/meme">Emperor Meme 🤑</WikiLink></li>
        </span>
        <li>Shogun Eternicus 👘</li>
        <li>Monarch</li>
        <li>Bimble</li>
        <li>Changeling 🧙</li>
        <li>Eskimo</li>
      </ul>
    </div>
  )
}

export default PeoplePage
