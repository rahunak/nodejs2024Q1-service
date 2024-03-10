import { IsNotEmpty, IsString, IsInt, IsOptional } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateTrackDto {
  @IsString({ message: 'Track Name must be a string.' })
  @IsNotEmpty({ message: 'Track Name is required.' })
  name: string;

  @IsString({ message: 'Track artistId must be a string.' })
  @IsOptional()
  artistId: string | null; // refers to Artist

  @IsString({ message: 'Track albumId must be a string.' })
  @IsOptional()
  albumId: string | null; // refers to Album

  @IsInt({ message: 'Track duration should be integer.' })
  duration: number; // integer number
}

export class UpdateTrackDto extends PartialType(CreateTrackDto) {}
