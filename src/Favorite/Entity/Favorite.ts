import { IArtist } from 'src/Artist/Interface/IArtist';
import { IAlbum } from 'src/Album/Interface/IAlbum';
import { ITrack } from 'src/Track/Interface/ITrack';
import { IFavorite } from '../Interface/IFavorite';
import { Artist } from 'src/Artist/Entity/Artist';
import { Album } from 'src/Album/Entity/Album';
import { Track } from 'src/Track/Entity/Track';

export class Favorite implements IFavorite {
  constructor(
    public favoriteArtistsStorage: Artist[],
    public favoriteAlbumsStorage: Album[],
    public favoriteTracksStorage: Track[],
  ) {}
}
export type FavoriteEntity = Artist | Album | Track;
export interface FavoriteStorage {
  favoriteArtistsStorage: Artist[];
  favoriteAlbumsStorage: Album[];
  favoriteTracksStorage: Track[];
}
