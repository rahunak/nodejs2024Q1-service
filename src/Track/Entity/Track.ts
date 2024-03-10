import { Exclude } from 'class-transformer';
import { v4 as uuid } from 'uuid';
import { ITrack } from '../Interface/ITrack';

export class Track implements ITrack {
  id: string; // uuid v4
  login: string;
  version: number; // integer number, increments on update
  createdAt: number; // timestamp of creation
  updatedAt: number; // timestamp of last update

  @Exclude()
  password: string;

  constructor({ login, password }: Partial<Track>) {
    this.id = uuid();
    this.login = login;
    this.version = 1;
    this.createdAt = Date.now();
    this.updatedAt = Date.now();
    this.password = password;
  }
}
