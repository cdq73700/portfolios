import { GetProfile } from '@/lib/api/api'
import { Box } from '@mui/material'

export default async function Profile() {
  const profile: [{ id: number; firstName: string; lastName: string }] =
    await GetProfile()

  return (
    <>
      {profile.map(({ id, firstName, lastName }) => {
        return (
          <Box key={id}>
            <Box>
              <span>firstName </span>
              <span>{firstName}</span>
            </Box>
            <Box>
              <span>lastName </span>
              <span>{lastName}</span>
            </Box>
          </Box>
        )
      })}
    </>
  )
}
