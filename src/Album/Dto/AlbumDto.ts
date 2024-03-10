import { IsNotEmpty, IsString, IsOptional, IsInt } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateAlbumDto {
  @IsString({ message: 'Album Name must be a string.' })
  @IsNotEmpty({ message: 'Album Name is required.' })
  name: string;

  @IsInt({
    message:
      'year duration should be integer. Where did you see 1.082 year of creating?',
  })
  year: number;

  @IsString({ message: 'Track albumId must be a string.' })
  @IsOptional()
  artistId: string | null; // refers to Artist
}

export class UpdatePasswordDto extends PartialType(CreateAlbumDto) {}
