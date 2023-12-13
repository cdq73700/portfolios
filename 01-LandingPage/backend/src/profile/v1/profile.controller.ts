import {
  Controller,
  Get,
  HttpStatus,
  InternalServerErrorException,
  NotFoundException,
  Param,
  Query,
  Res,
} from '@nestjs/common'
import { Response } from 'express'
import { ProfileService } from './profile.service'
import { GetProfileDto } from './dto/get-profile.dto'
import { GetUserByIdValidationPipe } from './pipe/getProfileValidationPipe'
import { ProfileSchema } from 'types/v1/typescript/model/profileSchema'

@Controller('/api/v1/profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get(':language')
  async GetProfile(
    @Param(GetUserByIdValidationPipe) @Query() getProfileDto: GetProfileDto,
    @Res() res: Response
  ) {
    try {
      const { language } = getProfileDto
      const profile: ProfileSchema = await this.profileService.getProfile({
        params: { language },
      })

      if (!profile.data.length) {
        throw new NotFoundException('Profile not found')
      }

      res.status(HttpStatus.OK).json(profile)
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error
      } else {
        throw new InternalServerErrorException(error)
      }
    }
  }
}
