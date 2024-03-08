import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { DbService } from '../DataBase/database.service';
import { Artist } from './Entity/Artist';
import { CreateArtistDto, UpdatePasswordDto } from './Dto/ArtistDto';
import { IArtist } from './Interface/IArtist';

@Injectable()
export class ArtistService {
  constructor(private dataBase: DbService) {}

  async getAllArtists(): Promise<IArtist[]> {
    return this.dataBase.artistStorage;
  }

  async getById(id: string) {
    const foundArtist = this.dataBase.artistStorage.find(
      (artist) => artist.id === id,
    );
    if (!foundArtist) {
      throw new NotFoundException(`Storage haven't Artist with id: ${id}`);
    }
    return foundArtist;
  }

  async createArtist(userData: CreateArtistDto): Promise<Artist> {
    const newArtist = new Artist({
      name: userData.name,
      grammy: userData.grammy,
    });
    this.dataBase.artistStorage.push(newArtist);
    return newArtist;
  }

  async updateArtist(id: string, updatedData: UpdatePasswordDto) {
    const artist = await this.getById(id);
    for (const key in updatedData) {
      if (key in artist) {
        artist[key] = updatedData[key];
      }
    }
    return artist;
  }

  async removeArtist(id: string) {
    const artist = await this.getById(id);
    this.dataBase.artistStorage = this.dataBase.artistStorage.filter(
      (artist) => artist.id !== id,
    );
  }
}
