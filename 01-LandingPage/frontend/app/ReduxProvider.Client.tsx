'use client'

import { store } from '@/stores/Base.Store'
import { ReduxProviderClientProps } from '@/types/app/Provider.Type'
import { Provider } from 'react-redux'

export default function ReduxProviderClient({ children }: ReduxProviderClientProps) {
  return <Provider store={store}>{children}</Provider>
}
