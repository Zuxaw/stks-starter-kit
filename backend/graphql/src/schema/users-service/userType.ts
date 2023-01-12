import axios from 'axios';
import { GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';
import { postType } from '../posts-service/postType';

export const userType: GraphQLObjectType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    _id: { type: GraphQLString },
    uid: { type: GraphQLString },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    profilePicture: { type: GraphQLString },
    posts: {
      type: new GraphQLList(postType),
      async resolve(parent, args) {
        const posts = await axios.get(
          (process.env.POST_URI || 'http://localhost:4011') + '/api/posts/?user=' + parent._id
        );
        return posts.data;
      },
    },
  }),
});
