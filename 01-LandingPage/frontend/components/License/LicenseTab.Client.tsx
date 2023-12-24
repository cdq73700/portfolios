'use client'

import { LicenseTabClientProps } from '@/types/components/License/License.Type'
import { Box, Tab, Tabs, Typography } from '@mui/material'
import { useCallback } from 'react'

export default function LicenseTabClient({ params, children }: LicenseTabClientProps) {
  const { inbox, index, ChangeIndex } = params
  const handleChange = useCallback(
    (_event: React.SyntheticEvent, newValue: number) => {
      ChangeIndex(newValue)
    },
    [ChangeIndex]
  )

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={index} onChange={handleChange}>
          {inbox.map((value, index) => {
            return <Tab key={index} label={value} href="#" sx={{ color: 'initial' }} />
          })}
        </Tabs>
      </Box>
      {children}
    </>
  )
}
