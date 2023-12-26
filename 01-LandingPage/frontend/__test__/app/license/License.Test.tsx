/**
 * @jest-environment jsdom
 */

import {
  createTestLicenseJson,
  filterDataByKeyValuePair,
  parseQueryString,
} from '@/__test__/components/License/LicenseTestFunction'
import LicenseServer from '@/app/license/License.Server'
import Error from '@/app/license/error'
import Loading from '@/app/license/loading'
import { GetLicense } from '@/lib/api/api'
import { render, screen } from '@testing-library/react'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { beforeAll, describe, expect, test, vi } from 'vitest'

let licenseServer

let testJson: Array<object>

describe('License', () => {
  const { rerender } = render(<></>)

  beforeAll(async () => {
    testJson = createTestLicenseJson()
    licenseServer = await LicenseServer()
    const page = (
      <Suspense fallback={<Loading></Loading>}>
        <ErrorBoundary FallbackComponent={Error}>{licenseServer}</ErrorBoundary>
      </Suspense>
    )
    rerender(page)
    vi.mock('@/lib/api/api', () => {
      return {
        GetLicense: vi.fn((query: string | undefined) => {
          const keyValuePairs = parseQueryString(query)
          const json = filterDataByKeyValuePair(testJson, keyValuePairs)
          const response = {
            success: true,
            data: json,
          }

          return response
        }),
      }
    })
  })

  test('render license', async () => {
    const response = await GetLicense(undefined)
    const { data } = response
    data.map((item: any) => {
      const elements = screen.getAllByTestId(item.name)
      expect(elements).toHaveLength(2)
      elements.map((element) => {
        expect(element).toBeDefined()
      })
    })
  })
})
