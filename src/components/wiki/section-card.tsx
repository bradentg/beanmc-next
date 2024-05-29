import React from 'react'
import Image from 'next/image'

interface SectionCardProps {
  title: string
  image: string
  imageAlt?: string
  route: string
  className?: string
}
const SectionCard = ({ title, image, imageAlt, route, className }: SectionCardProps): React.JSX.Element => {
  return (
        <a href={route} className={`rounded-md overflow-hidden shadow-xl transition hover:scale-102 hover:cursor-pointer my-2 sm:mx-2 ${className}`}>
          <Image className="w-full h-4/5" src={image} width={1000} height={1000} alt={imageAlt ?? ''} />
          <div className="px-6 py-4 bg-white h-1/5">
              <div className="font-bold text-4xl mb-2">{title}</div>
          </div>
        </a>
  )
}

export default SectionCard
