'use client'

import { useEffect, useState } from 'react'

const DarkModeButton = () => {
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
      <button onClick={() => setIsTheme(!isTheme)}>Theme</button>
    </>
  )
}

export default DarkModeButton
