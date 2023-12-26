import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@mail.com', description: 'e-mail' })
  @IsString({ message: 'Should be string' })
  @IsEmail({}, { message: 'Invalid email' })
  readonly email: string;

  @ApiProperty({ example: 'qwerty', description: 'password' })
  @IsString({ message: 'Should be string' })
  @Length(4, 8, { message: 'Length should be  4-8 symobls' })
  readonly password: string;

  readonly role: string;
}
