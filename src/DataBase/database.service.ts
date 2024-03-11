import { Injectable } from '@nestjs/common';
import { User } from '../User/Entity/User';
import { Track } from '../Track/Entity/Track';
import { Artist } from '../Artist/Entity/Artist';
import { Album } from '../Album/Entity/Album';
import { Favorite } from '../Favorite/Entity/Favorite';
import { FavoriteStorage } from '../Favorite/Entity/Favorite';

@Injectable()
export class DbService {
  usersStorage: User[] = [];

  trackStorage: Track[] = [];

  artistStorage: Artist[] = [
    new Artist({
      name: 'Яцек Качмарски',
      grammy: true,
    }),
  ];

  albumStorage: Album[] = [];

  favoriteStorage: FavoriteStorage = {
    favoriteArtistsStorage: [],
    favoriteAlbumsStorage: [],
    favoriteTracksStorage: [],
  };
}
