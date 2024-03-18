import { CreateAuthDto } from 'src/modules/auth/dto/create-auth.dto';
import { UserEntity } from '../entities/user.entity';
import { ID } from 'src/common/types/type';
import { CreateUserDto } from '../dto/create-user.dto';

export interface IUserRepository {
  create(entity: UserEntity): Promise<UserEntity>;
  update(entity: UserEntity): Promise<UserEntity>;
  createEntity(dto: CreateUserDto): Promise<UserEntity>;
  getOneById(id: ID): Promise<UserEntity | undefined>;
  getAll(): Promise<Array<UserEntity>>;
  remove(dto: UserEntity): Promise<UserEntity>;
  getByPhone(phoneNumber: string): Promise<UserEntity | undefined>;
}
