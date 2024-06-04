import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UsersService,
  ) {}

  async generateToken(user: User) {
    const payload = {
      email: user.email,
      id: user.id,
    };
    return this.jwtService.sign(payload, { secret: process.env.SECRET });
  }

  async login(dto: CreateUserDto) {
    const user = await this.userService.findByPhone(dto.phone);
    if (!user) {
      throw new HttpException(
        'Неверный email или пароль',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const isPasswordMatching = await bcrypt.compare(
      dto.password,
      user.password,
    );
    if (!isPasswordMatching) {
      throw new HttpException(
        'Неверный email или пароль',
        HttpStatus.UNAUTHORIZED,
      );
    }
    const token = await this.generateToken(user);
    return { token };
  }

  async register(dto: CreateUserDto) {
    const condtidate = await this.userService.findByPhone(dto?.phone);
    if (condtidate) {
      throw new HttpException(
        'Пользователь с таким номером телефона уже зарегестрирован',
        HttpStatus.BAD_REQUEST,
      );
    }
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    await this.userService.createUser({
      ...dto,
      password: hashedPassword,
    });

    return {
      message: 'Пользователь успешно создан',
      status: HttpStatus.OK,
    };
  }

  async getMe(userId: number): Promise<User> {
    return this.userService.getCurrentUser(userId);
  }
}
