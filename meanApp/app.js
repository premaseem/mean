var express = require('express')
var path = require('path');
var routes = require('./api/route')

var app = express()
app.set('port',3000)

app.use(function(req,res,next){
    console.log(req.method,req.url);
    next();
});
app.use('/api',routes);
app.use(express.static(path.join(__dirname,'public')));

app.get('/file', function(req, res){
    console.log("get the home page or Root ");
    res.sendFile(path.join(__dirname + '/app.js'));
})

var server = app.listen(app.get('port'),function(){
    console.log("app started on port "+ server.address().port)
})

console.log("last line of file ")