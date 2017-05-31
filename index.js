var express = require('express');
var path = require('path');
var app = express();
var port = 5006;

app.set('port', port);
app.listen(app.get('port'));

app.use(express.static(path.join(__dirname, '/')));

console.log(`running on port ${port}`);