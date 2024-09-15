import { gql } from "@apollo/client";

export const LOAD_POSTS = gql`
  query {
    getAllPosts {
      id
      title
      body
    }
  }
`;
