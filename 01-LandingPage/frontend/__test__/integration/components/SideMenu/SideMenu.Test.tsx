/**
 * @jest-environment jsdom
 */
import { beforeAll, beforeEach, describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeaderContextProps } from '@/types/components/Header.Type'
import SideMenuServer from '@/components/SideMenu/SideMenu.Server'
import { Anchor } from '@/types/Application.Type'

let sideMenuServer

const headerContext: HeaderContextProps = {
  open: false,
  anchor: 'right',
  DrawerStateChange: ({ newOpen, newAnchor }) => {
    headerContext.open = newOpen
    headerContext.anchor = newAnchor
  },
}

describe('Language', async () => {
  const { rerender } = render(<></>)

  beforeAll(() => {
    vi.mock('react', async () => {
      const actual = await vi.importActual('react')
      return {
        ...actual,
        useContext: vi.fn(() => headerContext),
        createContext: vi.fn(),
      }
    })
  })

  beforeEach(async () => {
    headerContext.DrawerStateChange({ newOpen: true, newAnchor: 'left' })
    sideMenuServer = await SideMenuServer({ children: <></> })
    rerender(sideMenuServer)
  })

  test('Do not render when "open" is "false"', async () => {
    const anchorList: Array<Anchor> = ['right', 'left', 'top', 'bottom']
    anchorList.map(async (item) => {
      headerContext.DrawerStateChange({ newOpen: false, newAnchor: item })
      sideMenuServer = await SideMenuServer({ children: <></> })
      rerender(sideMenuServer)

      const drawerElement = screen.getByTestId('sentinelStart')
      expect(drawerElement.getAttribute('tabindex')).toEqual('-1')
    })
  })

  test('SideMenuServer renders SideMenuClient', () => {
    const inbox = [
      {
        key: '/',
        value: 'HEADER',
      },
    ]

    const drawerElement = screen.getByTestId('sentinelStart')
    expect(drawerElement.getAttribute('tabindex')).toEqual('0')

    inbox.map(({ key, value }) => {
      const link = screen.getByText(value)
      expect(link).toBeDefined()
      expect(link.closest('a')?.href).toEqual(location.href.slice(0, -1) + key)
    })
  })
})
