'use strict';

var __appdir = __dirname + '/server';

var express = require('express'),
	exphbs = require('express-handlebars'),
	routes = require(__appdir + '/routes'),
	app = express();


// App local variables
app.set('port', process.env.PORT || 3300);
app.set('views', __appdir + '/views');


// Handlebars view wngine
var hbs = exphbs.create({ 
	extname:'hbs',
	layoutsDir: app.get('views') + '/layouts',
	defaultLayout: 'main'
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');


// Middlewares
app.use(express.static('public'));


// Routing
routes.initialize(app);


// Run server
var server = app.listen(app.get('port'), function() {
	var port = server.address().port;

	console.log('App listen at http://localhost:%s', port);
});