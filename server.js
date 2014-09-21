var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname, 'src')));
app.get('/hello.txt', function(req, res){
  res.send('Hello World');
});
var server = app.listen(15556, function() {
    console.log('Listening on port %d', server.address().port);
});