import React from 'react'
import Image from 'next/image'

interface FeaturedImageProps {
  title: string
  src: string
  author: string
}

const FeaturedImage = ({ title, src, author }: FeaturedImageProps): React.JSX.Element => {
  return (
    <div className="w-full text-center">
      <h1 className="h-1/6 text-2xl">{title}</h1>
      <div className="h-5/6 relative border-solid border-2">
        <Image src={src} alt={title} layout="fill" />
      </div>
      <p className="mt-2">by {author}</p>
    </div>  
  )
}

export default FeaturedImage
