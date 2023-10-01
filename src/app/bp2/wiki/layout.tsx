import React from 'react'

interface WikiLayoutProps {
    children: React.ReactNode
}

const WikiLayout = ({children}:WikiLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <h1>WIKI</h1>
        {children}
      </body>
    </html>
  )
}

export default WikiLayout