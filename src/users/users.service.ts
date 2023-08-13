import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { createUserDto } from './dtos/create-user.dto';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  createUser(createUserDto: createUserDto) {
    return this.userRepository.save(createUserDto);
  }
  findOneByEmail(email: string) {
    console.log(email);
    return this.userRepository.findOneBy({ email });
  }
}
