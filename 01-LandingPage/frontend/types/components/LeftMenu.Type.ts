import { ReactElement } from 'react'
import { Language } from '../Application.Type'

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
    language: Language
  }
}

export type ListItemGroupProps = {
  params: {
    inbox: Inbox
    language: Language
  }
}
