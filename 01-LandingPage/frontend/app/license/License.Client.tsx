'use client'

import LicenseContentClient from '@/components/License/LicenseContent.Client'
import LicenseListClient from '@/components/License/LicenseList.Client'
import LicenseTabClient from '@/components/License/LicenseTab.Client'
import { ErrorSchemaError } from '@/swagger/v1/typescript/model/errorSchemaError'
import { LicenseActionProps, LicenseClientProps } from '@/types/app/license/License.Type'
import { Box } from '@mui/material'
import { useCallback, useMemo, useState } from 'react'
import { useErrorBoundary } from 'react-error-boundary'

export default function LicenseClient({ params, action }: LicenseClientProps) {
  const [license, setLicense] = useState(params.data)
  const [success, setSuccess] = useState(params.success)
  const [error, setError] = useState(params.error)
  const [query, setQuery] = useState<LicenseActionProps>({
    location: undefined,
    environment: undefined,
    name: undefined,
  })

  const locationInbox = useMemo(() => ['all', 'backend', 'frontend', 'python', 'swagger'], [])
  const environmentInbox = useMemo(() => ['all', 'production', 'development'], [])
  const { showBoundary } = useErrorBoundary()

  const handleClick = useCallback(
    async ({ location, environment, name }: LicenseActionProps) => {
      try {
        const request = !query.name
          ? { ...query, location, environment, name }
          : { ...query, location, environment, name: undefined }

        setQuery(request)

        const response = await action({ ...request })
        setSuccess(response.success)
        setLicense(response.data)
        setError(response.error)
      } catch (error) {
        setSuccess(false)
        setError(error as ErrorSchemaError)
      }
    },
    [action, query]
  )

  if (!success) {
    showBoundary(error)
  }

  return (
    <>
      <LicenseTabClient params={{ inbox: locationInbox }} action={(location) => handleClick({ ...query, location })}>
        <LicenseTabClient
          params={{ inbox: environmentInbox }}
          action={(environment) => handleClick({ ...query, environment })}
        >
          <Box display={'flex'}>
            <LicenseListClient
              params={{ license }}
              action={(name) => handleClick({ ...query, name })}
            ></LicenseListClient>
            <LicenseContentClient params={{ license }}></LicenseContentClient>
          </Box>
        </LicenseTabClient>
      </LicenseTabClient>
    </>
  )
}
