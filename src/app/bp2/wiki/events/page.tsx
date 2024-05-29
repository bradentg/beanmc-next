import React from 'react'
import WikiLink from '../../../../components/wiki/wiki-link'

const EventsPage = (): React.JSX.Element => {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl text-blue-700 mb-10">Notable Happenings in Beanpack History</h1>
      <ul className="space-y-5">
        <span className="space-y-5 text-xl">
          <li><WikiLink href="events/grandprix">The Inaugural Beangapore Grand Prix</WikiLink></li>
          <li><WikiLink href="events/theplay">The Play</WikiLink></li>
          <li><WikiLink href="events/thefeud">The Feud of Magic and Technology</WikiLink></li>
          <li><WikiLink href="events/nuclearmishaps">Imperial Nuclear Mishaps</WikiLink></li>
        </span>
      </ul>
    </div>
  )
}

export default EventsPage
