import React from 'react'
import SectionCard from '../../../components/wiki/section-card'

const WikiHomePage = () => {
  return (
    <div className="container mx-auto my-10">
      <h1>This is the Wiki for the Beanpack 2 Official Server</h1>

      <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2">
          <SectionCard 
            title="Characters"
            image="/tubacz_house.png"
            imageAlt="Little Rosey"
            route="/bp2/wiki/characters"
          />
          <SectionCard 
            title="Places"
            image="/tubacz_house.png"
            route="/bp2/wiki/places"
          />
          <SectionCard 
            title="Factions"
            image="/tubacz_house.png"
            route="/bp2/wiki/factions"
          />
          <SectionCard 
            title="Events"
            image="/tubacz_house.png"
            route="/bp2/wiki/events"
          />
      </div>
    </div>
  )
}

export default WikiHomePage