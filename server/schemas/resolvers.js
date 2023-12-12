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

}
module.exports = resolvers;