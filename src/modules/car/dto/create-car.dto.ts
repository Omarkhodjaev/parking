import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { UserEntity } from 'src/modules/user/entities/user.entity';

export class CreateCarDto {
  @ApiProperty({
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  index: string;

  @ApiProperty({
    type: Object,
  })
  @IsObject()
  @IsOptional()
  doc: object;

  @ApiProperty({
    type: Number,
  })
  @IsNumber()
  @IsNotEmpty()
  owner: UserEntity;
}
