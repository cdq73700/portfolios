'use client'

import { LicenseContextProps, LicenseProviderProps } from '@/types/components/License/License.Type'
import { useContext, useState } from 'react'
import LicenseContext from './License.Context'

export default function LicenseProvider({ children }: LicenseProviderProps) {
  const licenseContext = useContext(LicenseContext)
  const [serverTabIndex, setServerTabIndex] = useState(licenseContext.serverTabIndex)
  const [environmentTabIndex, setEnvironmentTabIndex] = useState(licenseContext.environmentTabIndex)
  const SetServerTabIndex = (index: number) => {
    setServerTabIndex(index)
  }
  const SetEnvironmentTabIndex = (index: number) => {
    setEnvironmentTabIndex(index)
  }

  const contextValue: LicenseContextProps = {
    serverTabIndex,
    environmentTabIndex,
    SetServerTabIndex,
    SetEnvironmentTabIndex,
  }

  return <LicenseContext.Provider value={contextValue}>{children}</LicenseContext.Provider>
}
