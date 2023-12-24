import { IsString } from 'class-validator'

export class GetLicenseDto {
  @IsString()
  location: string | undefined
  @IsString()
  environment: string | undefined
  @IsString()
  name: string | undefined
}
