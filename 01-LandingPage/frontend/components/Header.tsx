'use client'
import { Menu, Settings } from '@mui/icons-material'
import SideMenu from './SideMenu'
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import { Box, Button, Link, Stack } from '@mui/material'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '@/reducers/sideMenu.reducer'
import { useCallback, useState } from 'react'
import { Anchor } from '@/types/sideMenu.type'

const Header = () => {
  const [componentId, setComponentId] = useState<string | null>(null)
  const dispatch = useDispatch()

  const toggleMenuCallback = useCallback(
    (anchor: Anchor) => {
      dispatch(toggleMenu(anchor))
      switch (anchor) {
        case 'left':
          setComponentId(anchor)
          break
        case 'right':
          setComponentId(anchor)
          break
        default:
          setComponentId(null)
          break
      }
    },
    [dispatch]
  )

  return (
    <>
      <header>
        <Box display={'flex'} alignItems={'center'}>
          <Button onClick={() => toggleMenuCallback('left')}>
            <Menu></Menu>
          </Button>
          <Stack>
            <Link href="/">HEADER</Link>
          </Stack>
          <Box flexGrow={1}></Box>
          <Button onClick={() => toggleMenuCallback('right')}>
            <Settings></Settings>
          </Button>
        </Box>
      </header>

      <SideMenu>
        {componentId == 'left' && <LeftMenu></LeftMenu>}
        {componentId == 'right' && <RightMenu></RightMenu>}
      </SideMenu>
    </>
  )
}

export default Header
