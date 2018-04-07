'use strict';
const mongoose = require('mongoose');
const config = require('../utils/config');
const Laureate = require('../models/nobelprize/laureate');

mongoose.connect(config.rootage);

const CreateLaureate = (request, reply) => {
    const laureate = new Laureate(request.payload);

    laureate.save((err) => {
        if (err) {
            reply({
                'err': err
            });
        } else {
            reply(laureate);
        }
    });
};

const UpdateLaureate = (request, reply) => {
    Laureate.findByIdAndUpdate(request.query.id, request.payload, {
        new: true
    }, (err, laureate) => {
        if (err) {
            reply({
                err: err
            });
        } else {
            reply(laureate);
        }
    });
};

const DeleteLaureate = (request, reply) => {
    Laureate.remove(request.payload, (err, data) => {
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

const GetAllLaureates = (request, reply) => {
    Laureate.find((err, laureates) => {
        if (err) {
            reply({
                'err': err
            });
        } else {
            reply(laureates);
        }
    });
};

const GetOneLaureate = (request, reply) => {
    reply(request.laureate);
};

const GetByIdLaureate = (request, reply) => {
    let id = request.query.id;
    Laureate.findOne({
        _id: id
    }, (err, laureate) => {
        if (err) {
            reply({
                err: err
            });
        } else {
            reply(laureate);
        }
    });
};

module.exports = {
    getAllLaureates: GetAllLaureates,
    createLaureate: CreateLaureate,
    updateLaureate: UpdateLaureate,
    deleteLaureate: DeleteLaureate,
    getOneLaureate: GetOneLaureate,
    getByIdLaureate: GetByIdLaureate,
};
