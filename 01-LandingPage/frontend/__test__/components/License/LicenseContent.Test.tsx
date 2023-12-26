/**
 * @jest-environment jsdom
 */

import LicenseContentClient from '@/components/License/LicenseContent.Client'
import { GetLicense } from '@/lib/api/api'
import { render, screen } from '@testing-library/react'
import { beforeAll, describe, expect, test, vi } from 'vitest'
import {
  createTestLicenseJson,
  filterDataByKeyValuePair,
  filterNotMatchDataByKeyValuePair,
  parseQueryString,
} from './LicenseTestFunction'

let testJson: Array<object>

describe('License', () => {
  const { rerender } = render(<></>)
  beforeAll(async () => {
    testJson = createTestLicenseJson()
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

  test('Get all licenses when query is undefined', async () => {
    const response = await GetLicense(undefined)
    const { data } = response
    rerender(<LicenseContentClient params={{ license: data }}></LicenseContentClient>)
    response.data.map((item: any) => {
      const nameElement = screen.getByTestId(item.name)
      expect(nameElement).toBeDefined()
    })
  })

  test('Filter licenses by location', () => {
    const locations = ['backend', 'frontend', 'python', 'swagger']

    locations.map(async (location) => {
      const query = new URLSearchParams()
      query.append('location', location)
      const response = await GetLicense(query.toString())
      const { data } = response
      rerender(<LicenseContentClient params={{ license: data }}></LicenseContentClient>)
      response.data.map((item: any) => {
        const nameElement = screen.getByTestId(item.name)
        expect(nameElement).toBeDefined()
      })
      const keyValuePairs = parseQueryString(query.toString())
      const filteredData = filterNotMatchDataByKeyValuePair(testJson, keyValuePairs)
      filteredData.map((item: any) => {
        const nameElement = screen.queryByTestId(item.name)
        expect(nameElement).toBeNull()
      })
    })
  })

  test('Filter licenses by environment', () => {
    const environments = ['production', 'development', 'environmentTest']

    environments.map(async (environment) => {
      const query = new URLSearchParams()
      query.append('environment', environment)
      const response = await GetLicense(query.toString())
      const { data } = response
      rerender(<LicenseContentClient params={{ license: data }}></LicenseContentClient>)
      response.data.map((item: any) => {
        const nameElement = screen.getByTestId(item.name)
        expect(nameElement).toBeDefined()
      })
      const keyValuePairs = parseQueryString(query.toString())
      const filteredData = filterNotMatchDataByKeyValuePair(testJson, keyValuePairs)
      filteredData.map((item: any) => {
        const nameElement = screen.queryByTestId(item.name)
        expect(nameElement).toBeNull()
      })
    })
  })

  test('Filter licenses by environment and location', () => {
    const locations = ['backend', 'frontend', 'python', 'swagger']
    const environments = ['production', 'development', 'environmentTest']

    locations.map((location) =>
      environments.map(async (environment) => {
        const query = new URLSearchParams()
        query.append('location', location)
        query.append('environment', environment)
        const response = await GetLicense(query.toString())
        const { data } = response
        rerender(<LicenseContentClient params={{ license: data }}></LicenseContentClient>)
        response.data.map((item: any) => {
          const nameElement = screen.getByTestId(item.name)
          expect(nameElement).toBeDefined()
        })
        const keyValuePairs = parseQueryString(query.toString())
        const filteredData = filterNotMatchDataByKeyValuePair(testJson, keyValuePairs)
        filteredData.map((item: any) => {
          const nameElement = screen.queryByTestId(item.name)
          expect(nameElement).toBeNull()
        })
      })
    )
  })

  test('Filter licenses by environment and location and name', async () => {
    const locations = ['backend', 'frontend', 'python', 'swagger']
    const environments = ['production', 'development', 'environmentTest']
    locations.map((location) =>
      environments.map(async (environment) => {
        const query = new URLSearchParams()
        query.append('location', location)
        query.append('environment', environment)
        query.append('name', `name-${location}-${environment}`)
        const response = await GetLicense(query.toString())
        const { data } = response
        rerender(<LicenseContentClient params={{ license: data }}></LicenseContentClient>)
        response.data.map((item: any) => {
          const nameElement = screen.getByTestId(item.name)
          expect(nameElement).toBeDefined()
        })
        const keyValuePairs = parseQueryString(query.toString())
        const filteredData = filterNotMatchDataByKeyValuePair(testJson, keyValuePairs)
        filteredData.map((item: any) => {
          const nameElement = screen.queryByTestId(item.name)
          expect(nameElement).toBeNull()
        })
      })
    )
  })
})
