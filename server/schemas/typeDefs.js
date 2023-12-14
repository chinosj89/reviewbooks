const typeDefs = `
type User {
    _id: ID!
    username: String!
    email: String!
    fullName: String
    profilePicture: String
    bookReviews: [Review]
}
type Review {
    _id: ID
    date: String
    title: String
    author: String
    review: String
    rating: Int
}
type Query {
    users: [User]
    user: User
}

type Auth {
    token: ID
    user: User
}

input UserInput {
    username: String
    email: String
    fullName: String
    profilePicture: String
    bookReviews: [Review]    
}    
input ReviewInput {
    date: String
    title: String
    author: String
    review: String
    rating: String
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addUserInformation(userInput: UserInput): User
    addUserReview(reviewInput: ReviewInput): User
    removeUserReview(reviewId:ID!):User
}    

`


module.exports = typeDefs;