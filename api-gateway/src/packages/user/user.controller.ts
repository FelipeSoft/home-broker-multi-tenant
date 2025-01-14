import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FilteredSearchDto } from './dto/filtered-search.dto';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  public async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  public async findAll(@Query() query: FilteredSearchDto) {
    return this.userService.findAll();
  }

  @Get('/:id')
  public async findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch('/:id')
  public async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete('/:id')
  public async remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
