'use strict';

const Joi = require('joi');
const laureateHandlers = require('../lib/laureates_handler');
const prizeHandlers = require('../lib/prizes_handler');
const prizeSchema = require('./joi_schema').prizesSchema;
const laureatesSchema = require('./joi_schema').laureatesSchema;
const resultHTTPStatus = require('./joi_schema').resultHTTPStatus;

module.exports = [{
    method: 'GET',
    path: '/laureates',
    config: {
        handler: laureateHandlers.getAllLaureates,
        description: 'Get All Nobel Laureates',
        tags: ['api', 'reduced'],
        notes: ['Fetches all the existing laureates data from mongodb'],
        plugins: {
            'hapi-swagger': {
                responses: resultHTTPStatus
            }
        }
    }
},
{
    method: 'POST',
    path: '/laureates',
    config: {
        handler: laureateHandlers.createLaureate,
        description: 'Create New laureates',
        tags: ['api', 'reduced'],
        notes: ['Create a new laureates and updates data'],
        plugins: {
            'hapi-swagger': {
                responses: resultHTTPStatus
            }
        },
        validate: {
            payload: laureatesSchema
        }
    }
},
{
    method: 'GET',
    path: '/laureates/laureateId',
    config: {
        handler: laureateHandlers.getByIdLaureate,
        description: 'Get laureates By ID',
        tags: ['api', 'reduced'],
        notes: ['Fetches the existing laureates data by Id'],
        plugins: {
            'hapi-swagger': {
                responses: resultHTTPStatus
            }
        },
        validate: {
            query: {
                id: Joi.string().required().description('Id: laureate Id')
            }
        }
    }
},
{
    method: 'PUT',
    path: '/laureates/laureateId',
    config: {
        handler: laureateHandlers.updateLaureate,
        description: 'Update existing laureate Data',
        tags: ['api', 'reduced'],
        notes: ['Update a laureates data by Id'],
        plugins: {
            'hapi-swagger': {
                responses: resultHTTPStatus
            }
        },
        validate: {
            payload: laureatesSchema,
            query: {
                id: Joi.string().required().description('Id: laureate Id')
            }
        }
    }
},
{
    method: 'DELETE',
    path: '/laureates/laureateId',
    config: {
        handler: laureateHandlers.deleteLaureate,
        description: 'Delete a laureate Data',
        tags: ['api', 'reduced'],
        notes: ['Update a laureates data by Id'],
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
    ////  for prize
{
    method: 'GET',
    path: '/prizes',
    config: {
        handler: prizeHandlers.getAllPrizes,
        description: 'Get All Prizes',
        tags: ['api', 'reduced'],
        notes: ['Fetches all the existing prizes data from mongodb'],
        plugins: {
            'hapi-swagger': {
                responses: resultHTTPStatus
            }
        }
    }
},
{
    method: 'POST',
    path: '/prizes',
    config: {
        handler: prizeHandlers.createPrize,
        description: 'Create New prizes',
        tags: ['api', 'reduced'],
        notes: ['Create a new prizes and updates data'],
        plugins: {
            'hapi-swagger': {
                responses: resultHTTPStatus
            }
        },
        validate: {
            payload: prizeSchema
        }
    }
},
{
    method: 'GET',
    path: '/prizes/prizeId',
    config: {
        handler: prizeHandlers.getByIdPrize,
        description: 'Get prizes By ID',
        tags: ['api', 'reduced'],
        notes: ['Fetches the existing prizes data by Id'],
        plugins: {
            'hapi-swagger': {
                responses: resultHTTPStatus
            }
        },
        validate: {
            query: {
                id: Joi.string().required().description('Id: prize Id')
            }
        }
    }
},
{
    method: 'PUT',
    path: '/prizes/prizeId',
    config: {
        handler: prizeHandlers.updatePrize,
        description: 'Update existing prize Data',
        tags: ['api', 'reduced'],
        notes: ['Update a prizes data by Id'],
        plugins: {
            'hapi-swagger': {
                responses: resultHTTPStatus
            }
        },
        validate: {
            payload: prizeSchema,
            query: {
                id: Joi.string().required().description('Id: prize Id')
            }
        }
    }
},
{
    method: 'DELETE',
    path: '/prizes/prizeId',
    config: {
        handler: prizeHandlers.deletePrize,
        description: 'Delete a prize Data',
        tags: ['api', 'reduced'],
        notes: ['Update a prize data by Id'],
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
}
];
