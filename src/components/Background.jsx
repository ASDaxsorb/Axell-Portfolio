import React from 'react'

function Background({ children }) {
  return (
    <div className="bg-white dark:bg-zinc-900 transition-all">{children}</div>
  )
}

export default Background
