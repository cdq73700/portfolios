/**
 * @jest-environment jsdom
 */
import { beforeAll, describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Error from '@/app/license/error'
import { ErrorBoundary } from 'react-error-boundary'

import { ErrorSchemaError } from '@/swagger/v1/typescript/model/errorSchemaError'
import LicenseClient from '@/app/license/License.Client'
import LicenseAction from '@/app/license/License.Action'

const errorData = {
  code: 404,
  message: 'not found',
  timestamp: Date.now().toString(),
  path: '/__test__/app/license/Error',
}

describe('License', () => {
  beforeAll(async () => {
    vi.mock('@/lib/api/api', () => {
      return {
        GetLicense: vi.fn((_query: string | undefined) => {
          const response = {
            success: false,
            data: [],
            error: errorData,
          }

          return response
        }),
      }
    })
    const licenseClient = (
      <LicenseClient params={{ success: false, data: [], error: errorData }} action={LicenseAction}></LicenseClient>
    )
    const page = <ErrorBoundary FallbackComponent={Error}>{licenseClient}</ErrorBoundary>
    render(page)
  })

  test('Render error page', () => {
    const data: ErrorSchemaError = errorData
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
