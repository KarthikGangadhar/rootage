// get an instance of mongoose and mongoose.Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const laureateSchema = mongoose.Schema({
    "id": { type : String , unique : true, required : true, dropDups: true },
    "firstname": String,
    "surname": String,
    "motivation": String,
    "share": String
});

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('prizes', new Schema({
    "year": String,
    "category": String,
    "laureates": [laureateSchema]
}));