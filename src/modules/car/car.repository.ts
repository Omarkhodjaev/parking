import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarEntity } from './entities/car.entity';

export class CarRepository {
  constructor(
    @InjectRepository(CarEntity)
    private repository: Repository<CarEntity>,
  ) {}


  

  async getOneByIndex(index: string): Promise<CarEntity | undefined> {
    return await this.repository.findOne({
      relations: ['owner'],
      where: { index },
    });
  }

}
