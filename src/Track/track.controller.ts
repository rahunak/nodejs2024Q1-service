import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseUUIDPipe,
  UseInterceptors,
  ClassSerializerInterceptor,
  HttpCode,
} from '@nestjs/common';
import { CreateTrackDto, UpdateTrackDto } from './Dto/TrackDto';
import { Track } from './Entity/Track';
import { ITrack } from './Interface/ITrack';
import { v4 as uuid } from 'uuid';
import { TrackService } from './track.service';

@Controller('track')
@UseInterceptors(ClassSerializerInterceptor)
export class TrackController {
  constructor(private readonly TrackService: TrackService) {}
  @Get()
  getAllPosts(): Promise<ITrack[]> {
    return this.TrackService.getAllTracks();
  }

  @Get(':id')
  getTrackById(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): Promise<Track> {
    return this.TrackService.getTrackById(id);
  }

  @Post()
  create(@Body() CreateTrackDto: CreateTrackDto): Promise<ITrack> {
    return this.TrackService.createTrack(CreateTrackDto);
  }

  @Put(':id')
  updateTrack(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() UpdateTrackDto: UpdateTrackDto,
  ): Promise<ITrack> {
    return this.TrackService.updateTrack(id, UpdateTrackDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.TrackService.removeTrack(id);
  }
}
