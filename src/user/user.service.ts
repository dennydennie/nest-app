import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';

@Injectable({})
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(userDto: UserDto): Promise<User> {
    const createdUser = new this.userModel(userDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
  async findOne(userId: string) {
    return this.userModel.findById(userId).exec();
  }

  async delete(userId: string) {
    return this.userModel.deleteOne({ userId }).exec();
  }
  async update(userDto: UserDto, userId: string) {
    return this.userModel.updateOne({ userId }, userDto).exec();
  }
}
