'use client'

import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import LicenseContext from './License.Context'
import { LicenseListClientProps } from '@/types/components/License/License.Type'
import { License } from '@/types/app/license/License.Type'

export default function LicenseListClient({ params, children }: LicenseListClientProps) {
  const { license } = params
  const context = useContext(LicenseContext)
  const { environmentTabIndex } = context
  const [list, setList] = useState<Array<License>>([])

  useEffect(() => {
    switch (environmentTabIndex) {
      case 0:
        setList(license.all)
        break
      case 1:
        setList(license.production)
        break
      case 2:
        setList(license.development)
        break
      default:
        break
    }
  }, [environmentTabIndex, license.all, license.development, license.production])

  return (
    <>
      <Box>
        <Box height={700} display={'flex'}>
          <List sx={{ minWidth: 280, overflowY: 'scroll' }}>
            {list.map(({ name }, index) => {
              return (
                <ListItem key={index}>
                  <ListItemButton href={`#${name}`}>
                    <ListItemText primary={name}></ListItemText>
                  </ListItemButton>
                </ListItem>
              )
            })}
          </List>
          {children}
        </Box>
      </Box>
    </>
  )
}
