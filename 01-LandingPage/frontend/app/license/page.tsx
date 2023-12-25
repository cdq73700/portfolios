import LicenseServer from './License.Server'
import { Suspense } from 'react'
import Loading from './loading'
import { ErrorBoundary } from 'react-error-boundary'
import Error from './error'

export default function Page() {
  return (
    <Suspense fallback={<Loading></Loading>}>
      <ErrorBoundary FallbackComponent={Error}>
        <LicenseServer></LicenseServer>
      </ErrorBoundary>
    </Suspense>
  )
}
