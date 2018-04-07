'use strict';
const mongoose = require('mongoose');
const config = require('../utils/config');
const Prize = require('../models/nobelprize/prizes');

mongoose.connect(config.rootage);

const CreatePrize = (request, reply) => {
    const prize = new Prize(request.payload);

    prize.save((err) => {
        if (err) {
            reply({
                'err': err
            });
        } else {
            reply(prize);
        }
    });
};

const UpdatePrize = (request, reply) => {
    Prize.findByIdAndUpdate(request.query.id, request.payload, {
        new: true
    }, (err, prize) => {
        if (err) {
            reply({
                err: err
            });
        } else {
            reply(prize);
        }
    });
};

const DeletePrize = (request, reply) => {
    Prize.remove(request.payload, (err, data) => {
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

const GetAllPrizes = (request, reply) => {
    Prize.find((err, prizes) => {
        if (err) {
            reply({
                'err': err
            });
        } else {
            reply(prizes);
        }
    });
};

const GetOnePrize = (request, reply) => {
    reply(request.prize);
};

const GetByIdPrize = (request, reply) => {
    let id = request.query.id;
    Prize.findOne({
        _id: id
    }, (err, prize) => {
        if (err) {
            reply({
                err: err
            });
        } else {
            reply(prize);
        }
    });
};

module.exports = {
    getAllPrizes: GetAllPrizes,
    createPrize: CreatePrize,
    updatePrize: UpdatePrize,
    deletePrize: DeletePrize,
    getOnePrize: GetOnePrize,
    getByIdPrize: GetByIdPrize,
};
