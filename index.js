var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8000 
});

// Add the routes

server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: 'public',
            listing: true
        }
    }
});

server.route({
    method: 'GET',
    path:'/flickr', 
    handler: function (request, reply) {
        var credentials = require('./public/js/credentials.js'), // <script src="public/js/credentials.js"></script>
            httpRequest = require('request'),
            data = {
                "method": 'flickr.photos.search',
                "api_key": credentials.flickr.api_key,
                "tags": 'vancouver',
                "format": 'json',
                "nojsoncallback": 1
            },
            options = {
                "uri": 'https://api.flickr.com/services/rest/',
                "qs": data
            };
        
        httpRequest(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log('flickr content coming soon') // CLI
                reply(body); // Show the HTML for the Google homepage in Browser output
            }
        })
    }
});

server.route({
    method: 'GET',
    path:'/google', 
    handler: function (request, reply) {
        var httpRequest = require('request');
        
        httpRequest('http://www.google.com', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log('CLI')
                reply(body); // Show the HTML for the Google homepage in Browser output
            }
        })
    }
});

server.route({
    method: 'GET',
    path:'/hello', 
    handler: function (request, reply) {
       reply('hello world');
    }
});

// Start the server
server.start(function () {
    console.log('Server running at:', server.info.uri);
});