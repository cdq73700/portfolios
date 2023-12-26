'use client'

import { Box, LinearProgress } from '@mui/material'

export default function Loading() {
  return (
    <Box position={'fixed'} right={0} width={'100%'}>
      <LinearProgress></LinearProgress>
    </Box>
  )
}
