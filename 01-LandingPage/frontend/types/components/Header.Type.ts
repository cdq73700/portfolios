import { Anchor } from '../Application.Type'

/**
 * HeaderContext
 */
export type DrawerStateChangeProps = {
  newOpen: boolean
  newAnchor: Anchor
}

export type HeaderContextProps = {
  open: boolean
  anchor: Anchor
  DrawerStateChange: ({ newOpen, newAnchor }: DrawerStateChangeProps) => void
}

/**
 * HeaderProvider
 */
export type HeaderProviderProps = {
  children: React.ReactNode
}

/**
 * HeaderServer
 */
export type Inbox = {
  key: string
  value: string
}

/**
 * HeaderClient
 */
export type HeaderClientProps = {
  params: {
    inbox: Array<Inbox>
  }
}
