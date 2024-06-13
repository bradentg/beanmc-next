import React from 'react'
import NavBar from '../../components/nav/bp3-navbar'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps): React.JSX.Element => {
  return (
    <>
      <div id="bp3-layout" className="text-white bg-sky-950 w-full min-h-screen pb-10">
        <NavBar />
        <div className="h-36"></div>
        <div>
          {children}
        </div>
      </div>
    </>
  )
}

export default MainLayout
