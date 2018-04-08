'use strict';

const Joi = require('joi');
const moviesHandlers = require('../lib/movies_handler');
const movieSchema = require('./joi_schema').moviesSchema;
const resultHTTPStatus = require('./joi_schema').resultHTTPStatus;

module.exports = [{
        method: 'GET',
        path: '/movies',
        config: {
            handler: moviesHandlers.getAllMovies,
            description: 'Get All Available Movies',
            tags: ['api', 'reduced'],
            notes: ['Fetches all the existing movies data from db'],
            plugins: {
                'hapi-swagger': {
                    responses: resultHTTPStatus
                }
            }
        }
    },
    {
        method: 'POST',
        path: '/movies',
        config: {
            handler: moviesHandlers.createMovie,
            description: 'Create New movies',
            tags: ['api', 'reduced'],
            notes: ['Create a new movies and updates data'],
            plugins: {
                'hapi-swagger': {
                    responses: resultHTTPStatus
                }
            },
            validate: {
                payload: movieSchema
            }
        }
    },
    {
        method: 'GET',
        path: '/movies/movieId',
        config: {
            handler: moviesHandlers.getByIdMovie,
            description: 'Get movies By ID',
            tags: ['api', 'reduced'],
            notes: ['Fetches the existing movies data by Id'],
            plugins: {
                'hapi-swagger': {
                    responses: resultHTTPStatus
                }
            },
            validate: {
                query: {
                    id: Joi.string().required().description('Id: movie Id')
                }
            }
        }
    },
    {
        method: 'PUT',
        path: '/movies/movieId',
        config: {
            handler: moviesHandlers.updateMovie,
            description: 'Update existing movie Data',
            tags: ['api', 'reduced'],
            notes: ['Update a movies data by Id'],
            plugins: {
                'hapi-swagger': {
                    responses: resultHTTPStatus
                }
            },
            validate: {
                payload: movieSchema,
                query: {
                    id: Joi.string().required().description('Id: movie Id')
                }
            }
        }
    },
    {
        method: 'DELETE',
        path: '/movies/movieId',
        config: {
            handler: moviesHandlers.deleteMovie,
            description: 'Delete a movie Data',
            tags: ['api', 'reduced'],
            notes: ['Update a movies data by Id'],
            plugins: {
                'hapi-swagger': {
                    responses: resultHTTPStatus
                }
            },
            validate: {
                payload: {
                    _id: Joi.string().required(),
                    pid: Joi.string().required(),
                    name: Joi.string().required(),
                }
            }
        }
    },
    {
        method: 'GET',
        path: '/movies/filter',
        config: {
            handler: moviesHandlers.filterMovies,
            description: 'Get movies By ID',
            tags: ['api', 'reduced'],
            notes: ['Fetches the existing movies data by Id'],
            plugins: {
                'hapi-swagger': {
                    responses: resultHTTPStatus
                }
            },
            validate: {
                query: {
                    title: Joi.string().description('movie title'),
                    genre: Joi.string().description('movie type: can pass ; seperated multiple value'),
                    year: Joi.string().description('movie type: can pass ; seperated multiple value  like 2016;1947 ..etc'),
                    releaseDate: Joi.string().description('movie release date for example: 2018-01-28'),
                    imdbRating: Joi.string().description('movie type: can pass ; seperated multiple value'),
                    
                }
            }
        }
    }
];