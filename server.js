'use strict';
const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const Pack = require('./package');

//merging routes
const MovieRoutes = require('./rootage/routes/movie_routes');
const NobelPrizeRoutes = require('./rootage/routes/nobel_prize_routes');
const Routes = MovieRoutes.concat(NobelPrizeRoutes);

const server = new Hapi.Server();
server.connection({
    port: (process.env.PORT || 8080),
    routes: {
        cors: true
    }
});

// setup swagger options
const swaggerOptions = {
    info: {
        version: Pack.version,
        title: 'Rootage API Documentation',
        description: 'This is a root REST API for many types of json data.'
    },
    tags: [{
        'name': 'index',
        'description': 'working with maths',
        'externalDocs': {
            'description': 'Find out more',
            'url': 'localhost:8080/'
        }
    }, {
        'name': 'store',
        'description': 'storing your sums for later use',
        'externalDocs': {
            'description': 'Find out more',
            'url': 'localhost:8080/'
        }
    }]
};

// register plug-ins
server.register([
    Inert,
    Vision,
    {
        register: require('hapi-swagger'),
        options: swaggerOptions
    }
], (err) => {
    if (err) console.error(err);
    server.start(() => {
        console.log('Server running at:', server.info.uri);
    });
});


// add routes
server.route(Routes);
