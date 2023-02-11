import { Controller, Get, Headers, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.usersService.getUsers();
  }

  @Get(':username')
  getUser(@Param('username') username: string) {
    return this.usersService.getUser(username);
  }
}
