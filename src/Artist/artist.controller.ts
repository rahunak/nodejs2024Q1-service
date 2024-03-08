import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseUUIDPipe,
  UseInterceptors,
  ClassSerializerInterceptor,
  HttpCode,
} from '@nestjs/common';
import { CreateArtistDto, UpdatePasswordDto } from './Dto/ArtistDto';
import { Artist } from './Entity/Artist';
import { IArtist } from './Interface/IArtist';
import { v4 as uuid } from 'uuid';
import { ArtistService } from './artist.service';

@Controller('artist')
@UseInterceptors(ClassSerializerInterceptor)
export class ArtistController {
  constructor(private readonly ArtistService: ArtistService) {}
  @Get()
  getAllPosts(): Promise<IArtist[]> {
    return this.ArtistService.getAllArtists();
  }

  @Get(':id')
  getArtistById(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): Promise<Artist> {
    return this.ArtistService.getArtistById(id);
  }

  @Post()
  create(@Body() CreateArtistDto: CreateArtistDto): Promise<IArtist> {
    return this.ArtistService.createArtist(CreateArtistDto);
  }

  @Put(':id')
  updateArtist(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() UpdatePasswordDto: UpdatePasswordDto,
  ): Promise<IArtist> {
    return this.ArtistService.updateArtist(id, UpdatePasswordDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.ArtistService.removeArtist(id);
  }
}
