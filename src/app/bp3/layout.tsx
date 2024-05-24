import React from 'react'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps): React.JSX.Element => {
  return (
    <div id="bp3-layout" className="grid">
      <div id="bp3-markdown-content" className='px-5 bg-blue-100 w-1/3 content-center justify-self-center'>
        {children}
      </div>
    </div>
  )
}

export default MainLayout
