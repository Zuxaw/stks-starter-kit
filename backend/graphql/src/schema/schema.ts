import { GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLString, GraphQLNonNull, GraphQLInt } from 'graphql';
import { postType } from './post-srv/postType';
import { userType } from './user-srv/userType';
import axios from 'axios';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    post: {
      type: postType,
      args: { _id: { type: GraphQLString } },
      async resolve(parent, args) {
        const post = await axios.get((process.env.POST_URI || 'http://localhost:5001') + '/api/post/?_id=' + args._id);
        return post.data;
      },
    },
    user: {
      type: userType,
      args: { _id: { type: GraphQLString } },
      async resolve(parent, args) {
        const user = await axios.get((process.env.USER_URI || 'http://localhost:5002') + '/api/user/?_id=' + args._id);
        return user.data;
      },
    },
    posts: {
      type: new GraphQLList(postType),
      async resolve(parent, args) {
        const posts = await axios.get((process.env.POST_URI || 'http://localhost:5001') + '/api/posts');
        return posts.data;
      },
    },
    users: {
      type: new GraphQLList(userType),
      async resolve(parent, args) {
        const users = await axios.get((process.env.USER_URI || 'http://localhost:5002') + '/api/users');
        return users.data;
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: userType,
      args: {
        username: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        profilePicture: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const user = await axios.post((process.env.USER_URI || 'http://localhost:5002') + '/api/user/create', {
          username: args.name,
          email: args.email,
          profilePicture: args.profilePicture,
        });
        return user.data;
      },
    },
    addPost: {
      type: postType,
      args: {
        content: { type: GraphQLString },
        images: { type: new GraphQLList(GraphQLString) },
        likes: { type: GraphQLInt },
        shares: { type: GraphQLInt },
        comments: { type: GraphQLInt },
        createdAt: { type: GraphQLString },
        userId: { type: GraphQLString },
      },
      async resolve(parent, args) {
        console.log(args.userId);
        const post = await axios.post((process.env.POST_URI || 'http://localhost:5001') + '/api/post/create', {
          content: args.content,
          images: args.images,
          likes: args.likes,
          shares: args.shares,
          comments: args.comments,
          createdAt: args.createdAt,
          userId: args.userId,
        });
        return post.data;
      },
    },
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
