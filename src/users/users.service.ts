import { Injectable } from '@nestjs/common';
import { User } from './users.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(dto: CreateUserDto) {
    return this.userRepository.create(dto);
  }

  async getAllUsers() {
    return this.userRepository.findAll({ include: { all: true } });
  }

  async getUserByEmail(email: string) {
    return this.userRepository.findOne({
      where: { email },
      include: { all: true },
    });
  }

  async deleteUser(id: number) {
    const user = await this.userRepository.findByPk(id);

    if (user) {
      await user.destroy();
      return user;
    }

    return null;
  }
}
