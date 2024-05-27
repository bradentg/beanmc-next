import React from 'react'
import TableOfContents from '../../../components/nav/tableofcontents'

const HomePage = (): React.JSX.Element => {
  const sections = [
    { id: 'coremods', title: 'Core Mods' },
    { id: 'exploration', title: 'Exploration' }
  ]

  return (
    <div className="flex">
      <div className="w-1/5">
        <TableOfContents sections={sections} />
      </div>
      <div className="w-3/5">
          <section id="coremods">
            These are the core mods
          </section>
          <section id="exploration">
            These are the exploration mods
          </section>
      </div>
      <div className="w-1/5"></div>
    </div>
  )
}

export default HomePage
