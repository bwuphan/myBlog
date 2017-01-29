let express = require('express');
let app = express();
let mongoose = require('mongoose');
let bodyparser = require('body-parser');

//Middleware
app.use(bodyparser.json());


let port = process.env.PORT || 4000;


//mongoose connections
mongoose.connect('mongodb://localhost/blog');
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error mongoose'));
db.once('open', function() {
  console.log('connected to mongo');
});


app.use(express.static(__dirname + '/../'));
app.listen(port, function() {
  console.log('listening on port', port)
});