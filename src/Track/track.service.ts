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
import { UpdatePasswordDto } from './Dto/TrackDto';

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
      login: trackData.login,
      password: trackData.password,
    });
    this.dataBase.trackStorage.push(newTrack);
    return newTrack;
  }

  async updateTrackPassword(id: string, passwordsData: UpdatePasswordDto) {
    const oldPassword = passwordsData.oldPassword;
    const newPassword = passwordsData.newPassword;
    const track = await this.getTrackById(id);
    if (track.password !== oldPassword) {
      throw new HttpException(
        'Old password doesnt match with track password',
        403,
      );
    }
    track.password = newPassword;
    track.version += 1;
    track.updatedAt = Date.now();
    return track;
  }

  async removeTrack(id: string) {
    const track = await this.getTrackById(id);
    this.dataBase.trackStorage = this.dataBase.trackStorage.filter(
      (track) => track.id !== id,
    );
  }
}
