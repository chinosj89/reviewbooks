const { User } = require('../models');
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        users: async (parent, args) => {
            const allUsers = await User.find()
                .select('-__v -password');
            return allUsers
        },
        user: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password');
                console.log('User Data:', userData);
                return userData;
            }
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Invalid email address');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Invalid password');
            }
            const token = signToken(user);
            return { token, user };
        },
        addUserInformation: async (parent, { userInput }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $set: userInput },
                    { new: true }
                ).select('-__v')
                return updatedUser
            }
        },
        addUserReview: async (parent, { reviewInput }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { bookReviews: reviewInput } },
                    { new: true }
                ).select('-__v').populate('bookReviews');
                return updatedUser;
            }
        },
        removeUserReview: async (parent, { reviewId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { bookReviews: { reviewId: reviewId } } },
                    { new: true }
                ).select('-__v').populate('bookReviews');
                return updatedUser
            }
        }
    }

}
module.exports = resolvers;