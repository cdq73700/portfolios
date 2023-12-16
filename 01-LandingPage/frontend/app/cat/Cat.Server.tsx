'use server'

import CatClient from './Cat.Client'

export default async function CatServer() {
  const params = {
    id: 'cat',
    title: 'Cat',
    body: 'There is a cat',
    keyPrefix: '',
  }
  return <CatClient params={params}></CatClient>
}
