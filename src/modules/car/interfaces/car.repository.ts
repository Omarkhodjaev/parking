import { ID } from 'src/common/types/type';
import { CreateCarDto } from '../dto/create-car.dto';
import { CarEntity } from '../entities/car.entity';

export interface ICarRepository {
  create(entity: CarEntity): Promise<CarEntity>;
  update(entity: CarEntity): Promise<CarEntity>;
  createEntity(dto: CreateCarDto): Promise<CarEntity>;
  getOneById(id: ID): Promise<CarEntity | undefined>;
  getAll(): Promise<Array<CarEntity>>;
  remove(dto: CarEntity): Promise<CarEntity>;
  getByIndex(index: string): Promise<CarEntity | undefined>;
}
