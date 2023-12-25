'use client'

import { ContentProps, LicenseContentClientProps } from '@/types/components/License/License.Type'
import { Box, Link, Stack, Typography } from '@mui/material'

function Content({ params }: ContentProps) {
  const { name, version, license, install, github, body } = params.license

  return (
    <>
      <Stack p={3} gap={2} id={name}>
        <Typography variant="h3">{name}</Typography>
        <Stack display={'flex'} flexDirection={'row'} alignItems={'center'} gap={2}>
          <Typography variant="h4" width={'180px'}>
            VERSION
          </Typography>
          <Typography variant="h4">{version}</Typography>
        </Stack>
        <Stack display={'flex'} flexDirection={'row'} alignItems={'center'} gap={2}>
          <Typography variant="h4" width={'180px'}>
            LICENSE
          </Typography>
          <Typography variant="h4">{license}</Typography>
        </Stack>
        <Stack display={'flex'} flexDirection={'row'} alignItems={'center'} gap={2}>
          <Typography variant="h5" width={'180px'}>
            GET LINK
          </Typography>
          <Link href={install} target={'_blank'}>
            <Typography variant="h5">{install}</Typography>
          </Link>
        </Stack>
        <Stack display={'flex'} flexDirection={'row'} alignItems={'center'} gap={2}>
          <Typography variant="h5" width={'180px'}>
            GIT HUB LINK
          </Typography>
          <Link href={github} target={'_blank'}>
            <Typography variant="h5">{github}</Typography>
          </Link>
        </Stack>
        <Stack whiteSpace={'pre-line'}>
          <Typography variant="body1">{body}</Typography>
        </Stack>
      </Stack>
    </>
  )
}

export default function LicenseContentClient({ params }: LicenseContentClientProps) {
  const { license } = params
  return (
    <>
      <Box
        height={700}
        display={'flex'}
        flexDirection={'column'}
        sx={{ width: '1600px', minWidth: '900px', overflowY: 'scroll' }}
      >
        {license.map((item, index) => {
          return (
            <Box key={index}>
              <Content params={{ license: item }}></Content>
            </Box>
          )
        })}
      </Box>
    </>
  )
}
