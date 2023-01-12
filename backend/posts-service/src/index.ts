import express from "express";
import { json } from "body-parser";
import mongoose from 'mongoose';
import { createPost } from "./routes/post/createPost";
import { getAllPosts } from "./routes/post/getAllIPosts";
import { getPostById } from "./routes/post/getInvoiceById"
import { editPost } from "./routes/post/editPost";
import { deleteOnePost } from "./routes/post/deleteOnePost";
import { deleteAllPost } from "./routes/post/deleteAllPosts";
import { getTime } from "./tools/time";


const app = express();


app.use(json());

app.use(createPost);
app.use(getAllPosts);
app.use(getPostById);
app.use(editPost);
app.use(deleteOnePost);
app.use(deleteAllPost);


const start = async() => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017');
    console.log(getTime()+"Connected to MongoDb");
  } catch (err){
    console.log("Error connecting to MongoDb")
    console.error(err);
  }

  app.listen(5001, () => {
    console.log(getTime()+"Listening on port 5001!");
  });
}

start();


