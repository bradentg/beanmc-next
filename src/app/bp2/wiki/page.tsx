import React from 'react'
import SectionCard from '../../../components/wiki/section-card'

const WikiHomePage = () => {
  return (
    <div className="px-200">
      <h1>This is the Wiki for the Beanpack 2 Official Server</h1>
      <div className="columns-2">
        <SectionCard 
          title="Characters"
          image="/rosey1.jpg"
          imageAlt="Little Rosey"
        />
        <SectionCard 
          title="Places"
          image=""
        />
      </div>
    </div>
  )
}

export default WikiHomePage