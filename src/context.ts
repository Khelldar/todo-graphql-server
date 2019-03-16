import { TodoStore } from './store/TodoStore';
import { UserService } from './domain/UserService';
import { TodoService } from './domain/TodoService';
import { Claims } from './claims';
import { UserStore } from './store/UserStore';

export interface Context {
  claims: Claims;
  todoService: TodoService;
  userService: UserService;
  todoStore: TodoStore;
  userStore: UserStore;
}
