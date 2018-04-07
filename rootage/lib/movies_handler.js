'use strict';
const mongoose = require('mongoose');
const config = require('../utils/config');
const Movie = require('../models/movies/movies');

mongoose.connect(config.rootage);

const CreateMovie = (request, reply) => {
    const movie = new Movie(request.payload);

    movie.save((err) => {
        if (err) {
            reply({
                'err': err
            });
        } else {
            reply(movie);
        }
    });
};

const UpdateMovie = (request, reply) => {
    Movie.findByIdAndUpdate(request.query.id, request.payload, {
        new: true
    }, (err, movie) => {
        if (err) {
            reply({
                err: err
            });
        } else {
            reply(movie);
        }
    });
};

const DeleteMovie = (request, reply) => {
    Movie.remove(request.payload, (err, data) => {
        if (err) {
            reply({
                err: err
            });
        } else {
            reply({
                message: 'success',
                meta: data
            });
        }
    });
};

const GetAllMovies = (request, reply) => {
    Movie.find((err, movies) => {
        if (err) {
            reply({
                'err': err
            });
        } else {
            reply(movies);
        }
    });
};

const GetOneMovie = (request, reply) => {
    reply(request.movie);
};

const GetByIdMovie = (request, reply) => {
    let id = request.query.id;
    Movie.findOne({
        _id: id
    }, (err, movie) => {
        if (err) {
            reply({
                err: err
            });
        } else {
            reply(movie);
        }
    });
};

module.exports = {
    getAllMovies: GetAllMovies,
    createMovie: CreateMovie,
    updateMovie: UpdateMovie,
    deleteMovie: DeleteMovie,
    getOneMovie: GetOneMovie,
    getByIdMovie: GetByIdMovie,
};
