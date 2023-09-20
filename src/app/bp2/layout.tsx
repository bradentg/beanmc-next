import React from 'react'

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout = ({children}:MainLayoutProps) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default MainLayout