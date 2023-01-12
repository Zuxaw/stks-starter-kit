import mongoose from 'mongoose';

interface PostAttrs {
  content: string;
  images?: string[];
  likes: number;
  shares: number;
  comments: number;
  userId: string;
  createdAt: string;
}

interface PostModel extends mongoose.Model<PostDoc> {
  build(attrs: PostAttrs): PostDoc;
}

interface PostDoc extends mongoose.Document {
  content: string;
  images?: string[];
  likes: number;
  shares: number;
  comments: number;
  userId: string;
  createdAt: string;
}

const postSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    images: [String],
    likes: {
      type: Number,
      default: 0,
    },
    shares: {
      type: Number,
      default: 0,
    },
    comments: {
      type: Number,
      default: 0,
    },
    userId: {
      type: String,
      required: true,
    },
    createdAt: {
      type: String,
      default: new Date().toString(),
    },
  },
  { versionKey: false }
);
postSchema.statics.build = (attrs: PostAttrs) => {
  return new Post(attrs);
};

const Post = mongoose.model<PostDoc, PostModel>('Post', postSchema);

export { Post };
