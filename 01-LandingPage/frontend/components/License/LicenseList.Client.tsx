'use client'

import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { LicenseListClientProps } from '@/types/components/License/License.Type'

export default function LicenseListClient({ params, action }: LicenseListClientProps) {
  const { license } = params

  return (
    <>
      <Box height={700} display={'flex'}>
        <List sx={{ width: '280px', minWidth: '280px', overflowY: 'scroll' }}>
          {license.map(({ name }, index) => {
            return (
              <ListItem key={index}>
                <ListItemButton onClick={() => action(name)}>
                  <ListItemText primary={name}></ListItemText>
                </ListItemButton>
              </ListItem>
            )
          })}
        </List>
      </Box>
    </>
  )
}
