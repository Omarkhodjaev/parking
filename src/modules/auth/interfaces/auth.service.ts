import { UserEntity } from 'src/modules/user/entities/user.entity';
import { CreateAuthDto, LoginAuthDto } from '../dto/create-auth.dto';
import { ResData } from 'src/lib/resData';

export interface ILoginData {
  data: UserEntity;
  token: string;
}

export interface IRegisterData {
  data: UserEntity;
  token: string;
}

export interface IAuthService {
  login(dto: LoginAuthDto): Promise<ResData<ILoginData>>;
  register(dto: CreateAuthDto): Promise<ResData<IRegisterData>>;
}
