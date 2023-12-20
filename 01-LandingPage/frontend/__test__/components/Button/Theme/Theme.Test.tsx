/**
 * @jest-environment jsdom
 */
import { beforeAll, beforeEach, describe, expect, test, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import ThemeButtonServer from '@/components/Button/Theme/ThemeButton.Server'
import userEvent from '@testing-library/user-event'
import { cookies } from 'next/headers'

const cookieStore: any = {
  data: {},
  set: (key: string, value: string, options: any) => {
    cookieStore.data[key] = { value, ...options }
  },
  get: (key: string) => {
    return cookieStore.data[key]
  },
  delete: (key: string) => {
    delete cookieStore.data[key]
  },
}

describe('Theme', () => {
  const themes = ['light', 'dark']
  const themeCookieOptions = { path: '/', httpOnly: true, secure: true }

  beforeAll(async () => {
    const themeButtonServer = await ThemeButtonServer()
    render(themeButtonServer)

    vi.mock('next/headers', () => {
      return {
        cookies: () => {
          return {
            set: vi.fn((key, value, options) => {
              cookieStore.set(key, value, options)
            }),
            get: vi.fn((key) => cookieStore.get(key)),
            delete: vi.fn((key) => cookieStore.delete(key)),
          }
        },
      }
    })
  })

  beforeEach(async () => {
    const cookieStore = cookies()
    cookieStore.delete('theme')
  })

  test('Render of "light" and "dark" buttons', () => {
    themes.map((item) => {
      const button = screen.getByRole('button', { name: item })
      expect(button).toBeDefined()
    })
  })

  test('"light" button on click', async () => {
    const lightButton = screen.getByRole('button', { name: 'light' })
    expect(lightButton).toBeDefined()

    let themeCookie = undefined

    themeCookie = cookieStore.get('theme')
    expect(themeCookie).toBeUndefined()

    await waitFor(() => userEvent.click(lightButton))

    themeCookie = cookieStore.get('theme')
    expect(themeCookie).toEqual({ value: 'light', ...themeCookieOptions })
  })

  test('"dark" button on click', async () => {
    const lightButton = screen.getByRole('button', { name: 'dark' })
    expect(lightButton).toBeDefined()

    let themeCookie = undefined

    themeCookie = cookieStore.get('theme')
    expect(themeCookie).toBeUndefined()

    await waitFor(() => userEvent.click(lightButton))

    themeCookie = cookieStore.get('theme')
    expect(themeCookie).toEqual({ value: 'dark', ...themeCookieOptions })
  })

  test('Clicking buttons sets the "theme" cookie with correct options', () => {
    let themeCookie = undefined

    themeCookie = cookieStore.get('theme')
    expect(themeCookie).toBeUndefined()

    themes.map(async (item) => {
      const button = screen.getByRole('button', { name: item })
      expect(button).toBeDefined()

      await waitFor(() => userEvent.click(button))

      themeCookie = cookieStore.get('theme')
      expect(themeCookie).toEqual({ value: item, ...themeCookieOptions })
    })
  })
})
