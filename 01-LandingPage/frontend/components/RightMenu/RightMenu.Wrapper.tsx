'use client'

import { RightMenuWrapperProps } from '@/types/components/RightMenu.Type'
import React from 'react'

const RightMenuWrapper = React.forwardRef<HTMLDivElement, RightMenuWrapperProps>(function SideMenuForwardRef(
  { children },
  ref
) {
  return <div ref={ref}>{children}</div>
})

export default RightMenuWrapper
