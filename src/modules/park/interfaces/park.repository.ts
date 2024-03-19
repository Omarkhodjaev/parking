import { ID } from 'src/common/types/type';
import { ParkEntity } from '../entities/park.entity';
import { CreateParkDto } from '../dto/create-park.dto';

export interface IParkRepository {
  create(entity: ParkEntity): Promise<ParkEntity>;
  update(entity: ParkEntity): Promise<ParkEntity>;
  createEntity(dto: CreateParkDto): Promise<ParkEntity>;
  getOneById(id: ID): Promise<ParkEntity | undefined>;
  getAll(): Promise<Array<ParkEntity>>;
  remove(dto: ParkEntity): Promise<ParkEntity>;
  getByName(name: string): Promise<ParkEntity | undefined>;
}
