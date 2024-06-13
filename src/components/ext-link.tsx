import React from 'react'
import Link from 'next/link'

interface ExtLinkProps {
  href: string
  children: any
}
const ExtLink = ({ href, children }: ExtLinkProps): React.JSX.Element => {
  return (
        <Link href={href} className="text-blue-300 hover:text-blue-400">{children}</Link>
  )
}

export default ExtLink
