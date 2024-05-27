import React from 'react'
import TableOfContents from '../../../components/nav/tableofcontents'
import FirstDay from '../../../components/gettingstarted/sections/firstday'

const HomePage = (): React.JSX.Element => {
  const sections = [
    { id: 'intro', title: 'Introduction' },
    { id: 'firstday', title: 'Your First Day' },
    { id: 'building', title: 'Building' },
    { id: 'exploration', title: 'Exploration' }
  ]

  return (
    <div className="flex">
      <div className="w-1/5">
        <TableOfContents sections={sections} />
      </div>
      <div className="w-3/5">
        <section id="intro" className="mb-10">
          <h1 className="text-3xl mb-5">Introduction</h1>
          This will be the lore introduction for Beanpack 3.
        </section>
        <section id="firstday">
          <h1 className="text-3xl mb-5">Your First Day</h1>
          <FirstDay />
        </section>
      </div>
      <div className="w-1/5"></div>
    </div>
  )
}

export default HomePage
