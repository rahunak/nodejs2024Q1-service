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
  getAllPosts(): Promise<IUser[]> {
    return this.UserService.getAllUsers();
  }

  @Get(':id')
  getUserById(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): Promise<User> {
    return this.UserService.getUserById(id);
  }

  @Post()
  create(@Body() CreateUserDto: CreateUserDto): Promise<IUser> {
    return this.UserService.createUser(CreateUserDto);
  }

  @Put(':id')
  updateUserPassword(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() UpdatePasswordDto: UpdatePasswordDto,
  ): Promise<IUser> {
    return this.UserService.updateUserPassword(id, UpdatePasswordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
