const { time } = require('console');
var express = require('express');
var app = express();

app.get('/', function(req, res){

    res.send('hello there at port 3000');
   // console.log("[" + Date.now() +"]" +" Viewed just now")
    //var time = new Date(); 

    var d = new Date();
var n = d.toLocaleTimeString();
    console. log( n + "[Server activity]"+ ": viewed the server just yet ")
   
})
app.listen(3000);
