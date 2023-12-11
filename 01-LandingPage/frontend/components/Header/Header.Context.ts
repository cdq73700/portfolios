import { HeaderContextProps } from '@/types/components/Header.Type'
import { createContext } from 'react'

const HeaderContext = createContext<HeaderContextProps>({
  open: false,
  anchor: 'right',
  DrawerStateChange: () => {},
})

export default HeaderContext
