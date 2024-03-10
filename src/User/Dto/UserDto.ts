import { IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
  @IsString({ message: 'User Login must be a string.' })
  @IsNotEmpty({ message: 'User Login is required.' })
  login: string;

  @IsString({ message: 'User Password must be a string.' })
  @IsNotEmpty({ message: 'User Password is required.' })
  password: string;
}

export class UpdatePasswordDto extends PartialType(CreateUserDto) {
  @IsString({ message: 'Old password must be a string.' })
  @IsNotEmpty({ message: 'Old password is required.' })
  oldPassword: string;

  @IsString({ message: 'New password must be a string.' })
  @IsNotEmpty({ message: 'New password is required.' })
  newPassword: string;
}
