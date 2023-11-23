import { toggleMenu } from '@/reducers/sideMenu.reducer'
import { Box, Link, Stack, SwipeableDrawer } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import styles from '@/styles/components/SideMenu.styles.module.css'
import { Anchor } from '@/types/sideMenu.type'

const SideMenu = ({ children }: { children: React.ReactNode }) => {
  const { anchor, isOpen }: { anchor: Anchor; isOpen: boolean } = useSelector(
    ({ sideMenu }) => sideMenu
  )
  const dispach = useDispatch()
  const { Header, Body, Container } = styles

  return (
    <>
      <SwipeableDrawer
        anchor={anchor}
        open={isOpen}
        onClose={() => dispach(toggleMenu(anchor))}
        onOpen={() => dispach(toggleMenu(anchor))}
      >
        <Box className={Header}>
          <Link href="/">HEADER</Link>
        </Box>
        <Stack className={Body}>
          <Box>
            <Box className={Container}>{children}</Box>
          </Box>
        </Stack>
      </SwipeableDrawer>
    </>
  )
}

export default SideMenu
