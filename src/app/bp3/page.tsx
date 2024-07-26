import React from 'react'
import Image from 'next/image'
import FeaturedImage from '../../components/featured/featured-image'

const HomePage = (): React.JSX.Element => {
  const sections = [
    { id: 'intro', title: '💡 Introduction' },
    { id: 'firstday', title: '🌄 Your First Day' },
    { id: 'progression', title: '📈 Progression' },
    { id: 'building', title: '⚒️ Building' },
    { id: 'exploration', title: '🗺️ Exploration' },
    { id: 'transportation', title: '🧹 Transportation' },
    { id: 'othertips', title: '✍️ Other Tips' }
  ]

  return (
    <div className="text-center">
      <div className="text-5xl text-purple-300">
          Beanpack 3: Wizards and Wheels
      </div>
      <div className="space-y-10 flex">
        <div className="w-1/5"></div>
        <div className="w-3/5">
          <div className="grid grid-cols-2 gap-4 h-96">
            <FeaturedImage title="Featured Build" src="/ministryfactory.jpg" author="Bimblefwip" />
            <FeaturedImage title="Featured Screenshot" src="/bundestag.jpg" author="Eternicus" />
          </div> 
        </div>
        <div className="w-1/5"></div>
      </div>
    </div>
  )
}

export default HomePage
