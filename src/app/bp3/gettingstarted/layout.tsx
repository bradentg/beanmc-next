import React from 'react'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps): React.JSX.Element => {
  return (
    <>
        {children}
    </>
  )
}

export default MainLayout
