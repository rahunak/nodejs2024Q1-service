import {
  Controller,
  Get,
  Header,
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
import { IFavorite } from './Interface/IFavorite';
import { v4 as uuid } from 'uuid';
import { FavoriteService } from './favorite.service';
import { Favorite, FavoriteStorage, FavoriteEntity } from './Entity/Favorite';

@Controller('favs')
@UseInterceptors(ClassSerializerInterceptor)
export class FavoriteController {
  constructor(private readonly FavoriteService: FavoriteService) {}
  @Get()
  @Header('Content-Type', 'application/json')
  getAllPosts(): Promise<FavoriteStorage> {
    return this.FavoriteService.getAll();
  }

  @Get(':type/:id')
  @Header('Content-Type', 'application/json')
  getFavoriteByTypeAndId(
    @Param('type') type: string,
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): Promise<FavoriteEntity> {
    return this.FavoriteService.getById(type, id);
  }

  @Post(':type/:id')
  @Header('Content-Type', 'application/json')
  createFavorite(
    @Param('type') type: string,
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): Promise<string> {
    return this.FavoriteService.create(type, id);
  }

  @Delete(':type/:id')
  @HttpCode(204)
  remove(
    @Param('type') type: string,
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): Promise<string> {
    return this.FavoriteService.remove(type, id);
  }
}
