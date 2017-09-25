var mongoose = require('mongoose');
var	express = require('express');
var	cors = require('cors');
var	morgan = require('morgan');
var	config = require('./config/database');
var	passport = require('passport');
var	routes = require('./routes/routes');
var bodyParser = require('body-parser');
var app = express();

// connect to mongo
mongoose.connect(config.database);

mongoose.Promise = global.Promise;

mongoose.connection.on('open', function () {
    console.log('mongo is open');
    var app = express();
    app.use(cors());
    app.use(morgan('dev'));
	app.use(passport.initialize());
	app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    app.use(routes);
    require('./config/passport')(passport);
 
     app.listen(3333, function (err) {
       console.log('Server is running')
            });
 
});