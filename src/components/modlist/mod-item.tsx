import React from 'react'

interface ModItemProps {
  title: string
  href: string
  children?: any
}

const ModItem = ({ title, href, children }: ModItemProps): React.JSX.Element => {
  return (
    <div className="mb-3">
        <h3 className="text-xl text-purple-300 hover:text-purple-400">
            <a href={href}>{title}</a>
        </h3>
        {children}
    </div>
  )
}

export default ModItem
