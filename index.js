var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);var port = process.env.PORT || 3000;
// Start the Server
http.listen(port, function () {
    console.log('Server Started. Listening on *:' + port);
});
// Express Middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
// Render Main HTML file
app.get('/', function (req, res) {
    res.sendFile('views/index.html', {
        root: __dirname
    });
});