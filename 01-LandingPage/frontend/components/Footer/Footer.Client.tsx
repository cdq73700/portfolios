'use client'

import { FooterClientProps } from '@/types/components/Footer.Type'
import { Box } from '@mui/material'

export default function FooterClient({ params }: FooterClientProps) {
  const { license } = params
  return (
    <>
      <footer data-testid="footer">
        <Box display={'flex'} justifyContent={'center'}>
          {license}
        </Box>
      </footer>
    </>
  )
}
