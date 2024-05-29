import React from 'react'
import Image from 'next/image'
import WikiLink from '../../../../../components/wiki/wiki-link'

const DivineHoldingsPage = (): React.JSX.Element => {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl text-blue-700 mb-10">Beanish Divine Holdings, LLC</h1>
      <p>Former LLC based in the bustling city of <WikiLink href="beangapore">Beangapore</WikiLink>. Now known as Divine Collective since the 2023 merger with Collective Enterprises.</p>
      <Image src="/stock-brokers.jpg" alt="Intense stock trading going on" width={1000} height={500} />
    </div>
  )
}

export default DivineHoldingsPage
