'use client'

import { ContentProps, LicenseContentClientProps } from '@/types/components/License/License.Type'
import { Box, Link, Stack, Typography } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import LicenseContext from './License.Context'
import { License } from '@/types/app/license/License.Type'

function Content({ params }: ContentProps) {
  const { name, version, license, npmjs, github, body } = params

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
            NPMJS LINK
          </Typography>
          <Link href={npmjs} target={'_blank'}>
            <Typography variant="h5">{npmjs}</Typography>
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
  const context = useContext(LicenseContext)
  const [list, setList] = useState<Array<License>>([])
  const { environmentTabIndex } = context

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
      <Box height={700} display={'flex'} flexDirection={'column'} sx={{ minWidth: 1500, overflowY: 'scroll' }}>
        {list.map((item, index) => {
          return (
            <Box key={index}>
              <Content params={{ ...item }}></Content>
            </Box>
          )
        })}
      </Box>
    </>
  )
}
