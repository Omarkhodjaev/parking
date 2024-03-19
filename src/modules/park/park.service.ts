import { Injectable } from '@nestjs/common';
import { CreateParkDto } from './dto/create-park.dto';
import { UpdateParkDto } from './dto/update-park.dto';
import { ParkRepository } from './park.repository';
import { ResData } from 'src/lib/resData';
import { ParkEntity } from './entities/park.entity';
import { ParkNotFoundException } from './exception/park.exception';
import { IParkService } from './interfaces/park.service';

@Injectable()
export class ParkService {
  constructor(private readonly repository: ParkRepository) {}

  create(createParkDto: CreateParkDto) {
    return 'This action adds a new park';
  }

  findAll() {
    return `This action returns all park`;
  }

  async findOneById(id: number): Promise<ResData<ParkEntity>> {
    const resData = await this.repository.getOneById(id);

    if (!resData) {
      throw new ParkNotFoundException();
    }

    return new ResData<ParkEntity>('success', 200, resData);
  }

  update(id: number, updateParkDto: UpdateParkDto) {
    return `This action updates a #${id} park`;
  }

  remove(id: number) {
    return `This action removes a #${id} park`;
  }
}
