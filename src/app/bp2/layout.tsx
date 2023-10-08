import React from 'react'
import NavBar from '../../components/nav/bp2-navbar'

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout = ({children}:MainLayoutProps) => {
  return (
    <>
        <NavBar />
        {children}
    </>
  )
}

export default MainLayout