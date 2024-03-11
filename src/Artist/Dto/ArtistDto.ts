import { IsNotEmpty, IsString, IsBooleanString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateArtistDto {
  @IsString({ message: 'Artist Name must be a string.' })
  @IsNotEmpty({ message: 'Artist Name is required.' })
  name: string;

  @IsBooleanString()
  grammy: boolean;
}

export class UpdatePasswordDto extends PartialType(CreateArtistDto) {}
