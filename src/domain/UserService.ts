import { Context } from '../context';
const uuid = require('uuid/v4');

export interface User {
  id: string;
  firstName: string;
  lastName: string;
}

export interface UserService {
  getUsers(ctx: Context, input: { ids: string[] }): Promise<Record<string, User>>;
  createUser(ctx: Context, input: { firstName: string; lastName: string }): Promise<User>;
}

export const userService: UserService = {
  getUsers: async ({ userStore }, { ids }) => {
    return userStore.getUsers(ids);
  },
  createUser: async ({ userStore }, partialUser) => {
    const user = {
      id: uuid(),
      ...partialUser,
    };
    await userStore.createUser(user);
    return user;
  },
};
