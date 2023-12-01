import { DarkMode, LightMode } from '@mui/icons-material'
import { Box, Button, ButtonGroup } from '@mui/material'
import { useCallback } from 'react'
import { Theme } from '@/types/window.type'
import { useTheme } from 'next-themes'
import { SetMode } from '@/lib/api/api'

const ModeButton = () => {
  const { setTheme } = useTheme()
  const changeThemeCallback = useCallback(
    async (theme: Theme) => {
      await SetMode(theme)
      setTheme(theme)
    },
    [setTheme]
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
