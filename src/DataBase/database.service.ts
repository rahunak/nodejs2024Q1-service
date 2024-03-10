import { Injectable } from '@nestjs/common';

//temp
import { User } from '../User/Entity/User';

@Injectable()
export class DbService {
  usersStorage: User[] = [
    new User({ login: 'test0', password: 'test-pass' }),
    new User({ login: 'test1', password: 'test-pass1' }),
  ];
}
