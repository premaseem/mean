var express = require('express')
var app = express()
app.set('port',3000)

var server = app.listen(app.get('port'),function(){
    console.log("app started on port "+ server.address().port)
})

app.get('/', function(req, res){
    console.log("get the home page or Root ");
res.status(404).send("Welcome to mean app").status(404)
})



console.log("last line of file ")