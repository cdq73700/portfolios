/**
 * @jest-environment jsdom
 */
import { beforeAll, beforeEach, describe, expect, test, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import HeaderServer from '@/components/Header/Header.Server'
import { HeaderContextProps } from '@/types/components/Header.Type'
import userEvent from '@testing-library/user-event'
import { useContext } from 'react'
import HeaderContext from '@/components/Header/Header.Context'

const headerContext: HeaderContextProps = {
  open: false,
  anchor: 'right',
  DrawerStateChange: ({ newOpen, newAnchor }) => {
    headerContext.open = newOpen
    headerContext.anchor = newAnchor
  },
}

describe('Header', () => {
  const context = useContext(HeaderContext)

  beforeAll(async () => {
    const headerServer = await HeaderServer()
    render(headerServer)

    vi.mock('react', () => {
      return {
        ...vi.importActual('react'),
        useContext: vi.fn(() => headerContext),
        createContext: vi.fn(),
      }
    })
  })

  beforeEach(() => {
    context.DrawerStateChange({ newOpen: false, newAnchor: 'right' })
  })

  test('HeaderProvider renders HeaderClient', () => {
    const appBer = screen.getByTestId('Header')
    expect(appBer).toBeDefined()
  })

  test('Renders header links', () => {
    const inbox = [
      {
        key: '/',
        value: 'HEADER',
      },
      {
        key: '/profile',
        value: 'PROFILE',
      },
    ]

    inbox.map(({ key, value }) => {
      const link = screen.getByRole('heading', { level: 6, name: value })
      expect(link).toBeDefined()
      expect(link.closest('a')?.href).toEqual(location.href.slice(0, -1) + key)
    })
  })

  test('Renders buttons', () => {
    const menu = screen.getByTestId('Menu')
    expect(menu).toBeDefined()

    const setting = screen.getByTestId('Settings')
    expect(setting).toBeDefined()
  })

  test('Click menu button', async () => {
    expect(context.open).toEqual(false)
    expect(context.anchor).toEqual('right')

    const menu = screen.getByTestId('Menu')
    expect(menu).toBeDefined()

    await waitFor(() => userEvent.click(menu))

    expect(context.open).toEqual(true)
    expect(context.anchor).toEqual('left')
  })

  test('Click setting button', async () => {
    expect(context.open).toEqual(false)
    expect(context.anchor).toEqual('right')

    const setting = screen.getByTestId('Settings')
    expect(setting).toBeDefined()

    await waitFor(() => userEvent.click(setting))

    expect(context.open).toEqual(true)
    expect(context.anchor).toEqual('right')
  })
})
