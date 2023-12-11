/**
 * RightMenuServer
 */
export type Inbox = {
  label: string
  value: React.ReactElement
}

/**
 * RightMenuClient
 */
export type RightMenuClientProps = {
  params: {
    inbox: Array<Inbox>
  }
}

/**
 * RightMenuWrapper
 */
export type RightMenuWrapperProps = {
  children: React.ReactNode
}
