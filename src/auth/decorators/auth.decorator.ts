import { UseGuards, applyDecorators } from '@nestjs/common';
import { Roles } from './roles.decorator';
import { AuthGuard } from '../guard/auth.guard';
import { RolesGuard } from '../guard/roles.guard';

export function Auth(role) {
  return applyDecorators(Roles(role), UseGuards(AuthGuard, RolesGuard));
}
