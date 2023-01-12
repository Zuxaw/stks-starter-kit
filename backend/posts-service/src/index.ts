import { json } from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import { createPost } from './routes/post/createPost';
import { deleteAllPost } from './routes/post/deleteAllPosts';
import { deleteOnePost } from './routes/post/deleteOnePost';
import { editPost } from './routes/post/editPost';
import { getAllPosts } from './routes/post/getAllIPosts';
import { getPostById } from './routes/post/getInvoiceById';
import { getTime } from './tools/time';

const app = express();

app.use(json());

app.use(createPost);
app.use(getAllPosts);
app.use(getPostById);
app.use(editPost);
app.use(deleteOnePost);
app.use(deleteAllPost);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017');
    console.log(getTime() + 'Connected to MongoDb');
  } catch (err) {
    console.log('Error connecting to MongoDb');
    console.error(err);
  }

  app.listen(4011, () => {
    console.log(getTime() + 'Listening on port 4011!');
  });
};

start();
