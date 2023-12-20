/**
 * @jest-environment jsdom
 */
import { beforeAll, describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '@/app/Main'

describe('Main', () => {
  beforeAll(() => {
    render(<Home></Home>)
  })

  test('Home', () => {
    const heading = screen.getByRole('heading', {
      level: 1,
      name: 'Main',
    })
    expect(heading).toBeDefined()

    const link = screen.getByRole('link', {})
    expect(link).toBeDefined()
    expect(link.closest('a')?.href).toEqual(location.href + '#Main')
  })
})
