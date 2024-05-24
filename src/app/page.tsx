import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Albert_Sans } from 'next/font/google'

const albertSans = Albert_Sans({
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
      <div id="main-page" className="grid h-full w-full">
        <Image priority={true} objectFit='cover' fill={true} className='opacity-70 absolute z-0 blur' src='/tubacz_house.png' alt='Minecraft House' />
        <div id="server-button-container" className='absolute z-10 h-full w-1/3 content-center justify-self-center'>
          <Image width='500' height='100' src="/beanmc_text.png" alt="BeanMC" />
          <Link href="https://beanmc-wiki-6c65b75bf7ea.herokuapp.com/">
            <div className='bg-blue-500 rounded-md shadow-xl transition hover:scale-102 py-4 my-2 text-white text-center'>
              <span className="font-bold text-2xl"><span className={albertSans.className}>Beanpack 2 Wiki</span></span>
            </div>
          </Link>
          <Link href="bp3">
            <div className="bg-blue-500 rounded-md shadow-xl transition hover:scale-102 py-4 my-2 text-white text-center">
              <span className="font-bold text-2xl">Beanpack 3: Wizards & Wheels</span>
              <p>Coming soon</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Page
