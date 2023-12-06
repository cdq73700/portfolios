'use server'

import { GetProfile } from '@/lib/api/api'
import { ProfileType, ViewProfileType } from '@/types/profile.type'
import { Profile } from './Profile'

type FormatDate = {
  lang: string
  date: Date
}

type Props = {
  lang: string
}

function formatDate({ lang, date }: FormatDate) {
  return new Date(date).toLocaleDateString(lang, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  })
}

export default async function ProfileAction({ lang }: Props) {
  const profile: [ProfileType] = await GetProfile(lang)
  const [{ name, email, tel, post, address, createdAt, updatedAt }] = profile

  const viewProfile: Array<ViewProfileType> = [
    { key: 'Name', value: name },
    { key: 'Email', value: email },
    { key: 'Tel', value: tel },
    { key: 'Post', value: post },
    { key: 'Address', value: address },
  ]

  const profileDate: Array<ViewProfileType> = [
    {
      key: 'createdAt',
      value: formatDate({ lang, date: createdAt }),
    },
    {
      key: 'updatedAt',
      value: formatDate({ lang, date: updatedAt }),
    },
  ]
  return <Profile lang={lang} viewProfile={viewProfile} profileDate={profileDate}></Profile>
}
