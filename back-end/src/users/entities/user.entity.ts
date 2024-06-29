import { AutoMap } from '@automapper/classes';

export class User {
  @AutoMap()
  id: string;

  @AutoMap()
  username: string;

  @AutoMap()
  password: string;

  @AutoMap()
  created_at: Date;

  @AutoMap()
  updated_at: Date;
}
