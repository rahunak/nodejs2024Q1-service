import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { DbService } from '../DataBase/database.service';
import { Favorite, FavoriteEntity } from './Entity/Favorite';
import { FavoriteStorage } from './Entity/Favorite';
import { TrackService } from '../Track/track.service';
import { ArtistService } from '../Artist/artist.service';
import { AlbumService } from '../Album/album.service';

@Injectable()
export class FavoriteService {
  constructor(
    private dataBase: DbService,
    private TrackService: TrackService,
    private ArtistService: ArtistService,
    private AlbumService: AlbumService,
  ) {}
  favoriteArr = {
    track: 'favoriteTracksStorage',
    album: 'favoriteAlbumsStorage',
    artist: 'favoriteArtistsStorage',
  };
  favoriteService = {
    track: this.TrackService,
    album: this.AlbumService,
    artist: this.ArtistService,
  };
  async getAll(): Promise<FavoriteStorage> {
    return this.dataBase.favoriteStorage;
  }

  async getById(type: string, id: string): Promise<FavoriteEntity> {
    const foundFavorite = this.dataBase.favoriteStorage[
      this.favoriteArr[type]
    ].find((favorite) => favorite.id === id);
    if (!foundFavorite) {
      throw new NotFoundException(`Storage haven't Favorite with id: ${id}`);
    }

    return foundFavorite;
  }

  async create(type: string, id: string): Promise<string> {
    const res = await this.favoriteService[type].getById(id);
    this.dataBase.favoriteStorage[this.favoriteArr[type]].push(res);

    return (
      'New record with type:' +
      type +
      '\n and with id:' +
      id +
      '\n was added to Favorite successfully'
    );
  }

  async remove(type: string, id: string) {
    const foundFavorite = await this.favoriteService[type].getById(id);

    const index =
      this.dataBase.favoriteStorage[this.favoriteArr[type]].indexOf(
        foundFavorite,
      );
    this.dataBase.favoriteStorage[this.favoriteArr[type]].splice(index, 1);
    return (
      'Record with type:' +
      type +
      '\n and with id:' +
      id +
      '\n was removed from Favorite successfully'
    );
  }
}
