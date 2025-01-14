import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  public async create(createUserDto: CreateUserDto) {
    throw new NotImplementedException("Method not implemented.");
  }

  public async findAll() {
    return `This action returns all user`;
  }

  public async findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  public async update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  public async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
