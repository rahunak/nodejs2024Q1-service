import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Header,
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
  @Header('Content-Type', 'application/json')
  getAll(): Promise<IArtist[]> {
    return this.ArtistService.getAll();
  }

  @Get(':id')
  @Header('Content-Type', 'application/json')
  getById(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): Promise<Artist> {
    return this.ArtistService.getById(id);
  }

  @Post()
  @Header('Content-Type', 'application/json')
  create(@Body() CreateArtistDto: CreateArtistDto): Promise<IArtist> {
    return this.ArtistService.create(CreateArtistDto);
  }

  @Put(':id')
  @Header('Content-Type', 'application/json')
  update(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() UpdatePasswordDto: UpdatePasswordDto,
  ): Promise<IArtist> {
    return this.ArtistService.update(id, UpdatePasswordDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.ArtistService.remove(id);
  }
}
