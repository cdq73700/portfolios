'use client'

import { Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useTranslation } from 'react-i18next'

type List = {
  key: string
  value: string
}

type Props = {
  lang: string
  viewProfile: Array<List>
  profileDate: Array<List>
}

export function Profile({ lang, viewProfile, profileDate }: Props) {
  const { t } = useTranslation(undefined, { lng: lang })
  return (
    <>
      <Box display="flex" gap={2} justifyContent="end">
        {profileDate.map(({ key, value }, index) => {
          return (
            <Box key={index}>
              <span>{t(key)}:</span>
              <span>{value}</span>
            </Box>
          )
        })}
      </Box>

      {viewProfile.map(({ key, value }, index) => {
        return (
          <Grid key={index} container spacing={2}>
            <Grid xs={2}>{t(key)}</Grid>
            <Grid xs={10}>{value}</Grid>
          </Grid>
        )
      })}
    </>
  )
}
