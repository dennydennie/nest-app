import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getAll() {
    return this.userService.findAll();
  }

  @Post()
  save(@Body() userDto: UserDto) {
    return this.userService.create(userDto);
  }

  @Get('/:userId')
  get(@Param('userId') userId: string) {
    return this.userService.findOne(userId);
  }

  @Delete('/:userId')
  delete(@Param('userId') userId: string) {
    return this.userService.delete(userId);
  }

  @Patch('/:userId')
  update(@Body() userDto: UserDto, @Param('userId') userId: string) {
    return this.userService.update(userDto, userId);
  }
}
