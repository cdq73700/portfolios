'use client'

import { Box, Stack, SwipeableDrawer } from '@mui/material'
import Link from 'next/link'
import React, { useContext, useRef } from 'react'
import HeaderContext from '../Header/Header.Context'
import SideMenuWrapper from './SideMenu.Wrapper'
import { SideMenuClientProps } from '@/types/components/SideMenu.Type'
import { DrawerStateChangeProps } from '@/types/components/Header.Type'
import styles from '@/styles/components/SideMenu.Styles.module.css'

export default function SideMenuClient({ params, children }: SideMenuClientProps) {
  const { open, anchor, DrawerStateChange } = useContext(HeaderContext)
  const sideRef = useRef(null)
  const drawerOpen: DrawerStateChangeProps = { newOpen: true, newAnchor: anchor }
  const drawerClose: DrawerStateChangeProps = { newOpen: false, newAnchor: anchor }
  const { Header, Body } = styles

  return (
    <>
      <SwipeableDrawer
        anchor={anchor}
        open={open}
        onClose={() => DrawerStateChange(drawerClose)}
        onOpen={() => DrawerStateChange(drawerOpen)}
      >
        <Box display={'flex'} className={Header} justifyContent={'center'}>
          {params.inbox.map(({ key, value }, index) => {
            return (
              <Box key={index} alignSelf={'center'}>
                <Link href={key}>{value}</Link>
              </Box>
            )
          })}
        </Box>
        <Stack className={Body}>
          <SideMenuWrapper ref={sideRef}>{children}</SideMenuWrapper>
        </Stack>
      </SwipeableDrawer>
    </>
  )
}
