import { Injectable } from '@nestjs/common';
import { User } from './dto/user.dto';

@Injectable()
export class UsersService {
  private users: User[] = [];

  findAll (): User[] {
    return this.users;
  }

  create (user): User {
    this.users.push(user);
    return user;
  }
}
