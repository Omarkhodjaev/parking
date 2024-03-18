import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { IUserRepository } from './interfaces/user.repository';
import { CreateAuthDto } from '../auth/dto/create-auth.dto';
import { ID } from 'src/common/types/type';
import { CreateUserDto } from './dto/create-user.dto';

export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
  ) {}

  async getByPhone(phoneNumber: string): Promise<UserEntity | undefined> {
    return await this.repository.findOneBy({ phoneNumber });
  }

  async create(entity: UserEntity): Promise<UserEntity> {
    return await this.repository.save(entity);
  }

  async update(entity: UserEntity): Promise<UserEntity> {
    return await this.repository.save(entity);
  }

  async createEntity(dto: CreateUserDto): Promise<UserEntity> {
    return await this.repository.create(dto);
  }

  async getOneById(id: ID): Promise<UserEntity> {
    return await this.repository.findOneBy({ id });
  }

  async getAll(): Promise<UserEntity[]> {
    return await this.repository.find();
  }

  async remove(dto: UserEntity): Promise<UserEntity> {
    return await this.repository.remove(dto);
  }
}
