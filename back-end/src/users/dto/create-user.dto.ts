import { AutoMap } from '@automapper/classes';
export class CreateUserDto {
  @AutoMap()
  id: string;

  @AutoMap()
  name: string;

  @AutoMap()
  username: string;

  @AutoMap()
  password: string;
}
