import { ReactElement } from 'react'

/**
 * LeftMenuServer
 */
export type Inbox = {
  href?: string
  icon: ReactElement
  value: string
  inbox?: Array<Inbox>
}

/**
 * LeftMenuClient
 */
export type LeftMenuClientProps = {
  params: {
    list: Array<Inbox>
  }
}

export type ListItemProps = {
  params: {
    inbox: Inbox
    listItemButtonProps: Object
  }
}

export type ListItemGroupProps = {
  params: {
    inbox: Inbox
  }
}
