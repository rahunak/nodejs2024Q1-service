import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Header,
  Param,
  Delete,
  ParseUUIDPipe,
  UseInterceptors,
  ClassSerializerInterceptor,
  HttpCode,
} from '@nestjs/common';
import { CreateUserDto, UpdatePasswordDto } from './Dto/UserDto';
import { User } from './Entity/User';
import { IUser } from './Interface/IUser';
import { v4 as uuid } from 'uuid';
import { UserService } from './user.service';

@Controller('user')
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {
  constructor(private readonly UserService: UserService) {}
  @Get()
  @Header('Content-Type', 'application/json')
  getAllPosts(): Promise<IUser[]> {
    return this.UserService.getAllUsers();
  }

  @Get(':id')
  @Header('Content-Type', 'application/json')
  getUserById(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): Promise<User> {
    return this.UserService.getUserById(id);
  }

  @Post()
  @Header('Content-Type', 'application/json')
  create(@Body() CreateUserDto: CreateUserDto): Promise<IUser> {
    return this.UserService.createUser(CreateUserDto);
  }

  @Put(':id')
  @Header('Content-Type', 'application/json')
  updateUserPassword(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() UpdatePasswordDto: UpdatePasswordDto,
  ): Promise<IUser> {
    return this.UserService.updateUserPassword(id, UpdatePasswordDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.UserService.removeUser(id);
  }
}
