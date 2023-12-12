const { Schema } = require('mongoose');
const reviewSchema = require('./Review');


const bookSchema = new Schema(
    {
        title: {
            type: String
        },
        author: {
            type: String
        },
        description: {
            type: String
        },
        coverImage: {
            type: String
        },
        genre: {
            type: String
        },
        reviews: [reviewSchema]
    }
);

module.exports = bookSchema;
