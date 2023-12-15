import { ErrorBoundary } from 'react-error-boundary'
import ProfileServer from './Profile.Server'
import Error from './error'
import { Suspense } from 'react'
import Loading from './loading'

export default function Page() {
  return (
    <>
      <Suspense fallback={<Loading></Loading>}>
        <ErrorBoundary FallbackComponent={Error}>
          <ProfileServer></ProfileServer>
        </ErrorBoundary>
      </Suspense>
    </>
  )
}
