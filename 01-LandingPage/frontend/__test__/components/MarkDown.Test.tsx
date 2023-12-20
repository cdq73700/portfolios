/**
 * @jest-environment jsdom
 */
import { beforeAll, beforeEach, describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import MarkDown from '@/components/MarkDown'
import i18n from '@/i18n/i18n'

describe('MarkDown', () => {
  const params = {
    id: 'Main',
    title: 'Main',
    body: 'Main',
    keyPrefix: '',
  }
  const markDown = (
    <MarkDown params={params}>
      <></>
    </MarkDown>
  )
  const { rerender } = render(<></>)
  beforeAll(() => {
    vi.mock('react-i18next', async () => {
      const actual = await vi.importActual('react-i18next')
      return {
        ...actual,
        i18n: vi.fn(() => i18n),
      }
    })
  })

  beforeEach(() => {
    i18n.changeLanguage('en')
    rerender(markDown)
  })

  test('render "en"', () => {
    const heading = screen.getByRole('heading', {
      level: 1,
      name: 'Main',
    })

    expect(heading).toBeDefined()

    const link = screen.getByRole('link', {})
    expect(link).toBeDefined()
    expect(link.closest('a')?.href).toEqual(location.href + '#' + params.id)
  })

  test('render "ja"', () => {
    i18n.changeLanguage('ja')
    rerender(markDown)
    const heading = screen.getByRole('heading', {
      level: 1,
      name: 'メイン',
    })

    expect(heading).toBeDefined()

    const link = screen.getByRole('link', {})
    expect(link).toBeDefined()
    expect(link.closest('a')?.href).toEqual(location.href + '#' + params.id)
  })
})
