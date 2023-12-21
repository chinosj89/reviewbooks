import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_REVIEW = gql`
    mutation addUserReview($reviewInput: ReviewInput!) {
        addUserReview(reviewInput: $reviewInput) {
            reviewId
            date
            title
            author
            review
            rating
        }
    }
`;

export const REMOVE_REVIEW = gql`
    mutation removeUserReview($reviewId: String!) {
        removeUserReview(reviewId: $reviewId) {
            reviewId
            date
            title
            author
            review
            rating
        }
    }
`

export const ADD_USER_INFORMATION = gql`
  mutation addUserInformation($userInput: UserInput!) {
    addUserInformation(userInput: $userInput){
      username
      email
      fullName
    }
  }
`