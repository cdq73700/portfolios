/**
 * @jest-environment jsdom
 */
import { beforeAll, beforeEach, describe, expect, test, vi } from 'vitest'
import { userEvent } from '@testing-library/user-event'
import { render, screen, waitFor } from '@testing-library/react'
import LeftMenuServer from '@/components/LeftMenu/LeftMenu.Server'
import { HeaderContextProps } from '@/types/components/Header.Type'
import { Anchor } from '@/types/Application.Type'

let leftMenuServer

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
        useState: vi.fn(() => [openState.open, openState.setOpen]),
        useCallback: vi.fn(() => {
          return () => openState.setOpen(!openState.open)
        }),
      }
    })
  })

  beforeEach(async () => {
    headerContext.DrawerStateChange({ newOpen: true, newAnchor: 'left' })
    openState.setOpen(false)
    leftMenuServer = await LeftMenuServer()
    rerender(leftMenuServer)
  })

  test('Do not render when "open" is "false"', async () => {
    const anchorList: Array<Anchor> = ['right', 'left', 'top', 'bottom']
    anchorList.map(async (item) => {
      headerContext.DrawerStateChange({ newOpen: false, newAnchor: item })
      leftMenuServer = await LeftMenuServer()
      rerender(leftMenuServer)

      const profile = screen.queryByTestId('profile')
      expect(profile).toBeNull()
    })
  })

  test('Do not render when "anchor" is other than "right"', () => {
    const anchorList: Array<Anchor> = ['right', 'top', 'bottom']
    anchorList.map(async (anchor) => {
      headerContext.DrawerStateChange({ newOpen: true, newAnchor: anchor })
      leftMenuServer = await LeftMenuServer()
      rerender(leftMenuServer)

      const profile = screen.queryByTestId('profile')
      expect(profile).toBeNull()
    })
  })

  test('LeftMenuServer renders LeftMenuClient', async () => {
    const profile = screen.getByTestId('profile')
    expect(profile).toBeDefined()

    const inbox = screen.getByTestId('inbox')
    expect(inbox).toBeDefined()
  })

  test('Status changes by pressing the open/close button', async () => {
    const cat = screen.queryByTestId('cat')
    expect(cat).toBeNull()
    expect(openState.open).toEqual(false)

    const inbox = screen.getByRole('button')

    await waitFor(() => userEvent.click(inbox))

    expect(openState.open).toEqual(true)
  })

  test('Status changes by pressing the close/open button', async () => {
    openState.setOpen(true)

    const cat = screen.queryByTestId('cat')
    expect(cat).toBeDefined()
    expect(openState.open).toEqual(true)

    const inbox = screen.getByRole('button')

    await waitFor(() => userEvent.click(inbox))

    expect(openState.open).toEqual(false)
  })
})
