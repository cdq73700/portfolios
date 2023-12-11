'use client'

import { SideMenuWrapperProps } from '@/types/components/SideMenu.Type'
import React from 'react'

const SideMenuWrapper = React.forwardRef<HTMLDivElement, SideMenuWrapperProps>(function SideMenuForwardRef(
  { children },
  ref
) {
  return <div ref={ref}>{children}</div>
})

export default SideMenuWrapper
