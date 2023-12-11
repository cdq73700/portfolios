'use client'

import { useContext, useState } from 'react'
import HeaderContext from './Header.Context'
import { DrawerStateChangeProps, HeaderContextProps, HeaderProviderProps } from '@/types/components/Header.Type'

export default function HeaderProvider({ children }: HeaderProviderProps) {
  const headerContext = useContext(HeaderContext)
  const [open, setOpen] = useState(headerContext.open)
  const [anchor, setAnchor] = useState(headerContext.anchor)
  const DrawerStateChange = ({ newOpen, newAnchor }: DrawerStateChangeProps) => {
    setAnchor(newAnchor)
    setOpen(newOpen)
  }
  const contextValue: HeaderContextProps = {
    open,
    anchor,
    DrawerStateChange,
  }

  return <HeaderContext.Provider value={contextValue}>{children}</HeaderContext.Provider>
}
