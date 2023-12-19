/**
 * @jest-environment jsdom
 */
import { beforeAll, beforeEach, describe, expect, test, vi } from 'vitest'
import { userEvent } from '@testing-library/user-event'
import { render, screen, waitFor } from '@testing-library/react'
import LeftMenuServer from '@/components/LeftMenu/LeftMenu.Server'
import HeaderContext from '@/components/Header/Header.Context'
import { HeaderContextProps } from '@/types/components/Header.Type'
import { useContext } from 'react'

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

describe('LeftMenu', () => {
  const context = useContext(HeaderContext)
  beforeAll(async () => {
    context.DrawerStateChange({ newOpen: true, newAnchor: 'left' })
    const leftMenuServer = await LeftMenuServer()
    render(leftMenuServer)

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

  beforeEach(() => {
    openState.setOpen(false)
  })

  test('LeftMenuServer renders LeftMenuClient', () => {
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
