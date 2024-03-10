import { Exclude } from 'class-transformer';
import { v4 as uuid } from 'uuid';
import { IAlbum } from '../Interface/IAlbum';

export class Album implements IAlbum {
  id: string; // uuid v4
  name: string;
  year: number;
  artistId: string | null; // refers to Artist

  constructor({ name, year, artistId }: Partial<Album>) {
    this.id = uuid();
    this.name = name;
    this.year = year;
    this.artistId = artistId;
  }
}
