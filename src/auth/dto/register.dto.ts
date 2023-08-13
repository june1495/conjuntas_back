import { Transform } from 'class-transformer';
import { IsEmail, IsString, Matches, IsOptional } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  email: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @Matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/)
  password: string;

  @IsString()
  nombres: string;

  @IsString()
  apellidos: string;

  @IsOptional()
  @IsString()
  telefono?: string;
}
