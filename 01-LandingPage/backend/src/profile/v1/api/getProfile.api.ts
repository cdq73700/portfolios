import { AppDataSource } from 'src/data-source'
import { Profile } from 'src/entities/Profile'
import { GetProfileApiProps } from 'src/types/profile/v1/api/getProfile.api.type'
import { Profile as ProfileType } from 'swagger/v1/typescript/model/profile'
import { ProfileSchema } from 'swagger/v1/typescript/model/profileSchema'

export default async function getProfileApi({
  params,
}: GetProfileApiProps): Promise<ProfileSchema> {
  const { language } = params
  const repository = AppDataSource.getRepository(Profile)
  const data: Array<ProfileType> = await repository.find({
    where: { language },
  })

  const transData = data.map((item) => {
    const createdAt = item.createdAt.toLocaleString(item.language)
    const updatedAt = item.updatedAt.toLocaleString(item.language)
    return { ...item, createdAt, updatedAt }
  })

  return { success: true, data: transData }
}
