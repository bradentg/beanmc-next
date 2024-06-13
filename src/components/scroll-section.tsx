import React from 'react'

interface ScrollSectionProps {
  id: string
  title: string
  children: any
}

const ScrollSection = ({ id, title, children }: ScrollSectionProps): React.JSX.Element => {

  return (
    <section id={id} className="scroll-section">
      <h1 className="text-3xl mb-5">{title}</h1>
      {children}
    </section>
  )
}

export default ScrollSection
