import { gql } from 'apollo-server-core';

export const typeDefs = gql`
  type Query {
    listTodos: [Todo!]!
  }

  type Mutation {
    createTodo(input: CreateTodoInput!): CreateTodoOutput!
    completeTodo(input: CompleteTodoInput!): CompleteTodoOutput!
    deleteTodo(input: DeleteTodoInput!): DeleteTodoOutput!
  }

  input CreateTodoInput {
    text: String!
  }
  type CreateTodoOutput {
    todo: Todo!
  }

  input CompleteTodoInput {
    id: ID!
  }
  type CompleteTodoOutput {
    todo: Todo!
  }

  input DeleteTodoInput {
    id: ID!
  }
  type DeleteTodoOutput {
    id: ID
  }

  type Todo {
    id: ID!
    text: String!
    completed: Boolean!
    createdBy: User!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String
  }
`;
