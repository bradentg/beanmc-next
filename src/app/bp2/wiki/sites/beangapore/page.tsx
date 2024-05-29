import React from 'react'
import Image from 'next/image'

const BeangaporePage = (): React.JSX.Element => {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl text-blue-700 mb-10">Beangapore</h1>
      <Image src="/cablecar.jpg" alt="Cable Car View" width={1000} height={500} />
      <Image src="/viewfromnorth.jpg" alt="View from the North" width={1000} height={500} />
      <Image src="/prophet_pad.jpg" alt="Inside the Prophet's home" width={1000} height={500} />
    </div>
  )
}

export default BeangaporePage
