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
        <a href={route} className="max-w-sm rounded-md overflow-hidden shadow-xl transition hover:scale-102 hover:cursor-pointer my-2 sm:mx-2">
            <Image className="w-full" src={image} width={1000} height={1000} alt={imageAlt} />
            <div className="px-6 py-4 bg-white">
                <div className="font-bold text-4xl mb-2">{title}</div>
            </div>
        </a>
    )
}

export default SectionCard