import { Injectable, Scope } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Auth } from '../domain/interface/auth.interface';
import { UserService } from '../../user/infrastructure/user.service';

@Injectable({ scope: Scope.REQUEST })
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      delete user.password;
      return user;
    }
    return null;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async login(user: any): Promise<Auth> {
    const payload = { username: user.username, sub: user.userId };
    const auth: Auth = {
      access_token: this.jwtService.sign(payload),
    };
    return auth;
  }
}
