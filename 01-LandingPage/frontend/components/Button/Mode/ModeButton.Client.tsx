'use client'

import { Theme } from '@/types/Application.Type'
import { ModeButtonClientProps } from '@/types/components/Button/Mode.Type'
import { Button, ButtonGroup } from '@mui/material'
import { useCallback } from 'react'

export default function ModeButtonClient({ params, action }: ModeButtonClientProps) {
  const { themes } = params
  const ChangeThemeCallback = useCallback(
    async (theme: Theme) => {
      action({ theme })
    },
    [action]
  )

  return (
    <ButtonGroup>
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
