import React from 'react'
import Image from 'next/image'

interface SectionCardProps {
    title: string
    image: string
    imageAlt?: string
    route: string
}
const SectionCard = ({title, image, imageAlt, route}:SectionCardProps) => {
    return (
        <a href={route} className="max-w-sm rounded overflow-hidden shadow-lg transition hover:scale-102 hover:cursor-pointer my-2 sm:mx-2">
            <Image className="w-full" src={image} width={1000} height={1000} alt={imageAlt} />
            <div className="px-6 py-4">
                <div className="font-bold text-4xl mb-2">{title}</div>
            </div>
            {/* <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div> */}
        </a>
    )
}

export default SectionCard