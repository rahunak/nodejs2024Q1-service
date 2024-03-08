import { IArtist } from 'src/Artist/Interface/IArtist';
import { IAlbum } from 'src/Album/Interface/IAlbum';
import { ITrack } from 'src/Track/Interface/ITrack';

export interface IFavorite {
  favoriteArtistsStorage: IArtist[];
  favoriteAlbumsStorage: IAlbum[];
  favoriteTracksStorage: ITrack[];
}
