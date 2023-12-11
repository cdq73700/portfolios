'use client'

import { Box, Stack, SwipeableDrawer } from '@mui/material'
import Link from 'next/link'
import React, { useContext, useRef } from 'react'
import HeaderContext from '../Header/Header.Context'
import SideMenuWrapper from './SideMenu.Wrapper'
import { SideMenuClientProps } from '@/types/components/SideMenu.Type'
import { DrawerStateChangeProps } from '@/types/components/Header.Type'

export default function SideMenuClient({ params, children }: SideMenuClientProps) {
  const { open, anchor, DrawerStateChange } = useContext(HeaderContext)
  const sideRef = useRef(null)
  const drawerOpen: DrawerStateChangeProps = { newOpen: true, newAnchor: anchor }
  const drawerClose: DrawerStateChangeProps = { newOpen: false, newAnchor: anchor }

  return (
    <>
      <SwipeableDrawer
        anchor={anchor}
        open={open}
        onClose={() => DrawerStateChange(drawerClose)}
        onOpen={() => DrawerStateChange(drawerOpen)}
      >
        <Box>
          {params.inbox.map(({ key, value }, index) => {
            return (
              <Link key={index} href={key}>
                {value}
              </Link>
            )
          })}
        </Box>
        <Stack>
          <SideMenuWrapper ref={sideRef}>{children}</SideMenuWrapper>
        </Stack>
      </SwipeableDrawer>
    </>
  )
}
