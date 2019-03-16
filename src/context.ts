import { inMemoryTodoStore } from './store/inMemoryTodoStore';
import { inMemoryUserStore } from './store/inMemoryUserStore';
import { TodoStore } from './store/TodoStore';
import { UserService, userService } from './domain/UserService';
import { TodoService, todoService } from './domain/TodoService';
import { Claims } from './claims';
import { UserStore } from './store/UserStore';

export interface Context {
  claims: Claims;
  todoService: TodoService;
  userService: UserService;
  todoStore: TodoStore;
  userStore: UserStore;
}

export function context(): Context {
  return {
    claims: { id: 'default-user' },
    todoService,
    userService,
    todoStore: inMemoryTodoStore,
    userStore: inMemoryUserStore,
  };
}
