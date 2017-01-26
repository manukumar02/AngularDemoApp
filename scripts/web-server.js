var express = require('express');
var path = require('path');
var events = require('./eventsController');
var bodyparser = require('body-parser');
var PORT = process.env.PORT || 3000;
var app = express();
var rootPath = path.normalize(__dirname + '/../');

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(express.static(rootPath + '/app'));

app.get('/', function(req, res) {
    // res.send('Hello World');
});

app.get('/data/event/:id', events.get);
app.post('/data/event/:id', events.save);

app.listen(PORT, function() {
    console.log('The server is running on PORT: '+ PORT);
});
