'use strict';

const Joi = require('joi');

// movies schema
const MoviesSchema = {
    'title': Joi.string().required(),
    'year': Joi.string().required(),
    'genres': Joi.array().items(Joi.string()),
    'ratings': Joi.array().items(Joi.number()),
    'poster': Joi.string(),
    'contentRating': Joi.string(),
    'duration': Joi.string(),
    'releaseDate': Joi.string(),
    'averageRating': Joi.number(),
    'originalTitle': Joi.string(),
    'storyline': Joi.string(),
    'actors': Joi.array().items(Joi.string()),
    'imdbRating': Joi.number(),
    'posterurl': Joi.string()
};


// Prizes Schema
const laureateSchema = {
    'id': Joi.string().required(),
    'firstname': Joi.string().required(),
    'surname': Joi.string(),
    'motivation': Joi.string(),
    'share': Joi.string()
};

const PrizesSchema = {
    'year': Joi.string().required(),
    'category': Joi.string().required(),
    'laureates': Joi.array().items(laureateSchema)
};

// Laureates Schema
const affiliationSchema = {
    'name': Joi.string(),
    'city': Joi.string(),
    'country': Joi.string()
};

const prizeSchema = {
    'year': Joi.string(),
    'category': Joi.string(),
    'share': Joi.string(),
    'motivation': Joi.string(),
    'affiliations': Joi.array().items(affiliationSchema)
};

const LaureatesSchema = {
    'id': Joi.string().required(),
    'firstname': Joi.string().required(),
    'surname': Joi.string(),
    'born': Joi.string(),
    'died': Joi.string(),
    'bornCountry': Joi.string(),
    'bornCountryCode': Joi.string(),
    'bornCity': Joi.string(),
    'diedCountry': Joi.string(),
    'diedCountryCode': Joi.string(),
    'diedCity': Joi.string(),
    'gender': Joi.string(),
    'prizes': Joi.array().items(prizeSchema)
};

const ResultHTTPStatus = {
    '200': {
        'description': 'Success'
    },
    '400': {
        'description': 'Bad Request'
    },
    '404': {
        'description': 'Profile not found'
    },
    '500': {
        'description': 'Internal Server Error'
    }
};

module.exports = {
    laureatesSchema: LaureatesSchema,
    prizesSchema: PrizesSchema,
    moviesSchema: MoviesSchema,
    resultHTTPStatus: ResultHTTPStatus
};
