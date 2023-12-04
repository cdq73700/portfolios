import { Suspense } from 'react'
import Profile from './Profile'
import Loading from './loading'

export default function Page() {
  return (
    <>
      <Suspense fallback={<Loading></Loading>}>
        <Profile></Profile>
      </Suspense>
    </>
  )
}
