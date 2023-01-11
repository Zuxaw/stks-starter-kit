import express from "express";
import { json } from "body-parser";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema/schema";

const app = express();
app.set("trust proxy", true);
app.use(json());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Listening on port 4000!");
});
