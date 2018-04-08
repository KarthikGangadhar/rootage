'use strict';
// get an instance of mongoose and mongoose.Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const affiliationSchema = mongoose.Schema({
    'name': String,
    'city': String,
    'country': String
});

const prizeSchema = mongoose.Schema({
    'year': String,
    'category': String,
    'share': String,
    'motivation': String,
    'overallMotivation': String,
    'affiliations': [affiliationSchema]
});

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('laureate', new Schema({
    'id': { type : String , unique : true, required : true, dropDups: true },
    'firstname': String,
    'surname': String,
    'born': String,
    'died': String,
    'bornCountry': String,
    'bornCountryCode': String,
    'bornCity': String,
    'diedCountry': String,
    'diedCountryCode': String,
    'diedCity': String,
    'gender': String,
    'prizes': [prizeSchema]
}));

// "year": "1994",
//       "category": "physics",
//       "overallMotivation": "\"for pioneering contributions to the development of neutron scattering techniques for studies of condensed matter\"",
//       "share": "2",
//       "motivation": "\"for the development of neutron spectroscopy\"",
//       "affiliations": [{
//         "name": "McMaster University",
//         "city": "Hamilton, Ontario",
//         "country": "Canada"
//       }]