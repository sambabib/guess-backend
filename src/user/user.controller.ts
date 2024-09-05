import { Controller, Post, Get, Body, Put, Delete, Param, NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import { UserDto } from './dto/user-dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }

  @Post()
  async create(@Body() user: UserDto) {
    try {
      await this.userService.create(user)
      return {
        success: true,
        message: "User Created Successfully",
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Get()
  async findAll() {
    try {
      const data = await this.userService.findAll()
      return {
        success: true,
        data,
        message: "Users Fetched Successfully",
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    try {
      const user = await this.userService.findById(id);
      if (!user) {
        throw new NotFoundException("User does not exist!");
      }
      return {
        success: true,
        user,
        message: 'User Fetched Successfully',
      }
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }
}
