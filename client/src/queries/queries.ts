import { gql } from '@apollo/client';

const getUsersQuery = gql`
  {
    users {
      username
      email
      profilePicutre
    }
  }
`;

const getPostsQuery = gql`
  {
    posts {
      content
      images
      likes
      shares
      comments
      createdAt
      user {
        username
        profilePicture
      }
    }
  }
`;

const addPostMutation = gql`
  mutation AddBook($content: String!, $images: [String], $userId: String!) {
    addBook(content: $name, images: $images, userId: $userId) {
      _id
      content
    }
  }
`;

const addUserMutation = gql`
  mutation AddBook($email: String!, $profilePicture: String, $username: String) {
    addUser(email: $email, profilePicture: $profilePicture, username: $username) {
      _id
      profilePicture
      email
      username
    }
  }
`;

const getPostQuery = gql`
  query GetPost($_id: String) {
    book(_id: $_id) {
      content
      images
      likes
      shares
      comments
      createdAt
      user {
        username
        profilePicture
      }
    }
  }
`;

export { getPostQuery, getPostsQuery, getUsersQuery, addPostMutation, addUserMutation }
