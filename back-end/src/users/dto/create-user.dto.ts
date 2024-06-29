import { AutoMap } from '@automapper/classes';
import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @AutoMap()
  id: string;

  @AutoMap()
  username: string;

  @AutoMap()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
