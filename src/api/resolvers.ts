import { Context } from './../context';
import { Todo } from '../domain/TodoService';

export const resolvers = {
  Query: {
    listTodos: async (_, __, ctx) => {
      const { todoService } = ctx;
      const todos = await todoService.listTodos(ctx, {});
      return todos;
    },
  },
  Mutation: {
    createTodo: async (_, { input }, ctx: Context) => {
      const todo = await ctx.todoService.createTodo(ctx, { text: input.text });
      return { todo };
    },
    completeTodo: async (_, { input }, ctx: Context) => {
      const todo = await ctx.todoService.completeTodo(ctx, { id: input.id });
      return { todo };
    },
    deleteTodo: async (_, args, ctx: Context) => {
      const { id } = args;
      await ctx.todoService.deleteTodo(ctx, { id });
      return { id };
    },
  },
  Todo: {
    createdBy: async ({ createdBy }: Todo, _, ctx: Context) => {
      const { userService } = ctx;
      const users = await userService.getUsers(ctx, { ids: [createdBy] });

      return users[createdBy];
    },
  },
};
