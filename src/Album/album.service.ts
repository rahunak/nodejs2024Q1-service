import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { DbService } from '../DataBase/database.service';
import { Album } from './Entity/Album';
import { CreateAlbumDto, UpdatePasswordDto } from './Dto/AlbumDto';
import { IAlbum } from './Interface/IAlbum';

@Injectable()
export class AlbumService {
  constructor(private dataBase: DbService) {}

  async getAll(): Promise<IAlbum[]> {
    return this.dataBase.albumStorage;
  }

  async getById(id: string) {
    const foundAlbum = this.dataBase.albumStorage.find(
      (album) => album.id === id,
    );
    if (!foundAlbum) {
      throw new NotFoundException(`Storage haven't Album with id: ${id}`);
    }
    return foundAlbum;
  }

  async create(userData: CreateAlbumDto): Promise<Album> {
    const newAlbum = new Album(userData);
    this.dataBase.albumStorage.push(newAlbum);
    return newAlbum;
  }

  async update(id: string, updatedData: UpdatePasswordDto) {
    const album = await this.getById(id);
    for (const key in updatedData) {
      if (key in album) {
        album[key] = updatedData[key];
      }
    }
    return album;
  }

  async remove(id: string) {
    const album = await this.getById(id);
    this.dataBase.albumStorage = this.dataBase.albumStorage.filter(
      (album) => album.id !== id,
    );
  }
}
