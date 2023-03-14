const { time } = require('console');
var express = require('express');
var fs = require('fs');
var app = express();

app.listen(3000);
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))
// app.get('/', (req, res) => {

//     res.send('hello there at port 3000');
//    // console.log("[" + Date.now() +"]" +" Viewed just now")
//     //var time = new Date(); 

// //     var d = new Date();
// // var n = d.toLocaleTimeString();
// //     console. log( n + "[Server activity]"+ ": viewed the server just yet ")

    

// })




