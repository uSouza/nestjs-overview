import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { AuthService } from './infrastructure/auth.service';
import { LocalStrategy } from './infrastructure/local.strategy';
import { JwtStrategy } from './infrastructure/jwt.strategy';
import { AuthController } from './application/auth.controller'
import { jwtConstants } from './domain/constants';

@Module({
  imports: [
    UserModule,
    PassportModule.register({ defaultStrategy: 'jwt', session: true }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})

export class AuthModule { }
