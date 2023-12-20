/**
 * @jest-environment jsdom
 */
import { beforeAll, describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import FooterServer from '@/components/Footer/Footer.Server'

describe('Footer', () => {
  beforeAll(async () => {
    const footerServer = await FooterServer()
    render(footerServer)
  })

  test('FooterServer renders FooterClient', async () => {
    const footerElement = screen.getByTestId('footer')
    expect(footerElement).toBeDefined()

    const footerTextElement = screen.getByText('FOOTER')
    expect(footerTextElement).toBeDefined()
  })
})
