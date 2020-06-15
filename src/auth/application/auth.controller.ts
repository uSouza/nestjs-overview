/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Request, Post, Get, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from '../domain/guard/localAuth.guard';
import { JwtAuthGuard } from '../domain/guard/jwtAuth.guard';
import { AuthService } from '../infrastructure/auth.service'
import { Auth } from '../domain/interface/auth.interface'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: any): Promise<Auth> {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req: any) {
    return req.user;
  }
}
