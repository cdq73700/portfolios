import { Injectable } from '@nestjs/common'
import getProfileApi from './api/getProfile.api'
import { ProfileSchema } from 'types/v1/typescript/model/profileSchema'
import { ProfileServiceProps } from 'types/profile/v1/profile.service.type'

@Injectable()
export class ProfileService {
  async getProfile({ params }: ProfileServiceProps) {
    const profile: ProfileSchema = await getProfileApi({ params })
    return profile
  }
}
