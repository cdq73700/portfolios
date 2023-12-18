'use client'

import { Box } from '@mui/material'

export default function FooterClient() {
  return (
    <>
      <footer data-testid="footer">
        <Box display={'flex'} justifyContent={'center'}>
          FOOTER
        </Box>
      </footer>
    </>
  )
}
