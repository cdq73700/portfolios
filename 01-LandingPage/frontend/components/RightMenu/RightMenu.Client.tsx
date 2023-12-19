'use client'

import { useContext } from 'react'
import HeaderContext from '../Header/Header.Context'
import { RightMenuClientProps } from '@/types/components/RightMenu.Type'

export default function RightMenuClient({ children }: RightMenuClientProps) {
  const { open, anchor } = useContext(HeaderContext)
  if (open === false || anchor !== 'right') return <></>
  return <>{children}</>
}
