'use client'

import { DarkMode, LightMode } from '@mui/icons-material'
import { useEffect, useState } from 'react'

const ModeButton = () => {
  const [isTheme, setIsTheme] = useState(true)

  useEffect(() => {
    if (isTheme) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isTheme])

  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        <button
          className="flex p-2 justify-center"
          onClick={() => setIsTheme(false)}
        >
          <div className="px-1">
            <LightMode></LightMode>
          </div>
          <span className="px-1">Light</span>
        </button>
        <button
          className="flex p-2 justify-center"
          onClick={() => setIsTheme(true)}
        >
          <div className="px-1">
            <DarkMode></DarkMode>
          </div>
          <span className="px-1">Dark</span>
        </button>
      </div>
    </>
  )
}

export default ModeButton
