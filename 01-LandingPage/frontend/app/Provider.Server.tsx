import i18n from '@/i18n/i18n'
import ProviderClient from './Provider.Client'
import { ProviderServerProps } from '@/types/app/Provider.Type'

export default async function ProviderServer({ params, children }: ProviderServerProps) {
  const { language } = params
  const newI18n = i18n.cloneInstance({ lng: language })
  return <ProviderClient params={{ ...params, i18n: newI18n }}>{children}</ProviderClient>
}
