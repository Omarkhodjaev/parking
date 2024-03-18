import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ParkEntity } from './entities/park.entity';
import { ID } from 'src/common/types/type';

export class ParkRepository {
  constructor(
    @InjectRepository(ParkEntity)
    private repository: Repository<ParkEntity>,
  ) {}

  async getOneById(id: ID): Promise<ParkEntity | undefined> {
    return await this.repository.findOneBy({ id });
  }
}
