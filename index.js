var express = require('express');
var app = express();
var path = require('path');

// __dirname will use the current path from where you run this file 
app.use(express.static(__dirname));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/app.html'));
})

app.listen(3000);
console.log('Listening on port 3000');