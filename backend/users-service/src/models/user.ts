import mongoose from 'mongoose';

interface UserAttrs {
  username?: string;
  uid: string;
  email: string;
  profilePicture?: string;
  createdAt: string;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

interface UserDoc extends mongoose.Document {
  username?: string;
  uid: string;
  email: string;
  profilePicture?: string;
  createdAt: string;
}

const userSchema = new mongoose.Schema(
  {
    username: String,
    uid: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    profilePicture: String,
    createdAt: {
      type: String,
      default: new Date().toString(),
    },
  },
  { versionKey: false }
);
userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };
