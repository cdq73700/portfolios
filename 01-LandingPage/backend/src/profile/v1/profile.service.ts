import { Injectable } from '@nestjs/common'
import getProfileApi from './api/getProfile.api'
import { ProfileServiceProps } from 'src/types/profile/v1/profile.service.type'
import { ProfileSchema } from 'swagger/v1/typescript/model/profileSchema'

@Injectable()
export class ProfileService {
  async getProfile({ params }: ProfileServiceProps) {
    const profile: ProfileSchema = await getProfileApi({ params })
    return profile
  }
}
