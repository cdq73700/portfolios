'use client'

import { Box } from '@mui/material'
import RightMenuWrapper from './RightMenu.Wrapper'
import { useContext, useRef } from 'react'
import HeaderContext from '../Header/Header.Context'
import { RightMenuClientProps } from '@/types/components/RightMenu.Type'

export default function RightMenuClient({ params }: RightMenuClientProps) {
  const { inbox } = params
  const rightRef = useRef(null)
  const { anchor } = useContext(HeaderContext)
  if (anchor !== 'right') return <></>
  return (
    <>
      {inbox.map(({ label, value }, index) => {
        return (
          <Box key={index}>
            <RightMenuWrapper ref={rightRef}>
              <p>{label}</p>
              {value}
            </RightMenuWrapper>
          </Box>
        )
      })}
    </>
  )
}
