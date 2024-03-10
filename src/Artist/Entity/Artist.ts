import { Exclude } from 'class-transformer';
import { v4 as uuid } from 'uuid';
import { IArtist } from '../Interface/IArtist';

export class Artist implements IArtist {
  id: string; // uuid v4
  name: string;
  grammy: boolean;

  @Exclude()
  password: string;

  constructor({ name, grammy }: Partial<Artist>) {
    this.id = uuid();
    this.name = name;
    this.grammy = grammy;
  }
}
