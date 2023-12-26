/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import { beforeAll, describe, expect, test } from 'vitest'
import LicenseTabClient from '@/components/License/LicenseTab.Client'
import { Typography } from '@mui/material'

const inbox = ['all', 'backedn', 'frontend']
const action = (_name: string | undefined) => {}

describe('License', () => {
  beforeAll(async () => {
    render(
      <LicenseTabClient params={{ inbox }} action={action}>
        <Typography variant="h1">children</Typography>
      </LicenseTabClient>
    )
  })

  test('render tabList', () => {
    inbox.map((value) => {
      const element = screen.getByTestId(value)
      expect(element).toBeDefined()
    })
  })

  test('render children', () => {
    const element = screen.getByRole('heading', { level: 1, name: 'children' })
    expect(element).toBeDefined()
  })
})
