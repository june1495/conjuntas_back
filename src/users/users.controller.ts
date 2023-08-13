import { Controller, Get, Patch } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get('/allusers')
  findAll() {
    return 'hola';
  }
  @Get(':id')
  findOne() {
    return 'single user';
  }
  @Patch(':id')
  updateOne() {
    return 'update one user';
  }
}
