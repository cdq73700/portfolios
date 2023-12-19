/**
 * @jest-environment jsdom
 */
import { beforeAll, beforeEach, describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeaderContextProps } from '@/types/components/Header.Type'
import RightMenuServer from '@/components/RightMenu/RightMenu.Server'
import { Anchor } from '@/types/Application.Type'

let rightMenuServer

const headerContext: HeaderContextProps = {
  open: false,
  anchor: 'right',
  DrawerStateChange: ({ newOpen, newAnchor }) => {
    headerContext.open = newOpen
    headerContext.anchor = newAnchor
  },
}

const openState = {
  open: false,
  setOpen: (open: boolean) => {
    openState.open = open
  },
}

describe('LeftMenu', async () => {
  const { rerender } = render(<></>)
  beforeAll(async () => {
    vi.mock('react', async () => {
      const actual = await vi.importActual('react')
      return {
        ...actual,
        useContext: vi.fn(() => headerContext),
        createContext: vi.fn(),
      }
    })
    vi.mock('react-i18next', async () => {
      const actual = await vi.importActual('react-i18next')
      return {
        ...actual,
        useTranslation: vi.fn(() => {
          return {
            i18n: {
              language: 'en',
            },
          }
        }),
      }
    })
  })

  beforeEach(async () => {
    headerContext.DrawerStateChange({ newOpen: true, newAnchor: 'right' })
    openState.setOpen(false)
    rightMenuServer = await RightMenuServer()
    rerender(rightMenuServer)
  })

  test('Do not render when "open" is "false"', async () => {
    const anchorList: Array<Anchor> = ['right', 'left', 'top', 'bottom']
    anchorList.map(async (item) => {
      headerContext.DrawerStateChange({ newOpen: false, newAnchor: item })
      rightMenuServer = await RightMenuServer()
      rerender(rightMenuServer)

      const profile = screen.queryByTestId('profile')
      expect(profile).toBeNull()
    })
  })

  test('Do not render when "anchor" is other than "right"', () => {
    const anchorList: Array<Anchor> = ['left', 'top', 'bottom']
    anchorList.map(async (anchor) => {
      headerContext.DrawerStateChange({ newOpen: true, newAnchor: anchor })
      rightMenuServer = await RightMenuServer()
      rerender(rightMenuServer)

      const profile = screen.queryByTestId('profile')
      expect(profile).toBeNull()
    })
  })

  test('RightMenuServer renders RightMenuClient', () => {
    const inbox = ['Theme', 'Language']
    inbox.map((item) => {
      const textElement = screen.getByTestId(item)
      expect(textElement).toBeDefined()
    })
  })
})
