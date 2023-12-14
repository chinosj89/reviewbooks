import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

// need to add QUERY_BOOKS
// feature where most reviewed books by users will show up?
// feature where highest rated books will show up? 