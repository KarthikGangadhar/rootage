// get an instance of mongoose and mongoose.Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const affiliationSchema = mongoose.Schema({
    "name": String,
    "city": String,
    "country": String
});

const prizeSchema = mongoose.Schema({
    "year": String,
    "category": String,
    "share": String,
    "motivation": String,
    "affiliations": [affiliationSchema]
});

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('laureate', new Schema({
    "id": String,
    "firstname": String,
    "surname": String,
    "born": String,
    "died": String,
    "bornCountry": String,
    "bornCountryCode": String,
    "bornCity": String,
    "diedCountry": String,
    "diedCountryCode": String,
    "diedCity": String,
    "gender": String,
    "prizes": [prizeSchema]
}));