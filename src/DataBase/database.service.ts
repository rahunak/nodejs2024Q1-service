import { Injectable } from '@nestjs/common';

//temp
import { User } from '../User/Entity/User';
import { Track } from '../Track/Entity/Track';

@Injectable()
export class DbService {
  usersStorage: User[] = [
    new User({ login: 'test0', password: 'test-pass' }),
    new User({ login: 'test1', password: 'test-pass1' }),
  ];

  trackStorage: Track[] = [];
}
