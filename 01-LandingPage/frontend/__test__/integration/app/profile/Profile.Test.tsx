/**
 * @jest-environment jsdom
 */
import { beforeAll, beforeEach, describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import ProfileServer from '@/app/profile/Profile.Server'
import Error from '@/app/profile/error'
import { ErrorBoundary } from 'react-error-boundary'
import { Suspense } from 'react'
import Loading from '@/app/profile/loading'
import { GetProfile } from '@/lib/api/api'

let profileServer

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

describe('Profile', () => {
  const { rerender } = render(<></>)

  beforeAll(async () => {
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
  })

  beforeEach(async () => {
    cookieStore.delete('language')
    cookieStore.set('language', 'ja')
    profileServer = await ProfileServer()
    const page = (
      <Suspense fallback={<Loading></Loading>}>
        <ErrorBoundary FallbackComponent={Error}>{profileServer}</ErrorBoundary>
      </Suspense>
    )
    rerender(page)
  })

  beforeAll(() => {
    cookieStore.delete('language')
  })

  test('Render "ja"', async () => {
    const profileData = await GetProfile('ja')
    const data = profileData.data[0]

    const checkData = {
      name: data.name,
      email: data.email,
      tel: data.tel,
      post: data.post,
      address: data.address,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    }

    Object.values(checkData).map((value) => {
      const elements = screen.getAllByText(value.toString())
      expect(elements).toBeDefined()
    })
  })

  test('Render "en"', async () => {
    cookieStore.set('language', 'en')
    profileServer = await ProfileServer()
    const page = (
      <Suspense fallback={<Loading></Loading>}>
        <ErrorBoundary FallbackComponent={Error}>{profileServer}</ErrorBoundary>
      </Suspense>
    )
    rerender(page)

    const profileData = await GetProfile('en')
    const data = profileData.data[0]

    const checkData = {
      name: data.name,
      email: data.email,
      tel: data.tel,
      post: data.post,
      address: data.address,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    }

    Object.values(checkData).map((value) => {
      const elements = screen.getAllByText(value.toString())
      expect(elements).toBeDefined()
    })
  })
})
