'use client'

import { LicenseTabClientProps } from '@/types/components/License/License.Type'
import { Box, Tab, Tabs } from '@mui/material'
import { useCallback, useState } from 'react'

export default function LicenseTabClient({ params, action, children }: LicenseTabClientProps) {
  const [index, setIndex] = useState(0)
  const { inbox } = params
  const handleChange = useCallback(
    (_event: React.SyntheticEvent, value: number) => {
      setIndex(value)
      action(value === 0 ? undefined : inbox[value])
    },
    [action, inbox]
  )

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={index} onChange={handleChange}>
          {inbox.map((value, index) => {
            return <Tab key={index} label={value} sx={{ color: 'initial' }} />
          })}
        </Tabs>
      </Box>
      {children}
    </>
  )
}
