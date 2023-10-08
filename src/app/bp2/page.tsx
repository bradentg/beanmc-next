import React from 'react'
import Link from 'next/link'

const HomePage = (): React.JSX.Element => {
  return (
    <div>
        <h1>This is the homepage for the Beanpack 2 Official Server</h1>
        <Link href="/bp2/wiki">Wiki</Link>
    </div>
  )
}

export default HomePage
