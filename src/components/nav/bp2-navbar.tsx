import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Albert_Sans } from 'next/font/google'

const akshar = Albert_Sans({
    weight: ['300'],
    subsets: ['latin']
})

const NavBar = () => {
    return (
        <div className="bg-sky-500 w-full text-white text-2xl py-2">
            <div id="nav-title" className="ml-2">
                <Link href="/bp2">
                    <Image
                        src="/blank_bean.png"
                        width={50}
                        height={50}
                        alt="Bean Icon"
                        className="inline mx-2 hover:scale-105"
                    />
                </Link>
                <h1 className="inline"><span className={akshar.className}>Beanpack 2</span></h1>
                <Link href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="inline float-right mr-7 mt-3 w-6 h-6 hover:scale-105">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default NavBar