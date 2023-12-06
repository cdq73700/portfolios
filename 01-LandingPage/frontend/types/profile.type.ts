export type ProfileType = {
  id: string
  name: string
  email: string
  tel: string
  post: string
  address: string
  language: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export type ViewProfileType = {
  key: string
  value: string
}

export type ProfileDateType = {
  createdAt: string
  updatedAt: string
}
