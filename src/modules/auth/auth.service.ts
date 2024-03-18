import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { IUserService } from '../user/interfaces/user.service';
import { CreateAuthDto, LoginAuthDto } from './dto/create-auth.dto';
import {
  IAuthService,
  ILoginData,
  IRegisterData,
} from './interfaces/auth.service';
import { ResData } from 'src/lib/resData';
import {
  UserPhoneAlreadyException,
  UserPhoneNotFoundException,
} from '../user/exception/user.exception';
import { JwtService } from '@nestjs/jwt';
import { UserPhoneOrPassException } from './exception/user.exception';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    @Inject('IUserService') private readonly userService: IUserService,
    private jwtService: JwtService,
  ) {}
  async login(dto: LoginAuthDto): Promise<ResData<ILoginData>> {
    const { data: foundUser } = await this.userService.findByPhoneNumber(
      dto.phoneNumber,
    );

    if (!foundUser) {
      throw new UserPhoneNotFoundException();
    }

    if (foundUser.password !== dto.password) {
      throw new UserPhoneOrPassException();
    }

    const token = await this.jwtService.signAsync({ id: foundUser.id });

    return new ResData<ILoginData>('Login successfully ', HttpStatus.OK, {
      data: foundUser,
      token,
    });
  }

  async register(dto: CreateAuthDto): Promise<ResData<IRegisterData>> {
    const { data: phoneNumber } = await this.userService.findByPhoneNumber(
      dto.phoneNumber,
    );

    if (phoneNumber) {
      throw new UserPhoneAlreadyException();
    }

    const { data: user } = await this.userService.create(dto);
    const token = await this.jwtService.signAsync({ id: user.id });

    return new ResData('Created successfully', HttpStatus.CREATED, {
      data: user,
      token,
    });
  }
}
