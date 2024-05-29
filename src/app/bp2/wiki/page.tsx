import React from 'react'
import SectionCard from '../../../components/wiki/section-card'

const WikiHomePage = (): React.JSX.Element => {
  return (
    <div className="container mx-auto my-10">
      <div className="flex">
        <div className="w-1/5"></div>
        <div className="w-3/5">
          <div id="wiki-home-header" className="space-y-1 mb-10">
            <h1 className="text-3xl">Home</h1>
            <h4>Documenting the history of the Beanpack 2 Official Server</h4>
          </div>
          <div id="wiki-home-intro" className="space-y-2 mb-5">
            <h2 className="text-xl">And from the dust, a new world was created in The Bean&apos;s radiant image -- a world of ideas.</h2>
            <hr />
            <p>{'From the shores of Beangapore, to the walls of the Imperium, to the temples of the Shogunate, our world is in a golden age of progress. ' +
                'Technology and innovation are at the forefront, and across the globe, titans of industry have arisen to shape the future in their image.'}
            </p>
            <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2">
                <SectionCard
                  title="People 🧍"
                  image="/rosey_and_minifig.jpg"
                  imageAlt="Rose and Mini"
                  route="/bp2/wiki/people"
                />
                <SectionCard
                  title="Events 🗿"
                  image="/theendfightcropped.jpg"
                  route="/bp2/wiki/events"
                />
                <SectionCard
                  title="Sites & Syndicates 🏰"
                  image="/orchard2.jpg"
                  route="/bp2/wiki/sites"
                  className="sm:col-span-2"
                />
            </div>
            <p>The Beanpack server was created on November 6, 2022 with the goal of allowing players to develop a new modded Minecraft world with an industrial/sci-fi theme. Thus far, players have started companies vying for control of the market, explored the moon and the planets beyond, and built technological marvels that defy science. Many have gone the route of progress, aiming to develop and expand their tech as quickly as possible, while others have focused on agriculture, building, and even magic. The world has remained almost entirely peaceful since its inception, but with some folks having access to advanced weapons and an itchy trigger finger, there&apos;s no telling if it will last.</p>
            <hr />
            <p>Author: Bimblefwip</p>
          </div>
        </div>
        <div className="w-1/5"></div>
      </div>

    </div>
  )
}

export default WikiHomePage
