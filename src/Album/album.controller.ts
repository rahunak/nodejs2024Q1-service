import {
  Controller,
  Get,
  Query,
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
import { CreateAlbumDto, UpdatePasswordDto } from './Dto/AlbumDto';
import { Album } from './Entity/Album';
import { IAlbum } from './Interface/IAlbum';
import { v4 as uuid } from 'uuid';
import { AlbumService } from './album.service';

@Controller('album')
@UseInterceptors(ClassSerializerInterceptor)
export class AlbumController {
  constructor(private readonly AlbumService: AlbumService) {}
  @Get()
  getAllPosts(): Promise<IAlbum[]> {
    return this.AlbumService.getAllAlbums();
  }

  @Get(':id')
  getAlbumById(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): Promise<Album> {
    return this.AlbumService.getAlbumById(id);
  }

  @Post()
  create(@Body() CreateAlbumDto: CreateAlbumDto): Promise<IAlbum> {
    return this.AlbumService.createAlbum(CreateAlbumDto);
  }

  @Put(':id')
  updateAlbum(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() UpdatePasswordDto: UpdatePasswordDto,
  ): Promise<IAlbum> {
    return this.AlbumService.updateAlbum(id, UpdatePasswordDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.AlbumService.removeAlbum(id);
  }
}
