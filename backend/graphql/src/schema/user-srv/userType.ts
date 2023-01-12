import axios from "axios";
import { GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import { postType } from "../post-srv/postType";

export const userType: GraphQLObjectType = new GraphQLObjectType({
    name: 'User',
    fields: ( ) => ({
        _id: { type: GraphQLString },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        profilePicture: { type: GraphQLString },
        posts: {
            type: new GraphQLList(postType),
            async resolve(parent, args){
                const posts = await axios.get((process.env.POST_URI || "http://localhost:5001")+ "/api/posts/?user=" + parent._id);
                return posts.data;
            }
        }
    })
});