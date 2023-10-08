import React from 'react'

interface WikiLayoutProps {
  children: React.ReactNode
}

const WikiLayout = ({ children }: WikiLayoutProps): React.JSX.Element => {
  return (
      <>
        {children}
      </>
  )
}

export default WikiLayout
