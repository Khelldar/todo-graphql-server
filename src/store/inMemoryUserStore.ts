import { User } from '../domain/UserService';
import { UserStore } from './UserStore';

const users: User[] = [];

export const userStore: UserStore = {
  getUsers: async ids => {
    return users
      .filter(({ id }) => ids.includes(id))
      .reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
      }, {});
  },
  createUser: async user => {
    users.push(user);
  },
};
