import axios from 'axios';
import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';
import { userType } from '../users-service/userType';

export const postType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    _id: { type: GraphQLString },
    content: { type: GraphQLString },
    images: { type: new GraphQLList(GraphQLString) },
    likes: { type: GraphQLInt },
    shares: { type: GraphQLInt },
    comments: { type: GraphQLInt },
    createdAt: { type: GraphQLString },
    user: {
      type: userType,
      async resolve(parent, args) {
        console.log(parent);
        const user = await axios.get(
          (process.env.USER_URI || 'http://localhost:4010') + '/api/user/?_id=' + parent.userId
        );
        return user.data;
      },
    },
  }),
});
