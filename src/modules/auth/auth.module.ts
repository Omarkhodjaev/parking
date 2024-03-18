import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from '../user/user.service';
import { UserRepository } from '../user/user.repository';
import { UserEntity } from '../user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule.register({
      global: true,
      secret: 'ok',
      signOptions: { expiresIn: '1d' },
    }),
  ],

  controllers: [AuthController],
  providers: [
    { provide: 'IUserService', useClass: UserService },
    {
      provide: 'IUserRepository',
      useClass: UserRepository,
    },
    {
      provide: 'IAuthService',
      useClass: AuthService,
    },
  ],
})
export class AuthModule {}
