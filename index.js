const express = require('express');
const app = express();
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
app.set('database', (process.env.MONGODB_URI || 'mongodb://admin:admin@ds062339.mlab.com:62339/piperdb'));
//const uri = 'localhost/books';
mongoose.connect(app.get('database'))
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

const morgan = require('morgan');
app.use(morgan('dev'));

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const board = require('./routes/board.router');
app.use('/api/v1', board)

var path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.get('/', function(req, res, next){
    res.render('index');
});

// Server Setup
const port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log('Server listening on:', port)
});
