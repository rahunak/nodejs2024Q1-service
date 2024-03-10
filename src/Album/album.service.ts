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

  async getAllAlbums(): Promise<IAlbum[]> {
    return this.dataBase.albumStorage;
  }

  async getAlbumById(id: string) {
    const foundAlbum = this.dataBase.albumStorage.find(
      (album) => album.id === id,
    );
    if (!foundAlbum) {
      throw new NotFoundException(`Storage haven't Album with id: ${id}`);
    }
    return foundAlbum;
  }

  async createAlbum(userData: CreateAlbumDto): Promise<Album> {
    const newAlbum = new Album(userData);
    this.dataBase.albumStorage.push(newAlbum);
    return newAlbum;
  }

  async updateAlbum(id: string, updatedData: UpdatePasswordDto) {
    const album = await this.getAlbumById(id);
    for (const key in updatedData) {
      if (key in album) {
        album[key] = updatedData[key];
      }
    }
    return album;
  }

  async removeAlbum(id: string) {
    const album = await this.getAlbumById(id);
    this.dataBase.albumStorage = this.dataBase.albumStorage.filter(
      (album) => album.id !== id,
    );
  }
}
