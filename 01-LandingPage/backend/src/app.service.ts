import { Injectable } from '@nestjs/common'
import { HealthSchema } from 'swagger/v1/typescript/model/healthSchema'

@Injectable()
export class AppService {
  getHealth() {
    const health: HealthSchema = { success: true, data: 'OK' }
    return health
  }
}
