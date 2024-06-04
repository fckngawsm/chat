import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  login(@Body() dto: CreateUserDto) {
    return this.authService.login(dto);
  }

  @Post('sign-up')
  registration(@Body() dto: CreateUserDto) {
    return this.authService.register(dto);
  }

  @UseGuards(AuthGuard)
  @Get('me')
  async getMe(@Req() request: Request) {
    const userId = request.user.id;
    return this.authService.getMe(userId);
  }
}
