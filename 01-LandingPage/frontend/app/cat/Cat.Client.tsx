'use client'

import MarkDown from '@/components/MarkDown'
import { CatClientProps } from '@/types/app/cat/Cat.Type'

export default function CatClient({ params }: CatClientProps) {
  return (
    <MarkDown params={params}>
      <></>
    </MarkDown>
  )
}
