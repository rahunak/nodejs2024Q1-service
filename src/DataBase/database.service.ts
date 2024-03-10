import { Injectable } from '@nestjs/common';

//temp
import { User } from '../User/Entity/User';
import { Track } from '../Track/Entity/Track';
import { Artist } from '../Artist/Entity/Artist';
import { Album } from '../Album/Entity/Album';

@Injectable()
export class DbService {
  usersStorage: User[] = [
    new User({ login: 'test0', password: 'test-pass' }),
    new User({ login: 'test1', password: 'test-pass1' }),
  ];

  trackStorage: Track[] = [
    new Track({
      name: 'Разбуры турмы муры',
      artistId: 'Яцек Качмарски',
      albumId: 'album1',
      duration: 200,
    }),
  ];

  artistStorage: Artist[] = [
    new Artist({
      name: 'Яцек Качмарски',
      grammy: true,
    }),
  ];

  albumStorage: Album[] = [
    new Album({
      name: 'Жыве Беларусь!',
      year: 1999,
      artistId: null,
    }),
  ];
}
