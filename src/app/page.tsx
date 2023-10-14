import React from 'react'
import Link from 'next/link'
import { Albert_Sans } from 'next/font/google'

const albert_sans = Albert_Sans({
  weight: ['300'],
  subsets: ['latin']
})

const Page = (): React.JSX.Element => {
  return (
    // <h1><a href="bp2">Beanpack 2 Official Server</a></h1>
    <>
      {/* <a href="bp2" className="max-w-sm rounded-md overflow-hidden shadow-xl transition hover:scale-102 hover:cursor-pointer my-2 sm:mx-2 bg-slate-100">
          <div className="font-bold text-4xl mb-2 bg-slate-100 w-full h-full">Beanpack 2 Official Server</div>
      </a> */}
      <div id="main-page" className="grid h-screen w-screen">
        <div id="server-button-container" className={albert_sans.className + ' h-screen w-1/3 content-center justify-self-center'}>
          <Link href="bp2">
          <div className="bg-blue-500 rounded-md shadow-xl transition hover:scale-102 py-4 my-2 text-white text-center">
            <span className="font-bold text-2xl"><span className={albert_sans.className}>Beanpack 2 Official Server</span></span>
          </div>
          </Link>
          <div className="bg-blue-500 rounded-md shadow-xl transition py-4 my-2 text-white text-center opacity-50">
            <span className="font-bold text-2xl">Beanpack 3: Wizards & Wheels</span>
            <p>Coming soon</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
