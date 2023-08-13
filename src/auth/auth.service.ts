import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  async register(registerDto: RegisterDto) {
    try {
      const { nombres, apellidos, password, email, telefono } = registerDto;
      const user = await this.usersService.findOneByEmail(email);
      if (user) {
        throw new BadRequestException('User already exists');
      }
      const passwordHashed = await bcrypt.hash(password, 10);
      await this.usersService.createUser({
        nombres,
        apellidos,
        email,
        telefono,
        password: passwordHashed,
      });
      return { message: 'user created succesfully' };
    } catch (error) {
      throw error;
    }
  }
  async login({ email, password }: LoginDto) {
    try {
      const user = await this.usersService.findOneByEmail(email);
      if (!user) throw new UnauthorizedException('Invalid email or password');
      const isValidPassword = bcrypt.compare(password, user.password);
      if (!isValidPassword)
        throw new UnauthorizedException('Invalid email or password');
      const payload = { email: user.email, role: user.role };
      const token = await this.jwtService.signAsync(payload);
      return { token, email: user.email };
    } catch (error) {
      throw error;
    }
  }
}
