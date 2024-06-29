import { Controller, Get, Param, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Get()
  findAll(@Query('page') page = 1, @Query('limit') limit = 10) {
    page = page <= 0 ? 1 : page;
    const skip = (page - 1) * limit;
    return this.usersService.findAll(skip, limit);
  }
}
