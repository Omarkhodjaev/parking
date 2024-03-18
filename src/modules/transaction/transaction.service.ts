import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { TransactionRepository } from './transaction.repository';
import { UserEntity } from '../user/entities/user.entity';
import { CarEntity } from '../car/entities/car.entity';
import { ParkEntity } from '../park/entities/park.entity';
import { ResData } from 'src/lib/resData';
import { TransactionEntity } from './entities/transaction.entity';

@Injectable()
export class TransactionService {
  constructor(private readonly repository: TransactionRepository) {}

  async createTransaction(
    userEntity: UserEntity,
    carEntity: CarEntity,
    parkEntity: ParkEntity,
  ): Promise<ResData<TransactionEntity>> {
    const resData: TransactionEntity = await this.repository.createTransaction(
      userEntity,
      parkEntity,
      carEntity,
    );

    return new ResData<TransactionEntity>('crated', 201, resData);
  }

  findAll() {
    return `This action returns all transaction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
