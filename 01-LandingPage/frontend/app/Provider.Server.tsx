import ProviderClient from './Provider.Client'
import { ProviderServerProps } from '@/types/app/Provider.Type'

export default async function ProviderServer({ params, children }: ProviderServerProps) {
  return <ProviderClient params={params}>{children}</ProviderClient>
}
