'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItemProps {
  text: string
  route: string
}

const NavBarItem = ({ text, route }: NavItemProps): React.JSX.Element => {
  const pathname = usePathname()
  return (
    <Link href={route}>
      <div className={`inline mx-7 p-4 border border-none rounded-lg hover:text-purple-400 ${pathname === route ? 'outline outline-3 outline-offset-2 outline-purple-300' : ''}`}>
        {text}
      </div>
    </Link>
  )
}

export default NavBarItem
