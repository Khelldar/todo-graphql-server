import { gql } from 'apollo-server-core';

export const typeDefs = gql`
  type Query {
    listTodos: [Todo!]!
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
    lastName: String!
  }
`;
