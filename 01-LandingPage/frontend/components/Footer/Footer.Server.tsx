'use server'

import FooterClient from './Footer.Client'

export default async function FooterServer() {
  const license = 'Copyright (c) 2023 cdq73700'
  return <FooterClient params={{ license }}></FooterClient>
}
