import express from "express";
import { json } from "body-parser";
import mongoose from 'mongoose';
import { createUser } from "./routes/post/createUser";
import { getAllUsers } from "./routes/post/getAllUsers";
import { getUserById } from "./routes/post/getUserById"
import { editUser } from "./routes/post/editUser";
import { deleteOneUser } from "./routes/post/deleteOneUser";
import { deleteAllUser } from "./routes/post/deleteAllUsers";
import { getTime } from "./tools/time";


const app = express();


app.use(json());

app.use(createUser);
app.use(getAllUsers);
app.use(getUserById);
app.use(editUser);
app.use(deleteOneUser);
app.use(deleteAllUser);


const start = async() => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017');
    console.log(getTime()+"Connected to MongoDb");
  } catch (err){
    console.log("Error connecting to MongoDb")
    console.error(err);
  }

  app.listen(5002, () => {
    console.log(getTime()+"Listening on port 5002!");
  });
}

start();


