import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PasswordService } from '../auth/password.service';
import { PrismaService } from 'nestjs-prisma';
import { UserProfile } from './profile/user.profile';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UserProfile, PasswordService, PrismaService],
  exports: [UsersService],
})
export class UsersModule {}
