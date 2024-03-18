import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { CarRepository } from './car.repository';
import { CarNotFoundException } from './exception/car.exception';
import { ResData } from 'src/lib/resData';
import { CarEntity } from './entities/car.entity';

@Injectable()
export class CarService {
  constructor(private readonly repository: CarRepository) {}

  create(createCarDto: CreateCarDto) {
    return 'This action adds a new car';
  }

  findAll() {
    return `This action returns all car`;
  }

  findOne(id: number) {
    return `This action returns a #${id} car`;
  }

  async findOneByIndex(index: string): Promise<ResData<CarEntity>> {
    const resData = await this.repository.getOneByIndex(index);

    if (!resData) {
      throw new CarNotFoundException();
    }

    return new ResData<CarEntity>('success', 200, resData);
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return `This action updates a #${id} car`;
  }

  remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
