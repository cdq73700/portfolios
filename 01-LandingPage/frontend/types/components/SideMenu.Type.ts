/**
 * SideMenuServer
 */
export type SideMenuServerProps = {
  children: React.ReactNode
}

export type Inbox = {
  key: string
  value: string
}

/**
 * SideMenuClient
 */
export type SideMenuClientProps = {
  params: {
    inbox: Array<Inbox>
  }
  children: React.ReactNode
}

/**
 * SideMenuWrapper
 */
export type SideMenuWrapperProps = {
  children: React.ReactNode
}
