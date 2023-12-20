'use client'

import { Theme } from '@/types/Application.Type'
import { ThemeButtonClientProps } from '@/types/components/Button/Theme.Type'
import { Button, ButtonGroup } from '@mui/material'
import { useCallback } from 'react'
import styles from '@/styles/components/Button/Theme.Styles.module.css'

export default function ThemeButtonClient({ params, action }: ThemeButtonClientProps) {
  const { themes } = params
  const { ButtonStyle } = styles
  const ChangeThemeCallback = useCallback(
    async (theme: Theme) => {
      action({ theme })
    },
    [action]
  )

  return (
    <ButtonGroup fullWidth className={ButtonStyle}>
      {themes.map((item, index) => {
        return (
          <Button key={index} onClick={() => ChangeThemeCallback(item)}>
            {item}
          </Button>
        )
      })}
    </ButtonGroup>
  )
}
