export type Maybe<T> = T | null;

export interface ListTodosInput {
  first?: Maybe<number>;

  after?: Maybe<string>;
}

export interface CreateTodoInput {
  text: string;
}

export interface CompleteTodoInput {
  id: string;
}

export interface DeleteTodoInput {
  id: string;
}

export enum TodoType {
  Private = 'PRIVATE',
  Shared = 'SHARED',
}

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE',
}

/** The `Upload` scalar type represents a file upload. */
export type Upload = any;

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Types
// ====================================================

export interface Query {
  listTodos: ListTodosOutput;
}

export interface ListTodosOutput {
  todos: Todo[];

  cursor?: Maybe<string>;
}

export interface Todo {
  id: string;

  text: string;

  completed: boolean;

  createdBy?: Maybe<User>;

  type?: Maybe<TodoType>;
}

export interface User {
  id: string;

  firstName: string;

  lastName: string;
}

export interface Mutation {
  createTodo: CreateTodoOutput;

  completeTodo: CompleteTodoOutput;

  deleteTodo: DeleteTodoOutput;
}

export interface CreateTodoOutput {
  todo: Todo;
}

export interface CompleteTodoOutput {
  todo: Todo;
}

export interface DeleteTodoOutput {
  id?: Maybe<string>;
}

// ====================================================
// Arguments
// ====================================================

export interface ListTodosQueryArgs {
  input: ListTodosInput;
}
export interface CreateTodoMutationArgs {
  input: CreateTodoInput;
}
export interface CompleteTodoMutationArgs {
  input: CompleteTodoInput;
}
export interface DeleteTodoMutationArgs {
  input: DeleteTodoInput;
}

import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';

import { Todo } from '../domain/TodoService';

export type Resolver<Result, Parent = {}, Context = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, Context, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<Result, Parent = {}, Context = {}, Args = {}> =
  | ((...args: any[]) => ISubscriptionResolverObject<Result, Parent, Context, Args>)
  | ISubscriptionResolverObject<Result, Parent, Context, Args>;

