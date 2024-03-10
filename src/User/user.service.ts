import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { DbService } from '../DataBase/database.service';
import { User } from './Entity/User';
import { CreateUserDto } from './Dto/UserDto';
import { IUser } from './Interface/IUser';
import { UpdatePasswordDto } from './Dto/UserDto';

@Injectable()
export class UserService {
  constructor(private dataBase: DbService) {}

  async getAllUsers(): Promise<IUser[]> {
    return this.dataBase.usersStorage;
  }

  async getUserById(id: string) {
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

  async updateUserPassword(id: string, passwordsData: UpdatePasswordDto) {
    const oldPassword = passwordsData.oldPassword;
    const newPassword = passwordsData.newPassword;
    const user = await this.getUserById(id);
    if (user.password !== oldPassword) {
      throw new HttpException(
        'Old password doesnt match with user password',
        403,
      );
    }
    user.password = newPassword;
    user.version += 1;
    user.updatedAt = Date.now();
    return user;
  }

  async removeUser(id: string) {
    const user = await this.getUserById(id);
    this.dataBase.usersStorage = this.dataBase.usersStorage.filter(
      (user) => user.id !== id,
    );
    return user;
  }
}
