const { Schema } = require('mongoose');

const reviewSchema = new Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    title: {
        type: String
    },
    author: {
        type: String
    },
    review: {
        type: String
    },
    rating: {
        type: Number
    }
});

module.exports = reviewSchema