export type TypeResolveFn<Types, Parent = {}, Context = {}> = (
  parent: Parent,
  context: Context,
  info: GraphQLResolveInfo
) => Maybe<Types>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult, TArgs = {}, TContext = {}> = (
  next: NextResolverFn<TResult>,
  source: any,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export namespace QueryResolvers {
  export interface Resolvers<Context = {}, TypeParent = {}> {
    listTodos?: ListTodosResolver<ListTodosOutput, TypeParent, Context>;
  }

  export type ListTodosResolver<
    R = ListTodosOutput,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, ListTodosArgs>;
  export interface ListTodosArgs {
    input: ListTodosInput;
  }
}

export namespace ListTodosOutputResolvers {
  export interface Resolvers<Context = {}, TypeParent = ListTodosOutput> {
    todos?: TodosResolver<Todo[], TypeParent, Context>;

    cursor?: CursorResolver<Maybe<string>, TypeParent, Context>;
  }

  export type TodosResolver<
    R = Todo[],
    Parent = ListTodosOutput,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type CursorResolver<
    R = Maybe<string>,
    Parent = ListTodosOutput,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace TodoResolvers {
  export interface Resolvers<Context = {}, TypeParent = Todo> {
    id?: IdResolver<string, TypeParent, Context>;

    text?: TextResolver<string, TypeParent, Context>;

    completed?: CompletedResolver<boolean, TypeParent, Context>;

    createdBy?: CreatedByResolver<Maybe<User>, TypeParent, Context>;

    type?: TypeResolver<Maybe<TodoType>, TypeParent, Context>;
  }

  export type IdResolver<R = string, Parent = Todo, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >;
  export type TextResolver<R = string, Parent = Todo, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >;
  export type CompletedResolver<R = boolean, Parent = Todo, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >;
  export type CreatedByResolver<R = Maybe<User>, Parent = Todo, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >;
  export type TypeResolver<R = Maybe<TodoType>, Parent = Todo, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >;
}

export namespace UserResolvers {
  export interface Resolvers<Context = {}, TypeParent = User> {
    id?: IdResolver<string, TypeParent, Context>;

    firstName?: FirstNameResolver<string, TypeParent, Context>;

    lastName?: LastNameResolver<string, TypeParent, Context>;
  }

  export type IdResolver<R = string, Parent = User, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >;
  export type FirstNameResolver<R = string, Parent = User, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >;
  export type LastNameResolver<R = string, Parent = User, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >;
}

export namespace MutationResolvers {
  export interface Resolvers<Context = {}, TypeParent = {}> {
    createTodo?: CreateTodoResolver<CreateTodoOutput, TypeParent, Context>;

    completeTodo?: CompleteTodoResolver<CompleteTodoOutput, TypeParent, Context>;

    deleteTodo?: DeleteTodoResolver<DeleteTodoOutput, TypeParent, Context>;
  }

  export type CreateTodoResolver<
    R = CreateTodoOutput,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, CreateTodoArgs>;
  export interface CreateTodoArgs {
    input: CreateTodoInput;
  }

  export type CompleteTodoResolver<
    R = CompleteTodoOutput,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, CompleteTodoArgs>;
  export interface CompleteTodoArgs {
    input: CompleteTodoInput;
  }

  export type DeleteTodoResolver<
    R = DeleteTodoOutput,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, DeleteTodoArgs>;
  export interface DeleteTodoArgs {
    input: DeleteTodoInput;
  }
}

export namespace CreateTodoOutputResolvers {
  export interface Resolvers<Context = {}, TypeParent = CreateTodoOutput> {
    todo?: TodoResolver<Todo, TypeParent, Context>;
  }

  export type TodoResolver<R = Todo, Parent = CreateTodoOutput, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >;
}

export namespace CompleteTodoOutputResolvers {
  export interface Resolvers<Context = {}, TypeParent = CompleteTodoOutput> {
    todo?: TodoResolver<Todo, TypeParent, Context>;
  }

  export type TodoResolver<
    R = Todo,
    Parent = CompleteTodoOutput,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace DeleteTodoOutputResolvers {
  export interface Resolvers<Context = {}, TypeParent = DeleteTodoOutput> {
    id?: IdResolver<Maybe<string>, TypeParent, Context>;
  }

  export type IdResolver<
    R = Maybe<string>,
    Parent = DeleteTodoOutput,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export type CacheControlDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  CacheControlDirectiveArgs,
  {}
>;
export interface CacheControlDirectiveArgs {
  maxAge?: Maybe<number>;

  scope?: Maybe<CacheControlScope>;
}

/** Directs the executor to skip this field or fragment when the `if` argument is true. */
export type SkipDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  SkipDirectiveArgs,
  {}
>;
export interface SkipDirectiveArgs {
  /** Skipped when true. */
  if: boolean;
}

/** Directs the executor to include this field or fragment only when the `if` argument is true. */
export type IncludeDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  IncludeDirectiveArgs,
  {}
>;
export interface IncludeDirectiveArgs {
  /** Included when true. */
  if: boolean;
}

/** Marks an element of a GraphQL schema as no longer supported. */
export type DeprecatedDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  DeprecatedDirectiveArgs,
  {}
>;
export interface DeprecatedDirectiveArgs {
  /** Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/). */
  reason?: string;
}

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<Upload, any> {
  name: 'Upload';
}

export interface IResolvers<Context = {}> {
  Query?: QueryResolvers.Resolvers<Context>;
  ListTodosOutput?: ListTodosOutputResolvers.Resolvers<Context>;
  Todo?: TodoResolvers.Resolvers<Context>;
  User?: UserResolvers.Resolvers<Context>;
  Mutation?: MutationResolvers.Resolvers<Context>;
  CreateTodoOutput?: CreateTodoOutputResolvers.Resolvers<Context>;
  CompleteTodoOutput?: CompleteTodoOutputResolvers.Resolvers<Context>;
  DeleteTodoOutput?: DeleteTodoOutputResolvers.Resolvers<Context>;
  Upload?: GraphQLScalarType;
}

export interface IDirectiveResolvers<Result> {
  cacheControl?: CacheControlDirectiveResolver<Result>;
  skip?: SkipDirectiveResolver<Result>;
  include?: IncludeDirectiveResolver<Result>;
  deprecated?: DeprecatedDirectiveResolver<Result>;
}
