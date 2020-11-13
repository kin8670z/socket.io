var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var http = require('http').createServer(app);

var port = 3002;

var server = http.listen(port,() =>{
    console.log(' Server started. Listening on * : '+ port);
})

var io = require('socket.io').listen(server);

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function (req, res) {
    res.sendFile('public/index.html', {
        root: __dirname
    });
});


io.on('connection',(socket) =>{

    socket.on('message',(data)=>{

        console.log(data);
    })
})