import React from "react"
import "../globals.css"

interface RootLayoutProps {
    children: React.ReactNode
}

const RootLayout = ({children}:RootLayoutProps) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout