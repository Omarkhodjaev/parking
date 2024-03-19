import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ParkEntity } from './entities/park.entity';
import { ID } from 'src/common/types/type';
import { IParkRepository } from './interfaces/park.repository';
import { CreateParkDto } from './dto/create-park.dto';

export class ParkRepository implements IParkRepository {
  constructor(
    @InjectRepository(ParkEntity)
    private repository: Repository<ParkEntity>,
  ) {}
  async create(entity: ParkEntity): Promise<ParkEntity> {
    return await this.repository.save(entity);
  }
  async update(entity: ParkEntity): Promise<ParkEntity> {
    return await this.repository.save(entity);
  }

  async createEntity(dto: CreateParkDto): Promise<ParkEntity> {
    return await this.repository.create(dto);
  }

  async getAll(): Promise<ParkEntity[]> {
    return await this.repository.find();
  }

  async remove(entity: ParkEntity): Promise<ParkEntity> {
    return await this.repository.remove(entity);
  }

  async getByName(name: string): Promise<ParkEntity | undefined> {
    return await this.repository.findOneBy({ name });
  }

  async getOneById(id: ID): Promise<ParkEntity | undefined> {
    return await this.repository.findOneBy({ id });
  }
}
