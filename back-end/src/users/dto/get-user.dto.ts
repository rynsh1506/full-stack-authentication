import { AutoMap } from '@automapper/classes';

export class GetUserDto {
  @AutoMap()
  id: string;

  @AutoMap()
  name: string;

  @AutoMap()
  username: string;

  @AutoMap()
  password: string;

  @AutoMap()
  created_at: Date;

  @AutoMap()
  updated_at: Date;
}
