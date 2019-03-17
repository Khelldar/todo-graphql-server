import { User } from '../domain/UserService';
import { UserStore } from './UserStore';

const users: User[] = [
  {
    id: 'default-user',
    firstName: 'Chris',
    lastName: 'Langager',
  },
  {
    id: '1',
    firstName: 'Anakin',
    lastName: 'Skywalker',
  },
];

export const inMemoryUserStore: UserStore = {
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
