import { LicenseContextProps } from '@/types/components/License/License.Type'
import { createContext } from 'react'

const LicenseContext = createContext<LicenseContextProps>({
  serverTabIndex: 0,
  environmentTabIndex: 0,
  SetServerTabIndex: (_index) => {},
  SetEnvironmentTabIndex: (_index) => {},
})

export default LicenseContext
