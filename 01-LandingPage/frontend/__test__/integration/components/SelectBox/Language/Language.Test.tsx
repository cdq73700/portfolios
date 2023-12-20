/**
 * @jest-environment jsdom
 */
import { afterEach, beforeAll, beforeEach, describe, expect, test, vi } from 'vitest'
import { render, screen, waitFor, cleanup } from '@testing-library/react'
import LanguageSelectBoxServer from '@/components/SelectBox/Language/LanguageSelectBox.Server'
import userEvent from '@testing-library/user-event'
import { cookies } from 'next/headers'

const LanguageContext = [
  {
    value: 'en',
    text: 'English',
  },
  {
    value: 'ja',
    text: '日本語',
  },
]

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

describe('Language', async () => {
  const languageCookieOptions = { path: '/', httpOnly: true, secure: true }

  beforeAll(() => {
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
    const cookieStore = cookies()
    cookieStore.delete('language')

    const languageSelectBoxServer = await LanguageSelectBoxServer()
    render(languageSelectBoxServer)
  })

  afterEach(() => {
    cleanup()
  })

  test('LanguageSelectBoxServer renders LanguageSelectBoxClient', () => {
    const languageTextElement = screen.getByText('Language', { selector: 'label' })
    expect(languageTextElement).toBeDefined()
  })

  test('Selection box render', () => {
    const languageTextSelectElement = screen.getByRole('combobox')
    expect(languageTextSelectElement).toBeDefined()
    expect(languageTextSelectElement.querySelector('span')?.innerHTML).toEqual('English')

    const languageInputElement = screen.getAllByDisplayValue('en')
    expect(languageInputElement).toBeDefined()
  })

  test('Selection box options render', async () => {
    const languageTextSelectElement = screen.getByRole('combobox')
    expect(languageTextSelectElement).toBeDefined()

    await waitFor(() => userEvent.click(languageTextSelectElement))

    const languageOptionElements = screen.getAllByRole('option')
    expect(languageOptionElements).toBeDefined()

    languageOptionElements.map((element, index) => {
      expect(element.getAttribute('data-value')).toEqual(LanguageContext[index].value)
      expect(element.querySelector('span')?.innerHTML).toEqual(LanguageContext[index].text)
    })

    await waitFor(() => userEvent.click(languageOptionElements[0]))
  })

  test('Cookies are not set when "English" is selected for the first', async () => {
    const languageTextSelectElement = screen.getByRole('combobox')
    expect(languageTextSelectElement).toBeDefined()

    let languageCookie = undefined
    expect(languageCookie).toBeUndefined()

    await waitFor(() => userEvent.click(languageTextSelectElement))

    const languageOptionElements = screen.getAllByRole('option')
    expect(languageOptionElements).toBeDefined()

    await waitFor(() => userEvent.click(languageOptionElements[0]))

    languageCookie = cookieStore.get('language')
    expect(languageCookie).toBeUndefined()
  })

  test('Set cookies when "Japanese" is selected', async () => {
    const languageTextSelectElement = screen.getByRole('combobox')
    expect(languageTextSelectElement).toBeDefined()

    let languageCookie = undefined
    expect(languageCookie).toBeUndefined()

    await waitFor(() => userEvent.click(languageTextSelectElement))

    const languageOptionElements = screen.getAllByRole('option')
    expect(languageOptionElements).toBeDefined()

    await waitFor(() => userEvent.click(languageOptionElements[1]))

    languageCookie = cookieStore.get('language')
    expect(languageCookie).toEqual({ value: 'ja', ...languageCookieOptions })
  })

  test('Set a cookie when you select "English" after selecting "Japanese"', async () => {
    const languageTextSelectElement = screen.getByRole('combobox')
    expect(languageTextSelectElement).toBeDefined()

    let languageCookie = undefined
    expect(languageCookie).toBeUndefined()

    await waitFor(() => userEvent.click(languageTextSelectElement))

    let languageOptionElements = screen.getAllByRole('option')
    expect(languageOptionElements).toBeDefined()

    await waitFor(() => userEvent.click(languageOptionElements[1]))

    languageCookie = cookieStore.get('language')
    expect(languageCookie).toEqual({ value: 'ja', ...languageCookieOptions })

    await waitFor(() => userEvent.click(languageTextSelectElement))

    languageOptionElements = screen.getAllByRole('option')
    expect(languageOptionElements).toBeDefined()

    await waitFor(() => userEvent.click(languageOptionElements[0]))

    languageCookie = cookieStore.get('language')
    expect(languageCookie).toEqual({ value: 'en', ...languageCookieOptions })
  })
})
