import { Seeder } from 'typeorm-extension'
import { DataSource } from 'typeorm'
import { License } from '../entities/License'

export default class LicenseSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(License)
    const path = '../../license/'
    const files = [
      'license-backend.json',
      'license-frontend.json',
      'license-python.json',
      'license-swagger.json',
    ]

    try {
      files.map(async (file) => {
        const json = require(path + file)
        const list = json.map((item) => this.liceseList({ ...item }))
        await repository.insert(list)
      })
    } catch (error) {
      console.log(error)
    }
  }

  liceseList({
    name,
    version,
    license,
    install,
    github,
    body,
    location,
    environment,
  }) {
    return new License(
      name,
      version,
      license,
      install,
      github,
      body,
      location,
      environment
    )
  }
}
