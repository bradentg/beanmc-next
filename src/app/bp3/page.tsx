import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = `
# Header 1
### Header 3
\`code\`
* bullet 1
* bullet 2
`

const HomePage = (): React.JSX.Element => {
  return (
    <div>
        <h1>This is the homepage for the Beanpack 3 Official Server</h1>
        <Markdown className='markdown' remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
    </div>
  )
}

export default HomePage
