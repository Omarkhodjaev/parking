import { ResData } from 'src/lib/resData';
import { CreateParkDto } from '../dto/create-park.dto';
import { ParkEntity } from '../entities/park.entity';
import { UpdateParkDto } from '../dto/update-park.dto';
import { ID } from 'src/common/types/type';

export interface IParkService {
  create(createParkDto: CreateParkDto): Promise<ResData<ParkEntity>>;

  findAll(): Promise<ResData<Array<ParkEntity>>>;

  findOneById(id: ID): Promise<ResData<ParkEntity>>;

  update(id: ID, updateParkDto: UpdateParkDto): Promise<ResData<ParkEntity>>;

  remove(id: ID): Promise<ResData<ParkEntity>>;

  findByName(parkName: string): Promise<ResData<ParkEntity>>;
}
