var express = require('express')
var path = require('path');
var app = express()
app.set('port',3000)
app.use(express.static(path.join(__dirname,'public')))

var server = app.listen(app.get('port'),function(){
    console.log("app started on port "+ server.address().port)
})

//app.get('/', function(req, res){
//    console.log("get the home page or Root ");
//res.status(200).sendFile(path.join(__dirname,'public','index.html'))
//})

app.get('/json', function(req, res){
    console.log("get the home page or Root ");
    res.status(200).json({"json":"value"})
})


app.get('/file', function(req, res){
    console.log("get the home page or Root ");
    res.sendFile(path.join(__dirname + '/app.js'));
})

console.log("last line of file ")