// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('movies', new Schema({
    "title": String,
    "year": String,
    "genres": [String],
    "ratings": [Number],
    "poster": String,
    "contentRating": String,
    "duration": String,
    "releaseDate": String,
    "averageRating": Number,
    "originalTitle": String,
    "storyline": String,
    "actors": [String],
    "imdbRating": Number,
    "posterurl": String
}));