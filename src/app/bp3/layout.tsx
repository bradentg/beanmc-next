import React from 'react'
import NavBar from '../../components/nav/bp3-navbar'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps): React.JSX.Element => {
  return (
    <>
      <div id="bp3-layout" className="grid text-white bg-sky-950 w-full h-screen">
        <NavBar />
        <div>
          {children}
        </div>
      </div>
    </>
  )
}

export default MainLayout
