'use client'

import { useContext } from 'react'
import HeaderContext from '../Header/Header.Context'
import { RightMenuClientProps } from '@/types/components/RightMenu.Type'

export default function RightMenuClient({ children }: RightMenuClientProps) {
  const { anchor } = useContext(HeaderContext)
  if (anchor !== 'right') return <></>
  return <>{children}</>
}
