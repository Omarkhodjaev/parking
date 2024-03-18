import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUserService } from './interfaces/user.service';
import { ResData } from 'src/lib/resData';
import { UserEntity } from './entities/user.entity';
import { IUserRepository } from './interfaces/user.repository';

import { ID } from 'src/common/types/type';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @Inject('IUserRepository') private readonly repository: IUserRepository,
  ) {}

  async findByPhoneNumber(phoneNumber: string): Promise<ResData<UserEntity>> {
  
    const data = await this.repository.getByPhone(phoneNumber);

    return new ResData('Found successfully', HttpStatus.OK, data);
  }

  async create(dto: CreateUserDto): Promise<ResData<UserEntity>> {
    const entity = await this.repository.createEntity(dto);

    const data = await this.repository.create(entity);

    return new ResData('Created successfully', HttpStatus.CREATED, data);
  }

  update(id: ID, dto: UpdateUserDto): Promise<ResData<UserEntity>> {
    throw new Error('Method not implemented.');
  }
  findOne(id: number): Promise<ResData<UserEntity>> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<ResData<UserEntity>[]> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Promise<ResData<UserEntity>> {
    throw new Error('Method not implemented.');
  }
}
