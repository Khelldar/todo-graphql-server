import { ENV } from './env';

import * as express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './api/typeDefs';
import { resolvers } from './api/resolvers';
import { context } from './context';

const app = express();

app.use('/healthy', (req, res) => {
  res.send({ healthy: true });
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  introspection: true,
  playground: true,
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: ENV.PORT }, () => {
  console.log(`Apollo Server listening at :${ENV.PORT}...`);
});
