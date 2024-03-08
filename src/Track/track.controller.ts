import {
  Controller,
  Get,
  Query,
  Post,
  Header,
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
  @Header('Content-Type', 'application/json')
  getAllPosts(): Promise<ITrack[]> {
    return this.TrackService.getAllTracks();
  }

  @Get(':id')
  @Header('Content-Type', 'application/json')
  getById(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): Promise<Track> {
    return this.TrackService.getById(id);
  }

  @Post()
  @Header('Content-Type', 'application/json')
  create(@Body() CreateTrackDto: CreateTrackDto): Promise<ITrack> {
    return this.TrackService.create(CreateTrackDto);
  }

  @Put(':id')
  @Header('Content-Type', 'application/json')
  update(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() UpdateTrackDto: UpdateTrackDto,
  ): Promise<ITrack> {
    return this.TrackService.update(id, UpdateTrackDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.TrackService.remove(id);
  }
}
