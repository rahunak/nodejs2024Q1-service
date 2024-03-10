import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { DbService } from '../DataBase/database.service';
import { Track } from './Entity/Track';
import { CreateTrackDto } from './Dto/TrackDto';
import { ITrack } from './Interface/ITrack';
import { UpdateTrackDto } from './Dto/TrackDto';

@Injectable()
export class TrackService {
  constructor(private dataBase: DbService) {}

  async getAllTracks(): Promise<ITrack[]> {
    return this.dataBase.trackStorage;
  }

  async getTrackById(id: string) {
    const foundTrack = this.dataBase.trackStorage.find(
      (track) => track.id === id,
    );
    if (!foundTrack) {
      throw new NotFoundException(`Storage haven't Track with id: ${id}`);
    }
    return foundTrack;
  }

  async createTrack(trackData: CreateTrackDto): Promise<Track> {
    const newTrack = new Track({
      name: trackData.name,
      artistId: trackData.artistId,
      albumId: trackData.albumId,
      duration: +trackData.duration,
    });
    this.dataBase.trackStorage.push(newTrack);
    return newTrack;
  }

  async updateTrack(id: string, updateTrackData: UpdateTrackDto) {
    const track = await this.getTrackById(id);
    for (const key in updateTrackData) {
      if (key in track) {
        track[key] = updateTrackData[key];
      }
    }
    return track;
  }

  async removeTrack(id: string) {
    const track = await this.getTrackById(id);
    this.dataBase.trackStorage = this.dataBase.trackStorage.filter(
      (track) => track.id !== id,
    );
  }
}
