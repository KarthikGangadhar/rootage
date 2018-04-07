'use strict';
// get an instance of mongoose and mongoose.Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('movies', new Schema({
    'id': { type : String , unique : true, required : true, dropDups: true },
    'title': { type : String , required : true },
    'year': { type : String , required : true },
    'genres': [String],
    'ratings': [Number],
    'poster': String,
    'contentRating': String,
    'duration': String,
    'releaseDate': String,
    'averageRating': Number,
    'originalTitle': String,
    'storyline': String,
    'actors': [String],
    'imdbRating': Number,
    'posterurl': String,
    'type': String
}));
