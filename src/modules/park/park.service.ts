import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateParkDto } from './dto/create-park.dto';
import { UpdateParkDto } from './dto/update-park.dto';
import { ParkRepository } from './park.repository';
import { ResData } from 'src/lib/resData';
import { ParkEntity } from './entities/park.entity';
import {
  ParkAlreadyExistException,
  ParkNotFoundException,
} from './exception/park.exception';
import { IParkService } from './interfaces/park.service';

@Injectable()
export class ParkService implements IParkService {
  constructor(private readonly repository: ParkRepository) {}
  async create(createParkDto: CreateParkDto): Promise<ResData<ParkEntity>> {
    const { data: foundName } = await this.findByName(createParkDto.name);

    if (foundName) {
      throw new ParkAlreadyExistException();
    }

    const entity = await this.repository.createEntity(createParkDto);
    const data = await this.repository.create(entity);

    return new ResData('Created successfully', HttpStatus.CREATED, data);
  }

  async findAll(): Promise<ResData<ParkEntity[]>> {
    const data = await this.repository.getAll();
    return new ResData('Found successfully', HttpStatus.OK, data);
  }

  async update(
    id: number,
    updateParkDto: UpdateParkDto,
  ): Promise<ResData<ParkEntity>> {
    const { data: foundPark } = await this.findOneById(id);

    const updatedPark = Object.assign(foundPark, updateParkDto);

    const data = await this.repository.update(updatedPark);

    return new ResData('Updated successfully', HttpStatus.OK, data);
  }

  async remove(id: number): Promise<ResData<ParkEntity>> {
    const { data: foundPark } = await this.findOneById(id);

    const data = await this.repository.remove(foundPark);

    return new ResData('Deleted successfully', HttpStatus.OK, data);
  }

  async findByName(parkName: string): Promise<ResData<ParkEntity>> {
    const data = await this.repository.getByName(parkName);

    return new ResData('Found successfully', HttpStatus.OK, data);
  }

  async findOneById(id: number): Promise<ResData<ParkEntity>> {
    const resData = await this.repository.getOneById(id);

    if (!resData) {
      throw new ParkNotFoundException();
    }

    return new ResData<ParkEntity>('success', 200, resData);
  }
}
