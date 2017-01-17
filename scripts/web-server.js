var express = require('express');
var path = require('path');
var PORT = process.env.PORT || 3000;
var app = express();
var rootPath = path.normalize(__dirname + '/../');

app.use(express.static(rootPath + '/app'));

app.get('/', function(req, res) {
    // res.send('Hello World');
})

app.listen(PORT, function() {
    console.log('The server is running on PORT: '+ PORT);
});
