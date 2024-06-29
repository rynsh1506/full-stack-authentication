import { AutoMap } from '@automapper/classes';
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @AutoMap()
  id: string;

  @AutoMap()
  username: string;

  @AutoMap()
  password: string;
}
