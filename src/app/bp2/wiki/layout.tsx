import React from 'react'

interface WikiLayoutProps {
    children: React.ReactNode
}

const WikiLayout = ({children}:WikiLayoutProps) => {
  return (
      <>
        {children}
      </>
  )
}

export default WikiLayout