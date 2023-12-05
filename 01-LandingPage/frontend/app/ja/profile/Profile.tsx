import { GetProfile } from '@/lib/api/api'
import { GetCookie } from '@/lib/cookies'
import { Box } from '@mui/material'

function GetLang() {
  const GetLangCookie = async function () {
    const cookie = await GetCookie('language')
    if (!cookie) {
      return 'en'
    }
    return cookie.value
  }
  return GetLangCookie()
}

export default async function Profile() {
  const lang = await GetLang()
  const profile: [] = await GetProfile(lang)

  console.log(profile)

  return (
    <>
      {profile.map(
        ({
          id,
          name,
          email,
          tel,
          post,
          address,
          language,
          isActive,
          createdAt,
          updatedAt,
        }) => {
          return (
            <Box key={id}>
              <Box>
                <span>name </span>
                <span>{name}</span>
              </Box>
              <Box>
                <span>mail </span>
                <address>{email}</address>
              </Box>
              <Box>
                <span>tel </span>
                <span>{tel}</span>
              </Box>
              <Box>
                <span>post </span>
                <span>〒{post}</span>
              </Box>
              <Box>
                <span>address </span>
                <span>{address}</span>
              </Box>
              <Box>
                <span>createdAt </span>
                <span>{createdAt}</span>
              </Box>
              <Box>
                <span>updatedAt </span>
                <span>{updatedAt}</span>
              </Box>
            </Box>
          )
        }
      )}
    </>
  )
}
