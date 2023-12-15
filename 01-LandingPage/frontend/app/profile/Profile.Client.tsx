'use client'

import { ProfileClientProps } from '@/types/app/profile/Profile.Type'
import { AccessTime, Call, Email, Home, Pets, Update } from '@mui/icons-material'
import { Box, Icon, Stack, Typography } from '@mui/material'
import { useErrorBoundary } from 'react-error-boundary'

export default function ProfileClient({ params }: ProfileClientProps) {
  const { success, data, error } = params
  const { showBoundary } = useErrorBoundary()

  if (!success) {
    showBoundary(error)
  }

  return (
    <>
      {data &&
        data.map(({ id, name, email, tel, post, address, createdAt, updatedAt }) => {
          return (
            <Stack p={3} gap={2} key={id}>
              <Box display={'flex'} justifyContent={'end'} gap={3}>
                <Stack display={'flex'} flexDirection={'row'}>
                  <AccessTime></AccessTime>
                  <Typography variant="body1">
                    <time dateTime={createdAt}>{createdAt}</time>
                  </Typography>
                </Stack>

                <Stack display={'flex'} flexDirection={'row'}>
                  <Update></Update>
                  <Typography variant="body1">
                    <time dateTime={updatedAt}>{updatedAt}</time>
                  </Typography>
                </Stack>
              </Box>

              <Stack display={'flex'} flexDirection={'row'} alignItems={'center'} gap={2}>
                <Pets></Pets>
                <Typography variant="h4">{name}</Typography>
              </Stack>

              <Stack display={'flex'} flexDirection={'row'} alignItems={'center'} gap={2}>
                <Email></Email>
                <Typography variant="h4">{email}</Typography>
              </Stack>

              <Stack display={'flex'} flexDirection={'row'} alignItems={'center'} gap={2}>
                <Call></Call>
                <Typography variant="h4">{tel}</Typography>
              </Stack>

              <Stack display={'flex'} flexDirection={'row'} alignItems={'center'} gap={2}>
                <Icon>〒</Icon>
                <Typography variant="h4">{post}</Typography>
              </Stack>

              <Stack display={'flex'} flexDirection={'row'} alignItems={'center'} gap={2}>
                <Home></Home>
                <Typography variant="h4">{address}</Typography>
              </Stack>
            </Stack>
          )
        })}
    </>
  )
}
