import React from 'react'
import Image from 'next/image'

const ProphetPage = (): React.JSX.Element => {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl text-blue-700 mb-10">The Prophet 🙏</h1>
      <Image src="/theprophet.jpg" alt="AI depicition of the prophet of the bean" height={300} width={300} />
    </div>
  )
}

export default ProphetPage
