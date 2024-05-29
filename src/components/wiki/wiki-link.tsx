import React from 'react'
import Link from 'next/link'

interface WikiLinkProps {
  href: string
  children: any
}
const WikiLink = ({ href, children }: WikiLinkProps): React.JSX.Element => {
  return (
        <Link href={href} className="text-blue-600">{children}</Link>
  )
}

export default WikiLink
