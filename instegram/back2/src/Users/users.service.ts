import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../Models/UserModel';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getUser(userName: string) {
    const user: User | undefined = await this.userRepository.findOneBy({
      userName,
    });

    if (!user) throw new NotFoundException(`could not found user ${userName}`);

    return user;
  }
}
