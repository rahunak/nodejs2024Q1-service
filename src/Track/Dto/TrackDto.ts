import { IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateTrackDto {
  @IsString({ message: 'Track Login must be a string.' })
  @IsNotEmpty({ message: 'Track Login is required.' })
  login: string;

  @IsString({ message: 'Track Password must be a string.' })
  @IsNotEmpty({ message: 'Track Password is required.' })
  password: string;
}

export class UpdatePasswordDto extends PartialType(CreateTrackDto) {
  @IsString({ message: 'Old password must be a string.' })
  @IsNotEmpty({ message: 'Old password is required.' })
  oldPassword: string;

  @IsString({ message: 'New password must be a string.' })
  @IsNotEmpty({ message: 'New password is required.' })
  newPassword: string;
}
