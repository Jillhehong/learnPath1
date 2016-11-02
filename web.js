
var path = require('path');
var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());


app.use(express.compress());

console.log('__dirname: ' + __dirname);

// Serve static files
app.use(express.static(path.join(__dirname, 'app')));

console.log('__dirname: ' + path.join(__dirname, 'dist'));




var port = Number(process.env.PORT || 5245);


app.listen(port, function() {
    console.log("Listening on " + port);
});