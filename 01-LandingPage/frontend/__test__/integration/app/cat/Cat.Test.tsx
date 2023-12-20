/**
 * @jest-environment jsdom
 */
import { beforeAll, describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import CatServer from '@/app/cat/Cat.Server'

describe('Cat', () => {
  beforeAll(async () => {
    const catServer = await CatServer()
    render(catServer)
  })

  test('Render', () => {
    const heading = screen.getByRole('heading', {
      level: 1,
      name: 'Cat',
    })
    expect(heading).toBeDefined()

    const link = screen.getByRole('link', {})
    expect(link).toBeDefined()
    expect(link.closest('a')?.href).toEqual(location.href + '#cat')
  })
})
