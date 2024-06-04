import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(userDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(userDto);
    console.log('Созданный пользователь:', user); // Логируем созданный объект
    await this.userRepository.save(user);
    console.log('Пользователь сохранен в БД'); // Логируем после сохранения
    return user;
  }

  async findAll(): Promise<User[]> {
    const allUsers = await this.userRepository.find({});
    return allUsers;
  }

  async findOne(id: number): Promise<User> {
    const foundedUser = await this.userRepository.findOneBy({ id });
    if (!foundedUser) {
      console.log('Пользователь с таким id не найден');
    }
    return foundedUser;
  }

  async findCandidate(
    phone: string,
    login: string,
    email: string,
  ): Promise<User> {
    const foundedUser = await this.userRepository.findOne({
      where: {
        phone,
        email,
        login,
      },
    });
    return foundedUser;
  }
  async findByPhone(phone: string): Promise<User> {
    const foundedUser = await this.userRepository.findOneBy({
      phone,
    });
    return foundedUser;
  }

  async getCurrentUser(id): Promise<User> {
    const currentUser = await this.userRepository.findOneBy({ id });
    if (!currentUser) {
      console.log('Пользователь с таким id не найден');
    }
    return currentUser;
  }
}
