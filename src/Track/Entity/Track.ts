import { v4 as uuid } from 'uuid';
import { ITrack } from '../Interface/ITrack';

export class Track implements ITrack {
  id: string; // uuid v4
  name: string;
  artistId: string | null; // refers to Artist
  albumId: string | null; // refers to Album
  duration: number; // integer number
  constructor({ name, artistId, albumId, duration }: Partial<Track>) {
    this.id = uuid();
    this.name = name;
    this.artistId = artistId;
    this.albumId = albumId;
    this.duration = duration;
  }
}
