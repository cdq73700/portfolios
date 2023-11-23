import { setTheme } from '@/reducers/window.reducer'
import { DarkMode, LightMode } from '@mui/icons-material'
import { Box, Button, ButtonGroup } from '@mui/material'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Theme } from '@/types/window.type'

const ModeButton = () => {
  const dispatch = useDispatch()

  const changeThemeCallback = useCallback(
    (theme: Theme) => {
      switch (theme) {
        case 'dark':
          dispatch(setTheme('dark'))
          document.documentElement.classList.add('dark')
          break
        default:
          dispatch(setTheme('right'))
          document.documentElement.classList.remove('dark')
          break
      }
    },
    [dispatch]
  )

  return (
    <>
      <ButtonGroup>
        <Button onClick={() => changeThemeCallback('right')}>
          <LightMode></LightMode>
          <Box padding={'0.25rem'}>Light</Box>
        </Button>
        <Button onClick={() => changeThemeCallback('dark')}>
          <DarkMode></DarkMode>
          <Box padding={'0.25rem'}>Dark</Box>
        </Button>
      </ButtonGroup>
    </>
  )
}

export default ModeButton
