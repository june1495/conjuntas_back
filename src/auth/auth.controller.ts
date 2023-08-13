import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Get,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
// import { AuthGuard } from './guard/auth.guard';
// import { Roles } from './decorators/roles.decorator';
import { Role } from './enums/role.enum';
// import { RolesGuard } from './guard/roles.guard';
import { Auth } from './decorators/auth.decorator';

interface RequestWithUser extends Request {
  user: { email: string; role: string };
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @HttpCode(HttpStatus.OK)
  @Post('/login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
  @Post('/register')
  register(
    @Body()
    registerDto: RegisterDto,
  ) {
    return this.authService.register(registerDto);
  }
  @Get('profile')
  //   @Roles(Role.USER)
  //   @UseGuards(AuthGuard, RolesGuard)
  @Auth(Role.USER)
  profile(@Req() req: RequestWithUser) {
    return req.user;
  }
}
