import { AppDataSource } from 'src/data-source'
import { Profile } from 'src/entities/Profile'
import { GetProfileApiProps } from 'types/profile/v1/api/getProfile.api.type'
import { Profile as ProfileType } from 'types/v1/typescript/model/profile'

export default async function getProfileApi({ params }: GetProfileApiProps) {
  const { language } = params
  const repository = AppDataSource.getRepository(Profile)
  const data: Array<ProfileType> = await repository.find({
    where: { language },
  })
  return { data }
}
