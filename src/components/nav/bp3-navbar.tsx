'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavBarItem from './navbar-item'

const NavBar = (): React.JSX.Element => {
  return (
        <div id="nav-bar" className="fixed h-28 w-full bg-sky-950 shadow-xl text-2xl py-2">
          <div id="nav-title" className="ml-2">
              <Image
                  src="/bp3_logo_transparent.png"
                  width={100}
                  height={100}
                  alt="Beanpack 3 Logo"
                  className="inline mx-2 hover:scale-105"
              />
              <NavBarItem text="Getting Started" route="/bp3/gettingstarted" />
              <NavBarItem text="Mod List" route="/bp3/modlist" />
              {/* <NavBarItem text="Bluemap" route="http://209.192.235.234:25525/" /> */}
              <div className="inline mx-7 p-4 border border-none rounded-lg text-gray-500">
                BlueMap (coming soon)
              </div>
              <Link href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="inline float-right mr-7 mt-3 w-6 h-6 hover:scale-105">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
              </Link>
          </div>
        </div>
  )
}

export default NavBar
