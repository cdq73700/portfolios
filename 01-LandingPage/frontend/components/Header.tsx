'use client'
import { Menu, Search, Settings } from '@mui/icons-material'
import SideMenu from './SideMenu'
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import { Box, Button, Stack } from '@mui/material'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '@/reducers/sideMenu.reducer'
import { useCallback, useState } from 'react'
import { Anchor } from '@/types/sideMenu.type'

const Header = () => {
  const [node, setNode] = useState<JSX.Element>()
  const dispatch = useDispatch()

  const toggleMenuCallback = useCallback(
    (anchor: Anchor) => {
      dispatch(toggleMenu(anchor))
      switch (anchor) {
        case 'left':
          setNode(LeftMenu)
          break
        case 'right':
          setNode(RightMenu)
          break
        default:
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
          <Stack>HEADER</Stack>
          <Box flexGrow={1}></Box>
          <Button>
            <Search></Search>
          </Button>
          <Button onClick={() => toggleMenuCallback('right')}>
            <Settings></Settings>
          </Button>
        </Box>
      </header>

      <SideMenu>{node}</SideMenu>
    </>
  )
}

export default Header
