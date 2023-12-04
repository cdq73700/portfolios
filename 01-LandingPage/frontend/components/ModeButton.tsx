import { DarkMode, LightMode } from '@mui/icons-material'
import { Box, Button, ButtonGroup } from '@mui/material'
import { useCallback } from 'react'
import { Theme } from '@/types/window.type'
import { useTheme } from 'next-themes'
import { SetMode } from '@/lib/api/api'

const ModeButton = () => {
  const { theme, setTheme } = useTheme()
  const changeThemeCallback = useCallback(
    async (mode: Theme) => {
      if (theme != mode) {
        await SetMode(mode)
        setTheme(mode)
      }
    },
    [setTheme, theme]
  )

  return (
    <>
      <ButtonGroup>
        <Button
          disabled={theme == 'light'}
          onClick={() => changeThemeCallback('light')}
        >
          <LightMode></LightMode>
          <Box padding={'0.25rem'}>Light</Box>
        </Button>
        <Button
          disabled={theme == 'dark'}
          onClick={() => changeThemeCallback('dark')}
        >
          <DarkMode></DarkMode>
          <Box padding={'0.25rem'}>Dark</Box>
        </Button>
      </ButtonGroup>
    </>
  )
}

export default ModeButton
