import { Injectable, NotFoundException } from '@nestjs/common';
import { DbService } from '../DataBase/database.service';
import { User } from './Entity/User';
import { CreateUserDto } from './Dto/UserDto';
import { IUser } from './Interface/IUser';

@Injectable()
export class UserService {
  constructor(private dataBase: DbService) {}

  async getAllUsers(): Promise<IUser[]> {
    return this.dataBase.usersStorage;
  }

  async getUserById(id: string){
    const foundUser = this.dataBase.usersStorage.find((user) => user.id === id);
    if (!foundUser) {
      throw new NotFoundException(`Storage haven't User with id: ${id}`);
    }
    return foundUser;
  }

  async createUser(userData: CreateUserDto): Promise<User> {
    const newUser = new User({
      login: userData.login,
      password: userData.password,
    });
    this.dataBase.usersStorage.push(newUser);
    return newUser;
  }
}
