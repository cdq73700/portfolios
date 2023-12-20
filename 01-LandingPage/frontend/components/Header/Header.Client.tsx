'use client'

import { Menu, Settings } from '@mui/icons-material'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import Link from 'next/link'
import { useContext } from 'react'
import HeaderContext from './Header.Context'
import { DrawerStateChangeProps, HeaderClientProps } from '@/types/components/Header.Type'
import styles from '@/styles/components/Header.Styles.module.css'

export default function HeaderClient({ params }: HeaderClientProps) {
  const { inbox } = params
  const { DrawerStateChange } = useContext(HeaderContext)
  const { Header } = styles

  return (
    <>
      <Box flexGrow={1}>
        <AppBar position="fixed" sx={{ backgroundColor: 'unset' }} className={Header} data-testid="Header">
          <Toolbar>
            <IconButton
              sx={{ color: 'initial' }}
              data-testid="Menu"
              onClick={() => {
                const drawer: DrawerStateChangeProps = { newOpen: true, newAnchor: 'left' }
                DrawerStateChange(drawer)
              }}
            >
              <Menu></Menu>
            </IconButton>
            <Box flexGrow={1}>
              <Grid container spacing={2}>
                {inbox.map(({ key, value }, index) => {
                  return (
                    <Grid key={index}>
                      <Link href={key}>
                        <Typography variant="h6">{value}</Typography>
                      </Link>
                    </Grid>
                  )
                })}
              </Grid>
            </Box>
            <IconButton
              sx={{ color: 'initial' }}
              data-testid="Settings"
              onClick={() => {
                const drawer: DrawerStateChangeProps = { newOpen: true, newAnchor: 'right' }
                DrawerStateChange(drawer)
              }}
            >
              <Settings></Settings>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}
