import { json } from 'body-parser';
import cors from 'cors';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema/schema';

const app = express();
app.set('trust proxy', true);
app.use(json(), cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log('Listening on port 4000!');
});
