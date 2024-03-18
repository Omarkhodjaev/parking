import { CreateAuthDto } from 'src/modules/auth/dto/create-auth.dto';
import { UserEntity } from '../entities/user.entity';
import { ID } from 'src/common/types/type';
import { ResData } from 'src/lib/resData';
import { UpdateUserDto } from '../dto/update-user.dto';

export interface IUserService {
  create(dto: CreateAuthDto): Promise<ResData<UserEntity>>;
  update(id: ID, dto: UpdateUserDto): Promise<ResData<UserEntity>>;
  findOne(id: ID): Promise<ResData<UserEntity>>;
  findAll(): Promise<Array<ResData<UserEntity>>>;
  findByPhoneNumber(phoneNumber: string): Promise<ResData<UserEntity>>;
  delete(id: ID): Promise<ResData<UserEntity>>;
}
