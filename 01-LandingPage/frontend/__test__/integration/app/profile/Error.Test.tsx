/**
 * @jest-environment jsdom
 */
import { beforeAll, describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Error from '@/app/profile/error'
import { ErrorBoundary } from 'react-error-boundary'

import { GetProfile } from '@/lib/api/api'
import ProfileClient from '@/app/profile/Profile.Client'
import { ErrorSchemaError } from '@/swagger/v1/typescript/model/errorSchemaError'

describe('Profile', async () => {
  const response = await GetProfile('')
  beforeAll(() => {
    const profileClient = (
      <ProfileClient params={{ success: response.success, data: [], error: response.error }}></ProfileClient>
    )
    const page = <ErrorBoundary FallbackComponent={Error}>{profileClient}</ErrorBoundary>
    render(page)
  })
  test('Render error page', () => {
    const data: ErrorSchemaError = response.error
    const checkData = {
      code: data.code,
      message: data.message,
      timestamp: new Date(data.timestamp ?? Date.now()).toLocaleString(),
      path: data.path,
    }
    Object.values(checkData).map((value) => {
      const element = screen.getByText(value!.toString())
      expect(element).toBeDefined()
    })
  })
})
