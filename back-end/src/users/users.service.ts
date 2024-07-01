import { PrismaService } from 'nestjs-prisma';
import { Injectable } from '@nestjs/common';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { GetUserDto } from './dto/get-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectMapper() private readonly mapper: Mapper,
    private readonly prisma: PrismaService,
  ) {}

  async findOne(id: string) {
    const user = await this.prisma.user.findFirst({
      where: { id },
      select: {
        id: true,
        name: true,
        username: true,
        created_at: true,
        updated_at: true,
      },
    });
    return this.mapper.map(user, User, GetUserDto);
  }

  async findAll(skip?: number, take?: number) {
    take = take === -1 ? undefined : take;
    const user = await this.prisma.user.findMany({
      skip,
      take,
      select: {
        id: true,
        name: true,
        username: true,
        created_at: true,
        updated_at: true,
      },
    });

    const mapUsers = this.mapper.mapArray(user, User, GetUserDto);

    const countData = await this.prisma.user.count();
    const page = Math.floor(skip / take) + 1;
    const totalPage = take === -1 ? 1 : Math.ceil(countData / take);
    return {
      total_data: countData,
      limit: take,
      page: page,
      page_total: totalPage,
      data: mapUsers,
    };
  }
}
