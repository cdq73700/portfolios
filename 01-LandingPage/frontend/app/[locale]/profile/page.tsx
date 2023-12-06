import { Suspense } from 'react'
import Loading from './loading'
import ProfileAction from '@/components/Profile/ProfileAction'

type Props = {
  params: { locale: string }
}

export default async function Page({ params }: Props) {
  const lang = params.locale
  return (
    <>
      <Suspense fallback={<Loading></Loading>}>
        <ProfileAction lang={lang} />
      </Suspense>
    </>
  )
}
