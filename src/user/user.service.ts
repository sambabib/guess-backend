import { Injectable } from '@nestjs/common';
import { User } from 'src/user/interfaces/user.interface';

@Injectable()
export class UserService {
  private readonly users: User[] = [];

  create(user: User) {
    this.users.push(user);
  }
}
