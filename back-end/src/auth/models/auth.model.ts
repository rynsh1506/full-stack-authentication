import { User } from '../../users/entities/user.entity';
import { Token } from './token.model';

export class Auth extends Token {
  user: User;
}
