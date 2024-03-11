import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Header,
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
  @Header('Content-Type', 'application/json')
  getAll(): Promise<IAlbum[]> {
    return this.AlbumService.getAll();
  }

  @Get(':id')
  @Header('Content-Type', 'application/json')
  getById(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): Promise<Album> {
    return this.AlbumService.getById(id);
  }

  @Post()
  @Header('Content-Type', 'application/json')
  create(@Body() CreateAlbumDto: CreateAlbumDto): Promise<IAlbum> {
    return this.AlbumService.create(CreateAlbumDto);
  }

  @Put(':id')
  @Header('Content-Type', 'application/json')
  update(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() UpdatePasswordDto: UpdatePasswordDto,
  ): Promise<IAlbum> {
    return this.AlbumService.update(id, UpdatePasswordDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.AlbumService.remove(id);
  }
}
