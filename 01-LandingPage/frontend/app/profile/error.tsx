'use client'

import { ErrorSchemaError } from '@/swagger/v1/typescript/model/errorSchemaError'
import { Stack, Typography } from '@mui/material'

export default function Error({ error }: { error: ErrorSchemaError }) {
  const { code, message, path, timestamp } = error
  const date = new Date(timestamp ?? Date.now()).toLocaleString()
  return (
    <Stack p={3} gap={2}>
      <Typography variant="h6">
        <code>{code}</code>
      </Typography>
      <Typography variant="h5">{message}</Typography>
      <Typography variant="body1">
        <path>{path}</path>
      </Typography>
      <Typography variant="body1">
        <time>{date}</time>
      </Typography>
    </Stack>
  )
}
