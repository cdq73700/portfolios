'use client'

import LicenseContext from '@/components/License/License.Context'
import LicenseContentClient from '@/components/License/LicenseContent.Client'
import LicenseListClient from '@/components/License/LicenseList.Client'
import LicenseTabClient from '@/components/License/LicenseTab.Client'
import { LicenseClientProps, LicenseList } from '@/types/app/license/License.Type'
import { useContext, useEffect, useState } from 'react'

export default function LicenseClient({ params }: LicenseClientProps) {
  const context = useContext(LicenseContext)
  const [license, setLicense] = useState<LicenseList>()
  const { all, front, back } = params.license
  const { serverTabIndex } = context
  const serverInbox = ['ALL', 'FRONTEND', 'BACKEND']
  const environmentInbox = ['ALL', 'PRODUCTION', 'DEVELOPMENT']

  useEffect(() => {
    switch (serverTabIndex) {
      case 0:
        setLicense(all)
        break
      case 1:
        setLicense(front)
        break
      case 2:
        setLicense(back)
        break
      default:
        break
    }
  }, [all, back, front, serverTabIndex])

  return (
    <>
      {license && (
        <LicenseTabClient
          params={{ inbox: serverInbox, index: context.serverTabIndex, ChangeIndex: context.SetServerTabIndex }}
        >
          <LicenseTabClient
            params={{
              inbox: environmentInbox,
              index: context.environmentTabIndex,
              ChangeIndex: context.SetEnvironmentTabIndex,
            }}
          >
            <LicenseListClient params={{ license }}>
              <LicenseContentClient params={{ license }}></LicenseContentClient>
            </LicenseListClient>
          </LicenseTabClient>
        </LicenseTabClient>
      )}
    </>
  )
}
