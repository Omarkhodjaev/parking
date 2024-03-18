import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { ApiTags } from '@nestjs/swagger';
import { CarService } from '../car/car.service';
import { ParkService } from '../park/park.service';

@ApiTags('transaction')
@Controller('transaction')
export class TransactionController {
  constructor(
    private readonly transactionService: TransactionService,
    private readonly carService: CarService,
    private readonly parkService: ParkService,
  ) {}

  @Post()
  async create(@Body() createTransactionDto: CreateTransactionDto) {
    const { data: foundPark } = await this.parkService.findOneById(
      createTransactionDto.parkId,
    );
    const { data: foundCar } = await this.carService.findOneByIndex(
      createTransactionDto.carIndex,
    );

    return await this.transactionService.createTransaction(
      foundCar.owner,
      foundCar,
      foundPark,
    );
  }

  @Get()
  findAll() {
    return this.transactionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transactionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTransactionDto: UpdateTransactionDto,
  ) {
    return this.transactionService.update(+id, updateTransactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transactionService.remove(+id);
  }
}
