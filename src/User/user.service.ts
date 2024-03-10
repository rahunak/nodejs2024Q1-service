import { Injectable, NotFoundException } from '@nestjs/common';
import { DbService } from '../DataBase/database.service';
import { User } from './Entity/User';

@Injectable()
export class UserService {
  constructor(private dataBase: DbService) {}

  async getAllUsers() {
    return this.dataBase.users;
  }
  async getUserById(id: string) {
    const currentUser = this.dataBase.users.find((user) => user.id === id);
    if (!currentUser) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return currentUser;
  }
}
