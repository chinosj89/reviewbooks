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
    rating: String
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
}    

`


module.exports = typeDefs;