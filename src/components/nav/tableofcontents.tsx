'use client'

import React, { useState } from 'react'

interface TableOfContentsProps {
  sections: Array<{ id: string, title: string }>
}

const TableOfContents = ({ sections }: TableOfContentsProps): React.JSX.Element => {
  const [selectedItem, setSelectedItem] = useState('')
  const handleItemClick = (id: string): void => { setSelectedItem(id) }

  return (
    <>
        <nav className="pl-5 fixed">
            <h2 className="text-xl weight-5 mb-5">Contents</h2>
            <ul className="space-y-2">
                {sections.map((section) => (
                    <li
                        key={section.id}
                        onClick={() => { handleItemClick(section.id) }}
                        className={`hover:text-sky-400 ${selectedItem === section.id ? 'text-sky-300' : ''}`}
                    >
                        <a href={`#${section.id}`}>{section.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    </>
  )
}

export default TableOfContents
