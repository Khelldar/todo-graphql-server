import { User } from '../domain/UserService';

export interface UserStore {
  getUsers(ids: String[]): Promise<Record<string, User>>;
  createUser(user: User): Promise<void>;
}
