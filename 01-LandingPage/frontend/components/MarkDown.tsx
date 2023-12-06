'use client'

import { Link } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'

type Props = {
  params: { id: string; title: string; body: string }
  children: React.ReactNode
}

export default function MarkDown({ params, children }: Props) {
  const { t } = useTranslation()
  const { id, title, body } = params
  return (
    <>
      <Box display={'flex'}>
        <h1>{t(title)}</h1>
        <Button id={id} href={`#${id}`}>
          <Link></Link>
        </Button>
      </Box>
      <p>{t(body)}</p>
      {children}
    </>
  )
}
